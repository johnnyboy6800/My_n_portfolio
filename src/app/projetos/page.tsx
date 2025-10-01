import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhp } from '@fortawesome/free-brands-svg-icons';

export default function Projetos() {
  return (
    <section className="py-16 px-6">
      {/* Título principal */}
      <h1 className="text-4xl font-bold text-center mb-10">Projetos</h1>

      {/* Seção Back-end */}
      <h2 className="text-2xl font-semibold mb-6 text-center">Back-end</h2>

      <ul className="flex flex-wrap justify-center gap-8">
        {/* Card 1 */}
        <li className="bg-gray-800 rounded-2xl shadow-lg w-80 p-4 flex flex-col items-center text-center hover:scale-105 transition-transform">
          <img
            src="/projects/Captura de tela de 2025-09-22 08-12-13.png"
            alt="Projeto Java Spring"
            className="rounded-xl mb-4"
          />
          <h3 className="text-xl font-bold text-white">Java Spring Crud Posts API</h3>
          <p className="text-gray-300 mt-2">
            API Rest com gerenciamento de posts.
          </p>
          <a
            href="https://github.com/johnnyboy6800/BlogWebsite-java-spring-API-crud-"
            target="_blank"
            className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            Ver código
          </a>
          <div className="flex justify-center gap-3 mt-4">
            <img src="/javaicon.png" alt="Java" className="w-10 h-10" />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
              alt="Spring"
              className="w-10 h-10"
            />
          </div>
        </li>

        {/* Card 2 */}
        <li className="bg-gray-800 rounded-2xl shadow-lg w-80 p-4 flex flex-col items-center text-center hover:scale-105 transition-transform">
          <img
            src="/projects/Captura de tela de 2025-09-22 08-22-10.png"
            alt="Projeto Laravel"
            className="rounded-xl mb-4"
          />
          <h3 className="text-xl font-bold text-white">Laravel Blog API</h3>
          <p className="text-gray-300 mt-2">
            API Rest com gerenciamento de usuários e posts, incluindo autenticação.
          </p>
          <a
            href="https://github.com/johnnyboy6800/laravel-blog-api"
            target="_blank"
            className="mt-4 inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            Ver código
          </a>
          <div className="flex justify-center gap-3 mt-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
              alt="Laravel"
              className="w-10 h-10"
            />
          </div>
        </li>
      </ul>

      {/* Seção Front-end */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-6">Front-end</h2>
        <img
          className="mx-auto w-60 h-60 object-contain opacity-70"
          src="/projects/moresoon.png"
          alt="Em breve"
        />
        <p className="text-gray-400 mt-2">Em breve...</p>
      </div>
    </section>
  );
}
