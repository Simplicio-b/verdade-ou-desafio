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

function Welcome() {

    const [dataALL, setDataALL] = useState(
      [
        { title: 'One', value: 10, color: '#64b5f6', key: 1 },
        { title: 'Two', value: 10, color: '#e57373', key: 2 },
        { title: 'Three', value: 10, color: '#fff176', key: 3  },
        { title: 'Four', value: 10, color: '#81c784', key: 4 },
        { title: 'Five', value: 10, color: '#ce93d8', key: 5  },
      ]
    )

    const handleColorState = (val) => {
      switch(val) {
        case 1:
          return setDataALL(
            [
              { title: 'One', value: 10, color: '#2962ff', key: 1 },
              { title: 'Two', value: 10, color: '#e57373', key: 2 },
              { title: 'Three', value: 10, color: '#fff176', key: 3  },
              { title: 'Four', value: 10, color: '#81c784', key: 4 },
              { title: 'Five', value: 10, color: '#ce93d8', key: 5  },
            ]
          )
        case 2:
          return setDataALL(
            [
              { title: 'One', value: 10, color: '#64b5f6', key: 1 },
              { title: 'Two', value: 10, color: '#d50000', key: 2 },
              { title: 'Three', value: 10, color: '#fff176', key: 3  },
              { title: 'Four', value: 10, color: '#81c784', key: 4 },
              { title: 'Five', value: 10, color: '#ce93d8', key: 5  },
            ]
          )
        case 3:
          return setDataALL(
            [
              { title: 'One', value: 10, color: '#64b5f6', key: 1 },
              { title: 'Two', value: 10, color: '#e57373', key: 2 },
              { title: 'Three', value: 10, color: '#ffd600', key: 3  },
              { title: 'Four', value: 10, color: '#81c784', key: 4 },
              { title: 'Five', value: 10, color: '#ce93d8', key: 5  },
            ]
          )
        case 4:
          return setDataALL(
            [
              { title: 'One', value: 10, color: '#64b5f6', key: 1 },
              { title: 'Two', value: 10, color: '#e57373', key: 2 },
              { title: 'Three', value: 10, color: '#fff176', key: 3  },
              { title: 'Four', value: 10, color: '#1b5e20', key: 4 },
              { title: 'Five', value: 10, color: '#ce93d8', key: 5  },
            ]
          )
        case 5:
          return setDataALL(
            [
              { title: 'One', value: 10, color: '#64b5f6', key: 1 },
              { title: 'Two', value: 10, color: '#e57373', key: 2 },
              { title: 'Three', value: 10, color: '#fff176', key: 3  },
              { title: 'Four', value: 10, color: '#81c784', key: 4 },
              { title: 'Five', value: 10, color: '#aa00ff', key: 5  },
            ]
          )
        default:
          return setDataALL(
            [
              { title: 'One', value: 10, color: '#64b5f6', key: 1 },
              { title: 'Two', value: 10, color: '#e57373', key: 2 },
              { title: 'Three', value: 10, color: '#fff176', key: 3  },
              { title: 'Four', value: 10, color: '#81c784', key: 4 },
              { title: 'Five', value: 10, color: '#ce93d8', key: 5  },
            ]
          )
      }
    }

    const ramdomMath = () => parseInt(Math.random() * (dataALL.length - 1) + 1)
    
    const animationAndSelectOption = () => {
      let animationVezes = 2
      let contadorVezes = 1
      let val = 1

      let timer = setInterval(() => {
        handleColorState(val) 
        val++
        if(val > dataALL.length) {
          if(contadorVezes >= animationVezes) {
            const fim = ramdomMath()
            clearInterval(timer)
            handleColorState(fim)
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
          <BtnClose>
            <Text ft={40} color="hsla(10, 100%, 66%, 0.8)">X</Text>
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

export default Welcome