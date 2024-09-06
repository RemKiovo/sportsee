# SportSee - Nouvelle Page Profil Utilisateur

Bienvenue dans le projet de développement de la nouvelle page profil utilisateur pour SportSee, une startup dédiée au coaching sportif. Ce README vous guidera à travers les étapes clés du développement et fournira des informations importantes sur l'intégration technique de la page.

## Sommaire

1. [Objectif du Projet](#objectif-du-projet)
2. [Technologie Utilisée](#technologie-utilisée)
3. [Installation du Projet](#installation-du-projet)
4. [Développement](#développement)
   - [User Stories à Intégrer](#user-stories-à-intégrer)
   - [Gestion des Données](#gestion-des-données)
   - [Graphiques](#graphiques)
   - [Intégration CSS](#intégration-css)
5. [Documentation](#documentation)
6. [Ressources](#ressources)

## Objectif du Projet

L'objectif de ce projet est de créer une nouvelle version de la page profil utilisateur pour permettre aux utilisateurs de suivre leur activité sportive, y compris le nombre de sessions réalisées et le nombre de calories brûlées.

## Technologie Utilisée

- **Frontend :** React
- **Bundler :** Vite
- **Bibliothèque pour les graphiques :** Recharts
- **Backend :** Node.js (API disponible pour récupérer les données utilisateur)
- **HTTP Client :** Axios
- **CSS :** Tailwind pour le styling, focus sur l'intégration desktop (résolution minimale de 1024x780 pixels)

## Installation du Projet

**Cloner le dépôt :**

```bash
git clone https://github.com/RemKiovo/sportsee
cd sportsee
```

**Installation des dépendances :**

```bash
npm install
```

**Lancer le backend :**

Suivez les instructions fournies dans [le dépôt du backend](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard) pour démarrer le serveur Node.js.

**Lancer le mode dev :**

```bash
npm run dev
```

## Développement

### User Stories à Intégrer\*\*

Pour ce sprint, je vais intégrer les User Stories de la partie TODO du Kanban. Cela inclut la création des composants React pour afficher les données de l'utilisateur, telles que le nombre de sessions réalisées et les calories brûlées, ainsi que la gestion des états et des interactions utilisateurs.

### Gestion des Données

- **Mock des Données :** Avant d'intégrer les appels API, je commence par créer des mocks des données de l'API pour tester l'affichage des graphiques et des informations utilisateur.
- **Appels API** : Une fois les mocks fonctionnels, j'intègre les données réelles en utilisant l'API fournie. Je m'assure de standardiser les données pour gérer les variations de schéma selon les utilisateurs.

### Graphiques

Je vais utiliser Recharts ou D3.js pour représenter graphiquement l'activité sportive de l'utilisateur. Recharts est recommender pour sa simplicité.

### Intégration CSS

Je me concentre sur la version desktop de la page profil. Je m'assure que l'interface soit lisible et fonctionnelle sur des écrans d'au moins 1024x780 pixels.

## Documentation

- **README :** Ce fichier pour les instructions générales.
- **JSDoc :** Pour documenter les fonctions et les méthodes.
- **PropTypes :** Pour valider les types de données passées aux composants React.

## Ressources

**Lien Figma des maquettes :** [Maquettes Figma](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0%3A1)  
**Kanban des User Stories :** [Kanban SportSee](https://www.notion.so/openclassrooms/Copy-of-Dev4U-projet-Learn-Home-6686aa4b5f44417881a4884c9af5669e)  
**Backend Node.js :** [Répertoire Backend](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)
