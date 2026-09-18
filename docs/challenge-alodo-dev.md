

# ALODO TECH — Exercice de sélection

## Profil Développeur — “Prototype du diagnostic ALODO MPME”

Durée : 3 jours · Projet support : ALODO MPME · [alodotech.com](http://alodotech.com)

## 1. Introduction

Merci pour votre intérêt pour ALODO TECH. Plutôt que d'évaluer uniquement CV et diplômes, nous vous proposons de travailler sur une problématique réelle liée à l'un de nos produits en développement.

Nous cherchons à observer votre compréhension du problème, votre capacité à le transformer en solution concrète, votre niveau technique, votre autonomie, votre organisation et votre respect des délais. Nous ne recherchons pas seulement des personnes capables d'exécuter une consigne, mais des personnes capables de comprendre, réfléchir, proposer et construire.

## 2. À propos d'ALODO TECH

ALODO TECH est une entreprise technologique basée au Bénin, avec une ambition panafricaine. Notre vision : construire des solutions technologiques qui améliorent la façon dont les acteurs de l'économie réelle fonctionnent, se structurent et accèdent aux outils numériques puis, à terme, aux opportunités financières — autour de la transformation digitale, la fintech, l'IA, la donnée, les MPME et les infrastructures numériques adaptées aux marchés émergents.

Consultez [alodotech.com](http://alodotech.com) avant de commencer. Nous n'attendons pas que vous répétiez ce qui existe déjà sur le site, mais que vous montriez ce que vous avez compris d'ALODO et ce que vous pouvez y apporter.

## 3. Le programme ALODO MPME

ALODO MPME est une initiative destinée aux micro, petites et moyennes entreprises, pour identifier ces entreprises, comprendre leur niveau de structuration et repérer les principaux freins à leur développement.

Candidature → Sélection → Diagnostic → Analyse → Rapport → Recommandations → Accompagnement

Une des premières cohortes sera volontairement limitée à 20 MPME.

## 4. Le diagnostic ALODO MPME

Le diagnostic est le cœur du projet. Il ne s'agit pas d'un questionnaire générique (“avez-vous un site web ?”), mais d'un système qui doit comprendre la maturité réelle d'une MPME sur 8 dimensions :

| # | Dimension     | Exemples explorés                                                         |
|---|---------------|---------------------------------------------------------------------------|
| 1 | Formalisation | Statut légal, documents administratifs, conformité, séparation pro/perso  |
| 2 | Finance       | CA, dépenses, trésorerie, marges, bénéfices, dettes, créances, prévisions |
| 3 | Comptabilité  | Organisation comptable, pièces justificatives, états financiers, outils   |

| # | Dimension                  | Exemples explorés                                                                  |
|---|----------------------------|------------------------------------------------------------------------------------|
| 4 | Commercial                 | Acquisition, clients, prospects, ventes, conversion, fidélisation                  |
| 5 | Digitalisation             | Outils numériques, présence digitale, WhatsApp Business, paiements, automatisation |
| 6 | Opérations                 | Processus, fournisseurs, stock, production, dépendance au dirigeant                |
| 7 | Ressources humaines        | Organisation, rôles, contrats, recrutement, formation, dépendance aux personnes    |
| 8 | Préparation au financement | Historique financier, documents, endettement, besoin de financement                |

## 5. Ce que nous voulons observer

Comprendre le problème · analyser (essentiel vs secondaire) · concevoir une solution · construire dans un délai limité · prioriser · communiquer ses choix · proposer au-delà de la consigne sans perdre le périmètre · s'être réellement impliqué dans la compréhension d'ALODO.

## 6. Règle fondamentale

Vous avez **3 jours**. Vous ne devez **pas** construire l'intégralité d'ALODO MPME : pas d'ERP, pas de programme complet, pas les 8 dimensions, pas de système de financement, pas de dashboard complet, pas d'application mobile, pas d'intégration bancaire. Nous voulons un **prototype ciblé** : choisissez une petite partie du parcours de diagnostic et montrez comment vous la concevriez.

## 7. Votre mission

Développer un **prototype fonctionnel** d'une interface de diagnostic MPME simulant une partie réaliste du parcours. Nous n'évaluons pas votre capacité à livrer une application complète en 3 jours, mais votre raisonnement, votre structuration de projet, votre niveau technique, la qualité de votre code, votre compréhension produit, votre autonomie et votre respect du délai.

### 7.1 Parcours minimal attendu

| Écran           | Contenu                                                                                                                                   |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| 1. Introduction | Objectif du diagnostic, durée estimée, principe, bouton "Commencer"                                                                       |
| 2. Questions    | Plusieurs questions couvrant un périmètre choisi par vous (ex. Finance, Commercial, Digitalisation — ou une autre combinaison pertinente) |
| 3. Résultat     | Score + points forts/faibles + recommandation                                                                                             |

Vous n'avez pas à couvrir les 8 dimensions : choisissez un périmètre raisonnable et pertinent — ce choix sera lui-même évalué.

### 7.2 Questions

**6 à 12 questions maximum.** La quantité n'est pas l'objectif : nous regardons la pertinence, la logique et l'organisation des questions. Types possibles : oui/non, choix unique, choix multiple, échelle, valeur numérique, tranche.

### 7.3 Progression

L'utilisateur doit toujours savoir où il en est (ex. Question 4/10, Finance – 3/4, ou une barre de progression). Format libre, mais jamais de sensation d'être perdu.

### 7.4 Score et résultat

Produisez un résultat simple à partir des réponses : score global et/ou par dimension (chiffres fictifs, logique de scoring libre — ce qui compte est la cohérence de votre raisonnement). L'écran de résultat doit permettre de comprendre rapidement le score, les points forts, au moins une faiblesse, et idéalement une recommandation.

*Exemple :*

ALODO MPME Score – 64/100

Finance: 58    Commercial: 72    Digitalisation: 61

"Bonne maturité commerciale, mais structuration financière à renforcer."

### 7.5 Ce qui est libre

Stack technique, architecture, design, organisation du code, logique de scoring, choix des questions, UX — à condition d'expliquer vos choix. Utilisez une technologie que vous maîtrisez réellement (React, Next.js, Vue, Angular, Node.js, Laravel, Django, etc.) : une solution simple et maîtrisée vaut mieux qu'une architecture complexe non maîtrisée.

### 7.6 Données

Aucune base de données réelle n'est obligatoire : données mockées, état local, JSON ou local-Storage conviennent. Une architecture plus avancée est possible si vous pouvez la justifier.

### 7.7 Responsive

Fonctionnement correct au minimum sur **desktop et mobile** — le marché cible d'ALODO est majoritairement mobile.

### 7.8 Qualité du code

Organisation, lisibilité, composants, nommage, séparation des responsabilités, gestion des erreurs, réutilisabilité, cohérence, Git, documentation. Pas besoin d'architecture "industrielle", mais le code doit être compréhensible par un tiers.

### 7.9 README obligatoire

1. Présentation — qu'avez-vous construit ?
2. Choix produit — pourquoi ces dimensions/questions ?
3. Choix techniques — pourquoi cette stack ?
4. Installation — comment lancer le projet ?
5. Fonctionnalités — qu'est-ce qui fonctionne ?
6. Limites — qu'avez-vous volontairement laissé de côté ?
7. Améliorations — qu'auriez-vous ajouté avec plus de temps ?

### 7.10 Git / GitHub

Projet versionné avec un historique de commits organisé (peu importe le nombre, l'important est ce qu'il montre de votre méthode de travail).

### 7.11 Utilisation de l'IA

Autorisée (ChatGPT, Claude, Copilot, Cursor, etc.), à condition de comprendre entièrement le code soumis — vous pourrez être amené à l'expliquer en entretien. Si l'usage est massif, mentionnez-le dans le README.

### 7.12 Bonus — réflexion produit (*facultatif*)

Après avoir compris ALODO MPME, proposez une amélioration du diagnostic ou du programme (quelques paragraphes, un schéma, une maquette, une idée de scoring ou d'automatisation). Pas besoin de la développer.

*Exemple de piste : un diagnostic adaptatif où le parcours change selon le profil (entreprise commerciale → questions stock, entreprise de services → questions opérations, 30 employés → RH avancée, entreprise individuelle → parcours différent). Il ne s'agit pas de l'implémenter, mais de montrer votre capacité à détecter ce type de problème.*

## 8. Grille d'évaluation

| Critère                                                            | Poids        |
|--------------------------------------------------------------------|--------------|
| Compréhension d'ALODO                                              | 15 %         |
| Produit / UX                                                       | 15 %         |
| Compétence technique (code, architecture, qualité, fonctionnement) | 30 %         |
| Résolution de problèmes (qualité des choix)                        | 15 %         |
| Autonomie                                                          | 10 %         |
| Discipline (délai, organisation, README, Git)                      | 10 %         |
| Intérêt pour ALODO                                                 | 5 %          |
| <b>Total</b>                                                       | <b>100 %</b> |

## 9. Règles communes

- **Périmètre volontairement limité** : nous cherchons une preuve de capacité, pas une version complète d'ALODO MPME. Un projet petit, réfléchi, propre et bien présenté vaut mieux qu'un projet ambitieux mais incomplet.
- **Ce que vous choisissez de ne pas faire compte aussi** : savoir prioriser et réduire le scope est une compétence évaluée.
- **Pas besoin de construire** : authentication complète, backend complexe, paiement, CRM, comptabilité, Mobile Money, IA, infrastructure financière, dashboard admin complet, gestion complète des entreprises.
- **Originalité** : inspirez-vous des bonnes pratiques, mais évitez un template générique, un tutoriel recopié ou un clone d'application existante.
- **IA** : autorisée, mais vous restez responsable de votre travail et devez pouvoir l'expliquer en entretien.

### Livraison

- Lien GitHub
- README
- Lien vers la démo si disponible
- Courte vidéo de démonstration (facultatif)
- Note de réflexion produit / bonus, si réalisée

**Nommage du dépôt :** ALODO-MPME-CHALLENGE - [PRENOM-NOM]

### Après la livraison

Les candidats présélectionnés pourront être invités à un court échange sur le travail réalisé, les décisions prises, les difficultés rencontrées, les choix techniques et la compréhension d'ALODO MPME. L'objectif n'est pas de piéger le candidat, mais de comprendre comment il pense et travaille.

### Notre philosophie de sélection

Nous ne cherchons pas seulement des personnes qui savent coder, mais des personnes capables de **comprendre → réfléchir → proposer → construire → apprendre**. Le niveau technique compte, mais aussi l'autonomie, la discipline, la curiosité, l'esprit d'initiative, la communication et la capacité à comprendre un produit.

Il n'existe pas de "bonne réponse" unique : nous voulons voir votre raisonnement, vos choix et votre capacité à les justifier. Une solution différente de celle imaginée par notre équipe peut être excellente si elle est cohérente, pertinente et bien argumentée.