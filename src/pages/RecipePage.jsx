import { useParams, Navigate } from 'react-router-dom';
import recipesData from '../data/recipes';
import RecipeDetail from '../components/RecipeDetail';

export default function RecipePage() {
  const { id } = useParams();
  const recipe = recipesData.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <Navigate to="/" replace />;
  }

  return <RecipeDetail recipe={recipe} />;
}
