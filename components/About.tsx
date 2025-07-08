"use client";

export default function About() {
  const tools = [
    "HTML",
    "CSS",
    "JavaScript",
    "MS Excel",
    "Python",
    "SQL",
    "Power BI",
    "Tableau",
    "React",
   
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-rose-600 dark:bg-rose-300 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
              My Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
             I’m a recent Bachelor of Computer Applications (BCA) graduate from SCVB Government College, Palampur, with a strong foundation in web development and growing skills in data analytics.
            During my studies, I worked on practical projects like:
            <ul className="list-disc pl-5">
              <li>Food Recipe Website – responsive UI with recipe filters and search</li>
              <li>Audify – a Spotify-style music player for Karan Aujla’s top tracks</li>
              <li>Weather App – real-time data from OpenWeatherMap API</li>
            </ul>
              </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            These projects helped me strengthen my frontend development skills using HTML, CSS, JavaScript, and API integration. I'm also familiar with Python, Pandas, and MS Excel, and have completed certifications in Digital Marketing and Data Analysis via Coursera.
            I'm a hands-on learner who believes in building real things to learn real skills. I’m now actively looking for full-time opportunities or internships in web development, data analytics, or tech support roles where I can grow, contribute, and continue learning.
            Let's connect if you’re hiring, collaborating, or passionate about tech too!
            </p>

            <h4 className="text-lg font-semibold text-indigo-500 dark:text-cyan-300 mb-4">
              Tools I Use
            </h4>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-rose-100 dark:bg-gray-700 text-rose-600 dark:text-rose-300 rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
