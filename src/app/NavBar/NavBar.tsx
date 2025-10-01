'use client'



interface NavBarProps {
    OnhabilidadesClick: () => void;
    OnSobreClick: () => void;
    OnHomeClick: () => void;
    OnProjetosClick: () => void;
    OnContatoClick: () => void;
}


export default function NavBar({ OnhabilidadesClick, OnHomeClick, OnProjetosClick, OnContatoClick, OnSobreClick }: NavBarProps) {
   
        
    return (
        <nav id="nav-bar">
            <ul id="nav-list">
                <li><a href="#" onClick={(e) => {e.preventDefault(); OnHomeClick()}}>Home</a></li>
                <li><a  href="#" onClick={(e) => {e.preventDefault(); OnSobreClick()}}>Sobre mim</a></li>
                <li><a  href="#" onClick={(e) => {e.preventDefault(); OnhabilidadesClick()}}>Habilidades</a></li>
                <li><a href="#" onClick={(e) => {e.preventDefault(); OnProjetosClick()}}>Projetos </a></li>
                <li><a href="#" onClick={(e) => {e.preventDefault(); OnContatoClick() }}>Contato</a></li>
                
            </ul>
        </nav>
        )
}