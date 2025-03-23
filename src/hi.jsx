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








