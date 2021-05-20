// components
import {
    MainBox,
    VddOuDesafioBtn
} from './style'

import {
    Text,
} from '../index'

function Feedback({clearSelected, data}) {

    return (
      <MainBox>
        <Text ft={40}>VERDADE OU DESAFIO {data.title} ?</Text>
        <div style={{ width: '100%', height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={clearSelected}>
            <VddOuDesafioBtn
                collor="#00A660" 
                onClick={clearSelected}
            >
                VEDADE
            </VddOuDesafioBtn>
            <VddOuDesafioBtn
                collor="#FF2030"
                onClick={clearSelected}
            >
                DEAFIO
            </VddOuDesafioBtn>
        </div>
      </MainBox>
    )
}

export default Feedback