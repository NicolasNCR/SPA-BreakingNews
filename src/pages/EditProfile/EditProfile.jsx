// External Libs
import { useContext, useEffect } from "react";
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
    const navigate = useNavigate();

    const {
        register: registerEditProfile,
        handleSubmit: handleRegisterEditProfile,
        formState: { errors: errorsEditProfile },
        setValue
    } = useForm({ resolver: zodResolver(editProfileSchema) })
    
    async function editProfileSubmit(data) {
        try {
            await editProfile(data, user._id);
            navigate('/profile')
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        setValue("name", user.name);
        setValue("username", user.username);
        setValue("email", user.email);
        setValue("avatar", user.avatar);
        setValue("background", user.background);
    })

    return (
        <EditProfileContainer>
            <h2>Editar Perfil</h2>

            <form onSubmit={handleRegisterEditProfile(editProfileSubmit)}
            >
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
                <Button type="submit" text={"Atualizar"} />
            </form>
        </EditProfileContainer>
    )
}