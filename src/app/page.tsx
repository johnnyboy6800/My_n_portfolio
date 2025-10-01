'use client'
import { useRef } from "react"
import Especialidades from "./especialidades/page"
import HardSkills from "./hard_skills/page"
import TechIcons from "./hard_skills/skillsIcons"
import NavBar from "./NavBar/NavBar"
import Projetos from "./projetos/page"
import Contact from "./contact-me/page"
export default function Home(){
  const EspecialidadesRef = useRef<HTMLDivElement>(null)
  const HardSkillsRef = useRef<HTMLDivElement>(null) 
  const HomeRef  = useRef<HTMLDivElement>(null)
  const ProjetosRef = useRef<HTMLDivElement>(null)
  const ContatoRef = useRef<HTMLDivElement>(null)  
  return (
    <div>
      <NavBar OnhabilidadesClick = {() => HardSkillsRef.current?.scrollIntoView({behavior: 'smooth'})}
              OnHomeClick={() => HomeRef.current?.scrollIntoView({behavior: 'smooth'})}
              OnProjetosClick={() => ProjetosRef.current?.scrollIntoView({behavior: 'smooth'})}
              OnContatoClick={() => ContatoRef.current?.scrollIntoView({behavior: 'smooth'})}
        />
      
      <section ref={HomeRef}>
        <div className="pic_div">
        <img id="minha-foto" src="/e24e916a-c0b0-43c4-8cf8-6ae07f1dc5f7.png"></img>
        </div>
        <div id="home">
        <div id="intro">
          <div id="nome-div">
            <h1 id="nome">João Lucas</h1>
          </div>
          <div id="profissão-div">
            <h1 id="profissão">Software Enginner</h1>
          </div>
          <TechIcons />
          <p className="pt-10">Sou um estudante de engenharia de software focado no desenvolvimento back-end.</p>
        </div>
        </div>
        </section>
      <section ref={EspecialidadesRef}>
          <Especialidades/>
      </section>
      <section className="pt-15" ref={HardSkillsRef}>
          <HardSkills/>
      </section>
      <section className="pt-15" ref={ProjetosRef}>
        <Projetos/>
      </section>
      <section ref={ContatoRef}>
        <Contact/>
      </section>
      </div>
  )
}