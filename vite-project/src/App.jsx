import './App.css'
import Intro from './components/Intro'
import Result from './components/Result'
import Start from './components/Start'
import Title from './components/Title'
import Values from './components/Inputs'
import Modal from './components/Modal'
import Copyright from './components/Copyright'

function App() {

  return (
    <body>
      <section id='contents'>
        <div className='wrapper'>
          <Title />
          <Intro />
          <Values />
          <Start />
          <Result />
        </div>
      </section>
      <section id='modal'>
        <Modal />
      </section>
      <section id='copyright'>
        <Copyright />
      </section>
    </body>
  )
}

export default App
