import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhp } from '@fortawesome/free-brands-svg-icons';

export default function Projetos() {
    return (
        <>
            <div id="projects-div">
                <h1 id="projects-title">Projetos</h1>
            </div>
           <ul className="project-list">
                <li className="project-item">
                <div className="project-img">
                    <div className="project-img-inner">
                    <div className="img-front">
                        <img src="/projects/Captura de tela de 2025-09-22 08-12-13.png" />
                    </div>
                    <div className="img-back">
                        <p>Java Spring Crud Api</p>
                        
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
                        <p>Laravel Crud, user e blog API</p>
                        <a href='https://github.com/johnnyboy6800/laravel-blog-api'>Código</a>
                    </div>
                    </div>
                </div>
                </li>
            </ul>
        </>
    )
}