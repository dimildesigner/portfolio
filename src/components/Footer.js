export default function Footer() {
  return (
    <footer className="py-12 text-center border-t border-border-light dark:border-border-dark font-sans select-none">
      <p className="text-[10px] text-gray-400 dark:text-gray-500 font-mono tracking-wider">
        © 2026 DIMIL.DESIGNER.DEV • TODOS OS DIREITOS RESERVADOS
      </p>
      <div className="mt-4 flex justify-center gap-6 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
        <a 
          href="mailto:dimildesigner@gmail.com" 
          className="hover:text-primary-light dark:hover:text-accent transition-colors"
        >
          E-mail
        </a>
        <a 
          href="https://github.com/dimildesigner" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-primary-light dark:hover:text-accent transition-colors"
        >
          GitHub
        </a>
        <a 
          href="https://linkedin.com/in/dimildesigner" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-primary-light dark:hover:text-accent transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}