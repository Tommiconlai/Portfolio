import { useTranslation } from 'react-i18next';

function CVPage() {
    const { t } = useTranslation();

    return (
        <div className="cv-page">
            <section className="cv-header">
                <h1>{t('cv.title')}</h1>
                <p className="cv-subtitle">{t('cv.subtitle')}</p>
                <div className="cv-contact">
                    <p>{t('cv.email')}</p>
                    <p>{t('cv.phone')}</p>
                    <p>{t('cv.location')}</p>
                </div>
            </section>

            <section className="cv-section">
                <h2>{t('cv.profileTitle')}</h2>
                <p>{t('cv.profileText')}</p>
            </section>

            <section className="cv-section">
                <h2>{t('cv.experienceTitle')}</h2>

                <div className="cv-item">
                    <div className="cv-item-header">
                        <h3>{t('cv.experienceIntern')}</h3>
                        <span className="cv-date">{t('cv.experienceInternDate')}</span>
                    </div>
                    <p className="cv-company">{t('cv.experienceInternCompany')}</p>
                    <ul>
                        <li>{t('cv.experienceInternTask1')}</li>
                        <li>{t('cv.experienceInternTask2')}</li>
                        <li>{t('cv.experienceInternTask3')}</li>
                    </ul>
                </div>

                <div className="cv-item">
                    <div className="cv-item-header">
                        <h3>{t('cv.experienceGraphic')}</h3>
                        <span className="cv-date">{t('cv.experienceGraphicDate')}</span>
                    </div>
                    <p className="cv-company">{t('cv.experienceGraphicCompany')}</p>
                    <ul>
                        <li>{t('cv.experienceGraphicTask1')}</li>
                        <li>{t('cv.experienceGraphicTask2')}</li>
                        <li>{t('cv.experienceGraphicTask3')}</li>
                    </ul>
                </div>

                <div className="cv-item">
                    <div className="cv-item-header">
                        <h3>{t('cv.experienceWorker')}</h3>
                        <span className="cv-date">{t('cv.experienceWorkerDate')}</span>
                    </div>
                    <p className="cv-company">{t('cv.experienceWorkerCompany')}</p>
                    <ul>
                        <li>{t('cv.experienceWorkerTask1')}</li>
                        <li>{t('cv.experienceWorkerTask2')}</li>
                        <li>{t('cv.experienceWorkerTask3')}</li>
                    </ul>
                </div>

                <div className="cv-item">
                    <div className="cv-item-header">
                        <h3>{t('cv.experienceInventory')}</h3>
                        <span className="cv-date">{t('cv.experienceInventoryDate')}</span>
                    </div>
                    <p className="cv-company">{t('cv.experienceInventoryCompany')}</p>
                    <ul>
                        <li>{t('cv.experienceInventoryTask1')}</li>
                    </ul>
                </div>
            </section>

            <section className="cv-section">
                <h2>{t('cv.educationTitle')}</h2>

                <div className="cv-item">
                    <div className="cv-item-header">
                        <h3>{t('cv.educationIFTS')}</h3>
                        <span className="cv-date">{t('cv.educationIFTSDate')}</span>
                    </div>
                    <p className="cv-company">{t('cv.educationIFTSSchool')}</p>
                </div>

                <div className="cv-item">
                    <div className="cv-item-header">
                        <h3>{t('cv.educationGameDesign')}</h3>
                        <span className="cv-date">{t('cv.educationGameDesignDate')}</span>
                    </div>
                    <p className="cv-company">{t('cv.educationGameDesignSchool')}</p>
                </div>

                <div className="cv-item">
                    <div className="cv-item-header">
                        <h3>{t('cv.educationHighSchool')}</h3>
                        <span className="cv-date">{t('cv.educationHighSchoolDate')}</span>
                    </div>
                    <p className="cv-company">{t('cv.educationHighSchoolName')}</p>
                </div>
            </section>

            <section className="cv-section">
                <h2>{t('cv.skillsTitle')}</h2>

                <div className="skills-category">
                    <h3>{t('cv.programming')}</h3>
                    <div className="skills-tags">
                        <span className="skill-tag">Java</span>
                        <span className="skill-tag">C#</span>
                        <span className="skill-tag">Unity</span>
                        <span className="skill-tag">React</span>
                        <span className="skill-tag">XML</span>
                        <span className="skill-tag">HTML</span>
                        <span className="skill-tag">CSS</span>
                        <span className="skill-tag">Node.js</span>
                        <span className="skill-tag">MongoDB</span>
                        <span className="skill-tag">REST API</span>
                        <span className="skill-tag">SQL</span>
                        <span className="skill-tag">Git</span>
                        <span className="skill-tag">GitHub</span>
                    </div>
                </div>

                <div className="skills-category">
                    <h3>{t('cv.graphic')}</h3>
                    <div className="skills-tags">
                        <span className="skill-tag">Photoshop</span>
                        <span className="skill-tag">Illustrator</span>
                        <span className="skill-tag">inDesign</span>
                        <span className="skill-tag">Figma</span>
                        <span className="skill-tag">Premiere</span>
                        <span className="skill-tag">Blender</span>
                        <span className="skill-tag">Procreate</span>
                    </div>
                </div>
            </section>

            <section className="cv-section">
                <h2>{t('cv.languagesTitle')}</h2>
                <div className="languages">
                    <div className="language-item">
                        <strong>{t('cv.italian')}:</strong> {t('cv.italianLevel')}
                    </div>
                    <div className="language-item">
                        <strong>{t('cv.english')}:</strong> {t('cv.englishLevel')}
                    </div>
                    <div className="language-item">
                        <strong>{t('cv.spanish')}:</strong> {t('cv.spanishLevel')}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CVPage;
