import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, Flame, UtensilsCrossed, ChefHat, Info } from 'lucide-react';

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1504644924869-0262f6f51393?auto=format&fit=crop&w=600&q=80';

export default function RecipeDetail({ recipe }) {
  const [checkedIngredients, setCheckedIngredients] = useState([]);

  const toggleIngredient = (index) => {
    setCheckedIngredients((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <main className="flex-grow w-full max-w-[1280px] mx-auto pb-8 overflow-hidden">
      {/* Hero Section */}
      <section className="w-full relative h-[400px] md:h-[500px] min-h-[300px] overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="hero-image-animate w-full h-full object-cover rounded-b-3xl md:rounded-none shadow-sm"
          onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_IMG; }}
        />
        {/* Back button */}
        <Link
          to="/"
          className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/40 hover:scale-110 transition-all duration-300 shadow-sm z-20"
        >
          <ArrowRight size={20} />
        </Link>
      </section>

      {/* Recipe Content Container */}
      <div className="px-4 md:px-8 -mt-6 relative z-20 md:mt-6 max-w-4xl mx-auto">
        {/* Header Info Card */}
        <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm border border-surface-container-low mb-6">
          <div className="flex flex-wrap gap-2 mb-2">
            {recipe.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-on-surface mb-2">
            {recipe.title}
          </h1>
          <p className="text-on-surface-variant mb-4 text-sm md:text-base">
            {recipe.description}
          </p>

          <div className="flex flex-wrap gap-4 items-center text-on-surface-variant text-sm border-t border-surface-container-high pt-4 mt-2">
            <div className="flex items-center gap-1">
              <Clock size={16} className="text-primary" />
              <span>التحضير: {recipe.prepTime}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-outline-variant"></div>
            <div className="flex items-center gap-1">
              <Clock size={16} className="text-primary" />
              <span>الطهي: {recipe.cookTime}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-outline-variant"></div>
            <div className="flex items-center gap-1">
              <Users size={16} className="text-primary" />
              <span>{recipe.servings}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-outline-variant"></div>
            <div className="flex items-center gap-1">
              <Flame size={16} className="text-primary" />
              <span>{recipe.calories}</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column: Ingredients */}
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm border border-surface-container-low sticky top-24">
              <h2 className="text-xl font-bold text-on-surface mb-4 flex items-center gap-2">
                <UtensilsCrossed size={20} className="text-primary" />
                المقادير
              </h2>
              <ul className="space-y-0">
                {recipe.ingredients.map((ingredient, idx) => (
                  <li
                    key={idx}
                    className="border-b border-surface-container-high last:border-0 py-2"
                  >
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input
                          type="checkbox"
                          className="ingredient-checkbox peer sr-only"
                          checked={checkedIngredients.includes(idx)}
                          onChange={() => toggleIngredient(idx)}
                        />
                        <div className="w-6 h-6 border-2 border-outline rounded-full flex items-center justify-center transition-all duration-300 group-hover:border-primary">
                          <svg
                            className="w-4 h-4 text-white hidden"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M5 13l4 4L19 7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <span className="ingredient-label-text text-sm text-on-surface">
                        {ingredient}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Instructions */}
          <div className="md:col-span-7 order-1 md:order-2">
            <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm border border-surface-container-low mb-6">
              <h2 className="text-xl font-bold text-on-surface mb-4 flex items-center gap-2">
                <ChefHat size={20} className="text-primary" />
                طريقة التحضير
              </h2>
              <div className="space-y-6 relative">
                {recipe.instructions.map((step, idx) => (
                  <div
                    key={idx}
                    className="relative flex items-start gap-4 group opacity-100 transition-all duration-500 hover:!opacity-100 hover:scale-[1.01]"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-container text-on-primary text-sm font-bold flex items-center justify-center z-10 shadow-sm border-4 border-surface-container-lowest transition-transform duration-300 group-hover:scale-110">
                      {idx + 1}
                    </div>
                    <div className="bg-surface rounded-2xl p-4 shadow-[0_2px_4px_rgba(0,0,0,0.05)] border border-surface-container flex-grow transition-all duration-300 group-hover:shadow-md group-hover:border-outline-variant">
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nutritional Info Grid */}
            <div className="bg-surface-container-lowest rounded-3xl p-4 shadow-sm border border-surface-container-low">
              <h3 className="text-sm font-medium text-on-surface-variant mb-4 flex items-center gap-1 uppercase tracking-wider">
                <Info size={16} />
                القيمة الغذائية
                <span className="lowercase tracking-normal text-outline text-xs">(لكل حصة)</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
                <div className="bg-surface-container p-3 rounded-2xl hover:bg-surface-variant transition-colors duration-300">
                  <div className="text-2xl font-bold text-primary">{recipe.calories}</div>
                  <div className="text-xs text-on-surface-variant">سعرات</div>
                </div>
                <div className="bg-surface-container p-3 rounded-2xl hover:bg-surface-variant transition-colors duration-300">
                  <div className="text-2xl font-bold text-on-surface">{recipe.carbs}</div>
                  <div className="text-xs text-on-surface-variant">كربوهيدرات</div>
                </div>
                <div className="bg-surface-container p-3 rounded-2xl hover:bg-surface-variant transition-colors duration-300">
                  <div className="text-2xl font-bold text-on-surface">{recipe.protein}</div>
                  <div className="text-xs text-on-surface-variant">بروتين</div>
                </div>
                <div className="bg-surface-container p-3 rounded-2xl hover:bg-surface-variant transition-colors duration-300">
                  <div className="text-2xl font-bold text-on-surface">{recipe.fat}</div>
                  <div className="text-xs text-on-surface-variant">دهون</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
