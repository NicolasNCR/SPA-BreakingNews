// External Libs
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Local Modules
import { AddNewsContainer } from './ManageNewsStyle';
import { newsSchema } from '../../Schemas/newsSchema';
import { createNews } from '../../services/newsServices';
import { ErrorSpan } from '../../components/Navbar/NavbarStyle';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';

export function ManageNews() {
    const { action } = useParams();
    const navigate = useNavigate();

    const {
        register: registerNews,
        handleSubmit: handleRegisterNews,
        formState: { errors: errorsRegisterNews },
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
    
    return (
        <AddNewsContainer>
            <h2>{action == "add" ? "Adicionar" : "Atualizar"} Notícia</h2>
            <form onSubmit={
                action == "add" 
                    ? handleRegisterNews(registerNewsSubmit) 
                    : handleRegisterNews(editNewsSubmit)
                }
            >
                <Input type="text" placeholder="Título" name="title" register={registerNews} value={action !== "add" ? "title" : ""} /> 
                {errorsRegisterNews.title && (
                    <ErrorSpan>{errorsRegisterNews.title.message}</ErrorSpan>
                )} 
                <Input type="text" placeholder="Link da imagem" name="banner" register={registerNews} value={action !== "add" ? "banner link" : ""} />
                {errorsRegisterNews.banner && (
                    <ErrorSpan>{errorsRegisterNews.banner.message}</ErrorSpan>
                )}
                <Input type="text" placeholder="Texto" name="text" register={registerNews} isInput={false} value={action !== "add" ? "text" : ""} />
                {errorsRegisterNews.banner && (
                    <ErrorSpan>{errorsRegisterNews.text.message}</ErrorSpan>
                )}

                <Button type="submit" text={action === "add" ? "Adicionar" : "Atualizar"} />
            </form>
        </AddNewsContainer> 
    )
}