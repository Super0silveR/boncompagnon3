import potion from './potion.png';
import hat from './hat.jpg';
import sac from './sac.png'


const Store = () => {
    
    return ( 
        
        <div>
            <div id="myModal" class="modal">

                <div class="modal-content">
                    <span class="close">&times;</span>
                    <p>Some text in the Modal..</p>
                </div>

            </div>
            <div className="store1">
                <h2>Equipement</h2>
                <h3>Armure</h3>
                
                <input type="checkbox" name="" id="1" />
                <h4>    fer</h4>

                <h3>Potion</h3>
                
                <input type="checkbox" name="" id="2" />
                <h4>    soin</h4>

                <h3>Acessiore</h3>
                <input type="checkbox" name="" id="3" />
                <h4>    cuir</h4>
                
                

            </div>
            <div className="store2">
                <div className="wrapper">
                    <Card img={potion} title="Potion de Soin I" description="Une potion de soin est l'ami de l'aventurier, plusieurs potions ont des effets différents mais attention aux maladies!" langue="Consulter le Prix"></Card>
                    <Card img={sac} title="Sac en cuir I" description="Un sac normal avez assez de place" langue="Consulter le Prix"></Card>
                    <Card img={hat} title="Casque en fer I" description="Un bon casque de fer!" langue="Consulter le Prix"></Card>
                    <Card img={potion} title="Potion de Soin II" description="Une potion de soin est l'ami de l'aventurier, plusieurs potions ont des effets différents mais attention aux maladies!" langue="Consulter le Prix"></Card>
                    <Card img={potion} title="Potion de Soin III" description="Une potion de soin est l'ami de l'aventurier, plusieurs potions ont des effets différents mais attention aux maladies!" langue="Consulter le Prix"></Card>
                    <Card img={sac} title="Sac en cuir II" description="Un sac normal avez assez de place" langue="Consulter le Prix"></Card>
                    <Card img={hat} title="Casque en fer II" description="Un bon casque de fer!" langue="Consulter le Prix"></Card>
                    <Card img={potion} title="Potion de Soin IV" description="Une potion de soin est l'ami de l'aventurier, plusieurs potions ont des effets différents mais attention aux maladies!" langue="Consulter le Prix"></Card>
                    <Card img={potion} title="Potion de Soin V" description="Une potion de soin est l'ami de l'aventurier, plusieurs potions ont des effets différents mais attention aux maladies!" langue="Consulter le Prix"></Card>
                    <Card img={sac} title="Sac en cuir III" description="Un sac normal avez assez de place" langue="Consulter le Prix"></Card>
                    <Card img={hat} title="Casque en fer III" description="Un bon casque de fer!" langue="Consulter le Prix"></Card>
                    <Card img={potion} title="Potion de Soin VI" description="Une potion de soin est l'ami de l'aventurier, plusieurs potions ont des effets différents mais attention aux maladies!" langue="Consulter le Prix"></Card>
                </div>

            </div>
        </div>
     );
}
function Card(props) {
    return(
        <div className="card">
            <div className="card__body">
                <img src={props.img} className="card__image" />
                <h2 className="card__description">{props.title}</h2>
                <p className="card__description">{props.description}</p>
                <p>Combien en voulez vous?</p>
                <input type="text" placeholder='Quantité'style={{
                    fontSize: 20,
                }}/>
            </div>
            <a href="/checkout">
                <button className="card__btn" id='buybtn'>{props.langue}</button>
            </a>
        </div>
    )
}
 
export default Store;