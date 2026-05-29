import { motion } from "framer-motion";
import FlowingMenu from "./FlowingMenu";

const skillCategories = [
  {
    link: "#",
    text: "Languages",
    items: [
      { name: "C++", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Javascript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "PHP", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "SQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "HTML/CSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "Numpy", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Pandas", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" }
    ]
  },
  {
    link: "#",
    text: "Developer Tools",
    items: [
      { name: "VS Code", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "PyCharm", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" },
      { name: "Jupyter", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
      { name: "Bash", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
      { name: "Spyder", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spyder/spyder-original.svg" },
      { name: "Colab", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecolab/googlecolab-original.svg" }
    ]
  },
  {
    link: "#",
    text: "Technologies",
    items: [
      { name: "GitHub", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Node", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Postman", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" }
    ]
  }
];

const cardVariants = {
  initial: { y: 0 },
  hover: { y: -8 }
};

const arrowVariants = {
  initial: { rotate: 0, x: 0, y: 0, scale: 1 },
  hover: { 
    rotate: 45, 
    x: 12, 
    y: -12, 
    scale: 1.15,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
      duration: 0.4
    }
  }
};

const SkillsPhilosophy = () => {
  return (
    // Unified layout using justify-center on all breakpoints to keep elements seamlessly grouped
    <section className="min-h-screen bg-white text-black font-sans flex flex-col justify-center">
      <div className="w-full px-6 md:px-12 lg:px-16 pt-24 pb-12 md:pt-12 md:pb-12 bg-white z-10 md:flex-shrink-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  number: "01",
                  title: "AI/ML DEVELOPER",
                  description: "Building intelligent AI systems that analyze data, automate workflows, and solve complex real-world challenges."
                },
                {
                  number: "02",
                  title: "FULL STACK DEVELOPER",
                  description: "Developing scalable web applications with modern front-end interfaces, APIs, and optimized back-end systems."
                },
                {
                  number: "03",
                  title: "IOT & EMBEDDED SYSTEMS",
                  description: "Creating smart automated solutions using sensors, microcontrollers, and real-time monitoring technologies."
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial="initial"
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  onMouseEnter={(e) => {}}
                  variants={cardVariants}
                  whileHover="hover"
                  transition={{ duration: 0.6, delay: index * 0.15, ease: [0.34, 1.56, 0.64, 1] }}
                  className="bg-black text-white rounded-3xl p-10 flex flex-col justify-between min-h-72 relative border border-white/20 hover:border-white/40 transition-colors duration-300 group cursor-pointer"
                  style={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                >
                  <div className="text-xs font-bold tracking-widest text-white/60 border border-white/30 px-3 py-1.5 w-fit rounded">
                    {card.number}
                  </div>
                  <motion.div 
                    className="absolute top-10 right-10 opacity-60 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                    variants={arrowVariants}
                    whileHover={{
                      y: [0, -6, 0],
                      x: [0, 4, 0],
                      transition: {
                        duration: 1.2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }
                    }}
                  >
                    <svg width="40" height="40" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" className="drop-shadow-lg group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] transition-all duration-300">
                      <path d="M6 10L10 6M10 6H7M10 6V9" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl lg:text-2xl font-display font-black uppercase tracking-tight mt-8 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 mt-8 leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="w-full border-t border-black relative overflow-hidden">
        <FlowingMenu
          items={skillCategories}
          speed={3}
          marqueeBgColor="#000000"
        />
      </div>
    </section>
  );
};

export default SkillsPhilosophy;