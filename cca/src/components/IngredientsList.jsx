export default function IngredientsList(props){

      //iteracja po elementach ingredientsArr w celu utworzenia elementu JSX w postaci <li></li> z podawanymi składnikami

    const ingredietsList = props.ingredientsArr.map(ingredient => {
        return(
        <li key={ingredient}>{ingredient}</li>
        )
    })

    return(
        <section className='ingredientsList-section'>
            <h2 className="ingredients-header">Ingredients list:</h2>
            <ul className="ingredients-unordered-list">
              {ingredietsList}
            </ul>
            {props.ingredientsArr.length < 3 ? <p className="ingredientsList-tip">*Type {3 - props.ingredientsArr.length} more ingredients to generate recipe from my app!</p> : null}
        </section>
    )
}