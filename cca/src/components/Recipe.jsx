import ReactMarkdown from 'react-markdown'

export default function Recipe(props){

    return(
        <section className="recipe-section">
            <article className="suggested-recipe-container" aria-live="polite">
               <ReactMarkdown>{props.generatedRecipe}</ReactMarkdown>
            </article>

            <button onClick={() => props.clearRecipe()} className="clear-recipe-btn">Usuń przepis</button>

        </section>
    )
}