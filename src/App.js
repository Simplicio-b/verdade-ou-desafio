import React, { useState } from 'react'

// conponents
import {
  Container,
} from './components'

import Welcome from './components/welcome'
import Options from './components/options'
import Play from './components/play'
import FeedbackGame from './components/verdadeOrDesafio'

// styles
import './index.css'

const allData = [
  { title: 'One', value: 10, color: '#64b5f6', key: 1 },
  { title: 'Two', value: 10, color: '#e57373', key: 2 },
  { title: 'Three', value: 10, color: '#fff176', key: 3  },
  { title: 'Four', value: 10, color: '#81c784', key: 4 },
  { title: 'Five', value: 10, color: '#ce93d8', key: 5  },
]

function App() {

  const [playing, setPlaying] = useState(false)
  const [players, setPlayers] = useState(0)
  const [playaerSelected, setPlayaerSelected] = useState(null)

  const handleCloseGame = () => {
    setPlaying(false)
    setPlayers(null)
  }


  return (
    <Container>
      {!playing && (<Welcome funcStartGame={setPlaying} />)}
      {(playing && !players) && (<Options funcSetQtdPlayers={setPlayers} />)}
      {(playing && players) && 
        (
          <Play 
            funcCloseGame={handleCloseGame} 
            data={allData.slice(0, players)} 
            playerSelected={setPlayaerSelected}
          />
        )
      }
      {playaerSelected && 
        (<FeedbackGame 
          data={playaerSelected} 
          clearSelected={() => setPlayaerSelected(null)} 
        />)}
    </Container>
  )
}

export default App
