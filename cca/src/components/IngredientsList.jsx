export default function IngredientsList(props){

      //iteracja po elementach ingredientsArr w celu utworzenia elementu JSX w postaci <li></li> z podawanymi składnikami

    const ingredietsList = props.ingredientsArr.map(ingredient => {
        return(
        <li key={ingredient}>{ingredient}</li>
        )
    })

    return(
        <section className='ingredientsList-section'>
            <h2 className="ingredients-header">Lista składników:</h2>
            <ul className="ingredients-unordered-list">
              {ingredietsList}
            </ul>
            {props.ingredientsArr.length < 3 ? <p className="ingredientsList-tip">*Dodaj do listy jeszcze {3 - props.ingredientsArr.length} składnik/ki aby wygenerować przepis!</p> : null}
        </section>
    )
}