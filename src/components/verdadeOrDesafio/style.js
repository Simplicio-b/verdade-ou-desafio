import styled from 'styled-components'

export const MainBox = styled.div `
    background-color: rgba(0, 0, 0, 0.8);
    height: 100vh;
    width: 100%;
    position: absolute;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const VddOuDesafioBtn = styled.button `
    margin-top: 10px;
    height: 55px;
    width: 120px;
    margin-left: 15px;
    cursor: pointer;
    background-color: ${e => e.collor || '#f5f5f5'};
    border: none;
    color: #ffff;
    border-radius: 10px;
    box-shadow: -1px 1px #FFF;
    font-size: 18px;
    font-weight: 700;
`
