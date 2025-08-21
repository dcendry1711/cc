import { useState } from 'react'
import Header from './components/Header'

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
          </section>
        }
        
    </main>
  )
}

export default App

/*
  Przegląd projektu:
  1. Użytkownik po uruchomieniu aplikacji widzi nagłówek oraz formularz umożliwiający wprowadzanie składników (ZROBIONE)
  2. W momencie wprowadzania kolejnych składników zmienia się layout strony tak aby wyświetlać listę z kolejnymi dodanymi składnikami w formie <ul></ul> (ZROBIONE)
  3. Dla wprowadzonych składników umożliwiam call to action w postaci przycisku generującego przepis
  4. Naciśnięcie przycisku wysyła listę składników do modelu AI, który generuje dla nas przepis
  5. Przepis wyświetlamy pod sekcją z przyciskiem generującym przepis
*/
