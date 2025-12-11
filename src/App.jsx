import { useState, useEffect, useRef } from 'react';
import { translations } from './translations';



function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true); // Default to true (optimistic)
  const [currentLang, setCurrentLang] = useState('Fr');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen);
  };

  const changeLang = (lang) => {
    setCurrentLang(lang);
    setIsLangMenuOpen(false);
  };

  const t = translations[currentLang];

  useEffect(() => {
    // 1. Try to play automatically (often blocked)
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }

    // 2. Fallback: Unlock audio on first interaction (click anywhere)
    const handleFirstInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(e => console.log("Still blocked:", e));
      }
      // Remove listener after first interaction
      document.removeEventListener('click', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    return () => document.removeEventListener('click', handleFirstInteraction);
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="app">
      {/* BACKGROUND AUDIO */}
      <audio ref={audioRef} loop autoPlay>
        <source src="/assets/background.mp3" type="audio/mp3" />
      </audio>

      {/* AUDIO CONTROL */}
      <button className="audio-control" onClick={toggleAudio}>
        {isPlaying ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="#f0c14b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.54 8.46C16.4774 9.39764 17.0041 10.6692 17.0041 11.995C17.0041 13.3208 16.4774 14.5924 15.54 15.53" stroke="#f0c14b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.07 4.93C20.9447 6.80527 21.9983 9.34836 21.9983 12C21.9983 14.6516 20.9447 17.1947 19.07 19.07" stroke="#f0c14b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="#f0c14b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23 9L17 15" stroke="#f0c14b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 9L23 15" stroke="#f0c14b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      {/* NAVIGATION */}
      <nav className="navbar">
        <div className="container navbar-container">
          <div className="logo"> ❦ YZH</div>
          <div className="nav-links">
            <a href="#about" className="nav-link">{t.nav.about}</a>
            <a href="#projects" className="nav-link">{t.nav.projects}</a>
            <a href="#contact" className="nav-link">{t.nav.contact}</a>

            <div className="nav-link lang-selector-container" onClick={toggleLangMenu}>
              <span className="current-lang">{currentLang}</span>
              {isLangMenuOpen && (
                <div className="lang-dropdown">
                  <div className={`lang-option ${currentLang === 'Fr' ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); changeLang('Fr'); }}>Fr</div>
                  <div className={`lang-option ${currentLang === 'En' ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); changeLang('En'); }}>En</div>
                  <div className={`lang-option ${currentLang === 'De' ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); changeLang('De'); }}>De</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="hero">
        {/* VIDEO BACKGROUND (Scope limited to Hero) */}
        <div className="video-background">
          <video autoPlay loop muted playsInline>
            <source src="/assets/swiss-video.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>

        <div className="container hero-content">
          <span className="hero-label">{t.hero.label}</span>
          <h1 className="hero-title text-gradient-gold">
            Zacharia Hadjedj
          </h1>
          <p className="hero-subtitle" dangerouslySetInnerHTML={{ __html: t.hero.subtitle }}></p>
          <a href="#contact" className="btn-primary">{t.hero.cta}</a>
        </div>
      </header>

      {/* CONTENT WRAPPER */}
      <main>
        {/* ABOUT SECTION */}
        <section id="about" className="section container">
          <div className="section-header">
              <span className="section-label">{t.about.label}</span>
              <h2 className="section-title">{t.about.title}</h2>
            </div>
            <div className="about-content">
              <p className="about-text" dangerouslySetInnerHTML={{ __html: t.about.p1 }}></p>
              <p className="about-text" dangerouslySetInnerHTML={{ __html: t.about.p2 }}></p>
              <p className="about-text">
                <span dangerouslySetInnerHTML={{ __html: t.about.achievements_title }}></span>
                <br />
                {t.about.achievements.map((achievement, i) => (
                  <span key={i}>
                    • <span dangerouslySetInnerHTML={{ __html: achievement }}></span>
                    <br />
                  </span>
                ))}
              </p>
              <p className="about-text">
                {t.about.p3}
              </p>
            </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section container">
          <div className="section-header">
              <span className="section-label">{t.projects.label}</span>
              <h2 className="section-title">{t.projects.title}</h2>
            </div>
            <div className="projects-grid">
              {t.projects.items.map((project, index) => (
                <article key={index} className="project-card">
                  <h3 className="project-title">
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p className="project-role">{project.role}</p>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tech.split('•').map((tech, i) => (
                      <span key={i} className="tag">{tech.trim()}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section contact-section">
          <div className="container">
            <span className="section-label">{t.contact.label}</span>
            <h2 className="hero-title text-gradient-gold" style={{ marginBottom: '40px' }}>{t.contact.title}</h2>

            <a href="mailto:zac.aiken@outlook.com" className="contact-link">zac.aiken@outlook.com</a>

            <div className="social-links">
              <a href="https://linkedin.com/in/hadjedjys" target="_blank" rel="noreferrer" className="social-link">LinkedIn</a>
              <a href="https://github.com/aikenzac" target="_blank" rel="noreferrer" className="social-link">GitHub</a>
              <a href="/assets/CV_YZHadjedj.pdf" target="_blank" rel="noreferrer" className="social-link">CV</a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <p> {new Date().getFullYear()} {t.footer} </p>
      </footer>
    </div>
  );
}

export default App;
