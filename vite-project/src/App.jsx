import './App.css'
import Intro from './components/Intro'
import Result from './components/Result'
import Start from './components/Start'
import Title from './components/Title'
import Values from './components/Inputs'

function App() {

  return (
    <section id='contents'>
      <div className='wrapper'>
        <Title />
        <Intro />
        <Values />
        <Start />
        <Result />
      </div>
    </section>
  )
}

export default App
