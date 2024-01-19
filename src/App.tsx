import Cabecalho from './styles'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal from './styles'

function App() {
  return (
    <>
      <Cabecalho />
      <EstiloGlobal />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </>
  )
}

export default App
