import React from 'react';
import { Menu, X, BarChart3 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy/80 backdrop-blur-lg border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <BarChart3 size={20} className="text-navy font-bold" />
          </div>
          <span className="text-lg font-bold tracking-tighter text-white">TALIA.K</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-[10px] font-bold text-slate-400 hover:text-teal-400 transition-colors uppercase tracking-[0.2em]"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary px-5 py-2 text-[10px] uppercase tracking-widest font-bold">
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden w-10 h-10 flex items-center justify-center text-white" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-navy border-b border-slate-800 p-6 space-y-6 shadow-2xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="block text-lg font-medium text-slate-300" 
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary w-full text-center py-4" onClick={() => setIsOpen(false)}>
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
