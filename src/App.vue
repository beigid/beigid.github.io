<script setup>
import { ref } from 'vue'
import profilePic from './assets/Headshot.png'
import logo from './assets/Beigi-Logo.png'
const submitted = ref(false)

const handleSubmit = (e) => {
  const form = e.target
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(new FormData(form)).toString(),
  }).then(() => (submitted.value = true)).catch((error) => alert(error))
}
</script>

<template>
  <div class="bg-zinc-950 text-white min-h-screen font-sans selection:bg-purple-500/30 overflow-x-hidden">

    <nav class="fixed top-0 w-full bg-zinc-950/90 backdrop-blur-md border-b border-white/5 z-[100] py-4 md:py-6 px-6 md:px-8 flex justify-between items-center">
      <a href="#home" class="shrink-0">
        <img :src="logo" alt="DB Logo" class="h-6 md:h-8 purple-logo hover:opacity-80 transition-opacity" />
      </a>

      <ul class="flex gap-4 md:gap-10 text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold text-zinc-500">
        <li><a href="#about" class="hover:text-purple-400 transition-colors">About</a></li>
        <li><a href="#projects" class="hover:text-purple-400 transition-colors">Projects</a></li>
        <li><a href="#contact" class="hover:text-purple-400 transition-colors">Contact</a></li>
      </ul>
    </nav>

    <section id="home" class="min-h-screen flex items-center justify-center px-6 md:px-8 pt-32 md:pt-0">
      <div class="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        <div class="flex-1 space-y-6 md:space-y-8 text-center md:text-left">
          <h1 class="text-5xl md:text-8xl font-black tracking-tighter italic leading-none">
            DARYA<br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">BEIGI.</span>
          </h1>
          <p class="text-base md:text-lg text-zinc-400 leading-relaxed max-w-md mx-auto md:mx-0">
            Software Engineer. Specializing in high-performance web systems.
          </p>
          <div class="pt-4 flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#projects" class="w-full md:w-auto inline-flex items-center justify-center px-10 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full transition-all shadow-[0_0_30px_rgba(147,51,234,0.3)] uppercase tracking-widest text-xs">
              View Projects
            </a>
          </div>
        </div>

        <div class="flex-1 flex justify-center">
          <div class="relative group animate-entry-spin aspect-square">
            <div class="absolute inset-0 bg-purple-500 rounded-full blur-[60px] md:blur-[80px] opacity-20"></div>

            <img
                :src="profilePic"
                alt="Darya Beigi"
                class="relative w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border border-white/10 z-10 shadow-2xl muted-portrait animate-spin-slow"
            />
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="py-24 md:py-36 px-6 md:px-8 border-t border-white/5 bg-zinc-900/10">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-purple-500 font-mono text-sm mb-8 text-center tracking-widest uppercase">// About Me</h2>
        <p class="text-2xl md:text-4xl text-zinc-300 leading-tight font-light mb-16 md:mb-24 text-center md:text-left">
          I’m a software engineer with <span class="text-white font-medium">5+ years of experience</span> developing
          production web applications. I focus on building maintainable systems and improving team efficiency through
          better tooling.
        </p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-12 border-t border-white/5">
          <div v-for="(skills, category) in {
            Languages: ['JavaScript', 'Ruby', 'Python', 'SQL'],
            Frameworks: ['Vue.js', 'Rails', 'FastAPI', 'React'],
            Testing: ['Vitest', 'Rspec', 'Playwright'],
            Tools: ['Docker', 'Github Actions', 'Heroku', 'Alembic']
          }" :key="category">
            <h3 class="text-zinc-500 text-[10px] uppercase tracking-widest mb-4 md:mb-6 font-bold">{{ category }}</h3>
            <ul class="text-xs md:text-sm space-y-3 text-zinc-300 font-medium">
              <li v-for="skill in skills" :key="skill" class="flex items-center gap-2">
                <span class="w-1 h-1 bg-purple-600 rounded-full"></span> {{ skill }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="py-24 px-6 md:px-8 border-t border-white/5">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-purple-500 font-mono text-sm mb-12 md:mb-16 text-center tracking-widest uppercase">// Projects</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

          <div class="group relative p-6 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-500 flex flex-col text-left">
            <div class="flex-grow">
              <div class="flex justify-between items-start mb-6 md:mb-8">
                <div class="p-3 md:p-4 bg-purple-600/20 rounded-2xl text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span class="text-[9px] md:text-[10px] text-zinc-500 uppercase tracking-widest font-black">Present</span>
              </div>
              <h3 class="text-2xl md:text-3xl font-bold mb-3">onDiem</h3>
              <p class="text-sm md:text-base text-zinc-400 leading-relaxed mb-6 md:mb-8">
                Scaling a staffing platform for dental professionals. Focused on building high-performance APIs and optimizing the Vue.js frontend for seamless scheduling.
              </p>
              <div class="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-10">
                <span class="text-[9px] md:text-[10px] px-3 py-1 bg-white/10 rounded-full text-zinc-300 font-mono uppercase">Vue.js</span>
                <span class="text-[9px] md:text-[10px] px-3 py-1 bg-white/10 rounded-full text-zinc-300 font-mono uppercase">Rails</span>
                <span class="text-[9px] md:text-[10px] px-3 py-1 bg-white/10 rounded-full text-zinc-300 font-mono uppercase">Postgres</span>
                <span class="text-[9px] md:text-[10px] px-3 py-1 bg-white/10 rounded-full text-zinc-300 font-mono uppercase">Heroku</span>
              </div>
            </div>
            <div class="pt-6 border-t border-white/5 flex justify-between items-center">
              <a href="https://ondiem.com" target="_blank" class="text-[10px] uppercase tracking-[0.2em] text-purple-400 hover:text-white transition-colors font-bold flex items-center gap-2">
                Visit onDiem.com <span class="text-lg">↗</span>
              </a>
              <span class="text-[9px] text-zinc-600 font-mono italic">Proprietary</span>
            </div>
          </div>

          <div class="group relative p-6 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-500 flex flex-col text-left">
            <div class="flex-grow">
              <div class="flex justify-between items-start mb-6 md:mb-8">
                <div class="p-3 md:p-4 bg-purple-600/20 rounded-2xl text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span class="text-[9px] md:text-[10px] text-zinc-500 uppercase tracking-widest font-black">Side Project</span>
              </div>
              <h3 class="text-2xl md:text-3xl font-bold mb-3">Finance API</h3>
              <p class="text-sm md:text-base text-zinc-400 leading-relaxed mb-6 md:mb-8">
                Built a robust financial tracking engine using FastAPI and PostgreSQL. Implemented automated migrations with Alembic and JWT-based authentication.
              </p>
              <div class="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-10">
                <span class="text-[9px] md:text-[10px] px-3 py-1 bg-white/10 rounded-full text-zinc-300 font-mono uppercase">React</span>
                <span class="text-[9px] md:text-[10px] px-3 py-1 bg-white/10 rounded-full text-zinc-300 font-mono uppercase">FastAPI</span>
                <span class="text-[9px] md:text-[10px] px-3 py-1 bg-white/10 rounded-full text-zinc-300 font-mono uppercase">Alembic</span>
                <span class="text-[9px] md:text-[10px] px-3 py-1 bg-white/10 rounded-full text-zinc-300 font-mono uppercase">Docker</span>
              </div>
            </div>
            <div class="pt-6 border-t border-white/5 flex gap-6 md:gap-8">
              <a href="https://github.com/beigid/portfolio" target="_blank" class="text-[10px] uppercase tracking-[0.2em] text-purple-400 hover:text-white transition-colors font-bold flex items-center gap-2">
                GitHub <span class="text-lg">↗</span>
              </a>
              <a href="https://finance-app.dbeigi.com" target="_blank" class="text-[10px] uppercase tracking-[0.2em] text-purple-400 hover:text-white transition-colors font-bold flex items-center gap-2">
                Live App <span class="text-lg">↗</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section id="contact" class="py-24 px-6 md:px-8 border-t border-white/5 bg-zinc-900/10">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-purple-500 font-mono text-sm mb-12 md:mb-16 text-center tracking-widest uppercase">// Contact</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

          <div class="flex flex-col justify-center text-center md:text-left">
            <h3 class="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white leading-tight">
              Let's build <br/><span class="text-zinc-500">awesome stuff.</span>
            </h3>
            <p class="text-zinc-400 mb-10 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              I'm currently looking for new software engineering roles in the Seattle area. Reach out if you want to collaborate!
            </p>

            <div class="flex justify-center md:justify-start gap-4">
              <a href="https://www.linkedin.com/in/daryabeigi/" target="_blank" class="p-3 md:p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-purple-500/50 hover:bg-white/10 transition-all group">
                <span class="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-zinc-400 group-hover:text-purple-400">LinkedIn ↗</span>
              </a>
              <a href="https://github.com/beigid" target="_blank" class="p-3 md:p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-purple-500/50 hover:bg-white/10 transition-all group">
                <span class="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-zinc-400 group-hover:text-purple-400">GitHub ↗</span>
              </a>
            </div>
          </div>

          <div class="bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 backdrop-blur-sm min-h-[450px] flex flex-col justify-center">

            <div v-if="submitted" class="text-center space-y-6 animate-entry-spin">
              <div class="flex justify-center">
                <div class="p-4 bg-purple-600/20 rounded-full text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 class="text-3xl font-bold">Message Received!</h3>
              <p class="text-zinc-400 max-w-xs mx-auto">
                Thanks for reaching out! I'll review your message and get back to you within 24 hours.
              </p>
            </div>

            <form
                v-else
                name="contact"
                method="POST"
                @submit.prevent="handleSubmit"
                data-netlify="true"
                netlify-honeypot="bot-field"
                class="space-y-4 text-left"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p class="hidden"><label><input name="bot-field" /></label></p>

              <div>
                <label class="block text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-2 ml-1">Name</label>
                <input type="text" name="name" required class="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="Darya Beigi" />
              </div>

              <div>
                <label class="block text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-2 ml-1">Email</label>
                <input type="email" name="email" required class="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="darya@example.com" />
              </div>

              <div>
                <label class="block text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-2 ml-1">Message</label>
                <textarea name="message" required rows="4" class="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none" placeholder="How can I help?"></textarea>
              </div>

              <button type="submit" class="w-full py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-all shadow-[0_0_30px_rgba(147,51,234,0.15)] uppercase tracking-widest text-xs mt-4">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>

    <footer class="py-16 text-center text-zinc-600 text-[10px] tracking-[0.4em] uppercase border-t border-white/5">
      &copy; 2026 Darya Beigi
    </footer>
  </div>
</template>