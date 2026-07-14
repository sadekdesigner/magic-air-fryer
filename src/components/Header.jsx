import { Link, useLocation } from 'react-router-dom';
import { UtensilsCrossed } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const isBrowse = location.pathname === '/';

  return (
    <header className="bg-surface shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-4 md:px-8 py-2 max-w-[1280px] mx-auto">
        <Link
          to="/"
          className="font-display text-2xl font-bold text-primary flex items-center gap-2"
        >
          <UtensilsCrossed size={28} className="text-primary-container" />
          <span>موسوعة القلاية الهوائية</span>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <Link
            to="/"
            className={`font-medium text-sm pb-1 transition-colors duration-300 ${
              isBrowse
                ? 'text-primary font-bold border-b-2 border-primary'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            تصفح الوصفات
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <span className="bg-primary-container text-on-primary text-xs font-bold px-3 py-1 rounded-full">
            100% حلال
          </span>
        </div>
      </div>
    </header>
  );
}
