"use client";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: "fas fa-code",
      color: "text-rose-600 dark:text-rose-300",
      skills: [
        { name: "Python", level: 3 },
        { name: "C", level: 4 },
        { name: "C++", level: 4 },
        { name: "JavaScript", level: 4 },
      ],
    },
    {
      title: "Web Development",
      icon: "fas fa-globe",
      color: "text-indigo-500 dark:text-cyan-300",
      tools: [
        "HTML",
        "CSS",
        "JavaScript (DOM)",
        "Tailwind CSS",
        "React (Basics)",
        "OpenWeatherMap API",
      ],
    },
    {
      title: "Analytics & Visualization",
      icon: "fas fa-chart-bar",
      color: "text-emerald-400 dark:text-purple-500",
      tools: [
        "MS Excel",
        "Pandas (Basics)",
        "Matplotlib",
        "Seaborn",
      ],
    },
    {
      title: "Databases",
      icon: "fas fa-database",
      color: "text-rose-600 dark:text-rose-300",
      tools: ["MySQL", "SQLite"],
    },
    {
      title: "Tools & Platforms",
      icon: "fas fa-tools",
      color: "text-indigo-500 dark:text-cyan-300",
      tools: ["VS Code", "GitHub", "Jupyter Notebook", "Canva"],
    },
    {
      title: "Soft Skills",
      icon: "fas fa-users",
      color: "text-emerald-400 dark:text-purple-500",
      tools: [
        "Communication",
        "Teamwork",
        "Problem Solving",
        "Adaptability",
        "Learning by Doing",
      ],
    },
   
  ];

  const SkillLevel = ({ level }: { level: number }) => (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((dot) => (
        <div
          key={dot}
          className={`w-3 h-3 rounded-full ${
            dot <= level
              ? "bg-emerald-400 dark:bg-purple-500"
              : "bg-gray-300 dark:bg-gray-600"
          }`}
        />
      ))}
    </div>
  );

  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-rose-600 dark:bg-rose-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical and digital skills organized by category.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="theme-transition bg-rose-50 dark:bg-gray-900 rounded-xl p-6 hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <i
                  className={`${category.icon} text-2xl ${category.color} mr-3`}
                ></i>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {category.title}
                </h3>
              </div>

              {category.skills ? (
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex justify-between items-center"
                    >
                      <span className="text-gray-600 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <SkillLevel level={skill.level} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {category.tools?.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
