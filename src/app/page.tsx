'use client'
import { useRef } from "react"
import Especialidades from "./especialidades/page"
import HardSkills from "./hard_skills/page"
import TechIcons from "./hard_skills/skillsIcons"
import NavBar from "./NavBar/page"
import Projetos from "./projetos/page"
export default function Home(){
  const EspecialidadesRef = useRef<HTMLDivElement>(null)
  const HardSkillsRef = useRef<HTMLDivElement>(null) 
  const HomeRef  = useRef<HTMLDivElement>(null)
    return (
    <div>
      <NavBar OnhabilidadesClick = {() => HardSkillsRef.current?.scrollIntoView({behavior: 'smooth'})}
              OnHomeClick={() => HomeRef.current?.scrollIntoView({behavior: 'smooth'})}
        />
      
      <section ref={HomeRef}>
       
        <div id="home">
        <img id="minha-foto" src="/ChatGPT Image 19 de ago. de 2025, 18_37_38.png"></img>
        <div id="intro">
          <div id="nome-div">
            <h1 id="nome">João Lucas</h1>
            
          </div>
          <div id="profissão-div">
            <h1 id="profissão">Software Enginner</h1>
          </div>
          <TechIcons/>
          <p className="pt-10">Sou um estudante de engenharia de software focado no desenvolvimento back-end.</p>
        </div>
        </div>
        </section>
      <section ref={EspecialidadesRef}>
          <Especialidades/>
      </section>
      <section ref={HardSkillsRef}>
          <HardSkills/>
      </section>
      <section>
        <Projetos/>
      </section>
      </div>
  )
}