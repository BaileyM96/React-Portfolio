import React from 'react';
import styled from 'styled-components';


const ContactHeader = styled.h2`
display: flex;
justify-content: center;
font-weight: bold;
color: #d97706;
font-size: 30px;

`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  padding: 50px;
  background-color: #f2f2f2;
  border-radius: 10px;
`;

const InputContainer = styled.div`
  margin: 20px 0;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  width: 100%;
  margin-bottom: 2%;
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  width: 100%;
  height: 150px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #d97706;
  color: white;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
  :hover {
    background-color: #c36f04;
  }
`;






export default function Contact() {
    return (
        <section>
            <ContactHeader id='Contact'>Contact</ContactHeader>
                <FormContainer>
                    <InputContainer>
                    <Label>Name:</Label>
                    <Input></Input>
                    <Label>Email Address:</Label>
                    <Input></Input>
                    <Label>Message:</Label>
                    <TextArea></TextArea>
            
                    </InputContainer>
                    <SubmitButton>Submit</SubmitButton>
                </FormContainer>
        </section>
    )
};