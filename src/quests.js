import hat from './hat.jpg';
import ps1 from './ps1.jpg';
import ps2 from './ps2.jpg';
import ps3 from './ps3.jpg';

const Quest = () => {
    return ( 

        <div className="contenu1">
            <p>Attention. Il est recommander d'uniquement choisir une quetes qui est au maximum un niveau au dessus de votre rang actuel.</p>
            <div className="wrapper2">
                <Card img={ps1} title="Casque en fer III" description="Un bon casque de fer!" langue="Consulter le Prix"></Card>
                <Card img={ps2} title="Casque en fer III" description="Un bon casque de fer!" langue="Consulter le Prix"></Card>
                <Card img={ps3} title="Casque en fer III" description="Un bon casque de fer!" langue="Consulter le Prix"></Card>
            </div>
        </div>


     );
}

function Card(props) {
    return(
        <div className="card">
            <div className="card__body">
                <img src={props.img} className="card__image2" />
                <h2 className="card__description">{props.title}</h2>
                <p className="card__description">{props.description}</p>
            </div>
            <button className="card__btn">{props.langue}</button>
        </div>
    )
}
 
export default Quest;