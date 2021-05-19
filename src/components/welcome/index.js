import Play from '../../assets/play.svg'

// components
import { Text, BtnPlay } from '../index'

function Welcome() {
    return (
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} >
        <Text ft={40}>BEM-VINDO A VERDADE OU DESAFIO</Text>
        <BtnPlay
          h="100"
          w="100"
        >
          <img src={Play} alt="icon play" style={{ height: 40 }} />
        </BtnPlay>
      </div>
    )
}

export default Welcome