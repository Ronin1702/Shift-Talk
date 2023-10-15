import acura from '../assets/logos/acura.svg';
import alfaromeo from '../assets/logos/alfaromeo.svg';
import astonmartin from '../assets/logos/astonmartin.svg';
import audi from '../assets/logos/audi.svg';
import bentley from '../assets/logos/bentley.svg';
import bmw from '../assets/logos/bmw.svg';
// import bugatti from '../assets/logos/bugatti.svg';
import buick from '../assets/logos/buick.svg';
import cadillac from '../assets/logos/cadillac.svg';
import chevrolet from '../assets/logos/chevrolet.svg';
import chrysler from '../assets/logos/chrysler.svg';
import daewoo from '../assets/logos/daewoo.svg';
import dodge from '../assets/logos/dodge.svg';
import ferrari from '../assets/logos/ferrari.svg';
import fiat from '../assets/logos/fiat.svg';
import fisker from '../assets/logos/fisker.svg';
import ford from '../assets/logos/ford.svg';
import eagle from '../assets/logos/eagle.svg';
import geo from '../assets/logos/geo.svg';
import genesis from '../assets/logos/genesis.svg';
import gmc from '../assets/logos/gmc.svg';
import honda from '../assets/logos/honda.svg';
import hummer from '../assets/logos/hummer.svg';
import hyundai from '../assets/logos/hyundai.svg';
import infiniti from '../assets/logos/infiniti.svg';
import isuzu from '../assets/logos/isuzu.svg';
import jaguar from '../assets/logos/jaguar.svg';
import jeep from '../assets/logos/jeep.svg';
import kia from '../assets/logos/kia.svg';
import lamborghini from '../assets/logos/lamborghini.svg';
import landrover from '../assets/logos/landrover.svg';
import lexus from '../assets/logos/lexus.svg';
import lincoln from '../assets/logos/lincoln.svg';
import lotus from '../assets/logos/lotus.svg';
import maserati from '../assets/logos/maserati.svg';
import mazda from '../assets/logos/mazda.svg';
import mclaren from '../assets/logos/mclaren.svg';
import maybach from '../assets/logos/maybach.svg';
import mercedesbenz from '../assets/logos/mercedes.svg';
import mercury from '../assets/logos/mercury.svg';
import mini from '../assets/logos/mini.svg';
import mitsubishi from '../assets/logos/mitsubishi.svg';
import nissan from '../assets/logos/nissan.svg';
import oldsmobile from '../assets/logos/oldsmobile.svg';
import panoz from '../assets/logos/panoz.svg';
import plymouth from '../assets/logos/plymouth.svg';
import polestar from '../assets/logos/polestar.svg';
import pontiac from '../assets/logos/pontiac.svg';
import porsche from '../assets/logos/porsche.svg';
import ram from '../assets/logos/ram.svg';
import rivian from '../assets/logos/rivian.svg';
import rollsroyce from '../assets/logos/rollsroyce.svg';
import saab from '../assets/logos/saab.svg';
import saturn from '../assets/logos/saturn.svg';
import scion from '../assets/logos/scion.svg';
import smart from '../assets/logos/smart.svg';
import subaru from '../assets/logos/subaru.svg';
import suzuki from '../assets/logos/suzuki.svg';
import tesla from '../assets/logos/tesla.svg';
import toyota from '../assets/logos/toyota.svg';
import volkswagen from '../assets/logos/volkswagen.svg';
import volvo from '../assets/logos/volvo.svg';


const MakeLogo = ({ carMake }) => {
    if (carMake === 'acura') {
        return (
            <div>
                <img src={acura} alt='Acura Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'alfaromeo') {
        return (
            <div>
                <img src={alfaromeo} alt='Alfa Romeo Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'astonmartin') {
        return (
            <div>
                <img src={astonmartin} alt='Aston Martin Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'audi') {
        return (
            <div>
                <img src={audi} alt='Audi Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'bentley') {
        return (
            <div>
                <img src={bentley} alt='Bentley Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'bmw') {
        return (
            <div>
                <img src={bmw} alt='BMW Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    }
    //  else if (carMake === 'bugatti') {
    //     return (
    //         <div>
    //             <img src={bugatti} alt='Bugatti Logo' style={{ width: "40%", height: "40%"}}></img>
    //         </div>
    //     );
    // }
    else if (carMake === 'buick') {
        return (
            <div>
                <img src={buick} alt='Buick Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'cadillac') {
        return (
            <div>
                <img src={cadillac} alt='Cadillac Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'chevrolet') {
        return (
            <div>
                <img src={chevrolet} alt='Chevrolet Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'chrysler') {
        return (
            <div>
                <img src={chrysler} alt='Chrysler Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'daewoo') {
        return (
            <div>
                <img src={daewoo} alt='Daewoo Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'dodge') {
        return (
            <div>
                <img src={dodge} alt='Dodge Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'ferrari') {
        return (
            <div>
                <img src={ferrari} alt='Ferrari Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'fiat') {
        return (
            <div>
                <img src={fiat} alt='Fiat Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'fisker') {
        return (
            <div>
                <img src={fisker} alt='Fisker Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'ford') {
        return (
            <div>
                <img src={ford} alt='Ford Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'eagle') {
        return (
            <div>
                <img src={eagle} alt='Eagle Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'geo') {
        return (
            <div>
                <img src={geo} alt='Geo Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'genesis') {
        return (
            <div>
                <img src={genesis} alt='Genesis Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'gmc') {
        return (
            <div>
                <img src={gmc} alt='GMC Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'honda') {
        return (
            <div>
                <img src={honda} alt='Honda Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'hummer') {
        return (
            <div>
                <img src={hummer} alt='Hummer Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'hyundai') {
        return (
            <div>
                <img src={hyundai} alt='Hyundai Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'infiniti') {
        return (
            <div>
                <img src={infiniti} alt='Infiniti Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'isuzu') {
        return (
            <div>
                <img src={isuzu} alt='Isuzu Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'jaguar') {
        return (
            <div>
                <img src={jaguar} alt='Jaguar Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'jeep') {
        return (
            <div>
                <img src={jeep} alt='Jeep Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'kia') {
        return (
            <div>
                <img src={kia} alt='Kia Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'lamborghini') {
        return (
            <div>
                <img src={lamborghini} alt='Lamborghini Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'landrover') {
        return (
            <div>
                <img src={landrover} alt='Land Rover Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'lexus') {
        return (
            <div>
                <img src={lexus} alt='Lexus Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'lincoln') {
        return (
            <div>
                <img src={lincoln} alt='Lincoln Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'lotus') {
        return (
            <div>
                <img src={lotus} alt='Lotus Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        )
    } else if (carMake === 'maserati') {
        return (
            <div>
                <img src={maserati} alt='Maserati Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        )
    } else if (carMake === 'mazda') {
        return (
            <div>
                <img src={mazda} alt='Mazda Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'mclaren') {
        return (
            <div>
                <img src={mclaren} alt='Mclaren Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'maybach') {
        return (
            <div>
                <img src={maybach} alt='Maybach Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'mercedesbenz') {
        return (
            <div>
                <img src={mercedesbenz} alt='Mercedes-Benz Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'mercury') {
        return (
            <div>
                <img src={mercury} alt='Mercury Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'mini') {
        return (
            <div>
                <img src={mini} alt='Mini Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'mitsubishi') {
        return (
            <div>
                <img src={mitsubishi} alt='Mitsubishi Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'nissan') {
        return (
            <div>
                <img src={nissan} alt='Nissan Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'oldsmobile') {
        return (
            <div>
                <img src={oldsmobile} alt='Oldsmobile Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'pontiac') {
        return (
            <div>
                <img src={pontiac} alt='Pontiac Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'panoz') {
        return (
            <div>
                <img src={panoz} alt='Panoz Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'plymouth') {
        return (
            <div>
                <img src={plymouth} alt='Plymouth Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'polestar') {
        return (
            <div>
                <img src={polestar} alt='Polestar Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'porsche') {
        return (
            <div>
                <img src={porsche} alt='Porsche Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'ram') {
        return (
            <div>
                <img src={ram} alt='Ram Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'rivian') {
        return (
            <div>
                <img src={rivian} alt='Rivian Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'rollsroyce') {
        return (
            <div>
                <img src={rollsroyce} alt='Rolls Royce Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'saab') {
        return (
            <div>
                <img src={saab} alt='Saab Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'saturn') {
        return (
            <div>
                <img src={saturn} alt='Saturn Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'scion') {
        return (
            <div>
                <img src={scion} alt='Scion Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'smart') {
        return (
            <div>
                <img src={smart} alt='Smart Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'subaru') {
        return (
            <div>
                <img src={subaru} alt='Subaru Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'suzuku') {
        return (
            <div>
                <img src={suzuki} alt='Suzuki Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'tesla') {
        return (
            <div>
                <img src={tesla} alt='Tesla Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'toyota') {
        return (
            <div>
                <img src={toyota} alt='Toyota Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'volkswagen') {
        return (
            <div>
                <img src={volkswagen} alt='Volkswagen Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        );
    } else if (carMake === 'volvo') {
        return (
            <div>
                <img src={volvo} alt='Volvo Logo' style={{ width: "40%", height: "40%" }}></img>
            </div>
        )
    };
};


export default MakeLogo;
