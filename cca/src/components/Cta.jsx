export default function Cta(props){
    return(
        <section className="cta-section">
            <div className="cta-text">
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={props.generateRecipe} className="cta-btn">Get a recipe</button>
        </section>
    )
}