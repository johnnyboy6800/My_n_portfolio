import Link from "next/link";
import { Interface } from "readline";


interface NavBarProps {
    OnhabilidadesClick: () => void;
    OnHomeClick: () => void;
}

export default function NavBar({ OnhabilidadesClick, OnHomeClick }: NavBarProps) {
   
        
    return (
        <nav id="nav-bar">
            <ul id="nav-list">
                <li><a href="#" onClick={(e) => {e.preventDefault(); OnHomeClick()}}>Home</a></li>
                <li><a  href="#" onClick={(e) => {e.preventDefault(); OnhabilidadesClick()}}>Habilidades</a></li>
                <li>Projetos</li>
                
            </ul>
        </nav>
        )
}