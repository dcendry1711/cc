import { useState } from 'react'
import Header from './components/Header'
import Recipe from './components/Recipe'

function App() {

  //deklaracja state z tablicą zawierającą składniki, dodawane w ramach działania aplikacji (na starcie aplikacji brak jakichkolwiek składników w tablicy)

  const [ingredientsArr, setIngredientsArr] = useState([]) 

  //iteracja po elementach ingredientsArr w celu utworzenia elementu JSX w postaci <li></li> z podawanymi składnikami

  const ingredietsList = ingredientsArr.map(ingredient => {
    return(
      <li key={ingredient}>{ingredient}</li>
    )
  })

  //funkcja obsługująca dodanie nowego składnika z formularza (plus czyszczenie formularza po wprowadzeniu składnika)

  function addIngredient(formData){
    const newIngredient = formData.get("ingredient")
    setIngredientsArr(prevIngredientsArr => [...prevIngredientsArr, newIngredient])
  }

  //deklaracja state monitorującego czy wyświetlono przepis

  const [isRecipeShown, setIsRecipeShown] = useState(false)

  //funckja obsługująca status zmiennej isRecipeShown

  function generateRecipe(){
    setIsRecipeShown( prevRecipeShown => !prevRecipeShown)
  }

  return (
    <main>

      <Header />

        <form action={addIngredient} className="ingredients-form">
          <input className="ingredients-input" type="text" name="ingredient" placeholder="e.g. oregano" aria-label='add ingredient'/>
          <button className="add-ingredient-btn" type="submit">+ Add ingredient</button>
        </form>

        {ingredientsArr.length > 0 &&
          <section className='ingredientsList-section'>
            <h2 className="ingredients-header">Ingredients list:</h2>
            <ul className="ingredients-unordered-list">
              {ingredietsList}
            </ul>
            {ingredientsArr.length < 3 ? <p className="ingredientsList-tip">*Type {3 - ingredientsArr.length} more ingredients to generate recipe from my app!</p> : null}
          </section>}
        

        {ingredientsArr.length > 2 &&
        <section className="cta-section">
          <div className="cta-text">
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={generateRecipe} className="cta-btn" disabled={isRecipeShown}>Get a recipe</button>
        </section>}

        {isRecipeShown && <Recipe />}

    </main>
  )
}

export default App

/*
  Przegląd projektu:
  1. Użytkownik po uruchomieniu aplikacji widzi nagłówek oraz formularz umożliwiający wprowadzanie składników (ZROBIONE)
  2. W momencie wprowadzania kolejnych składników zmienia się layout strony tak aby wyświetlać listę z kolejnymi dodanymi składnikami w formie <ul></ul> (ZROBIONE)
  3. Lista składników jest wyświetlana dynamicznie. Póki nie ma składników w tablicy, nie wyświetla się sekcja z listą składników. (ZROBIONE)
  4. Stworzenie sekcji call to action z przyciskiem umożliwiającym generowanie przepisu (ZROBIONE)
  5. Dynamiczne wyświetlanie informacji o wymaganej ilości składników w celu wyświetlenia sekcji cta (ZROBIONE)
  6. Dla wprowadzonych składników (przynajmniej 3) umożliwiam call to action w postaci przycisku generującego przepis (ZROBIONE)
  7a. Naciśnięcie przycisku na CTA wyświetli na sztywno przygotowany przepis -> wersja testowa (ZROBIONE)
  7b. Naciśnięcie przycisku wysyła listę składników do modelu AI, który generuje dla nas przepis
  8. Przepis wyświetlamy pod sekcją z przyciskiem generującym przepis
*/
