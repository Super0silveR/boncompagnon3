import ps1 from './ps1.jpg';

const Error = () => {
    return ( 

        <div className="errorCss">
            <h1>Sorry is seems that you are lost...</h1>
            <img src={ps1} alt="" />
            <p>The page you are trying to visit either does not exist or is under maintenance. Please, reach out our working page. For any informations or bug report, please contact us!</p>
        </div>
     );
}
 
export default Error;