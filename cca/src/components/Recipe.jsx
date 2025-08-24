export default function Recipe(props){

    return(
        <section className="recipe-section">
            <h2>Chef Claude Recommends:</h2>
            <article className="suggested-recipe-container" aria-live="polite">
               {props.generatedRecipe}
            </article>

            <button onClick={() => props.clearRecipe()} className="clear-recipe-btn">Clear recipe</button>

        </section>
    )
}