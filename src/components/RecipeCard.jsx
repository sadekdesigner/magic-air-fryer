import { Link } from 'react-router-dom';
import { Clock, Users, Flame } from 'lucide-react';

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1504644924869-0262f6f51393?auto=format&fit=crop&w=600&q=80';

export default function RecipeCard({ recipe, index }) {
  return (
    <Link
      to={`/recipe/${recipe.id}`}
      className="bg-surface-container-lowest rounded-3xl overflow-hidden ambient-shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group flex flex-col h-full animate-fade-in-up"
      style={{ animationDelay: `${500 + index * 50}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_IMG; }}
        />
        <div className="absolute top-3 right-3 flex gap-1 flex-wrap">
          {recipe.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-2 py-1 rounded-lg shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-primary">{recipe.tags[0]}</span>
          <div className="flex items-center gap-1 text-on-surface-variant">
            <Clock size={14} />
            <span className="text-xs">{recipe.cookTime}</span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-on-surface mb-2 line-clamp-1 group-hover:text-primary transition-colors duration-300">
          {recipe.title}
        </h3>
        <p className="text-sm text-on-surface-variant line-clamp-2 mb-4 flex-grow">
          {recipe.description}
        </p>

        <div className="grid grid-cols-3 gap-2 border-t border-surface-container-high pt-3 mt-auto">
          <div className="flex flex-col items-center text-on-surface-variant">
            <Clock size={14} className="mb-1" />
            <span className="text-[10px]">{recipe.cookTime}</span>
          </div>
          <div className="flex flex-col items-center text-on-surface-variant border-r border-l border-surface-container-high">
            <Users size={14} className="mb-1" />
            <span className="text-[10px]">{recipe.servings}</span>
          </div>
          <div className="flex flex-col items-center text-on-surface-variant">
            <Flame size={14} className="mb-1 text-primary-container" />
            <span className="text-[10px]">{recipe.calories}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
