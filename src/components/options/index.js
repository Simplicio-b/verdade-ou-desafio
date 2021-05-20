// components
import { 
  Text,
  BtnOptionPlayer ,
  BoxDefault
} from '../index'

function Welcome() {
    return (
      <BoxDefault>
        <Text ft={40}>ESCOLHA QUANTOS JOGADORES</Text>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', marginTop: 40 }} >
          {
            [2, 3, 4, 5].map(e => (
              <BtnOptionPlayer key={e}>
                <Text ft={45}>{e}</Text>
              </BtnOptionPlayer>
            ))
          }
        </div>
      </BoxDefault>
    )
}

export default Welcome