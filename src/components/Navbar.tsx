import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'الرئيسية', path: '/' },
  { label: 'عن المنصة', path: '/about' },
  { label: 'الفئات المهنية', path: '/categories' },
  { label: 'سوق العمل', path: '/marketplace' },
  {
    label: 'الأنظمة', path: '', children: [
      { label: 'تسجيل العمال', path: '/register' },
      { label: 'العقود الإلكترونية', path: '/contracts' },
      { label: 'تصاريح المشاعر', path: '/permits' },
      { label: 'التدريب والتأهيل', path: '/training' },
    ]
  },
  { label: 'الشركات', path: '/companies' },
  { label: 'خارطة الطريق', path: '/roadmap' },
  { label: 'تواصل معنا', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="شعار منصة سما" className="w-14 h-14 md:w-16 md:h-16 object-contain" />
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-black text-[var(--color-primary)] leading-tight">سما</h1>
              <p className="text-[10px] text-gray-500 leading-tight -mt-0.5">منصة عامل</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[var(--color-primary)] transition-colors">
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full right-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-fade-in">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-[var(--color-primary)] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'text-[var(--color-primary)] bg-emerald-50'
                      : 'text-gray-700 hover:text-[var(--color-primary)] hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login" className="btn-outline text-sm px-5 py-2.5">
              تسجيل الدخول
            </Link>
            <Link to="/register" className="btn-primary text-sm px-5 py-2.5">
              تسجيل عامل جديد
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg animate-fade-in">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === item.label && (
                    <div className="mr-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-[var(--color-primary)] hover:bg-emerald-50 rounded-lg"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'text-[var(--color-primary)] bg-emerald-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
            <div className="pt-3 space-y-2">
              <Link to="/login" onClick={() => setIsOpen(false)} className="btn-outline w-full text-center block text-sm">
                تسجيل الدخول
              </Link>
              <Link to="/register" onClick={() => setIsOpen(false)} className="btn-primary w-full text-center block text-sm">
                تسجيل عامل جديد
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
