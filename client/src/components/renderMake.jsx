import acura from '../assets/logos/acura.svg';
import alfaromeo from '../assets/logos/alfaromeo.svg';
import astonmartin from '../assets/logos/astonmartin.svg';
import audi from '../assets/logos/audi.svg';
import bentley from '../assets/logos/bentley.svg';
import bmw from '../assets/logos/bmw.svg';
import bugatti from '../assets/logos/bugatti.svg';
import buick from '../assets/logos/buick.svg';
import cadillac from '../assets/logos/cadillac.svg';
import chevrolet from '../assets/logos/chevrolet.svg';
import chrysler from '../assets/logos/chrysler.svg';
import dodge from '../assets/logos/dodge.svg';
import ferrari from '../assets/logos/ferrari.svg';
import fiat from '../assets/logos/fiat.svg';
import ford from '../assets/logos/ford.svg';
import gmc from '../assets/logos/gmc.svg';
import honda from '../assets/logos/honda.svg';
import hummer from '../assets/logos/hummer.svg';
import hyundai from '../assets/logos/hyundai.svg';
import infiniti from '../assets/logos/infiniti.svg';
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
import mercedesbenz from '../assets/logos/mercedes.svg';
import mercury from '../assets/logos/mercury.svg';
import mitsubishi from '../assets/logos/mitsubishi.svg';
import nissan from '../assets/logos/nissan.svg';
import pontiac from '../assets/logos/pontiac.svg';
import porsche from '../assets/logos/porsche.svg';
import rollsroyce from '../assets/logos/rollsroyce.svg';
import subaru from '../assets/logos/subaru.svg';
import tesla from '../assets/logos/tesla.svg';
import toyota from '../assets/logos/toyota.svg';
import volkswagen from '../assets/logos/volkswagen.svg';
import volvo from '../assets/logos/volvo.svg';

// import React, { useState } from 'react';



// const carMake = useState(localStorage.getItem('make') || '');



const MakeLogo = ({ carMake }) => {
    if (carMake === 'acura') {
        return (
            <div>
                <img src={acura} alt='Acura Logo'></img>
            </div>
        );
    } else if (carMake === 'alfaromeo') {
        return (
            <div>
                <img src={alfaromeo} alt='Alfa Romeo Logo'></img>
            </div>
        );
    } else if (carMake === 'astonmartin') {
        return (
            <div>
                <img src={astonmartin} alt='Aston Martin Logo'></img>
            </div>
        );
    } else if (carMake === 'audi') {
        return (
            <div>
                <img src={audi} alt='Audi Logo'></img>
            </div>
        );
    } else if (carMake === 'bentley') {
        return (
            <div>
                <img src={bentley} alt='Bentley Logo'></img>
            </div>
        );
    } else if (carMake === 'bmw') {
        return (
            <div>
                <img src={bmw} alt='BMW Logo'></img>
            </div>
        );
    } else if (carMake === 'bugatti') {
        return (
            <div>
                <img src={bugatti} alt='Bugatti Logo'></img>
            </div>
        );
    } else if (carMake === 'buick') {
        return (
            <div>
                <img src={buick} alt='Buick Logo'></img>
            </div>
        );
    } else if (carMake === 'cadillac') {
        return (
            <div>
                <img src={cadillac} alt='Cadillac Logo'></img>
            </div>
        );
    } else if (carMake === 'chevrolet') {
        return (
            <div>
                <img src={chevrolet} alt='Chevrolet Logo'></img>
            </div>
        );
    } else if (carMake === 'chrysler') {
        return (
            <div>
                <img src={chrysler} alt='Chrysler Logo'></img>
            </div>
        );
    } else if (carMake === 'dodge') {
        return (
            <div>
                <img src={dodge} alt='Dodge Logo'></img>
            </div>
        );
    } else if (carMake === 'ferrari') {
        return (
            <div>
                <img src={ferrari} alt='Ferrari Logo'></img>
            </div>
        );
    } else if (carMake === 'fiat') {
        return (
            <div>
                <img src={fiat} alt='Fiat Logo'></img>
            </div>
        );
    } else if (carMake === 'ford') {
        return (
            <div>
                <img src={ford} alt='Ford Logo'></img>
            </div>
        );
    } else if (carMake === 'gmc') {
        return (
            <div>
                <img src={gmc} alt='GMC Logo'></img>
            </div>
        );
    } else if (carMake === 'honda') {
        return (
            <div>
                <img src={honda} alt='Honda Logo'></img>
            </div>
        );
    } else if (carMake === 'hummer') {
        return (
            <div>
                <img src={hummer} alt='Hummer Logo'></img>
            </div>
        );
    } else if (carMake === 'hyundai') {
        return (
            <div>
                <img src={hyundai} alt='Hyundai Logo'></img>
            </div>
        );
    } else if (carMake === 'infiniti') {
        return (
            <div>
                <img src={infiniti} alt='Infiniti Logo'></img>
            </div>
        );
    } else if (carMake === 'jaguar') {
        return (
            <div>
                <img src={jaguar} alt='Jaguar Logo'></img>
            </div>
        );
    } else if (carMake === 'jeep') {
        return (
            <div>
                <img src={jeep} alt='Jeep Logo'></img>
            </div>
        );
    } else if (carMake === 'kia') {
        return (
            <div>
                <img src={kia} alt='Kia Logo'></img>
            </div>
        );
    } else if (carMake === 'lamborghini') {
        return (
            <div>
                <img src={lamborghini} alt='Lamborghini Logo'></img>
            </div>
        );
    } else if (carMake === 'landrover') {
        return (
            <div>
                <img src={landrover} alt='Land Rover Logo'></img>
            </div>
        );
    } else if (carMake === 'lexus') {
        return (
            <div>
                <img src={lexus} alt='Lexus Logo'></img>
            </div>
        );
    } else if (carMake === 'lincoln') {
        return (
            <div>
                <img src={lincoln} alt='Lincoln Logo'></img>
            </div>
        );
    } else if (carMake === 'lotus') {
        return (
            <div>
                <img src={lotus} alt='Lotus Logo'></img>
            </div>
        )
    } else if (carMake === 'maserati') {
        return (
            <div>
                <img src={maserati} alt='Maserati Logo'></img>
            </div>
        )
    } else if (carMake === 'mazda') {
        return (
            <div>
                <img src={mazda} alt='Mazda Logo'></img>
            </div>
        );
    } else if (carMake === 'mercedesbenz') {
        return (
            <div>
                <img src={mercedesbenz} alt='Mercedes-Benz Logo'></img>
            </div>
        );
    } else if (carMake === 'mercury') {
        return (
            <div>
                <img src={mercury} alt='Mercury Logo'></img>
            </div>
        );
    } else if (carMake === 'mitsubishi') {
        return (
            <div>
                <img src={mitsubishi} alt='Mitsubishi Logo'></img>
            </div>
        );
    } else if (carMake === 'nissan') {
        return (
            <div>
                <img src={nissan} alt='Nissan Logo'></img>
            </div>
        );
    } else if (carMake === 'pontiac') {
        return (
            <div>
                <img src={pontiac} alt='Pontiac Logo'></img>
            </div>
        );
    } else if (carMake === 'porsche') {
        return (
            <div>
                <img src={porsche} alt='Porsche Logo'></img>
            </div>
        );
    } else if (carMake === 'rollsroyce') {
        return (
            <div>
                <img src={rollsroyce} alt='Rolls Royce Logo'></img>
            </div>
        );
    } else if (carMake === 'subaru') {
        return (
            <div>
                <img src={subaru} alt='Subaru Logo'></img>
            </div>
        );
    } else if (carMake === 'tesla') {
        return (
            <div>
                <img src={tesla} alt='Tesla Logo'></img>
            </div>
        );
    } else if (carMake === 'toyota') {
        return (
            <div>
                <img src={toyota} alt='Toyota Logo'></img>
            </div>
        );
    } else if (carMake === 'volkswagen') {
        return (
            <div>
                <img src={volkswagen} alt='Volkswagen Logo'></img>
            </div>
        );
    } else if (carMake === 'volvo') {
        return (
            <div>
                <img src={volvo} alt='Volvo Logo'></img>
            </div>
        )
    };
};


export default MakeLogo;