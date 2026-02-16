import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="language-switcher">
            <button
                className={`lang-btn ${i18n.language === 'it' ? 'active' : ''}`}
                onClick={() => changeLanguage('it')}
            >
                IT
            </button>
            <button
                className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
                onClick={() => changeLanguage('en')}
            >
                EN
            </button>
        </div>
    );
}

export default LanguageSwitcher;
