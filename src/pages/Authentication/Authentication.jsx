import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { AuthContainer, Section } from "./AuthenticationStyle";

export function Authentication() {
    return (
        <AuthContainer>
            <Section type="signIn">
                <h2>Entrar</h2>
                <form>
                    <Input type="email" placeholder="Email" name="email" />
                    <Input type="password" placeholder="Senha" name="password" />
                    <Button type="submit" text="Entrar" />
                </form>
            </Section>
            <Section type="signUp">
                <h2>Cadastrar</h2>
                <form>
                    <Input type="text" placeholder="Nome" name="name" />
                    <Input type="email" placeholder="Email" name="email" />
                    <Input type="password" placeholder="Senha" name="password" />
                    <Input type="password" placeholder="Confirmar senha" name="password" />
                    <Button type="submit" text="Cadastrar" />
                </form>
            </Section>
        </AuthContainer>
    )
}