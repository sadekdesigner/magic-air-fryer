import { UtensilsCrossed } from 'lucide-react';
import RecipeCard from './RecipeCard';

export default function RecipeGrid({ recipes }) {
  if (recipes.length === 0) {
    return (
      <div className="text-center py-20 bg-surface-container-lowest rounded-3xl shadow-sm">
        <UtensilsCrossed size={48} className="mx-auto text-surface-container-high mb-4" />
        <h3 className="text-xl font-bold text-on-surface">لا توجد وصفات تطابق بحثك</h3>
        <p className="text-on-surface-variant mt-2">جرب البحث بكلمات أخرى أو تغيير التصنيف.</p>
      </div>
    );
  }

  return (
    <section>
      <div className="flex justify-between items-end mb-6 animate-fade-in-up">
        <h2 className="font-display text-2xl font-semibold text-on-surface">
          الوصفات الموصى بها
        </h2>
        <span className="text-sm text-on-surface-variant">
          {recipes.length} وصفة
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {recipes.map((recipe, index) => (
          <RecipeCard key={recipe.id} recipe={recipe} index={index} />
        ))}
      </div>
    </section>
  );
}
