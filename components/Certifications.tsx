"use client";

export default function Certifications() {
 const certifications = [
  {
    title: " Google Digital Marketing & E-commerce",
    subtitle: "Professional Certificate",
    institution: "Coursera",
    year: "2025",
    description:
      "Comprehensive program covering data analysis processes, tools, and techniques used by data analysts.",
    icon: "fab fa-google",
    color: "text-rose-600 dark:text-rose-300",
    bgColor: "bg-rose-100 dark:bg-gray-700",
    link: "https://coursera.org/share/fd6730f6570a144defa1c46f310884ee",
  },
 
  {
    title: "Create a Budget with MS Excel",
    subtitle: "Short Course Certificate",
    institution: "Coursera",
    year: "2025",
    description:
      "Learned how to build and manage budgets using Microsoft Excel, including formulas, templates, and budgeting best practices.",
    icon: "fas fa-file-excel",
    color: "text-green-600 dark:text-green-300",
    bgColor: "bg-green-100 dark:bg-gray-700",
    link: "https://coursera.org/share/3ccc14b0dba83d0639b3091f5bbaa885",
  },
  {
    title: "Introduction to Data Analysis using MS Excel",
    subtitle: "Short Course Certificate",
    institution: "Coursera",
    year: "2025",
    description:
      "Gained foundational skills in data analysis using Excel, including sorting, filtering, pivot tables, and charts.",
    icon: "fas fa-chart-bar",
    color: "text-blue-600 dark:text-blue-300",
    bgColor: "bg-blue-100 dark:bg-gray-700",
    link: "https://coursera.org/share/3ccc14b0dba83d0639b3091f5bbaa885",
  }
];


  return (
    <section
      id="certifications"
      className="section-padding bg-dot-grid-light dark:bg-dot-grid-dark portfolio-bg-light portfolio-bg-dark"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-rose-600 dark:bg-rose-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications that validate my expertise in data
            analysis and related technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="theme-transition bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-12 h-12 ${cert.bgColor} rounded-lg flex items-center justify-center mr-4`}
                >
                  <i className={`${cert.icon} text-2xl ${cert.color}`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {cert.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {cert.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {cert.institution} • {cert.year}
                </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={cert.link}
                  className="theme-transition text-emerald-400 dark:text-purple-500 hover:text-emerald-500 dark:hover:text-purple-400 text-sm font-medium"
                >
                  <i className="fas fa-external-link-alt mr-1"></i>View
                  Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
