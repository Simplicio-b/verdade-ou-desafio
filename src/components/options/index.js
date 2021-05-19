// components
import { 
  Text,
  BtnOptionPlayer 
} from '../index'

function Welcome() {
    return (
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} >
        <Text ft={40}>ESCOLHA QUANTOS JOGADORES</Text>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }} >
          {
            [2, 3, 4, 5].map(e => (
              <BtnOptionPlayer key={e}>
                <Text>{e}</Text>
              </BtnOptionPlayer>
            ))
          }
        </div>
      </div>
    )
}

export default Welcome