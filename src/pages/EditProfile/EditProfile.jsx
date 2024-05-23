// External Libs
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Local Modules
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { ErrorSpan } from "../../components/Navbar/NavbarStyle";
import { EditProfileContainer } from "./EditProfileStyle";
import { editProfileSchema } from "../../Schemas/editProfileSchema";
import { UserContext } from "../../Context/UserContext";
import { editProfile } from "../../services/userServices";

export function EditProfile() {
    const { user } = useContext(UserContext);
    const [apiError, setApiError] = useState("");
    const navigate = useNavigate();

    const {
        register: registerEditProfile,
        handleSubmit: handleRegisterEditProfile,
        formState: { errors: errorsEditProfile },
        setValue
    } = useForm({ resolver: zodResolver(editProfileSchema) })
    
    async function editProfileSubmit(data) {
        // cleanedData recebe tudo o que está presente em data (informações enviadas pelo formulário)
        const cleanedData = { ...data };
        
        // Remove os campos de senha se estiverem vazios, para que informações vazias não sejam enviadas ao BD
        // .trim() remove os espaços em branco no início e no fim da string
        if (!data.password?.trim()) {
            delete cleanedData.password;
        }
        if (!data.newPassword?.trim()) {
            delete cleanedData.newPassword;
        }
        if (!data.confirmNewPassword?.trim()) {
            delete cleanedData.confirmNewPassword;
        }

        try {
            await editProfile(cleanedData, user._id);
            navigate('/profile')
        } catch(err) {
            setApiError(err.response?.data?.message || "An error occurred");
        }
    }

    function fillUserData() {
        setValue("name", user.name);
        setValue("username", user.username);
        setValue("email", user.email);
        setValue("avatar", user.avatar);
        setValue("background", user.background);
    }

    useEffect(() => {
        fillUserData();
    })

    return (
        <EditProfileContainer>
            <h2>Editar Perfil</h2>

            <form onSubmit={handleRegisterEditProfile(editProfileSubmit)}>
                <Input type="text" placeholder="Nome" name="name" register={registerEditProfile} /> 
                {errorsEditProfile.name && (
                    <ErrorSpan>{errorsEditProfile.name.message}</ErrorSpan>
                )} 
                <Input type="text" placeholder="Nome de usuário" name="username" register={registerEditProfile} /> 
                {errorsEditProfile.username && (
                    <ErrorSpan>{errorsEditProfile.username.message}</ErrorSpan>
                )} 
                <Input type="email" placeholder="Email" name="email" register={registerEditProfile} /> 
                {errorsEditProfile.email && (
                    <ErrorSpan>{errorsEditProfile.email.message}</ErrorSpan>
                )} 
                <Input type="text" placeholder="Avatar de perfil" name="avatar" register={registerEditProfile} /> 
                {errorsEditProfile.avatar && (
                    <ErrorSpan>{errorsEditProfile.avatar.message}</ErrorSpan>
                )} 
                <Input type="text" placeholder="Imagem de fundo" name="background" register={registerEditProfile} /> 
                {errorsEditProfile.background && (
                    <ErrorSpan>{errorsEditProfile.background.message}</ErrorSpan>
                )}
                <Input type="password" placeholder="Senha atual" name="password" register={registerEditProfile} /> 
                {errorsEditProfile.password && (
                    <ErrorSpan>{errorsEditProfile.password.message}</ErrorSpan>
                )}
                {apiError && <ErrorSpan>{apiError}</ErrorSpan>}
                <Input type="password" placeholder="Nova senha" name="newPassword" register={registerEditProfile} /> 
                {errorsEditProfile.newPassword && (
                    <ErrorSpan>{errorsEditProfile.newPassword.message}</ErrorSpan>
                )}
                <Input type="password" placeholder="Confirmar nova senha" name="confirmNewPassword" register={registerEditProfile} /> 
                {errorsEditProfile.confirmNewPassword && (
                    <ErrorSpan>{errorsEditProfile.confirmNewPassword.message}</ErrorSpan>
                )}
                <Button type="submit" text={"Atualizar"} />
            </form>
        </EditProfileContainer>
    )
}