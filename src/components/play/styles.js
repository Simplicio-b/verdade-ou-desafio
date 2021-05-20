import styled from 'styled-components'

export const Box = styled.div `
    flex: 1; 
    display: flex; 
    flex-direction: column;
`

export const Header = styled.div `
    display: flex; 
    height: 100; 
    align-items: center; 
    justify-content: space-between; 
    padding: 10px 30px;
`

export const BoxRolette = styled.div `
    height: 400px;
    width: 400px;
    border-radius: 100%;
    border: 6px solid #FFF;
    overflow: hidden;
    box-shadow: -4px 3px #0009;
`

export const Btn = styled.button `
    height: 45px;
    width: 90px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    background-color: #00A35E;
    color: #FFF;
    font-size: 16px;
    font-weight: 700;
    box-shadow: -1.5px 1.5px #333;
    :hover {
        background-color: #01A13E;
    }
`

export const Body = styled.div `
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const BtnClose = styled.button `
    border-radius: 100%;
    padding: 10px;
    height: 65px;
    width: 65px;
    background-color: transparent;
    border: 2.5px solid hsla(10, 100%, 66%, 0.8);
    cursor: pointer;
`
