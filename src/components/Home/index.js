import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';
import { useEffect, useState } from 'react';
import Self from '../../assets/images/Self.jpg'
import Loader from "react-loaders";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['F','o','x',',']
    const jobArray = ['S','o','f','t','w','a','r','e',' ','D','e','v','e','l','o','p','e','r','.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4500)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>O</span>
                <span className={`${letterClass} _12`}>s</span>
                <span className={`${letterClass} _13`}>i</span>
                <span className={`${letterClass} _14`}>y</span>
                <span className={`${letterClass} _15`}>o</span>
                <span className={`${letterClass} _16`}>,</span>
                 <br /> 
                <span className={`${letterClass} _17`}>I</span>
                <span className={`${letterClass} _18`}>'</span>
                <span className={`${letterClass} _19`}>m</span> 
                &nbsp;
                <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray} 
                idx={20} />
                <br />
                <AnimatedLetters letterClass={letterClass} 
                strArray={jobArray} 
                idx={24} />
                </h1>
                <h2>Full Stack | Web Development | Applications </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <div className="photo-container">
                <img className="solid-photo" src={Self} alt="Fox" />
            </div>
        </div>
        <Loader type="ball-clip-rotate-multiple" />
        </>
    )
}

export default Home