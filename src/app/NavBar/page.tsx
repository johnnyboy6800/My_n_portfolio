import Link from "next/link";
import { Interface } from "readline";


interface NavBarProps {
    OnhabilidadesClick: () => void;
}

export default function NavBar({ OnhabilidadesClick }: NavBarProps) {
   
        
    return (
        <nav id="nav-bar">
            <ul id="nav-list">
                <li><a href="#" onClick={(e) => {e.preventDefault; OnhabilidadesClick}}>Home</a></li>
                <Link href={"/hard_skills"}>Habilidades</Link>
                <li>Projetos</li>
                
            </ul>
        </nav>
        )
}