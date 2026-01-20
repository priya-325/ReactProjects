import { useState } from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromChefClaude, getRecipeFromMistral } from "../ai";

/**
 * Challenge: Get a recipe from the AI!
 *
 * This will be a bit harder of a challenge that will require you
 * to think critically and synthesize the skills you've been
 * learning and practicing up to this point.
 *
 * We'll start with a mini-quiz:
 *
 * 1. Think about where the recipe response should live and how you're
 *    going to make sure it doesn't disappear between each state change in
 *    the app. (I don't mean between refreshes of your mini-browser.
 *    You don't need to save this to localStorage or anything more permanent
 *    than in React's memory for now.)
 *
 * I'm going to save the response in React state.
 *
 * 2. What action from the user should trigger getting the recipe?
 * When the user clicks the get a recipe button
 *
 *
 * * Using either the `getRecipeFromChefClaude` function or the
 * `getRecipeFromMistral` function, make it so that when the user
 * clicks "Get a recipe", the text response from the AI is displayed
 * in the <ClaudeRecipe> component.
 *
 * For now, just have it render the raw markdown that the AI returns,
 * don't worry about making it look nice yet. (We're going to use a
 * package that will render the markdown for us soon.)
 */

export default function Main() {
  //   const [ingredients, setIngredients] = useState([
  //     "Chicken",
  //     "Oregano",
  //     "Tomatoes",
  //   ]);
  //   const [ingredients, setIngredients] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  // const [recipeShown, setRecipeShown] = useState(false);
  const [recipe, setRecipe] = useState("");

  async function getRecipe() {
    // setRecipeShown((prevShown) => !prevShown);
    const recipeMarkdown = await getRecipeFromChefClaude(ingredients);
    setRecipe(recipeMarkdown);
  }

  function addIngredient(formData) {
    // event.preventDefault();
    // const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    // ingredients.push(newIngredient);
    // console.log(ingredients);
    setIngredients((prev) => [...prev, newIngredient]);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {/* <ul>{ingredientsListItems}</ul> */}
      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      )}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
