// utils/calculScoring.ts

export interface DiagnosticAnswer {
  questionId: string
  value: any
  score: number
}

export interface QuestionDefinition {
  id: string
  dimensionId: string
  type: 'single_choice' | 'boolean' | 'multiple_choice' | 'likert_scale' | 'numeric'
  label: string
  context?: string
  options?: Array<{ id: string; label: string; score: number; isExclusive?: boolean; value?: number }>
  scoringRule?: {
    ranges: Array<{ min: number; max: number; score: number }>
  }
  maxScore?: number
  [key: string]: any
}

export interface ScoringResult {
  globalScore: number
  dimensionScores: Record<string, number>
}

/**
 * Calcule le score d'une question de type numérique en fonction des tranches
 */
export const calculateNumericScore = (val: number, question: QuestionDefinition): number => {
  if (!question.scoringRule?.ranges) return 0
  const match = question.scoringRule.ranges.find((r) => val >= r.min && val <= r.max)
  return match ? match.score : 0
}

/**
 * Calcule les scores par dimension et le score global sur 100
 */
export const calculateDiagnosticScores = (
  answers: Record<string, DiagnosticAnswer>,
  questions: QuestionDefinition[]
): ScoringResult => {
  const dimensionTotals: Record<string, { totalScore: number; count: number }> = {}

  questions.forEach((question) => {
    const answer = answers[question.id]
    const dimId = question.dimensionId

    if (!dimensionTotals[dimId]) {
      dimensionTotals[dimId] = { totalScore: 0, count: 0 }
    }

    if (answer) {
      dimensionTotals[dimId].totalScore += answer.score || 0
      dimensionTotals[dimId].count += 1
    }
  })

  const dimensionScores: Record<string, number> = {}
  let totalSum = 0
  let totalDimensionsCount = 0

  Object.keys(dimensionTotals).forEach((dimId) => {
    const { totalScore, count } = dimensionTotals[dimId]!
    const average = count > 0 ? Math.round(totalScore / count) : 0
    
    dimensionScores[dimId] = average
    totalSum += average
    totalDimensionsCount += 1
  })

  const globalScore = totalDimensionsCount > 0 
    ? Math.round(totalSum / totalDimensionsCount) 
    : 0

  return {
    globalScore,
    dimensionScores
  }
}