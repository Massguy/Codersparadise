import React from 'react'
import { Container, FormWrap,Icon,FormButton,FormContent,Form,FormH1,FormInput,FormLabel} from '../Signin/signInElements';
const Login = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">CodersParadise</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor="for">Email</FormLabel>
                        <FormInput type="email" required />
                        <FormLabel htmlFor="for">password</FormLabel>
                        <FormInput type="password" required />
                        <FormButton type="submit">Continue</FormButton>
                    </Form>
                </FormContent>
          
                    
            </FormWrap>
        </Container>
        </>
    )
}

export default Login;
