import { useState } from 'react'
import '../Options/Options.css'
export function Options() {
    const [city, setCity] = useState("Beheira")
    return (
        <>
            <select value={city} onChange={(e) => setCity(e.target.value)} className="location-select">
                <option value="Beheira">Beheira</option>
                <option value="Cairo">Cairo</option>
                <option value="Alexandria">Alexandria</option>
                <option value="Giza">Giza</option>
                <option value="Dakahlia">Dakahlia</option>
                <option value="Sharqia">Sharqia</option>
                <option value="Gharbia">Gharbia</option>
                <option value="Monufia">Monufia</option>
                <option value="Qalyubia">Qalyubia</option>
                <option value="Kafr El Sheikh">Kafr El Sheikh</option>
                <option value="Damietta">Damietta</option>
                <option value="Port Said">Port Said</option>
                <option value="Suez">Suez</option>
                <option value="Ismailia">Ismailia</option>
                <option value="Fayoum">Fayoum</option>
                <option value="Beni Suef">Beni Suef</option>
                <option value="Minya">Minya</option>
                <option value="Asyut">Asyut</option>
                <option value="Sohag">Sohag</option>
                <option value="Qena">Qena</option>
                <option value="Luxor">Luxor</option>
                <option value="Aswan">Aswan</option>
                <option value="Red Sea">Red Sea</option>
                <option value="New Valley">New Valley</option>
                <option value="North Sinai">North Sinai</option>
                <option value="South Sinai">South Sinai</option>
                <option value="Matrouh">Matrouh</option>
            </select>
        </>
    )
}