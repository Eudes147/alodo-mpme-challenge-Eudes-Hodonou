<div align="center">
  <img src="/public/alodo_logo.png" alt="ALODO MPME Logo" width="180" />
  
  # <span style="color: #E85D04;">ALODO</span> MPME — Diagnostic de Maturité

  **Outil numérique d'auto-évaluation et d'orientation pour la structuration et la bancabilité des Micro, Petites et Moyennes Entreprises au Bénin.**

  [![Nuxt 3](https://img.shields.io/badge/Nuxt-3.x-00DC82?style=flat-square&logo=nuxt.js)](https://nuxt.com/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
</div>

---

## 📌 À Propos du Projet

Le projet **ALODO MPME** est un dispositif numérique d'évaluation rapide et pragmatique conçu pour accompagner le tissu économique béninois. Inspiré des orientations stratégiques d'accompagnement des PME (charte des PME, dispositifs de l'ADPME et du GUFE), cet outil permet aux dirigeants de MPME d'évaluer le niveau de structuration de leur entreprise en moins de 5 minutes.

L'objectif principal est de lever les freins liés à l'asymétrie d'information, d'aider les entrepreneurs à identifier leurs points de vulnérabilité et de les orienter vers la formalisation, la digitalisation et l'accès aux financements.

---

<h2 style="color: #E85D04;">🎨 Charte Graphique & Palette de Couleurs</h2>
L'interface s'appuie sur une palette de couleurs moderne, professionnelle et ancrée dans le contexte local :

| Couleur | Code HEX | Utilisation / Signification |
| :--- | :--- | :--- |
| <img src="https://via.placeholder.com/15/E85D04/000000?text=+" width="15"/> **Orange ALODO** | `#E85D04` | Couleur primaire (`alodo-primary`), boutons d'action principaux, progression active |
| <img src="https://via.placeholder.com/15/0F172A/000000?text=+" width="15"/> **Noir Anthracite** | `#0F172A` | Titres, textes à fort contraste (`alodo-black`) |
| <img src="https://via.placeholder.com/15/0D9488/000000?text=+" width="15"/> **Teal / Emeraude** | `#0D9488` | Badges de statut, dimensions validées (`alodo-teal`) |
| <img src="https://via.placeholder.com/15/F8FAFC/000000?text=+" width="15"/> **Gris Clair / Fond** | `#F8FAFC` | Arrière-plan, cartes et conteneurs (`alodo-grey-50`) |
| <img src="https://via.placeholder.com/15/FFFFFF/000000?text=+" width="15"/> **Blanc Pur** | `#FFFFFF` | Fond des cartes de questionnaires (`alodo-pure-white`) |

---

## 📊 Dimensions d'Évaluation

Le diagnostic analyse la santé et la maturité de l'entreprise à travers **4 dimensions stratégiques** :

1. **💰 Finance & Trésorerie :** Séparation des comptes (bancaire / Mobile Money Pro), suivi de caisse et visibilité sur les marges.
2. **📱 Digitalisation & Cashless :** Usage commercial de WhatsApp Business et intégration des encaissements digitaux (MTN MoMo, Moov Money, Celtiis Cash).
3. **⚙️ Opérations & Organisation :** Indépendance vis-à-vis du dirigeant, formalisation des processus et sécurisation des approvisionnements.
4. **🏦 Préparation au Financement :** Formalisation légale (IFU, RCCM, GUFE), traçabilité financière et constitution de dossiers d'investissement.

---

## ✨ Fonctionnalités Clés

* **Diagnostic Interactif :** Questionnaires adaptés gérant plusieurs types de réponses (choix unique, choix multiple, échelle de Likert, saisie numérique).
* **Résilience Réseau & Offline-First :** Sauvegarde automatique de la progression dans le navigateur via `localStorage`.
* **Scoring Automatisé :** Calcul instantané d'un score global et de sous-scores par dimension sur 100.
* **Recommandations Sur-Mesure :** Génération automatique d'axes d'amélioration et de plans d'action pragmatiques.
* **Interface Responsive (Mobile-First) :** Expérience utilisateur fluide et optimisée pour smartphone, tablette et ordinateur.

---

## 🛠️ Architecture du Projet

```text
alodo-mpme/
├── assets/
│   └── css/
│       └── main.css            # Styles globaux & classes Tailwind personnalisées
├── components/
│   └── ui/                     # Composants UI réutilisables
│       ├── AppBadge.vue        # Badges de statut et dimensions
│       ├── AppButton.vue       # Boutons primaires / secondaires avec loader
│       ├── AppCard.vue         # Conteneur de carte générique
│       ├── AppModal.vue        # Fenêtres de confirmation / popups
│       └── AppSkeleton.vue     # Squelette de chargement réseau lent
├── composables/
│   └── useDiagnostic.ts        # Gestion d'état global, navigation et persistence
├── data/
│   └── questions.json          # Référentiel des questions et dimensions
├── pages/
│   ├── index.vue               # Écran d'accueil & présentation
│   ├── diagnostic.vue          # Parcours du questionnaire interactif
│   └── result.vue              # Bilan des scores & recommandations
├── public/
│   └── alodo_logo.png          # Logo officiel ALODO MPME
├── utils/
│   ├── calculScoring.ts        # Moteur de calcul des scores par tranche/dimension
│   └── recommandations.ts     # Générateur d'insights personnalisés
├── nuxt.config.ts              # Configuration Nuxt 3 & modules
└── tailwind.config.js          # Configuration des thèmes et couleurs ALODO
```

---

## 🚀 Installation & Démarrage Rapide

### Prérequis
* **Node.js :** `v18.x` ou version supérieure recommandée
* **Gestionnaire de paquets :** `npm`, `yarn` ou `pnpm`

### 1. Cloner le dépôt
```bash
git clone [https://github.com/votre-utilisateur/alodo-mpme.git](https://github.com/votre-utilisateur/alodo-mpme.git)
cd alodo-mpme
```

### 2. Installer les dépendances
```bash
npm install
# ou
yarn install
# ou
pnpm install
```
#### 3. Lancer le serveur de développement
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```
