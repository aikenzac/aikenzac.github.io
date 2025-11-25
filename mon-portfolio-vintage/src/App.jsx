const projects = [
  {
    title: "ConcertV2 – Paiement embarqué",
    role: "Stage développeur backend embarqué – See Tickets",
    description:
      "Développement d’un protocole de paiement embarqué en C++/Qt. Optimisation mémoire, refactorisation du code et tests en conditions proches de la production.",
    tech: "C++ • Qt",
  },
  {
    title: "Whanos – CI/CD & Docker",
    role: "Projet DevOps – Epitech",
    description:
      "Plateforme CI/CD multi-langages avec dockerisation complète, images personnalisées, orchestration Kubernetes et pipelines Jenkins / GitHub Actions.",
    tech: "Docker • Kubernetes • GitHub Actions • Jenkins",
  },
  {
    title: "Arcade – Plateforme rétro modulaire",
    role: "Projet C++ – Epitech",
    description:
      "Plateforme de jeux rétro en architecture modulaire avec moteurs graphiques interchangeables (SFML, NCurses) et modules dynamiques.",
    tech: "C++ • SFML • NCurses",
  },
  {
    title: "Tutorat informatique",
    role: "Janv. 2025 – Mai 2025",
    description:
      "Accompagnement d’étudiants en conception et développement. Vulgarisation, encadrement, préparation aux soutenances.",
    tech: "Pédagogie • Architecture logicielle",
  },
];

function App() {
  return (
    <div className="page">
      {/* HERO */}
      <header className="hero">
        <div className="hero-badge">
          <span className="hero-badge-top">Dev Portfolio</span>
          <span className="hero-badge-main">Yanis Hadjedj</span>
          <span className="hero-badge-bottom">Retro 80s Vibes</span>
        </div>

        <p className="hero-subtitle">
          Étudiant Epitech — Ingénierie Logicielle & DevOps
        </p>

        <p className="hero-subtitle">
          Objectif : stage 5–6 mois (Avril–Septembre 2026) en Suisse
        </p>

        <nav className="hero-nav">
          <a href="#about">À propos</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="content">
        {/* ABOUT */}
        <section id="about" className="card">
          <h2 className="section-title">À propos</h2>
          <p>
            Étudiant en ingénierie informatique à Epitech, motivé par les projets
            concrets, l’optimisation logicielle et les environnements Linux.
            Expérience en C++/Linux, méthodes agiles et pratiques DevOps (Docker,
            CI/CD).
          </p>
          <p>
            Intéressé par le développement logiciel, les pipelines d’intégration
            et déploiement, et l’industrialisation des workflows techniques.
          </p>
          <p>Actuellement basé dans le canton de Vaud, Suisse.</p>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="card">
          <h2 className="section-title">Projets sélectionnés</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-role">{project.role}</p>
                <p className="project-description">{project.description}</p>
                <p className="project-tech">{project.tech}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="card">
          <h2 className="section-title">Contact</h2>
          <ul className="contact-list">
            <li>
              Email :
              <a href="mailto:hadjedjys@gmail.com"> hadjedjys@gmail.com</a>
            </li>
            <li>
              LinkedIn :
              <a
                href="https://linkedin.com/in/hadjedjys"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                linkedin.com/in/hadjedjys
              </a>
            </li>
            <li>Localisation : Vaud, Suisse</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Yanis Hadjedj — Portfolio rétro 80s •
          React
        </p>
      </footer>
    </div>
  );
}

export default App;
