<script setup>
import profilePic from './assets/Headshot.png'
import logo from './assets/Beigi-Logo.png'
</script>

<template>
  <div class="bg-zinc-950 text-white min-h-screen font-sans selection:bg-purple-500/30">

    <nav class="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-md border-b border-white/5 z-50 py-6 px-8 flex justify-between items-center">
      <a href="#home"><img :src="logo" alt="DB Logo" class="h-8 purple-logo hover:opacity-80" /></a>

      <ul class="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500">
        <li><a href="#about" class="hover:text-purple-400 transition-colors">About</a></li>
        <li><a href="#projects" class="hover:text-purple-400 transition-colors">Projects</a></li>
        <li><a href="#contact" class="hover:text-purple-400 transition-colors">Contact</a></li>
      </ul>
    </nav>

    <section id="home" class="min-h-screen flex items-center justify-center px-8">
      <div class="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
        <div class="flex-1 space-y-8 text-center md:text-left">
          <h1 class="text-6xl md:text-8xl font-black tracking-tighter italic leading-none">
            DARYA<br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">BEIGI.</span>
          </h1>
          <p class="text-lg text-zinc-400 leading-relaxed max-w-md mx-auto md:mx-0">
            Software Engineer. Specializing in high-performance web systems.
          </p>
          <div class="pt-4 flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#projects" class="inline-flex items-center justify-center px-10 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full transition-all shadow-[0_0_30px_rgba(147,51,234,0.3)] uppercase tracking-widest text-xs">
              View Projects
            </a>
          </div>
        </div>

        <div class="flex-1 flex justify-center">
          <div class="relative group animate-entry-spin">
            <div class="absolute inset-0 bg-purple-500 rounded-full blur-[80px] opacity-20"></div>
            <img
                :src="profilePic"
                alt="Darya Beigi"
                class="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border border-white/10 z-10 shadow-2xl muted-portrait"            />
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="py-36 px-8 border-t border-white/5 bg-zinc-900/10">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-purple-500 font-mono text-sm mb-8 text-center tracking-widest">// About Me</h2>
        <p class="text-2xl md:text-4xl text-zinc-300 leading-tight font-light mb-24">
          I’m a software engineer with <span class="text-white font-medium">5+ years of experience</span> developing
          production web applications. I focus on building maintainable systems and improving team efficiency through
          better tooling.
        </p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-white/5">
          <div v-for="(skills, category) in {
            Languages: ['JavaScript', 'Ruby', 'Python', 'SQL'],
            Frameworks: ['Vue.js', 'Rails', 'FastAPI', 'React'],
            Testing: ['Vitest', 'Rspec', 'Playwright'],
            Tools: ['Netlify', 'Heroku', 'Github Actions', 'Alembic']
          }" :key="category">
            <h3 class="text-zinc-500 text-[10px] uppercase tracking-widest mb-6 font-bold">{{ category }}</h3>
            <ul class="text-sm space-y-3 text-zinc-300 font-medium">
              <li v-for="skill in skills" :key="skill" class="flex items-center gap-2">
                <span class="w-1 h-1 bg-purple-600 rounded-full"></span> {{ skill }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="py-24 px-8 border-t border-white/5">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-purple-500 font-mono text-sm mb-16 text-center tracking-widest">// Projects</h2>

        <div class="grid md:grid-cols-2 gap-10">

          <div class="group relative p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-500 flex flex-col">
            <div class="flex-grow">
              <div class="flex justify-between items-start mb-8">
                <div class="p-4 bg-purple-600/20 rounded-2xl text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span class="text-[10px] text-zinc-500 uppercase tracking-widest font-black">Present</span>
              </div>
              <h3 class="text-3xl font-bold mb-3">onDiem</h3>
              <p class="text-zinc-400 text-base leading-relaxed mb-8">
                Scaling a staffing platform for dental professionals. Focused on building high-performance APIs and optimizing the Vue.js frontend for seamless scheduling.
              </p>
              <div class="flex gap-3 mb-10">
                <span class="text-[10px] px-3 py-1 bg-white/5 rounded-full text-zinc-400 font-mono uppercase">Vue.js</span>
                <span class="text-[10px] px-3 py-1 bg-white/5 rounded-full text-zinc-400 font-mono uppercase">Rails</span>
                <span class="text-[10px] px-3 py-1 bg-white/5 rounded-full text-zinc-400 font-mono uppercase">Postgres
                </span>
                <span class="text-[10px] px-3 py-1 bg-white/5 rounded-full text-zinc-400 font-mono uppercase">Heroku
                </span>
              </div>
            </div>

            <div class="pt-6 border-t border-white/5 flex justify-between items-center">
              <a
                  href="https://ondiem.com"
                  target="_blank"
                  class="text-[10px] uppercase tracking-[0.2em] text-purple-400 hover:text-white transition-colors font-bold flex items-center gap-2"
              >
                Visit onDiem.com <span class="text-lg">↗</span>
              </a>
            </div>
          </div>

          <div class="group relative p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-500 flex flex-col">
            <div class="flex-grow">
              <div class="flex justify-between items-start mb-8">
                <div class="p-4 bg-purple-600/20 rounded-2xl text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span class="text-[10px] text-zinc-500 uppercase tracking-widest font-black">Side Project</span>
              </div>
              <h3 class="text-3xl font-bold mb-3">Personal Finance API</h3>
              <p class="text-zinc-400 text-base leading-relaxed mb-8">
                Built a robust financial tracking engine using FastAPI and PostgreSQL. Implemented automated migrations with Alembic and JWT-based authentication.
              </p>
              <div class="flex gap-3 mb-10">
                <span class="text-[10px] px-3 py-1 bg-white/5 rounded-full text-zinc-400 font-mono uppercase">React
                </span>
                <span class="text-[10px] px-3 py-1 bg-white/5 rounded-full text-zinc-400 font-mono uppercase">FastAPI</span>
                <span class="text-[10px] px-3 py-1 bg-white/5 rounded-full text-zinc-400 font-mono uppercase">Alembic</span>
              </div>
            </div>

            <div class="pt-6 border-t border-white/5 flex gap-8">
              <a href="https://github.com/beigid/portfolio" target="_blank"
                 class="text-[10px] uppercase tracking-[0.2em] text-purple-400 hover:text-white transition-colors font-bold flex items-center gap-2"
              >
                GitHub <span class="text-lg">↗</span>
              </a>
              <a href="https://finance-app.dbeigi.com"
                 target="_blank"
                 class="text-[10px] uppercase tracking-[0.2em] text-purple-400 hover:text-white transition-colors font-bold flex items-center gap-2"
              >
                Visit The Finance App <span class="text-lg">↗</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section id="contact" class="py-40 px-8 border-t border-white/5 bg-zinc-900/10">
      <div class="max-w-xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-6 tracking-tight">Let's connect.</h2>
        <p class="text-zinc-400 mb-12 text-lg leading-relaxed font-light">Currently in Seattle, WA and open to
          discussing new engineering opportunities or technical collaborations.</p>

        <div class="p-10 border border-white/5 bg-zinc-950 rounded-3xl shadow-2xl">
          <a href="mailto:beigidarya@gmail.com" class="text-purple-400 font-mono text-lg hover:text-white transition-colors underline decoration-purple-900 underline-offset-8">
            beigidarya@gmail.com
          </a>
        </div>
      </div>
    </section>

    <footer class="py-16 text-center text-zinc-600 text-[10px] tracking-[0.4em] uppercase border-t border-white/5">
      &copy; 2026 Darya Beigi
    </footer>
  </div>
</template>