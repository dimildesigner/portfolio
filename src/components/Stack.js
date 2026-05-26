export default function Stack() {
  const stack = {
    "Desenvolvimento": [
      "React.js / Next.js",
      "TypeScript",
      "JavaScript ES6+",
      "Tailwind CSS v4",
      "CSS3 / HTML5"
    ],
    "Design & Motion": [
      "Figma",      
      "Adobe Creative Cloud",      
      "Motion Graphics",
      "Direção de Arte",
      "UI/UX Design"
    ],
    "Ecossistema Dev": [
      "Git / GitHub",
      "Vite / PostCSS",
      "Cloudinary CDN",
      "SEO & Schema.org",
      "Responsive Layouts"
    ]
  };

  return (
    <section id="stack" className="py-32 px-6 max-w-4xl mx-auto border-t border-border-light dark:border-border-dark">
      <h3 className="text-[11px] font-mono tracking-widest text-primary-light dark:text-accent uppercase mb-2">
        // TOOLKIT & EXPERTISE
      </h3>
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 dark:text-white font-sans">
        Stack Técnica
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(stack).map(([categoria, itens]) => (
          <div 
            key={categoria} 
            className="bg-white dark:bg-card-dark p-6 rounded-2xl border border-border-light dark:border-border-dark shadow-sm hover:border-primary-light/20 dark:hover:border-accent/20 transition-all duration-300"
          >
            <h3 className="font-mono text-xs uppercase tracking-wider mb-6 text-primary-light dark:text-accent font-bold">
              // {categoria}
            </h3>
            
            <ul className="space-y-3.5">
              {itens.map((item) => (
                <li 
                  key={item} 
                  className="flex items-center text-gray-600 dark:text-gray-400 font-sans text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full mr-3.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}