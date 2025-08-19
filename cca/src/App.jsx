import Header from './components/Header'

function App() {

  const ingredientsArr = ["Chicken", "Oregano", "Tomatoes"]

  const ingredietsList = ingredientsArr.map(ingredient => {
    return(
      <li key={ingredient}>{ingredient}</li>
    )
  })

  function submitForm(e){
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newIngredient = formData.get("ingredient")
    ingredientsArr.push(newIngredient)
    console.log(ingredientsArr)
  }

  return (
    <main>

      <Header />

        <form onSubmit={submitForm} className="ingredients-form">
          <input className="ingredients-input" type="text" name="ingredient" placeholder="e.g. oregano" aria-label='add ingredient'/>
          <button className="add-ingredient-btn" type="submit">+ Add ingredient</button>
        </form>
        <ul className="ingredients-unordered-list">
          {ingredietsList}
        </ul>
    </main>
  )
}

export default App

/*
Przegląd projektu:
1. Użytkownik po uruchomieniu aplikacji widzi nagłówek oraz formularz umożliwiający wprowadzanie składników (ZROBIONE)
2. W momencie wprowadzania kolejnych składników zmienia się layout strony tak aby wyświetlać listę z kolejnymi dodanymi składnikami w formie <ul></ul> 
3. Dla wprowadzonych składników umożliwiam call to action w postaci przycisku generującego przepis
4. Naciśnięcie przycisku wysyła listę składników do modelu AI, który generuje dla nas przepis
5. Przepis wyświetlamy pod sekcją z przyciskiem generującym przepis
*/
