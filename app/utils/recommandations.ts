export interface DiagnosticInsights {
  strengths: string[]
  weaknesses: string[]
  recommendation: string
}

// Libellés lisibles pour l'affichage
const DIMENSION_NAMES: Record<string, string> = {
  finance: 'Gestion Financière & Trésorerie',
  digitalisation: 'Digitalisation & Outils Numériques',
  operations: 'Opérations & Processus',
  financement: 'Préparation au Financement'
}

/**
 * Analyse les scores par dimension pour déterminer les points forts, 
 * les faiblesses et la recommandation d'accompagnement ALODO MPME.
 */
export const generateDiagnosticInsights = (
  dimensionScores: Record<string, number>,
  globalScore: number
): DiagnosticInsights => {
  const strengths: string[] = []
  const weaknesses: string[] = []

  // 1. Identification des points forts et faiblesses
  Object.entries(dimensionScores).forEach(([dimId, score]) => {
    const dimName = DIMENSION_NAMES[dimId] || dimId

    if (score >= 70) {
      strengths.push(`Bon niveau de maturité en ${dimName} (${score}/100)`)
    } else if (score < 50) {
      weaknesses.push(`Structuration prioritaire requise pour : ${dimName} (${score}/100)`)
    }
  })

  // Cas de secours si aucun point fort / faiblesse extrême n'est identifié
  if (strengths.length === 0) {
    strengths.push("Potentiel de progression identifié sur l'ensemble de vos axes opérationnels.")
  }
  if (weaknesses.length === 0) {
    weaknesses.push("Pas de point critique majeur détecté. L'enjeu réside dans l'optimisation continue.")
  }

  // 2. Recherche de la dimension la plus faible pour la recommandation
  let lowestDimId = ''
  let minScore = 101

  Object.entries(dimensionScores).forEach(([dimId, score]) => {
    if (score < minScore) {
      minScore = score
      lowestDimId = dimId
    }
  })

  // 3. Génération de la recommandation ALODO ciblée
  let recommendation = ""

  if (globalScore >= 75) {
    recommendation = "Votre entreprise présente une excellente maturité globale. Nous vous recommandons d'entrer directement en relation avec nos conseillers ALODO pour la constitution de votre dossier de levée de fonds ou de demande de crédit d'investissement. au +229 01xxxxxxxx"
  } else {
    switch (lowestDimId) {
      case 'finance':
        recommendation = "Priorisez la formalisation comptable : séparez strictement vos comptes personnels de votre compte entreprise via un compte Mobile Money Marchand et tenez un registre quotidien de votre trésorerie."
        break
      case 'digitalisation':
        recommendation = "Accélérez votre numérisation : adoptez un catalogue structuré sur WhatsApp Business et intégrez le paiement marchand digital pour automatiser votre suivi de ventes et sécuriser vos encaissements."
        break
      case 'operations':
        recommendation = "Régulez votre activité : formalisez vos processus clés d'approvisionnement et de gestion des stocks par écrit pour réduire la dépendance directe envers le dirigeant."
        break
      case 'financement':
        recommendation = "Constituez votre historique bancable : rassemblez vos documents légaux (IFU, RCCM) et suivez votre besoin réel en fonds de roulement sur 3 mois avant toute sollicitation financière."
        break
      default:
        recommendation = "Rapprochez-vous du programme d'accompagnement ALODO MPME pour bénéficier d'un plan de structuration sur-mesure étape par étape."
    }
  }

  return {
    strengths,
    weaknesses,
    recommendation
  }
}