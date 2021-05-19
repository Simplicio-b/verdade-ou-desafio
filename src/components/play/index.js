// components
import { 
  Text,
} from '../index'

function Welcome() {
    return (
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} >
        <Text ft={55}>JOGAR</Text>
        <div style={{ width: 400, height: 400, borderRadius: '100%', backgroundColor: '#A4D4A1', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
      </div>
    )
}

export default Welcome