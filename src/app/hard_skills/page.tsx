export default function HardSkills() {
  return (
    <div className="pt-20 px-6">
      <h1 className="font-bold text-5xl text-center">Hard Skills</h1>

      <div className="grid md:grid-cols-2 gap-12 mt-12 max-w-4xl mx-auto">
        {/* Linguagens */}
        <div>
          <h2 className="text-2xl font-bold pb-6">Linguagens de Programação</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 hover:scale-105 transition-transform">
              <img src="${basePath}/javaicon.png" alt="Java" className="w-10 h-10" />
              <span className="text-lg">Java</span>
            </li>
            <li className="flex items-center gap-3 hover:scale-105 transition-transform">
              <img src="${basePath}/pythonicon.webp" alt="Python" className="w-10 h-10" />
              <span className="text-lg">Python</span>
            </li>
            <li className="flex items-center gap-3 hover:scale-105 transition-transform">
              <img src="${basePath}/JavaScript-logo.png" alt="JavaScript" className="w-10 h-10" />
              <span className="text-lg">JavaScript</span>
            </li>
          </ul>
        </div>

        {/* Frameworks */}
        <div>
          <h2 className="text-2xl font-bold pb-6">Frameworks e Ferramentas</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 hover:scale-105 transition-transform">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                alt="Spring Boot"
                className="w-10 h-10"
              />
              <span className="text-lg">Spring Boot</span>
            </li>
            <li className="flex items-center gap-3 hover:scale-105 transition-transform">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
                alt="FastAPI"
                className="w-10 h-10"
              />
              <span className="text-lg">FastAPI</span>
            </li>
            <li className="flex items-center gap-3 hover:scale-105 transition-transform">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
                alt="Laravel"
                className="w-10 h-10"
              />
              <span className="text-lg">Laravel</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
