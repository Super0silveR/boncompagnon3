import auberge from './auberge.PNG';
import etabli from './etabli.png';
import scroll from './scroll.png';

const Home = () => {
    return ( 
        <div className='home'>
            <div class="container1">
                <img src={auberge} alt="ImageAuberge" />
                <a href="/error">
                <button class="btn">Logement</button>
                </a>
            </div>
            <div class="container2">
                <img src={scroll} alt="ImageAuberge" />
                <a href="/quetes">
                <button class="btn">Quetes</button>
                </a>
            </div>
            <div class="container3">
                <img src={etabli} alt="ImageAuberge" />
                <a href="/error">
                <button class="btn">Forge</button>
                </a>
            </div>
        </div>
     );
}
 
export default Home;