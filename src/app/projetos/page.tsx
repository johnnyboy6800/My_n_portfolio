import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhp } from '@fortawesome/free-brands-svg-icons';


export default function Projetos() {
    return (
        <>
            <div id="projects-div">
                <h1 id="projects-title">Projetos</h1>
                <br/>
                <br/>
                <br/>
                <h2 id="projects-title">Back-end</h2>

            </div>
           <ul className="project-list">
                <li className="project-item">
                <div className="project-img">
                    <div className="project-img-inner">
                    <div className="img-front">
                        <img src="/projects/Captura de tela de 2025-09-22 08-12-13.png" />
                    </div>
                    <div className="img-back">
                        <p>Java Spring Crud posts Api</p>
                        <p>API Rest com gerênciamento de posts</p>
                        <a className='code-link' target='blank' href='https://github.com/johnnyboy6800/BlogWebsite-java-spring-API-crud-'>Ver código</a>
                        <div className='flex'>
                            <img  src="/javaicon.png" alt="Java" className="w-10 h-10" />
                            <img className='w-10 h-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="" />
                        </div>
                    </div>
                    </div>
                </div>
                </li>
            </ul>
             <ul className="project-list">
                <li className="project-item">
                <div className="project-img">
                    <div className="project-img-inner">
                    <div className="img-front">
                        <img src="/projects/Captura de tela de 2025-09-22 08-22-10.png" />
                    </div>
                    <div className="img-back">
                        <p>API Rest utilizando framework Laravel, com gerênciamento de usários e posts, incluindo autênticação</p>
                        <a className='code-link' target='blank' href='https://github.com/johnnyboy6800/laravel-blog-api'>Ver código</a>
                         <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
                        alt="Laravel"
                        className="w-10 h-10"
                        />
                    </div>
                    </div>
                </div>
                </li>
            </ul>
            <div id='projects-div'>
                   <h2 id="projects-title">Front-end</h2>
                   <img className='w-50 h-50' src="/projects/moresoon.png"></img>
                   <p>Em breve...</p>
            </div>
        </>
    )
}