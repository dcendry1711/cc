import { useState } from 'react'
import Header from './components/Header'
import Recipe from './components/Recipe'
import IngredientsList from './components/IngredientsList' 
import Cta from './components/Cta'
import Form from './components/Form'
import {getRecipeFromChefClaude} from './ai.js'

function App() {

  //deklaracja state z tablicą zawierającą składniki, dodawane w ramach działania aplikacji (na starcie aplikacji brak jakichkolwiek składników w tablicy)

  const [ingredientsArr, setIngredientsArr] = useState([]) 

  //funkcja obsługująca dodanie nowego składnika z formularza (plus czyszczenie formularza po wprowadzeniu składnika)

  function addIngredient(formData){
    const newIngredient = formData.get("ingredient")
    setIngredientsArr(prevIngredientsArr => [...prevIngredientsArr, newIngredient])
  }

  //deklaracja state monitorującego czy wyświetlono przepis

  const [isRecipeShown, setIsRecipeShown] = useState(false)

  //funckja obsługująca status zmiennej isRecipeShown

  async function generateRecipe(){
    setIsRecipeShown( prevRecipeShown => !prevRecipeShown)
    const readyRecipe = await getRecipeFromChefClaude(ingredientsArr)
    setGeneratedRecpie( prevRecipe => readyRecipe)
  }

  //funkcja obsługująca czyszczenie wygenerowanego przepisu

  function clearRecipe(){
    setIngredientsArr( prevIngredientsArr => [])
    setIsRecipeShown( prevIsRecipeShown => false)
    setGeneratedRecpie( prevRecipe => '')
  }

  //deklaracja state przetrzymującego informację o wygenerowanym przepisie przez AI (domyślnie brak wpisu dla zmiennej)

  const [generatedRecipe, setGeneratedRecpie] = useState('')

  return (
    <main>

      <Header />

      <Form addIngredient={addIngredient}/>

      {ingredientsArr.length > 0 && <IngredientsList  ingredientsArr={ingredientsArr}/>}
        
      {ingredientsArr.length > 2 && <Cta generateRecipe={generateRecipe} isRecipeShown={isRecipeShown}/>}

      {generatedRecipe && <Recipe generatedRecipe={generatedRecipe}  clearRecipe={clearRecipe} />}

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
  7b. Naciśnięcie przycisku wysyła listę składników do modelu AI, który generuje dla nas przepis (ZROBIONE)
  8. Przepis wyświetlamy pod sekcją z przyciskiem generującym przepis (ZROBIONE)
  9. Przepis zwrócony przez AI należy odpowiednio wystylować
  10. Stworzyć przycisk usuwający wygenerowany przycisk tak aby wrócić do stanu wyjściowego umożliwiającego wprowadzanie nowych składników
*/
