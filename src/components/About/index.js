import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faGitSquare, faHtml5, faJsSquare, faPython } from '@fortawesome/free-brands-svg-icons'
import { faFileCode } from '@fortawesome/free-solid-svg-icons'


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    
    return (
        <>
        <div className='conatiner about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','M','e']}
                        idx={15}
                    />
                </h1>
                <p>
                 I am a curious and motivated full stack software developer searching for a role 
                 with an IT company that can provide an oppportunity to work on challenging 
                 and diverse projects. I am passionate about puzzles and problem solving, and love learning new skills.    
                </p>
                <p>
                 I am a graduate of <a href="https://www.learncodinganywhere.com/">The Tech Academy</a>'s 
                 Software Developer Boot Camp, trained and experienced in HTML, CSS, JavaScript, Python, 
                 Django, C#, .NET Framework, ASP.NET, MVC, SQL, Front-End Development, Back-End Development, 
                 and Databases. 
                 <br />
                 Several of my projects are available to view on my <a href="https://github.com/mfluder24">GitHub</a>.
                I can also be found and contacted on <a href="https://www.linkedin.com/in/fox-addams/">LinkedIn</a>.
                </p>
                <p>
                 Outside of the office, I can be found out in nature with a good book and my corgi, Poncho. 
                 As a puzzle-loving developer I thrive on challenges and learning, and would love to work with you  
                 on your project! Please feel free to contact me. Wado!   
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faHtml5} color="#ff5ecf" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3Alt} color="#2c37da" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faJsSquare} color="#82d128" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faPython} color="#ff5ecf" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitSquare} color="#2c37da" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faFileCode} color="#82d128" />
                    </div>

                </div>

            </div>
        </div>
        <Loader type="ball-clip-rotate-multiple" />
        </>
    )
}

export default About