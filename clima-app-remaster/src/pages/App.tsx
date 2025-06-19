import './AppStyled.css'
// função que ativa a requisição no input
// função que envia o pedido  

export function App() {
  return (
    <>
      <header>
        <img 
          // src="../Group 165.svg" 
          alt="ícone Clima app"
          class="logo-display"
        />
    <div class="input-wrapper">
        <input 
            type="text" 
            id="city-input" 
            placeholder="Search Location..."
        />
        <button id="search-button">
            <img 
                class="src-display"
                // src="../fa_search.svg" 
                alt="botão de busca"
            />
        </button>
    </div>
</header>

    </>
  )
}
