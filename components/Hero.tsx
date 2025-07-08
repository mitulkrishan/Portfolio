"use client";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="section-padding bg-dot-grid-light dark:bg-dot-grid-dark min-h-screen flex items-center portfolio-bg-light portfolio-bg-dark"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gray-800 dark:text-gray-100">Hi, I am </span>
              <span className="text-rose-600 dark:text-rose-300">Mitul Krishan.</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-light text-indigo-500 dark:text-cyan-300 mb-6">
              Aspiring Data Analyst & Tech Enthusiast
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Aspiring Data Analyst | AI/ML Enthusiast | Skilled in Excel, SQL, Power BI, Tableau | Open to Internships/Entry-Level Roles
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="theme-transition inline-flex items-center px-6 py-3 bg-emerald-400 dark:bg-purple-500 text-white font-medium rounded-lg hover:shadow-lg transform hover:-translate-y-1"
              >
                <i className="fas fa-shield-alt mr-2"></i>
                Explore Projects
              </button>
              <button
                onClick={() => scrollToSection("resume")}
                className="theme-transition inline-flex items-center px-6 py-3 border-2 border-rose-600 dark:border-rose-300 text-rose-600 dark:text-rose-300 font-medium rounded-lg hover:bg-rose-600 dark:hover:bg-rose-300 hover:text-white dark:hover:text-gray-900"
              >
                <i className="fas fa-file-alt mr-2"></i>
                View Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
