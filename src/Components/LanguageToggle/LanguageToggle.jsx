import '../LanguageToggle/LanguageToggle.css'
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function LanguageToggle() {
    const   { t, i18n } = useTranslation()
    const [language, setLanguage] = useState("en")
      function changeLanguage(lang) {
        setLanguage(lang);
        i18n.changeLanguage(lang);
    }

    return (
        <>
            <div className="lang">
                <button className={language === "en" ? "active" : ""}
                    onClick={() => changeLanguage("en")}>{t("weather.english")}</button>
                <button className={language === "ar" ? "active" : ""}
                    onClick={() => changeLanguage("ar")} > {t("weather.arabic")}</button>

            </div>
        </>
    )
}