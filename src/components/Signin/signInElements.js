import styled from 'styled-components'
import {Link} from 'react-router-dom';

export const Container =styled.div`
background:#fff;
min-height:692px;
position:fixed;
bottom:0;
left:0;
right:0;
top:0;
z-index:0;
overflow:hidden;


`
export const FormWrap=styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;


@media screen and (max-width:400px){
   height:80%
}
`

export const Icon=styled(Link)`
margin-left:32px;
margin-top:32px;
text-decoration:none;
color:#000;
font-weight:700;
font-size:32px;

@media screen and (max-width:480px){
   margin-left:16px;
   margin-top:8px;
}
`
export const FormContent = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:center;

@media screen and (max-width:480px){
   padding:10px;
}
`
export const FormH1=styled.h1`
margin-bottom:40px;
font-size:20px;
font-weight:400;
text-align:center;
`

export const FormLabel = styled.label`
margin-bottom:8px;
font-size:14px;
color:#fff;
`

export const Form =styled.form`
background:#ffa64d;
display:grid;
width:100%;
padding:100px 100px 100px 100px;
height:auto;
z-index:1;
border-radius:4px;
max-width:400px;
margin-bottom:100px;

@media screen and (max-width:400px){
   padding:32px 32px;
}

`
export const FormInput=styled.input`

margin-bottom:32px;
padding:16px 16px;
border:none;
border-radius:4px;

`

export const FormButton=styled.button`
border-radius:20px;
border:1px solid #ff4b2b;
background:#ff4b2b;
color:#fff;
font-size:12px;
font-weight:bold;
padding:12px 45px;
letter-spacing:1px;
text-transform:uppercase;
transition:transform 80ms ease-in;
`

export const Text= styled.span`
text-align:center;
margin-top:24px;
color:'#fff';
font-size:14px;
`