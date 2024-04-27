import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import logo from '../../images/logo.png';
import { Nav, LogoImage, InputSpace, ErrorSpan } from './NavbarStyle';
import { Button } from '../Button/Button';

// Schema
const searchSchema = z.object({
    title: z
    .string()
    .nonempty({ message: "Por favor, digite algo para pesquisar." })
    .refine(value => !/^\s*$/.test(value), { message: "Por favor, digite algo para pesquisar." } ), // "/^\s*$/" é uma regex que confere se existem espaços (" ") em uma string
})

export function Navbar(){
    const { register, handleSubmit, reset, formState: {errors} } = useForm({
        resolver: zodResolver(searchSchema),
    });
    const navigate = useNavigate();

    function onSearch(data) {
        const { title } = data;
        navigate(`/search/${title}`);
        reset(); // limpa todos os inputs
    }

    return (
        <>
            <Nav>
                <form onSubmit={handleSubmit(onSearch)}>
                    <InputSpace>
                        <button type='submit'>
                            <i className="bi bi-search"></i>
                        </button>
                        <input {...register("title")} type="text" placeholder="Pesquise por um título" />
                    </InputSpace>
                </form>
                {/* "Link" funciona como um href */}
                <Link to='/'>
                    <LogoImage src={logo} alt="Logo do Breaking News" />
                </Link>
                <Link to='/auth'>
                    <Button type="button" text="Entrar">Entrar</Button>
                </Link>
            </Nav>
            {errors.title && <ErrorSpan><i className="bi bi-exclamation-triangle-fill"></i> {errors.title.message}</ErrorSpan>}
            <Outlet />
        </>
    )
} 