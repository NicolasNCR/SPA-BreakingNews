import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { AuthContainer, Section } from './AuthenticationStyle';

export function Authentication() {
    // Os nomes não podem se repetir ("register" e etc), por isso, utilizamos apelidos ("registerSignup")
    const { 
        register: registerSignup,
        handleSubmit: handleSubmitSignup,  
        formState: { errors: errorsSignup } 
    } = useForm({
        // resolver: zodResolver(signupSchema),
    });

    const { 
        register: registerSignin,
        handleSubmit: handleSubmitSignin,  
        formState: { errors: errorsSignin } 
    } = useForm({
        // resolver: zodResolver(signinSchema),
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
                    <Input type="password" placeholder="Senha" name="password" register={registerSignin} />
                    <Button type="submit" text="Entrar" />
                </form>
            </Section>
            <Section type="signUp">
                <h2>Cadastrar</h2>
                <form onSubmit={handleSubmitSignup(upHandleSubmit)}>
                    <Input type="text" placeholder="Nome" name="name" register={registerSignup} />
                    <Input type="email" placeholder="Email" name="email" register={registerSignup} />
                    <Input type="password" placeholder="Senha" name="password" register={registerSignup} />
                    <Input type="password" placeholder="Confirmar senha" name="password" register={registerSignup} />
                    <Button type="submit" text="Cadastrar" />
                </form>
            </Section>
        </AuthContainer>
    )
}