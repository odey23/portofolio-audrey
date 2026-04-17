'use client'

import { useState } from "react";
import Lanyard from "./components/Lanyard";
import RotatingText from "./components/RotatingText";
import SplitText from "./components/SplitText";
import BlurText from "./components/BlurText";
import LiquidEther from "./components/LiquidEther";
import CircularText from "./components/CircularText";
import ScrollVelocity from "./components/ScrollVelocity";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";


export default function Home() {
  const [active, setActive] = useState(false);

  const listProyek = [
    {
      image: '/proyek/proyek1.png',
      title: 'UI/UX Inception 2025',
      subtitle: 'Figma Design competition',
      handle: '@odey and friends',
      borderColor: '#a855f7',
      gradient: 'linear-gradient(135deg, #a855f7, #000)',
      url: 'https://www.figma.com/design/WRvK49GcmxUgWeeLSzYtCl/Inception2025?node-id=0-1&t=ddRdQ37fWh1z0M0I-1'
    },
    {
      image: '/proyek/proyek2.png',
      title: 'School Website',
      subtitle: 'Figma Design competition',
      handle: '@odey and friends',
      borderColor: '#22d3ee',
      gradient: 'linear-gradient(135deg, #22d3ee, #000)',
      url: 'https://www.figma.com/design/p2UnLFzRRaifR0NsKPho37/JHIC?node-id=0-1&t=67IEUpzog19b48ZC-1'
    },
    {
      image: '/proyek/proyek3.png',
      title: 'Portfolio Website',
      subtitle: 'Figma Design competition',
      handle: '@odey and friends',
      borderColor: '#f472b6',
      gradient: 'linear-gradient(135deg, #f472b6, #000)',
      url: 'https://www.figma.com/proto/bQVfUkaAfpFX9MRCB6LIVQ?node-id=0-1&t=RqE7JXfwMgJozVI1-6'
    },
    {
      image: '/proyek/proyek4.png',
      title: 'Project akhir',
      subtitle: 'html, css, JS',
      handle: '@odey and friends',
      borderColor: '#f472b6',
      gradient: 'linear-gradient(135deg, #f472b6, #000)',
      url: 'https://vercel.com'
    },
    {
      image: '/proyek/proyek5.png',
      title: 'MPP Amazon',
      subtitle: 'Boostrap, html, css',
      handle: '@odey',
      borderColor: '#f472b6',
      gradient: 'linear-gradient(135deg, #f472b6, #000)',
      url: 'https://vercel.com'
    },
    {
      image: '/proyek/proyek6.png',
      title: 'Portfolio Website',
      subtitle: 'React, Tailwind, reactbits',
      handle: '@audrey',
      borderColor: '#f472b6',
      gradient: 'linear-gradient(135deg, #f472b6, #000)',
      url: 'https://vercel.com'
    }
  ];
  const handleProjectClick = (item: any) => {
    if (item?.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    }
  };


  return (

    <div className="min-h-screen overflow-x-hidden bg-[#070421]">
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full">
        <LiquidEther colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6} />
      </div>
      <nav className="navbar relative z-50 py-7 flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <div className="logo">
          <h1 className="text-3xl font-bold text-white p-1 md:bg-transparent md:text-white">
            Portofolio
          </h1>
        </div>

        {/* Menu */}
        <ul
          className={`flex items-center sm:gap-10 gap-4 
          md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 
          md:opacity-100 bg-white/10 backdrop-blur-md 
          md:bg-transparent md:backdrop-blur-none
          p-4 rounded-br-2xl rounded-bl-2xl 
          transition-all md:transition-none
          ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}
        >
          <li><a href="#home" className="sm:text-lg text-base font-medium">Home</a></li>
          <li><a href="#about" className="sm:text-lg text-base font-medium">About</a></li>
          <li><a href="#projects" className="sm:text-lg text-base font-medium">Project</a></li>
          <li><a href="#contact" className="sm:text-lg text-base font-medium">Contact</a></li>
        </ul>
      </nav>
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <div className="flex items-center h-full">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl text-white font-bold">I'm Ready For</h1>
                  <RotatingText
                    texts={['Web Design', 'Web Programming', 'UI/UX', 'Web development']}
                    mainClassName="px-2 sm:px-8 md:px-3 bg-[#AB31E2] text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000} />
                </div>
                <div className="flex flex-col items-start">
                  <SplitText text="Product Designer &"
                    className="text-5xl font-semibold text-start "
                    delay={50}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="left" />
                  <SplitText text="Frontend Developer"
                    className="text-5xl font-semibold text-start text-[#AB31E2]"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="left" />
                </div>
                <BlurText text="Hi, I'm Audrey from Metland School. I studied programming, web development, and UI/UX design for three years. My strengths are in frontend and design."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-xl mb-8 " />
              </div>
            </div>
          </div>
          <div className="col-span-6 relative">
            <div className="pointer-events-none">
              <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
            </div>
            <div className="absolute top-10 right-0">
              <CircularText
                text="CREATIVE*PORTOFOLIO*AUDREY*"
                onHover="speedUp"
                spinDuration={15}
              />
            </div>
          </div>
        </div>
      </div>
      <section id="about" className="py-20 bg-traansparant backdrop-blur-sm relative">
        <div className="absolute inset-0 opacity-15 z-0">
          <LiquidEther />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedContent
            distance={80}
            direction="vertical"
            reverse={false}
            config={{ tension: 150, friction: 25 }}
            initialOpacity={0}
            animateOpacity
            threshold={0.3}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r  bg-[#AB31E2] to-slate-600 bg-clip-text text-transparent mb-6">About Me</h2>
              <p className="text-xl text-white max-w-2xl mx-auto">
                Passionate about creating innovative solutions through code
              </p>
            </div>
          </AnimatedContent>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedContent
                distance={60}
                direction="horizontal"
                reverse={false}
                config={{ tension: 150, friction: 25 }}
                initialOpacity={0}
                animateOpacity
                threshold={0.4}
              >
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-[#AB31E2]">My Journey</h3>
                  <p className="text-white leading-relaxed text-lg">
                    After two years of studying at SMK Pariwisata Metland School, I have a strong desire to learn, especially in UI/UX design and frontend development.
                  </p>
                  <p className="text-white leading-relaxed text-lg">
                    My passion is to develop primarily in the backend, where I enjoy the logical challenges of
                    backend systems and the creative aspects of frontend design.
                  </p>
                </div>
              </AnimatedContent>

              <AnimatedContent
                distance={60}
                direction="horizontal"
                reverse={true}
                config={{ tension: 150, friction: 25 }}
                initialOpacity={0}
                animateOpacity
                threshold={0.4}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Current Focus
                  </h4>
                  <ul className="space-y-4">
                    {[
                      'Modern web development technologies',
                      'Frontend developer',
                      'Digital innovation & problem solving'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                        <span className="text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>
      <ScrollVelocity
        texts={['Welcome to', 'My portofolio']} />
      <section id="projects" className="py-20 bg-gradient-to-br  relative mt-10">
        <div className="absolute inset-0 opacity-10 z-0">
          <LiquidEther />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedContent
            distance={80}
            direction="vertical"
            reverse={false}
            config={{ tension: 150, friction: 25 }}
            initialOpacity={0}
            animateOpacity
            threshold={0.3}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-[#d1edff] to-[#2825b6] bg-clip-text text-transparent mb-6">Featured Projects</h2>
              <p className="text-xl text-[#ffffff] max-w-2xl mx-auto">
                A showcase of my development journey
              </p>
            </div>
          </AnimatedContent>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Figma",
                  description: "My first figma project with the group was designing Zagat, which turned out pretty good and was similar to the original. In my next figma project, I continued to develop my skills and created figma portfolios, Spotify, e-commerce websites, and many others.",
                  tech: ["Figma", "UI/UX", "Design"],
                  status: "Completed",
                  statusColor: "bg-amber-100 text-amber-800 border-amber-200",
                  gradient: "from-orange-400 to-pink-400"
                },
                {
                  title: "Front-end",
                  description: "I am currently developing front-end learning, the results of which are in the creation of duplicate websites, the creation of school websites, and now my portfolio. and I want to learn how to develop backend. Currently, I am just learning how to use node.js. And I am learning how to use Laravel in my 11th grade class.",
                  tech: ["HTML", "CSS", "React", "Tailwind", "JavaScript", "Laravel", "MySQL"],
                  status: "Completed",
                  statusColor: "bg-blue-100 text-blue-800 border-blue-200",
                  gradient: "from-blue-400 to-purple-400"
                },
                {
                  title: "Competition Experience",
                  description: "I participated in several UI/UX competitions and won the first time I tried. Now I want to develop my passion and participate in many competitions, especially in website development or front end.",
                  tech: ["Figma", "Design", "Competition"],
                  status: "Completed",
                  statusColor: "bg-green-100 text-green-800 border-green-200",
                  gradient: "from-green-400 to-blue-400"
                }
              ].map((project, index) => (
                <AnimatedContent
                  key={index}
                  distance={60}
                  direction="vertical"
                  reverse={false}
                  config={{ tension: 150, friction: 25 }}
                  initialOpacity={0}
                  animateOpacity
                  threshold={0.4}
                >
                  <div className="bg-[rgb(9,21,76)] backdrop-blur-sm rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                    <div className="flex justify-between items-start mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${project.statusColor}`}>
                        {project.status}
                      </span>
                      <div className="flex gap-2">
                        <button className="w-8 h-8 bg-blue-100 hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors group-hover:scale-110 duration-300">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className={`w-full h-2 bg-gradient-to-r ${project.gradient} rounded-full mb-4 opacity-60`}></div>

                    <h3 className="text-xl font-bold text-[#e4fcffdb] mb-3">{project.title}</h3>
                    <p className="text-[#fff] mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-20">
        <div className="absolute inset-0 opacity-15 z-0">
          <LiquidEther />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedContent
            distance={80}
            direction="vertical"
            reverse={false}
            config={{ tension: 150, friction: 25 }}
            initialOpacity={0}
            animateOpacity
            threshold={0.3}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-[#d1edff] to-[#2825b6] bg-clip-text text-transparent mb-6">
                Project
              </h2>
              <p className="text-xl text-[#ffffff] max-w-2xl mx-auto">
                Showcasing a selection of projects that reflect my skills, creativity, and passion for building meaningful digital experiences.
              </p>
            </div>
          </AnimatedContent>

          <div className="relative z-30">
            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick}
              radius={500}
              damping={0.45}
              fadeOut={0.6}
            />
          </div>

          <div className="flex justify-center items-center relative z-10 mt-20 animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Audrey J"
              title="Software Engineer"
              handle="Jac._linn"
              status="Online"
              contactText="Contact Me"
              avatarUrl="./assets/2.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>
        </div>
      </section>
      <section id="contact" className="py-20 bg-traansparant backdrop-blur-sm relative">
        <div className="absolute inset-0 opacity-15 z-0">
          <LiquidEther />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedContent
            distance={80}
            direction="vertical"
            reverse={false}
            config={{ tension: 150, friction: 25 }}
            initialOpacity={0}
            animateOpacity
            threshold={0.3}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r  bg-[#AB31E2] to-slate-600 bg-clip-text text-transparent mb-6">Let's Connect</h2>
              <p className="text-xl text-[#ffff] max-w-2xl mx-auto">
                Ready to collaborate or just want to say hello?
              </p>
            </div>
          </AnimatedContent>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <AnimatedContent
                distance={60}
                direction="horizontal"
                reverse={false}
                config={{ tension: 150, friction: 25 }}
                initialOpacity={0}
                animateOpacity
                threshold={0.4}
              >
                <div className="space-y-8">
                  <h3 className="text-3xl font-bold text-[#fff]">Get in Touch</h3>
                  <p className="text-[#fff] leading-relaxed text-lg">
                    I'm always open to discussing new opportunities, creative projects,
                    or just having a friendly chat about technology and innovation.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        icon: (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        ),
                        title: "Email",
                        content: "audrey.23ginting@gmail.com",
                        href: "mailto:audrey.23ginting@gmail.com",
                        color: "from-blue-500 to-indigo-500"
                      },
                      {
                        icon: (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        ),
                        title: "Location",
                        content: "Bogor, Indonesia",
                        href: "https://maps.google.com/?q=Bogor,Indonesia",
                        color: "from-green-500 to-emerald-500"
                      },
                    ].map((contact, index) => (
                      <a
                        key={index}
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-white backdrop-blur-sm rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300 group"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          {contact.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800">{contact.title}</h4>
                          <p className="text-slate-600">{contact.content}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedContent>

              <AnimatedContent
                distance={60}
                direction="horizontal"
                reverse={true}
                config={{ tension: 150, friction: 25 }}
                initialOpacity={0}
                animateOpacity
                threshold={0.4}
              >
                <div className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-blue-100 shadow-xl">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm text-black"
                        placeholder="Your Name"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm text-black"
                        placeholder="your.email@gmail.com"
                      /> 
                    </div>

                    <div>
                      <label className="block text-slate-700 font-semibold mb-2">Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none bg-white/50 backdrop-blur-sm text-black"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>
                    <a
                      href="mailto:audrey.23ginting@gmail.com?subject=Hello%20Audrey!&body=Hi%20Audrey%2C%0A%0ATell%20me%20about%20your%20project..."
                      className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-center hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      Send Message
                    </a>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

    </div >
  );
}