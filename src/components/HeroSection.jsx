import { Link } from 'react-router-dom';
import { Play, Star } from 'lucide-react';

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1504644924869-0262f6f51393?auto=format&fit=crop&w=600&q=80';

export default function HeroSection({ recipe }) {
  return (
    <section className="mb-8 relative rounded-3xl overflow-hidden ambient-shadow-md hover:shadow-xl transition-all duration-500 group cursor-pointer h-[400px] md:h-[500px] animate-fade-in-up">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_IMG; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
      </div>

      <div className="absolute bottom-0 right-0 w-full p-6 md:p-8 flex flex-col md:flex-row justify-between items-end gap-4">
        <div className="text-white transform transition-transform duration-500 group-hover:-translate-y-2">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider shadow-sm">
              وصفة اليوم
            </span>
            <div className="flex items-center gap-1 text-primary-fixed-dim">
              <Star size={16} fill="currentColor" />
              <span className="text-xs font-medium">4.9</span>
            </div>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-2">{recipe.title}</h1>
          <p className="text-white/90 max-w-2xl line-clamp-2 text-sm md:text-base">
            {recipe.description}
          </p>
        </div>

        <Link
          to={`/recipe/${recipe.id}`}
          className="flex-shrink-0 bg-primary-container text-on-primary-container hover:bg-primary-container/90 px-8 py-4 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-300 active:scale-95 w-full md:w-auto justify-center hover:scale-105 hover:shadow-lg ripple-bg"
        >
          <Play size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
          ابدأ الطهي
        </Link>
      </div>
    </section>
  );
}
