// External Libs
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Local Modules
import { AddNewsContainer } from './ManageNewsStyle';
import { newsSchema } from '../../Schemas/newsSchema';
import { createNews, getNewsById } from '../../services/newsServices';
import { ErrorSpan } from '../../components/Navbar/NavbarStyle';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';

export function ManageNews() {
    const { id, action } = useParams();
    const navigate = useNavigate();

    const {
        register: registerNews,
        handleSubmit: handleRegisterNews,
        formState: { errors: errorsRegisterNews },
        setValue
    } = useForm({ resolver: zodResolver(newsSchema) })

    async function registerNewsSubmit(data) {
        try {
            await createNews(data);
            navigate('/profile')
        } catch(err) {
            console.log(err);
        }
    }

    // async function editNewsSubmit(data) {
    //     try {
    //         await editNews(data);
    //         navigate('/profile')
    //     } catch(err) {
    //         console.log(err);
    //     }
    // }
    
    async function findNewsById(id) {
        try {
            const { data } = await getNewsById(id);
            setValue("title", data.title);
            setValue("banner", data.banner);
            setValue("text", data.text);
            console.log(data);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if(action === "edit") {
            findNewsById(id)
        }
    })

    return (
        <AddNewsContainer>
            <h2>{action == "add" ? "Adicionar" : "Atualizar"} Notícia</h2>
            <form onSubmit={
                action == "add" 
                    ? handleRegisterNews(registerNewsSubmit) 
                    // : handleRegisterNews(editNewsSubmit)
                    : handleRegisterNews()
                }
            >
                <Input type="text" placeholder="Título" name="title" register={registerNews} /> 
                {errorsRegisterNews.title && (
                    <ErrorSpan>{errorsRegisterNews.title.message}</ErrorSpan>
                )} 
                <Input type="text" placeholder="Link da imagem" name="banner" register={registerNews} />
                {errorsRegisterNews.banner && (
                    <ErrorSpan>{errorsRegisterNews.banner.message}</ErrorSpan>
                )}
                <Input type="text" placeholder="Texto" name="text" register={registerNews} isInput={false} />
                {errorsRegisterNews.banner && (
                    <ErrorSpan>{errorsRegisterNews.text.message}</ErrorSpan>
                )}

                <Button type="submit" text={action === "add" ? "Adicionar" : "Atualizar"} />
            </form>
        </AddNewsContainer> 
    )
}