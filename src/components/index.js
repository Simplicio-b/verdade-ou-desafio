import styled from 'styled-components'

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: linear-gradient(#e66465, #9198e5);
`

export const Text = styled.p `
    text-shadow: 2px 2px black;
    color: #FFF;
    font-size: ${e => e.ft || 30}px;
`

export const BtnPlay = styled.button `
   display: flex;
   align-items: center;
   justify-content: center;
   height: ${e => e.h || 80}px;
   width: ${e => e.w || 80}px;
   border-radius: 100px;
   cursor: pointer;
   background-color: ${e => e.color || '#9298e2'};
   border: none;
   box-shadow: 3px 3px #9280D0;
`

export const BtnOptionPlayer = styled.button `
    width: 95px;
    height: 110px;
    background-color: #CCC;
    border: 2px solid #222;
    border-radius: 4px;
    cursor: pointer;
`
