import Header from './components/Header'

function App() {
  return (
    <main>
      <Header />
        <form className="ingredients-form">
          <input className="ingredients-input" type="text" placeholder="e.g. oregano"/>
          <button className="add-ingredient-btn" type="submit">+ Add ingredient</button>
        </form>
    </main>
  )
}

export default App
