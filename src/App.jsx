import './App.css'
import Cabecalho from './componentes/header/index';
import Main from './componentes/main/index'

function App() {

  return (
    <div className='container-corpo'>
      <Cabecalho></Cabecalho>
      <main>
        <Main></Main>
      </main>
      
    </div>
  )
}

export default App
