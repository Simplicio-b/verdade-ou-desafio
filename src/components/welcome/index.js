import Play from '../../assets/play.svg'

// components
import { Text, BtnPlay, BoxDefault } from '../index'

function Welcome({ funcStartGame }) {
    return (
      <BoxDefault>
        <Text ft={40}>BEM-VINDO A VERDADE OU DESAFIO</Text>
        <BtnPlay
          h="100"
          w="100"
          onClick={() => funcStartGame(true)}
        >
          <img src={Play} alt="icon play" style={{ height: 40 }} />
        </BtnPlay>
      </BoxDefault>
    )
}

export default Welcome