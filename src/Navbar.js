import { Link } from "react-router-dom";
import { useState } from 'react';



const Navbar = () => {
    const [Acceuil, setAcceuil] = useState('Acceuil')
    const [Produits, setProduits] = useState('Produits')
    const [Quetes, setQuetes] = useState('Quetes')
    const [About, setAbout] = useState('A Propos')
    const [faq, setFaq] = useState('FAQ')



    return ( 
        <div className="navbar">
            <nav>
            <a href="/boncompagnon3/">
                <button>{Acceuil}</button>
            </a>
            <a href="/boncompagnon3/store">
                <button>{Produits}</button>
            </a>
            <a href="/boncompagnon3/quetes">
                <button>{Quetes}</button>
            </a>
            <a href="/boncompagnon3/about">
                <button>{About}</button>
            </a>
            <a href="/boncompagnon3/faq">
                <button>{faq}</button>
            </a>
            </nav>          
        </div>
     );
}
 
export default Navbar;