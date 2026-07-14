import { UtensilsCrossed } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low mt-auto animate-fade-in-up">
      <div className="w-full px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-6 max-w-[1280px] mx-auto">
        <div className="font-display text-2xl font-bold text-on-surface flex items-center gap-2">
          <UtensilsCrossed size={24} className="text-primary-container" />
          <span>موسوعة القلاية الهوائية</span>
        </div>
        <div className="text-sm text-on-surface-variant text-center md:text-right">
          © {new Date().getFullYear()} جميع الحقوق محفوظة. وصفات حلال، صحية، ومناسبة للجميع.
        </div>
      </div>
    </footer>
  );
}
