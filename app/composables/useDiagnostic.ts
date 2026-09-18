// composables/useDiagnostic.ts
import { ref, computed } from 'vue'
import { useStorage } from '@vueuse/core'
import questionsData from '~/data/questions.json'
import { calculateDiagnosticScores, calculateNumericScore, type DiagnosticAnswer, type QuestionDefinition } from '~/utils/calculScoring'
import { generateDiagnosticInsights } from '~/utils/recommandations'

export const useDiagnostic = () => {
  const questions = ref<QuestionDefinition[]>(questionsData.questions as QuestionDefinition[])
  const dimensions = ref(questionsData.dimensions)

  const currentIndex = useStorage('alodo_diagnostic_current_index', 0)
  const answers = useStorage<Record<string, DiagnosticAnswer>>('alodo_diagnostic_answers', {})
  const isCompleted = useStorage('alodo_diagnostic_completed', false)

  const totalQuestions = computed(() => questions.value.length)

  const currentQuestion = computed<QuestionDefinition>(() => {
    return questions.value[currentIndex.value] || questions.value[0]
  })

  const currentDimensionLabel = computed(() => {
    if (!currentQuestion.value?.dimensionId) return 'Diagnostic'
    const dim = dimensions.value.find(d => d.id === currentQuestion.value.dimensionId)
    return dim ? dim.label : 'Diagnostic'
  })

  const isFirstQuestion = computed(() => currentIndex.value === 0)
  const isLastQuestion = computed(() => currentIndex.value === totalQuestions.value - 1)

  const currentAnswer = computed(() => {
    const qId = currentQuestion.value?.id
    if (!qId) return null
    return answers.value[qId]?.value ?? null
  })

  const hasCurrentAnswer = computed(() => {
    const qId = currentQuestion.value?.id
    if (!qId) return false
    const ans = answers.value[qId]
    if (!ans) return false
    if (Array.isArray(ans.value)) return ans.value.length > 0
    return ans.value !== null && ans.value !== undefined && ans.value !== ''
  })

  // Action générique d'enregistrement
  const recordAnswer = (payload: { value: any; score: number }) => {
    const qId = currentQuestion.value?.id
    if (!qId) return

    answers.value = {
      ...answers.value,
      [qId]: {
        questionId: qId,
        value: payload.value,
        score: payload.score
      }
    }
  }

  // Traitement spécifique pour les choix multiples
  const toggleMultipleChoiceOption = (option: { id: string; score: number; isExclusive?: boolean }) => {
    const q = currentQuestion.value
    if (!q) return

    let currentSelected: string[] = Array.isArray(currentAnswer.value) ? [...currentAnswer.value] : []

    if (option.isExclusive) {
      currentSelected = [option.id]
    } else {
      currentSelected = currentSelected.filter(id => {
        const opt = q.options?.find(o => o.id === id)
        return !opt?.isExclusive
      })

      if (currentSelected.includes(option.id)) {
        currentSelected = currentSelected.filter(id => id !== option.id)
      } else {
        currentSelected.push(option.id)
      }
    }

    // Calcul du score cumulé avec plafond (maxScore)
    let totalScore = 0
    currentSelected.forEach(id => {
      const opt = q.options?.find(o => o.id === id)
      if (opt) totalScore += opt.score
    })

    if (q.maxScore && totalScore > q.maxScore) {
      totalScore = q.maxScore
    }

    recordAnswer({
      value: currentSelected,
      score: totalScore
    })
  }

  // Traitement spécifique pour le type numérique
  const recordNumericInput = (numValue: number | null) => {
    const q = currentQuestion.value
    if (!q) return

    if (numValue === null || isNaN(numValue) || numValue < 0) {
      const qId = q.id
      const updated = { ...answers.value }
      delete updated[qId]
      answers.value = updated
      return
    }

    const calculatedScore = calculateNumericScore(numValue, q)
    recordAnswer({
      value: numValue,
      score: calculatedScore
    })
  }

  const goToNextQuestion = () => {
    if (!isLastQuestion.value) {
      currentIndex.value += 1
    } else {
      isCompleted.value = true
      navigateTo('/result')
    }
  }

  const goToPreviousQuestion = () => {
    if (!isFirstQuestion.value) {
      currentIndex.value -= 1
    }
  }

  const resetSession = () => {
    currentIndex.value = 0
    answers.value = {}
    isCompleted.value = false
  }

  const scoringResult = computed(() => calculateDiagnosticScores(answers.value, questions.value))
  const globalScore = computed(() => scoringResult.value.globalScore)
  const dimensionScores = computed(() => scoringResult.value.dimensionScores)
  const insights = computed(() => generateDiagnosticInsights(dimensionScores.value, globalScore.value))

  return {
    questions,
    dimensions,
    currentIndex,
    answers,
    isCompleted,
    totalQuestions,
    currentQuestion,
    currentDimensionLabel,
    currentAnswer,
    hasCurrentAnswer,
    isFirstQuestion,
    isLastQuestion,
    recordAnswer,
    toggleMultipleChoiceOption,
    recordNumericInput,
    goToNextQuestion,
    goToPreviousQuestion,
    resetSession,
    globalScore,
    dimensionScores,
    insights
  }
}