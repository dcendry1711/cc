export default function Cta(props){
    return(
        <section className="cta-section">
            <div className="cta-text">
            <h3>Gotowy na przepis?</h3>
            <p>Wygeneruj przepis z listy składników</p>
            </div>
            <button onClick={props.generateRecipe} disabled={props.isRecipeShown} className="cta-btn">Pobierz przepis</button>
        </section>
    )
}