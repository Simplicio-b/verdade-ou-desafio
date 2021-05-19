// conponents
import {
  Container,
} from './components'

import Welcome from './components/welcome'
import Options from './components/options'
import Play from './components/play'

// styles
import './index.css'

function App() {
  return (
    <Container>
      {!true && (<Welcome />)}
      {!true && (<Options />)}
      {true && (<Play />)}
    </Container>
  )
}

export default App
