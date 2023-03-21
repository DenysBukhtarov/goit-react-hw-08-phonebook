import styled from "styled-components";
import {Form, Field, ErrorMessage } from 'formik';

export const FormContact = styled(Form)`
padding: 15px 32px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export const Container = styled.div`
padding-left: 20px;
padding-right: 20px;
margin-left: auto;
margin-right: auto;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
flex-direction: column;

width: 100%;

@media screen  and (min-width: 768px){
    flex-direction: row;
    padding-left: 32px;
    padding-right: 32px;
}

@media screen  and (min-width: 1280px){
    padding-left: 16px;
    padding-right: 16px;
}
`;

export const ErrorText = styled(ErrorMessage)`
color: tomato;
`;

export const Input = styled(Field)`
all: unset;
display: flex;
border: 2px solid black;
margin: 10px 0;
padding: 15px;
font-size: 20px;
&:focus-visible{
    border-radius: 4px;
    border: 3px solid lightblue;
}

`;