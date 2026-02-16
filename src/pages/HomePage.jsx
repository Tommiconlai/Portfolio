import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function HomePage() {
    const { t } = useTranslation();

    return (
        <div className="home-page">
            <section className="hero">
                <div className="hero-content">
                    <h1>{t('home.title')}</h1>
                    <h2>{t('home.subtitle')}</h2>
                    <p className="hero-description">
                        {t('home.description')}
                    </p>
                    <div className="hero-buttons">
                        <Link to="/cv" className="btn btn-primary">{t('home.viewCV')}</Link>
                        <Link to="/projects" className="btn btn-secondary">{t('home.myProjects')}</Link>
                    </div>
                </div>
            </section>

            <section className="about">
                <h2>{t('home.aboutTitle')}</h2>
                <p>
                    {t('home.aboutText')}
                </p>
            </section>

            <section className="skills-preview">
                <h2>{t('home.skillsTitle')}</h2>
                <div className="skills-grid">
                    <div className="skill-item">
                        <h3>{t('home.frontend')}</h3>
                        <p>{t('home.frontendSkills')}</p>
                    </div>
                    <div className="skill-item">
                        <h3>{t('home.backend')}</h3>
                        <p>{t('home.backendSkills')}</p>
                    </div>
                    <div className="skill-item">
                        <h3>{t('home.tools')}</h3>
                        <p>{t('home.toolsSkills')}</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
