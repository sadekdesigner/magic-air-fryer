import { useState, useMemo } from 'react';
import recipesData from '../data/recipes';
import HeroSection from '../components/HeroSection';
import SearchBar from '../components/SearchBar';
import FilterChips from '../components/FilterChips';
import RecipeGrid from '../components/RecipeGrid';

const allTags = ['الكل', 'دجاج', 'لحوم', 'أسماك', 'نباتي', 'سناكس', 'فطور', 'حلويات', 'صحي', 'جانبي', 'كيتو'];

export default function BrowsePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('الكل');

  // Pick a random "recipe of the day"
  const recipeOfTheDay = useMemo(() => {
    return recipesData[Math.floor(Math.random() * recipesData.length)];
  }, []);

  const filteredRecipes = useMemo(() => {
    return recipesData.filter((recipe) => {
      const matchesSearch =
        recipe.title.includes(searchQuery) ||
        recipe.description.includes(searchQuery) ||
        recipe.tags.some((tag) => tag.includes(searchQuery));
      const matchesTag = activeTag === 'الكل' || recipe.tags.includes(activeTag);
      return matchesSearch && matchesTag;
    });
  }, [searchQuery, activeTag]);

  return (
    <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-8 py-6">
      {/* Search Bar */}
      <SearchBar value={searchQuery} onChange={setSearchQuery} />

      {/* Filter Chips */}
      <FilterChips tags={allTags} activeTag={activeTag} onTagChange={setActiveTag} />

      {/* Hero Section - Recipe of the Day */}
      <HeroSection recipe={recipeOfTheDay} />

      {/* Recipe Grid */}
      <RecipeGrid recipes={filteredRecipes} />
    </main>
  );
}
