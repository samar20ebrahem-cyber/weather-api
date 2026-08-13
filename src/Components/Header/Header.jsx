import '../Header/Header.css'
import { LanguageToggle } from '../LanguageToggle/LanguageToggle.jsx'
import { WiDayCloudy } from "react-icons/wi"
import { useTranslation } from "react-i18next"
export function Header() {
    const { t } = useTranslation()
    return (
        <>
            <header>
                <div className="logo">
                    <div className="img">
                        < WiDayCloudy className='icon' />
                    </div>
                    <div className="logo-title">
                        <h3>{t("weather.appName")}</h3>
                        <p>{t("weather.subtitle")} </p>
                    </div>
                </div>
                <LanguageToggle />
            </header>
        </>
    )
}