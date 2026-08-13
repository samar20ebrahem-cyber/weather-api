import '../Header/Header.css'
import { LanguageToggle } from '../LanguageToggle/LanguageToggle.jsx'
import { WiDayCloudy } from "react-icons/wi";
import { Options } from '../Options/Options.jsx'
export function Header() {
    return (
        <>
            <header>
                <div className="logo">
                    <div className="img">
                        < WiDayCloudy className='icon' />
                    </div>
                    <div className="logo-title">
                        <h3>Aeris</h3>
                        <p>Live weather </p>
                    </div>
                </div>
                <LanguageToggle />
                <Options />
            </header>
        </>
    )
}