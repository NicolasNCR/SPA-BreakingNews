// External Libs
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Local Modules
import { AddNewsContainer } from './ManageNewsStyle';
import { newsSchema } from '../../Schemas/newsSchema';
import { createNews, deleteNews, editNews, getNewsById } from '../../services/newsServices';
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

    async function editNewsSubmit(data) {
        try {
            await editNews(data, id);
            navigate('/profile')
        } catch(err) {
            console.log(err);
        }
    }
    
    async function findNewsById(id) {
        try {
            const { data } = await getNewsById(id);
            setValue("title", data.news.title);
            setValue("banner", data.news.banner);
            setValue("text", data.news.text);
        } catch(err) {
            console.log(err);
        }
    }

    async function deleteNewsSubmit() {
        try {
            await deleteNews(id)
            navigate('/profile')
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if(action === "edit" || action === "delete") {
            findNewsById(id)
        }
    })

    return (
        <AddNewsContainer>
            <h2>{action === "add" ? "Adicionar" : action === "edit" ? "Atualizar" : "Apagar"} Notícia</h2>
            <form onSubmit={
                action === "add" 
                    ? handleRegisterNews(registerNewsSubmit) 
                    : action === "edit" ? handleRegisterNews(editNewsSubmit)
                    : handleRegisterNews(deleteNewsSubmit)
                }
            >
                <Input type="text" placeholder="Título" name="title" register={registerNews} disabled={action === "delete"} /> 
                {errorsRegisterNews.title && (
                    <ErrorSpan>{errorsRegisterNews.title.message}</ErrorSpan>
                )} 
                <Input type="text" placeholder="Link da imagem" name="banner" register={registerNews} disabled={action === "delete"} />
                {errorsRegisterNews.banner && (
                    <ErrorSpan>{errorsRegisterNews.banner.message}</ErrorSpan>
                )}
                <Input type="text" placeholder="Texto" name="text" register={registerNews} isInput={false} disabled={action === "delete"} />
                {errorsRegisterNews.banner && (
                    <ErrorSpan>{errorsRegisterNews.text.message}</ErrorSpan>
                )}

                <Button type="submit" text={action === "add" ? "Adicionar" : action === "edit" ? "Atualizar" : "Deletar"} />
            </form>
        </AddNewsContainer> 
    )
}