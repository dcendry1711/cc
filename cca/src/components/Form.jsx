export default function Form(props){
    return(
        <form action={props.addIngredient} className="ingredients-form">
            <input className="ingredients-input" type="text" name="ingredient" placeholder="e.g. oregano" aria-label='add ingredient'/>
            <button className="add-ingredient-btn" type="submit">+ Add ingredient</button>
        </form>
    )
}