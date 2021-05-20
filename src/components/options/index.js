// components
import { 
  Text,
  BtnOptionPlayer ,
  BoxDefault
} from '../index'

import  {
  BoxBtns
} from './styles'

function Options({ funcSetQtdPlayers }) {
    return (
      <BoxDefault>
        <Text ft={40}>ESCOLHA QUANTOS JOGADORES</Text>
        <BoxBtns>
          {
            [2, 3, 4, 5].map(e => (
              <BtnOptionPlayer key={e} onClick={() => funcSetQtdPlayers(e)}>
                <Text ft={45}>{e}</Text>
              </BtnOptionPlayer>
            ))
          }
        </BoxBtns>
      </BoxDefault>
    )
}

export default Options