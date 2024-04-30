import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { AuthContainer, Section } from './AuthenticationStyle';
import { ErrorSpan } from '../../components/Navbar/NavbarStyle';
import { signinSchema } from '../../Schemas/signinSchema';
import { signupSchema } from '../../Schemas/signupSchema';

export function Authentication() {
    // Os nomes não podem se repetir ("register" e etc), por isso, utilizamos apelidos ("registerSignup")
    const { 
        register: registerSignup,
        handleSubmit: handleSubmitSignup,  
        formState: { errors: errorsSignup } 
    } = useForm({
        resolver: zodResolver(signupSchema),
    }); 

    const { 
        register: registerSignin,
        handleSubmit: handleSubmitSignin,  
        formState: { errors: errorsSignin } 
    } = useForm({
        resolver: zodResolver(signinSchema),
    });

    function inHandleSubmit(data) {
        console.log(data)
    }

    function upHandleSubmit(data) {
        console.log(data)
    }

    return (
        <AuthContainer>
            <Section type="signIn">
                <h2>Entrar</h2>
                <form onSubmit={handleSubmitSignin(inHandleSubmit)}>
                    <Input type="email" placeholder="Email" name="email" register={registerSignin} />
                    {errorsSignin.email && <ErrorSpan><i className="bi bi-exclamation-triangle-fill"></i> {errorsSignin.email.message}</ErrorSpan>}
                    <Input type="password" placeholder="Senha" name="password" register={registerSignin} />
                    {errorsSignin.password && <ErrorSpan><i className="bi bi-exclamation-triangle-fill"></i> {errorsSignin.password.message}</ErrorSpan>}
                    <Button type="submit" text="Entrar" />
                </form>
            </Section>
            <Section type="signUp">
                <h2>Cadastrar</h2>
                <form onSubmit={handleSubmitSignup(upHandleSubmit)}>
                    <Input type="text" placeholder="Nome" name="name" register={registerSignup} />
                    {errorsSignup.name && <ErrorSpan><i className="bi bi-exclamation-triangle-fill"></i> {errorsSignup.name.message}</ErrorSpan>}
                    <Input type="email" placeholder="Email" name="email" register={registerSignup} />
                    {errorsSignup.email && <ErrorSpan><i className="bi bi-exclamation-triangle-fill"></i> {errorsSignup.email.message}</ErrorSpan>}
                    <Input type="password" placeholder="Senha" name="password" register={registerSignup} />
                    {errorsSignup.password && <ErrorSpan><i className="bi bi-exclamation-triangle-fill"></i> {errorsSignup.password.message}</ErrorSpan>}
                    <Input type="password" placeholder="Confirmar senha" name="confirmPassword" register={registerSignup} />
                    {errorsSignup.confirmPassword && <ErrorSpan><i className="bi bi-exclamation-triangle-fill"></i> {errorsSignup.confirmPassword.message}</ErrorSpan>}
                    <Button type="submit" text="Cadastrar" />
                </form>
            </Section>
        </AuthContainer>
    )
}