import { useState } from 'react';
import icone from './icone.png';


const Headers = () => { 
    const [langue, setLangue] = useState('FR')
    const [enregistrer, setEnregistrement] = useState('Enregistrement')
    const [connection, setConnection] = useState('Connection')
    const [rechercher, setRechercher] = useState('Rechercher...')

    return ( 
        <div className ="headers">
            <a href="/">
                <img src={icone} alt="LogoLeBonCompagnon"></img>
            </a>
            <label>L'Bon Compagnon!</label>
            <input placeholder={rechercher}></input>
            <button>{langue}</button>
            <a href="/signin">
                <button>{enregistrer}</button>
            </a>
            <a href="/connect">
                <button>{connection}</button>
            </a>
        </div>
     );
}
 
export default Headers;