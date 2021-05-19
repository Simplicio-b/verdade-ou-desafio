// conponents
import {
  Container,
} from './components'

import Welcome from './components/welcome'
import Options from './components/options'

// styles
import './index.css'

function App() {
  return (
    <Container>
      {!true && (<Welcome />)}
      {true && (<Options />)}
    </Container>
  )
}

export default App
