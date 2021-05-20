import styled from 'styled-components'

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: linear-gradient(90deg, hsla(10, 100%, 66%, 0.8) 0%, hsla(290, 79%, 13%, 1) 100%);
`

export const Text = styled.p `
    margin: 0px;
    padding: 0px;
    text-shadow: 2px 2px black;
    color: ${e => e.color || '#FFF'};
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
   background-color: ${e => e.color || 'hsla(290, 79%, 13%, 0.8)'};
   border: none;
   box-shadow: 3px 3px hsla(10, 100%, 66%, 0.8);
   :hover {
       background-color: #408;
       box-shadow: -1px -1px hsla(7, 100%, 66%, 1);
   }
`

export const BtnOptionPlayer = styled.button `
    width: 95px;
    height: 110px;
    background-color: rgba(0, 0, 0, 0);
    border: 2px solid #FFF;
    border-radius: 4px;
    cursor: pointer;
    :hover {
        background-color: hsla(10, 100%, 66%, 0.5);
    }
`

export const BoxDefault = styled.div `
    flex: 1; 
    display: flex; 
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
