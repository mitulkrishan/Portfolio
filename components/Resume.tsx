"use client";
export default function Resume() {
  const handleDownload = () => {
    // In a real implementation, this would download the actual PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Mitul_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="section-padding bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Resume</h2>
        <div className="w-20 h-1 bg-rose-600 dark:bg-rose-300 mx-auto mb-8"></div>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Download my comprehensive resume to learn more about my experience, education, and technical skills.
        </p>
        
        <div className="theme-transition bg-rose-50 dark:bg-gray-900 rounded-xl p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center">
              <i className="fas fa-file-pdf text-4xl text-rose-600 dark:text-rose-300 mr-4"></i>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Mitul_Resume.pdf</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Generated with LaTeX </p>
              </div>
            </div>
            <button 
              onClick={handleDownload}
              className="theme-transition inline-flex items-center px-6 py-3 bg-emerald-400 dark:bg-purple-500 text-white font-medium rounded-lg hover:shadow-lg transform hover:-translate-y-1"
            >
              <i className="fas fa-download mr-2"></i>
              Download Resume
            </button>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Looking for a specific format? Feel free to{' '}
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                const offsetTop = element.offsetTop - 80;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
              }
            }}
            className="text-rose-600 dark:text-rose-300 hover:underline"
          >
            contact me
          </button>
          {' '}for alternative versions.
        </p>
      </div>
    </section>
  );
}
