import React from 'react';

function App() {
  // Yetenekleri kategorilere ayırarak daha profesyonel bir veri yapısı kurduk
  const techStack = {
    "Backend & Architecture": ['Python', 'FastAPI', 'RESTful APIs', 'SQLAlchemy', 'SQLite', 'PostgreSQL', 'JWT Auth', 'RBAC Security', 'Pydantic', 'AsyncIO'],
    "Frontend & UI": ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vite', 'HTML5 / CSS3', 'Responsive Design', 'State Management'],
    "Tools & DevOps": ['Git / GitHub', 'VS Code', 'Postman', 'Linux / Bash', 'Uvicorn', 'Vercel / Render Deployment']
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-cyan-900 selection:text-cyan-50">
      
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-10 relative">
        <div className="max-w-4xl w-full text-center space-y-8">
          {/* Profil Fotoğrafı */}
          <div className="mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-zinc-800 shadow-[0_0_30px_rgba(6,182,212,0.15)] mb-6">
            <img src="/profile.jpg" alt="Efe Şakrak" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            Efe Şakrak
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-cyan-400 tracking-wide">
            Computer Engineer & Full-Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            I don't just write code; I engineer scalable digital solutions. 
            Bridging the gap between robust backend architectures and intuitive frontend experiences 
            to solve complex business problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a href="#projects" className="px-8 py-3 rounded-full bg-white text-zinc-950 font-semibold hover:bg-zinc-200 transition-colors">
              View Projects
            </a>
            <a href="/efe-sakrak-cv.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full border border-zinc-700 hover:border-cyan-400 hover:text-cyan-400 transition-colors flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT & PHILOSOPHY */}
      <section id="about" className="py-24 px-6 bg-zinc-900/20 border-y border-zinc-800/50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
            <span className="w-8 h-0.5 bg-cyan-500"></span>
            Engineering Philosophy
          </h3>
          <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
            <p>
              As a <strong>Computer Engineering graduate</strong>, my foundation is built on analytical thinking and system design. 
              I approach software development not merely as a coding task, but as an engineering discipline. 
              My primary focus is on creating architectures that are secure, scalable, and easy to maintain.
            </p>
            <p>
              I thrive in environments that challenge me to tackle architectural bottlenecks and optimize data flows. 
              Whether it's implementing complex Role-Based Access Control (RBAC) structures or processing real-time telemetry data, 
              my ultimate goal is to deliver production-ready software that drives tangible business value.
            </p>
          </div>
        </div>
      </section>

      {/* TECH STACK & EDUCATION */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sol Kolon: Tech Stack (Genişletildi ve Kategorize Edildi) */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-bold text-white mb-8">Technical Arsenal</h3>
            <div className="space-y-8">
              {Object.entries(techStack).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="text-sm font-semibold text-cyan-500 uppercase tracking-wider mb-4">{category}</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {skills.map((skill) => (
                      <span key={skill} className="px-4 py-2 text-sm font-medium text-zinc-300 bg-zinc-900/80 rounded-lg border border-zinc-800 hover:border-cyan-500 hover:text-cyan-400 transition-colors cursor-default shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ Kolon: Education Timeline */}
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-bold text-white mb-8">Education Background</h3>
            <div className="border-l-2 border-zinc-800 pl-6 space-y-10 mt-4">
              
              <div className="relative">
                <span className="absolute -left-8.25 top-1.5 h-4 w-4 rounded-full bg-cyan-500 ring-4 ring-zinc-950"></span>
                <h4 className="text-xl font-bold text-white">Computer Engineering</h4>
                <p className="text-cyan-400 font-medium">Kharkiv Polytechnic Institute</p>
                <p className="text-sm text-zinc-500 mt-1">Bachelor's Degree</p>
                <p className="text-zinc-400 mt-3 text-sm leading-relaxed">
                  Developed strong fundamentals in algorithm design, software architecture, and system performance optimization. 
                  Thesis focused on real-time asynchronous data telemetry systems.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-8.25 top-1.5 h-4 w-4 rounded-full bg-cyan-500 ring-4 ring-zinc-950"></span>
                <h4 className="text-xl font-bold text-white">Web Design & Programming</h4>
                <p className="text-cyan-400 font-medium">Ankara University</p>
                <p className="text-zinc-300 font-medium">Distance Education</p>
                <p className="text-sm text-zinc-500 mt-1">Undergraduate Program</p>
                <p className="text-zinc-400 mt-3 text-sm leading-relaxed">
                  Pursuing dual-disciplinary knowledge to bridge the gap between heavy backend logic and modern, responsive frontend user interfaces.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 px-6 bg-zinc-900/40 border-y border-zinc-800/50">
        <div className="max-w-4xl mx-auto space-y-12">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Featured Work</h3>
          
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 hover:shadow-[0_0_30px_rgba(6,182,212,0.05)] transition-all">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
              <div>
                <h4 className="text-2xl font-semibold text-white mb-2">Enterprise Role-Based Task Manager API</h4>
                <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                  A modular, production-ready RESTful API. Built with a focus on secure authentication 
                  using JSON Web Tokens (JWT) and a three-tier Role-Based Access Control (RBAC) system.
                </p>
              </div>
              <a href="https://github.com/EfeSakrak/task-manager-api" target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-2 text-sm font-medium rounded-full bg-zinc-800 text-white hover:bg-cyan-500 hover:text-zinc-950 transition-colors">
                GitHub Repo
              </a>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {['FastAPI', 'Python', 'JWT', 'RBAC', 'SQLite'].map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-400/20">{tech}</span>
              ))}
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 hover:shadow-[0_0_30px_rgba(6,182,212,0.05)] transition-all">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
              <div>
                <h4 className="text-2xl font-semibold text-white mb-2">Solar Power Plant Telemetry Monitor</h4>
                <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                  An asynchronous monitoring system developed for tracking solar power plant telemetry data in real-time. 
                  Engineered backend logic to handle concurrent data streams. (Bachelor's Thesis)
                </p>
              </div>
              <a href="https://github.com/EfeSakrak/solartrack-thesis" target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-2 text-sm font-medium rounded-full bg-zinc-800 text-white hover:bg-cyan-500 hover:text-zinc-950 transition-colors">
                GitHub Repo
              </a>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {['React.js', 'FastAPI', 'Python', 'Async Architecture'].map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-400/20">{tech}</span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT & FOOTER */}
      <section id="contact" className="pt-32 pb-12 px-6 flex flex-col items-center text-center">
        <h3 className="text-3xl font-bold text-white mb-6">Let's Build Something</h3>
        <p className="text-zinc-400 max-w-xl mb-8 leading-relaxed">
          I am currently open for new software engineering opportunities. 
          Whether you have a question or want to discuss a potential collaboration, my inbox is always open.
        </p>
        <a href="mailto:sakrakefeinfo@gmail.com" className="px-8 py-3 rounded-full bg-cyan-500 text-zinc-950 font-bold hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] mb-24">
          Get In Touch
        </a>

        {/* Footer */}
        <div className="w-full max-w-5xl border-t border-zinc-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm">© 2026 Efe Şakrak. Built with React & Tailwind.</p>
          <div className="flex gap-6">
            <a href="https://github.com/EfeSakrak" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">GitHub</a>
            <a href="https://www.linkedin.com/in/sakrakefe/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">LinkedIn</a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;