import React, { useState } from 'react'
// components
import { 
  Text,
} from '../index'

import {
  Box,
  Header,
  BoxRolette,
  Btn,
  Body,
  BtnClose
} from './styles'

import { PieChart } from 'react-minimal-pie-chart'

function Play({ data, funcCloseGame, playerSelected }) {

    // console.log(data)

    const [dataALL, setDataALL] = useState(data)

    const ramdomMath = () => parseInt(Math.random() * (dataALL.length - 1) + 1)

    const change = (val) => {
      const datas = data.map(e => {
        if(e.key === val) {
          switch(val) {
            case 1:
              return { title: 'One', value: 10, color: '#2962ff', key: 1 }
            case 2:
              return { title: 'Two', value: 10, color: '#d50000', key: 2 }
            case 3:
              return { title: 'Three', value: 10, color: '#ffd600', key: 3  }
            case 4:
              return { title: 'Four', value: 10, color: '#1b5e20', key: 4 }
            case 5:
              return { title: 'Five', value: 10, color: '#aa00ff', key: 5  }
            default:
              return 'void'
          }
        }
        return e
      })
      return setDataALL(datas)
    }

    const animationAndSelectOption = () => {
      let animationVezes = dataALL.length === 2 ? 5 : dataALL.length === 3 ? 4 : dataALL.length > 3 ? 3 : 2
      let contadorVezes = 1
      let val = 1

      let timer = setInterval(() => {
       change(val) 
        val++
        if(val > dataALL.length) {
          if(contadorVezes >= animationVezes) {
            const fim = ramdomMath()
            clearInterval(timer)
            change(fim)
            playerSelected(dataALL.filter(el => el.key === fim)[0])
          }else {
            val = 1
            contadorVezes++
          }
        }
      }, 350)
    }

    return (
      <Box>
        
        <Header>
          <Text ft={50}>JOGAR</Text>
          <BtnClose onClick={funcCloseGame}>
            <Text ft={40} color="#FFF">X</Text>
          </BtnClose>
        </Header>

        <Body>
          <BoxRolette>
            <PieChart
              lineWidth={90}
              label={(el) => el.dataEntry.title}
              labelPosition={68}
              labelStyle={{ fontSize: 9 }}
              animate
              data={dataALL} 
            />
          </BoxRolette>
          <Btn onClick={animationAndSelectOption} >PLAY</Btn> 
        </Body>
      </Box>
    )
}

export default Play