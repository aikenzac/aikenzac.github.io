# ⚜️ Portfolio - Zacharia Hadjedj

> *L'alliance du design vintage et de la performance moderne.*

![Version](https://img.shields.io/badge/version-1.0.0-gold?style=flat-square)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-7-purple?style=flat-square&logo=vite)
![Docker](https://img.shields.io/badge/Docker-Ready-blue?style=flat-square&logo=docker)

## 🖋️ À Propos

Ce portfolio est une vitrine interactive conçue pour refléter une identité professionnelle alliant **rigueur technique** et **esthétique raffinée**. Développé avec **React** et **Vite**, il propose une expérience utilisateur immersive grâce à un design "Luxe" (Noir & Or), des animations fluides et une ambiance sonore soignée.

Il met en avant mon expertise en **Ingénierie Logicielle (C++/Qt)** et **DevOps**, ainsi que ma recherche active d'un stage de 4 à 6 mois en Suisse Romande à partir d'Avril 2026.

## ✨ Fonctionnalités Clés

### 🎨 Design & Expérience Utilisateur
- **Esthétique Premium** : Utilisation d'une palette de couleurs Or & Noir avec des effets de *Glassmorphism* pour une touche moderne et élégante.
- **Ambiance Immersive** :
    - 🎵 **Lecteur Audio** : Musique d'ambiance intégrée avec contrôles utilisateur (Play/Pause) et persistance.
    - 🎥 **Vidéo Hero** : Arrière-plan vidéo captivant dans la section d'accueil.
- **Internationalisation (i18n)** : Support complet multilingue **Français 🇫🇷**, **Anglais 🇬🇧** et **Allemand 🇩🇪** avec changement dynamique.

### 🛠️ Architecture Technique
- **Performance** : Build ultra-rapide grâce à **Vite**.
- **Composants Modernes** : Utilisation des Hooks React (`useState`, `useEffect`, `useRef`) pour la gestion d'état et les effets de bord.
- **Déploiement** : Prêt pour la conteneurisation avec **Docker** et **Nginx**.

## 🚀 Projets Présentés

Le portfolio met en lumière une sélection de projets techniques démontrant une polyvalence Fullstack et Bas-niveau :

| Projet | Rôle | Technologies |
| :--- | :--- | :--- |
| **FlipNews** | Fullstack Lead & DevOps | React, Node.js, Prisma, Docker |
| **MedBuddy** | Embedded & IoT Developer | C/C++, Bluetooth, NFC (Hackathon STMicro) |
| **ConcertV2** | Backend Intern | C++, Qt, Systèmes Embarqués |
| **Whanos** | DevOps Architect | Kubernetes, Jenkins, Ansible |

## 💻 Installation & Démarrage

Pour lancer le projet localement, suivez ces instructions :

### Prérequis
- Node.js (v18+)
- npm ou yarn

### Étapes

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/hadjedj/portfolio_react.git
   cd portfolio_react
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```
   L'application sera accessible sur `http://localhost:5173`.

### 🐳 Docker

Une configuration Docker est incluse pour un déploiement, rapide et isolé.

```bash
# Construire l'image
docker build -t portfolio-zacharia .

# Lancer le conteneur
docker run -p 8080:80 portfolio-zacharia
```
L'application sera accessible sur `http://localhost:8080`.

## 👤 Auteur

**Zacharia Hadjedj** - *Ingénieur Logiciel & DevOps*

- 💼 [LinkedIn](https://linkedin.com/in/hadjedjys)
- 🐙 [GitHub](https://github.com/aikenzac)
- 📄 [Curriculum Vitae](/public/assets/CV_YZHadjedj.pdf)

---
*« La discipline trace le chemin que le progrès emprunte. »*
