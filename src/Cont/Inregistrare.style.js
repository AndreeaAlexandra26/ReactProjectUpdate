import styled from "styled-components";



export const Container = styled.div`

 display:flex;
 flex-direction: column;
justify-content:center;
margin: auto;
gap: 20px;
margin-top: 40px;


 width: 500px;
`
export const Input = styled.input`
background: rgb(6, 244, 30);
border-radius: 6px;
border-color: black;
border-style:solid ;
&:active{
    border-color: #0dcaf0;
    border-style: ridge;
    border-width: 3px;
}

`


