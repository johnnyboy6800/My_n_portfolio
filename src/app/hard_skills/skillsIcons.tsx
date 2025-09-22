export default function TechIcons() {
  const techs = [
    {
      name: "Java",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Python",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Laravel",
      // Laravel direto do repositório oficial devicon
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
    {
      name: "Spring Boot",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    },
    {
      name: "FastAPI",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-8">
      {techs.map((tech) => (
        <div key={tech.name} className="flex flex-col items-center">
          <img
            src={tech.src}
            alt={tech.name}
            className="w-12 h-12 hover:scale-110 transition-transform duration-200"
          />
          <span className="text-sm mt-2">{tech.name}</span>
        </div>
      ))}
    </div>
  );
}
