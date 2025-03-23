import React, { useState, useEffect } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Code, 
  FileCode, 
  Database, 
  Layout,
  BookOpen,
  Music,
  Scissors,
  Search,
  Globe,
  Server,
  Terminal,
  CircleSlashed,
  Network,
  Cpu,
  Moon,
  Sun,
  Github
} from 'lucide-react';

const Portfolio = () => {
  // Theme state
  const [darkMode, setDarkMode] = useState(true);
  
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Toggle theme function
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Apply theme classes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Theme-dependent style variables with increased purple intensity
  const themeStyles = {
    bg: darkMode ? 'bg-gray-900' : 'bg-gray-50',
    text: darkMode ? 'text-gray-100' : 'text-gray-800',
    navBg: darkMode ? 'bg-gray-900 border-purple-700' : 'bg-white border-purple-300', // Increased purple intensity
    cardBg: darkMode ? 'bg-gray-800' : 'bg-white',
    cardBorder: darkMode ? 'border-purple-500' : 'border-purple-300', // Increased purple intensity
    cardShadow: darkMode ? 'hover:shadow-purple-500' : 'hover:shadow-purple-300', // Increased purple intensity
    heroGradient: darkMode ? 'from-purple-700 to-gray-900' : 'from-purple-400 to-white', // Adjusted gradient
    sectionHeading: darkMode ? 'text-purple-500' : 'text-purple-700', // Increased purple intensity
    linkText: darkMode ? 'text-gray-300 hover:text-purple-500' : 'text-gray-600 hover:text-purple-700', // Increased purple intensity
    formBg: darkMode ? 'bg-gray-800' : 'bg-gray-100',
    formBorder: darkMode ? 'border-purple-700' : 'border-purple-300', // Increased purple intensity
    iconBg: darkMode ? 'bg-purple-700' : 'bg-purple-200', // Increased purple intensity
    iconColor: darkMode ? 'text-purple-400' : 'text-purple-700', // Increased purple intensity
  };

  return (
    <div className={`min-h-screen ${themeStyles.bg} ${themeStyles.text} font-sans transition-colors duration-300`}>
       <nav className={`${themeStyles.navBg} shadow-md border-b transition-colors duration-300 sticky top-0 z-50`}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className={`text-xl font-bold ${darkMode ? 'text-purple-500' : 'text-purple-700'}`}>MyPortfolio</div>
          
          <div className="flex items-center">
            {/* Theme toggle button */}
            <button 
              onClick={toggleTheme} 
              className="mr-4 p-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun size={20} className="text-yellow-300" />
              ) : (
                <Moon size={20} className="text-purple-700" />
              )}
            </button>
            
            {/* Navigation links */}
            <ul className="hidden md:flex space-x-6 items-center">
              <li><a href="#home" className={themeStyles.linkText}>Home</a></li>
              <li><a href="#about" className={themeStyles.linkText}>About</a></li>
              <li><a href="#education" className={themeStyles.linkText}>Education</a></li>
              <li><a href="#projects" className={themeStyles.linkText}>Projects</a></li>
              <li><a href="#skills" className={themeStyles.linkText}>Skills</a></li>
              <li><a href="#contact" className={themeStyles.linkText}>Contact</a></li>
            </ul>
            
            {/* Social links moved to the end with more spacing */}
            <div className="hidden md:flex items-center space-x-4 ml-12"> {/* Increased left margin for more spacing */}
              <a 
                href="https://github.com/saranya544" 
                target="_blank" 
                rel="noopener noreferrer"
                className={themeStyles.linkText}
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className={themeStyles.linkText}
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:saranyadogiparthi@gmail.com" 
                className={themeStyles.linkText}
              >
                <Mail size={20} />
              </a>
            </div>
            
            {/* Mobile menu button - Updated to toggle mobile menu */}
            <button 
              className="md:hidden text-purple-500"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu - Added to display when toggled */}
        {mobileMenuOpen && (
          <div className={`md:hidden py-4 px-4 ${themeStyles.navBg} border-t ${themeStyles.cardBorder}`}>
            <ul className="space-y-4">
              <li><a href="#home" className={themeStyles.linkText} onClick={() => setMobileMenuOpen(false)}>Home</a></li>
              <li><a href="#about" className={themeStyles.linkText} onClick={() => setMobileMenuOpen(false)}>About</a></li>
              <li><a href="#education" className={themeStyles.linkText} onClick={() => setMobileMenuOpen(false)}>Education</a></li>
              <li><a href="#projects" className={themeStyles.linkText} onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
              <li><a href="#skills" className={themeStyles.linkText} onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
              <li><a href="#contact" className={themeStyles.linkText} onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
            </ul>
            
            {/* Social links in mobile menu */}
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-700">
              <a 
                href="https://github.com/saranya544" 
                target="_blank" 
                rel="noopener noreferrer"
                className={themeStyles.linkText}
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className={themeStyles.linkText}
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:saranyadogiparthi@gmail.com" 
                className={themeStyles.linkText}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        )}
      </nav>





    {/*Home Section */}  
<section id="home" className={`min-h-screen flex items-center py-20 ${themeStyles.bg} transition-colors duration-300`}>  
  <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center">    
    {/* Content Area - Left Side */}    
    <div className="md:w-1/2 mt-12 md:mt-0">      
      <h1 className="text-5xl font-bold mb-4">        
        <span className={`block ${darkMode ? 'text-purple-500' : 'text-purple-700'}`}>Saranya Dogiparthi</span>      
      </h1>      
      <h2 className="text-2xl mb-6 text-400">A passionate Web Developer in creating beautiful websites</h2>      
      
      <div>
  <a
  href="#projects"
  className={`border-2 px-6 py-2 rounded-md font-medium transition duration-200 ${
    darkMode 
      ? "border-purple-500 text-purple-400 hover:bg-purple-0 hover:text-purple-700 hover:border-purple-800 hover:shadow-sm hover:shadow-purple-700/50" 
      : "bg-purple-600 border-purple-600 text-white hover:bg-purple-700 hover:border-purple-700 hover:shadow-sm hover:shadow-purple-700/50"
  }`}
>
  Let's Connect
</a>
</div>
    </div>        
    
    {/* Circular photo - Right Side */}    
    <div className="md:w-1/2 flex justify-center">      
      <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-xl">        
        <img           
          src="/profile.png"           
          alt="Saranya Dogiparthi"           
          className="w-full h-full object-cover"        
        />      
      </div>    
    </div>  
  </div> 
</section>
         
     

      {/* About Section - Modified with vertically centered content */}
<section id="about" className={`py-20 ${themeStyles.bg} transition-colors duration-300`}>
  <div className="max-w-6xl mx-auto px-4">
    {/* Heading appears first on mobile but stays with content on desktop */}
    <h2 className={`text-3xl font-bold mb-6 ${themeStyles.sectionHeading} text-center md:text-left md:hidden`}>
      About Me
    </h2>
    
    <div className="flex flex-col md:flex-row items-center">
      {/* Image comes second on mobile, first on desktop */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src="about-me1.jpg"
          alt="Laptop with code and coffee cup"
          className="rounded-lg shadow-lg mx-auto md:mx-0 w-full h-auto"
        />
      </div>
      
      {/* Content on the right with heading above it on desktop */}
      <div className="w-full md:w-1/2 md:pl-12">
        {/* Heading appears only on desktop, right side above content */}
        <h2 className={`text-3xl font-bold mb-6 ${themeStyles.sectionHeading} text-left hidden md:block`}>
          About Me
        </h2>
        
        <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          I'm Saranya Dogiparthi, a dedicated Full-Stack Web Developer with a passion for creating dynamic and user-friendly websites. Skilled in HTML, CSS, JavaScript, PHP, and React.js, I focus on building responsive designs and seamless user experiences. My curiosity for modern web technologies drives me to craft solutions that merge functionality and creativity.
        </p>
        <div>
          <a
            href="#projects"
            className={`border-2 px-6 py-2 rounded-md font-medium transition duration-200 ${
              darkMode 
                ? "border-purple-500 text-purple-400 hover:bg-purple-0 hover:text-purple-700 hover:border-purple-800 hover:shadow-sm hover:shadow-purple-700/50" 
                : "bg-purple-600 border-purple-600 text-white hover:bg-purple-700 hover:border-purple-700 hover:shadow-sm hover:shadow-purple-700/50"
            }`}
          >
            View Projects
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Education Section */}
      <section id="education" className={`py-16 ${themeStyles.bg} transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 ${themeStyles.sectionHeading}`}>Education</h2>
          <div className="space-y-8">
            {/* College */}
            <div className={`${themeStyles.cardBg} p-6 rounded-lg shadow-md ${themeStyles.cardShadow} hover:shadow-sm transition duration-300 border ${themeStyles.cardBorder}`}>
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Sreenidhi Institute of Science and Technology</h3>
              <p className="text-purple-500 mb-2">Information Technology</p>
              <div className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                <span>Hyderabad, Telangana</span>
                <span className="float-right">2022 - 2026</span>
              </div>
              <div className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <span className="font-semibold">CGPA:</span> 9.00/10
              </div>
            </div>
            
            {/* Junior College */}
            <div className={`${themeStyles.cardBg} p-6 rounded-lg shadow-md ${themeStyles.cardShadow} hover:shadow-sm transition duration-300 border ${themeStyles.cardBorder}`}>
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Sasi Junior College for Girls</h3>
              <p className="text-purple-500 mb-2">MPC State Syllabus</p>
              <div className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                <span>West Godavari, Andhra Pradesh</span>
                <span className="float-right">2020 - 2022</span>
              </div>
              <div className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <span className="font-semibold">GPA:</span> 10/10
              </div>
            </div>
            
            {/* School */}
            <div className={`${themeStyles.cardBg} p-6 rounded-lg shadow-md ${themeStyles.cardShadow} hover:shadow-sm transition duration-300 border ${themeStyles.cardBorder}`}>
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Bhashyam High School</h3>
              <p className="text-purple-500 mb-2">10th Standard, State Syllabus</p>
              <div className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                <span>Inkolllu, Andhra Pradesh</span>
                <span className="float-right">2019 - 2020</span>
              </div>
              <div className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <span className="font-semibold">GPA:</span> 10/10
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Updated with improved mobile responsiveness */}
<section id="projects" className={`py-16 ${themeStyles.bg} transition-colors duration-300`}>
<div className="max-w-6xl mx-auto px-4">
  <h2 className={`text-3xl font-bold text-center mb-12 ${themeStyles.sectionHeading}`}>My Projects</h2>
  
  {/* Project 1 - Hotstar Clone */}
  <div className="mb-20 flex flex-col md:flex-row items-center">
    {/* Content section - reordered for mobile */}
    <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 flex flex-col w-full">
      {/* Heading always appears first */}
      <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} order-first`}>Hotstar Clone</h3>
      
      {/* Image appears second on mobile, hidden on larger screens */}
      <div className="md:hidden mb-6 order-2">
        <img 
          src="hotstar.png" 
          alt="Hotstar Clone" 
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>
      
      {/* Description appears third on mobile */}
      <div className="order-3">
        <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Designed a responsive video streaming platform with fixed vertical sidebar, hover effects, autoplay videos, 
          and horizontal scrolling carousels for a visually appealing user experience.
        </p>
        
        <div className="mb-6">
          <p>HTML, CSS</p>
        </div>
      </div>
      
      {/* Buttons appear last on mobile */}
      <div className="flex space-x-6 order-4">
        <a href="https://saranya544.github.io/hotstar-clone/" target="_blank" rel="noopener noreferrer" className={`border-2 px-6 py-2 rounded-md font-medium transition duration-200 ${
darkMode 
? "border-purple-500 text-purple-400 hover:bg-purple-0 hover:text-purple-700 hover:border-purple-800 hover:shadow-sm hover:shadow-purple-700/50" 
: "bg-purple-600 border-purple-600 text-white hover:bg-purple-700 hover:border-purple-700 hover:shadow-sm hover:shadow-purple-700/50"
}`}>View Project</a>
        <a href="https://github.com/saranya544/hotstar-clone" target="_blank" rel="noopener noreferrer" className={`border-2 px-6 py-2 rounded-md font-medium transition duration-200 ${
darkMode 
? "border-purple-500 text-purple-400 hover:bg-purple-0 hover:text-purple-700 hover:border-purple-800 hover:shadow-sm hover:shadow-purple-700/50" 
: "bg-purple-600 border-purple-600 text-white hover:bg-purple-700 hover:border-purple-700 hover:shadow-sm hover:shadow-purple-700/50"
}`}>GitHub</a>
      </div>
    </div>
    
    {/* Image on larger screens - hidden on mobile */}
    <div className="md:w-1/2 hidden md:block">
      <img 
        src="hotstar.png" 
        alt="Hotstar Clone" 
        className="rounded-lg shadow-lg w-full h-auto"
      />
    </div>
  </div>

  {/* Project 2 - Google Clone */}   
<div className="mb-20 flex flex-col md:flex-row items-center md:gap-8">
  {/* Content section - reordered for mobile */}
  <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8 md:order-last flex flex-col w-full">
    {/* Heading always appears first */}
    <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} order-first`}>Google Clone</h3>
        
    {/* Image appears second on mobile, hidden on larger screens */}
    <div className="md:hidden mb-6 order-2">
      <img
        src="google-clone.png"
        alt="Google Clone"
        className="rounded-lg shadow-lg w-full h-auto"
      />
    </div>
        
    {/* Description appears third on mobile */}
    <div className="order-3">
      <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        Created a responsive Google search page clone using HTML and CSS, accurately replicating the classic Google search interface with a functional search bar, voice search, and image search icons.
      </p>
            
      <div className="mb-6">
        <p>HTML, CSS</p>
      </div>
    </div>
        
    {/* Buttons appear last on mobile */}
    <div className="flex space-x-6 order-4">
      <a href="https://saranya544.github.io/Google-Clone/" target="_blank" rel="noopener noreferrer" className={`border-2 px-6 py-2 rounded-md font-medium transition duration-200 ${ darkMode  ? "border-purple-500 text-purple-400 hover:bg-purple-0 hover:text-purple-700 hover:border-purple-800 hover:shadow-sm hover:shadow-purple-700/50"  : "bg-purple-600 border-purple-600 text-white hover:bg-purple-700 hover:border-purple-700 hover:shadow-sm hover:shadow-purple-700/50" }`}>View Project</a>
      <a href="https://github.com/saranya544/Google-Clone" target="_blank" rel="noopener noreferrer" className={`border-2 px-6 py-2 rounded-md font-medium transition duration-200 ${ darkMode  ? "border-purple-500 text-purple-400 hover:bg-purple-0 hover:text-purple-700 hover:border-purple-800 hover:shadow-sm hover:shadow-purple-700/50"  : "bg-purple-600 border-purple-600 text-white hover:bg-purple-700 hover:border-purple-700 hover:shadow-sm hover:shadow-purple-700/50" }`}>GitHub</a>
    </div>
  </div>
      
  {/* Image on larger screens - hidden on mobile */}
  <div className="md:w-1/2 hidden md:block">
    <img
      src="google-clone.png"
      alt="Google Clone"
      className="rounded-lg shadow-lg w-full h-auto"
    />
  </div>
</div>

  {/* Project 3 - Bookstore */}
  <div className="flex flex-col md:flex-row items-center">
    {/* Content section - reordered for mobile */}
    <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 flex flex-col w-full">
      {/* Heading always appears first */}
      <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} order-first`}>Bookstore</h3>
      
      {/* Image appears second on mobile, hidden on larger screens */}
      <div className="md:hidden mb-6 order-2">
        <img 
          src="bookstore.png" 
          alt="Bookstore" 
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>
      
      {/* Description appears third on mobile */}
      <div className="order-3">
        <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Developed a bookstore website using PHP and HTML/CSS with dynamic inventory management. Implemented a date-based reporting system 
          to track book sales and revenue between specified dates. When a user purchases a book, the required quantity is deducted from the
          stock automatically. Additionally, when a book is sold, the counter updates to reflect the increased sales amount and the number of books sold, 
          ensuring accurate revenue and inventory tracking.
        </p>
        
        <div className="mb-6">
          <p>HTML, CSS, PHP</p>
        </div>
      </div>
      
      {/* No buttons for Bookstore project as in original code */}
    </div>
    
    {/* Image on larger screens - hidden on mobile */}
    <div className="md:w-1/2 hidden md:block">
      <img 
        src="bookstore.png" 
        alt="Bookstore" 
        className="rounded-lg shadow-lg w-full h-auto"
      />
    </div>
  </div>
</div>
</section>


      {/* Skills Section */}
      <section id="skills" className={`py-16 ${themeStyles.bg} transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 ${themeStyles.sectionHeading}`}>My Skills</h2>
          
          <div className="mb-12">
            <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Web Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className={`${themeStyles.cardBg} p-6 rounded-lg shadow-md text-center border ${themeStyles.cardBorder} ${themeStyles.cardShadow} hover:shadow-sm transition duration-300`}>
                <div className="mb-4 flex justify-center">
                  <Layout size={40} className="text-orange-500" />
                </div>
                <h4 className="font-bold">HTML</h4>
              </div>
              
              <div className={`${themeStyles.cardBg} p-6 rounded-lg shadow-md text-center border ${themeStyles.cardBorder} ${themeStyles.cardShadow} hover:shadow-sm transition duration-300`}>
                <div className="mb-4 flex justify-center">
                  <Code size={40} className="text-blue-500" />
                </div>
                <h4 className="font-bold">CSS</h4>
              </div>
              
              <div className={`${themeStyles.cardBg} p-6 rounded-lg shadow-md text-center border ${themeStyles.cardBorder} ${themeStyles.cardShadow} hover:shadow-sm transition duration-300`}>
                <div className="mb-4 flex justify-center">
                  <FileCode size={40} className="text-yellow-500" />
                </div>
                <h4 className="font-bold">JavaScript</h4>
                <p className={darkMode ? 'text-gray-400 text-sm' : 'text-gray-500 text-sm'}>Basics</p>
              </div>
              
              <div className={`${themeStyles.cardBg} p-6 rounded-lg shadow-md text-center border ${themeStyles.cardBorder} ${themeStyles.cardShadow} hover:shadow-sm transition duration-300`}>
                <div className="mb-4 flex justify-center">
                  <Server size={40} className="text-purple-500" />
                </div>
                <h4 className="font-bold">PHP</h4>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Programming Languages</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className={`${themeStyles.cardBg} p-6 rounded-lg shadow-md text-center border ${themeStyles.cardBorder} ${themeStyles.cardShadow} hover:shadow-sm transition duration-300`}>
                <div className="mb-4 flex justify-center">
                  <Terminal size={40} className="text-blue-400" />
                </div>
                <h4 className="font-bold">Python</h4>
                <p className={darkMode ? 'text-gray-400 text-sm' : 'text-gray-500 text-sm'}>Basics</p>
              </div>
              
              <div className={`${themeStyles.cardBg} p-6 rounded-lg shadow-md text-center border ${themeStyles.cardBorder} ${themeStyles.cardShadow} hover:shadow-sm transition duration-300`}>
                <div className="mb-4 flex justify-center">
                  <Database size={40} className="text-red-500" />
                </div>
                <h4 className="font-bold">Java</h4>
                <p className={darkMode ? 'text-gray-400 text-sm' : 'text-gray-500 text-sm'}>Basics</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>CS Fundamentals</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className={`${themeStyles.cardBg} p-6 rounded-lg shadow-md text-center border ${themeStyles.cardBorder} ${themeStyles.cardShadow} hover:shadow-sm transition duration-300`}>
                <div className="mb-4 flex justify-center">
                  <Cpu size={40} className="text-green-500" />
                </div>
                <h4 className="font-bold">OOPS</h4>
              </div>
              
              <div className={`${themeStyles.cardBg} p-6 rounded-lg shadow-md text-center border ${themeStyles.cardBorder} ${themeStyles.cardShadow} hover:shadow-sm transition duration-300`}>
                <div className="mb-4 flex justify-center">
                  <Network size={40} className="text-teal-500" />
                </div>
                <h4 className="font-bold">Computer Networks</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section - Updated with different colors */}
      <section className={`py-16 ${themeStyles.bg} transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 ${themeStyles.sectionHeading}`}>Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`${themeStyles.cardBg} p-6 rounded-lg shadow-md text-center border ${themeStyles.cardBorder} ${themeStyles.cardShadow} hover:shadow-sm transition duration-300`}>
              <div className="mb-4 flex justify-center">
                <Music size={48} className="text-violet-500" /> {/* Changed to purple*/}
              </div>
              <h3 className="font-bold mb-2">Music</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>I enjoy listening to music in my free time.</p>
            </div>

            <div className={`${themeStyles.cardBg} p-6 rounded-lg shadow-md text-center border ${themeStyles.cardBorder} ${themeStyles.cardShadow} hover:shadow-sm transition duration-300`}>
              <div className="mb-4 flex justify-center">
                <Scissors size={48} className="text-yellow-500" /> {/* Changed to yellow */}
              </div>
              <h3 className="font-bold mb-2">Handcrafts</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>I like creating various handmade crafts.</p>
            </div>

            <div className={`${themeStyles.cardBg} p-6 rounded-lg shadow-md text-center border ${themeStyles.cardBorder} ${themeStyles.cardShadow} hover:shadow-sm transition duration-300`}>
              <div className="mb-4 flex justify-center">
                <BookOpen size={48} className="text-green-500" /> {/* Changed to green */}
              </div>
              <h3 className="font-bold mb-2">Languages</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>I am fluent in Telugu and English.</p>
            </div>
          </div>
        </div>
      </section>

{/* Contact Section */}
<section id="contact" className={`py-16 ${themeStyles.bg} transition-colors duration-300`}>
  <div className="max-w-5xl mx-auto px-4">
    <h2 className={`text-3xl font-bold text-center mb-12 ${themeStyles.sectionHeading}`}>Get In Touch</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left side - Contact Form Card */}
      <div className={`${themeStyles.cardBg} p-6 rounded-lg shadow-md border ${themeStyles.cardBorder} ${themeStyles.cardShadow} hover:shadow-sm transition duration-300`}>
        <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Send Me a Message</h3>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className={`block ${darkMode ? 'text-gray-300' : 'text-gray-600'} font-medium mb-2`}>Name</label>
            <input 
              type="text" 
              id="name" 
              className={`w-full px-4 py-2 ${themeStyles.formBg} border ${themeStyles.formBorder} rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${darkMode ? 'text-white' : 'text-gray-800'}`}
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className={`block ${darkMode ? 'text-gray-300' : 'text-gray-600'} font-medium mb-2`}>Email</label>
            <input 
              type="email" 
              id="email" 
              className={`w-full px-4 py-2 ${themeStyles.formBg} border ${themeStyles.formBorder} rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${darkMode ? 'text-white' : 'text-gray-800'}`}
              placeholder="your.email@example.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className={`block ${darkMode ? 'text-gray-300' : 'text-gray-600'} font-medium mb-2`}>Message</label>
            <textarea 
              id="message" 
              rows="4" 
              className={`w-full px-4 py-2 ${themeStyles.formBg} border ${themeStyles.formBorder} rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${darkMode ? 'text-white' : 'text-gray-800'}`}
              placeholder="Your message..."
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-purple-700 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-800 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
      
      {/* Right side - Contact Info Card */}
      <div className={`${themeStyles.cardBg} p-6 rounded-lg shadow-md border ${themeStyles.cardBorder} ${themeStyles.cardShadow} hover:shadow-sm transition duration-300 flex flex-col`}>

         <div className="mb-6">
          <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Contact Information</h3>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Feel free to reach out to me via email or phone.</p>
        </div>

        {/* Contact Information moved to bottom */}
        <div className="flex items-center mb-4">
          <div className={`w-10 h-10 rounded-full ${themeStyles.iconBg} flex items-center justify-center ${themeStyles.iconColor} mr-4`}>
            <Mail size={20} />
          </div>
          <span>saranyadogiparthi@gmail.com</span>
        </div>
        <div className="flex items-center mb-4">
          <div className={`w-10 h-10 rounded-full ${themeStyles.iconBg} flex items-center justify-center ${themeStyles.iconColor} mr-4`}>
            <Phone size={20} />
          </div>
          <span>8639983177</span>
        </div>
        <div className="flex items-center mb-6">
          <div className={`w-10 h-10 rounded-full ${themeStyles.iconBg} flex items-center justify-center ${themeStyles.iconColor} mr-4`}>
            <MapPin size={20} />
          </div>
          <span>Hyderabad, Telangana</span>
        </div>
        
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
<footer className={`${themeStyles.bg} py-8 border-t ${themeStyles.cardBorder} transition-colors duration-300`}>
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex justify-center items-center h-full">
      <p>&copy; {new Date().getFullYear()} Saranya Dogiparthi. All rights reserved.</p>
    </div>
  </div>
</footer>
</div>
);
};

export default Portfolio;






