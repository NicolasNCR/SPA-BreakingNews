// External Libs
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

// Local Modules
import { Nav, LogoImage, InputSpace, ErrorSpan, UserLoggedSpace } from './NavbarStyle';
import logo from '../../images/logo.png';
import { Button } from '../Button/Button';
import { searchSchema } from '../../Schemas/searchSchema';
import { userLogged } from '../../services/userServices';
import { UserContext } from '../../Context/UserContext';

export function Navbar(){
    const { 
        register,
        handleSubmit, 
        reset, 
        formState: { errors } 
    } = useForm({
        resolver: zodResolver(searchSchema),
    });

    const navigate = useNavigate();

    const {user, setUser} = useContext(UserContext);

    function onSearch(data) {
        const { title } = data;
        navigate(`/search/${title}`);
        reset(); // limpa todos os inputs
    }

    async function findUserLogged() {
        try {
            const response = await userLogged();
            setUser(response.data)
        } catch(err) {
            console.log(err)
        }
    }

    function signout() {
        Cookies.remove("token");
        setUser(undefined);
        navigate('/');
    }

    // Sempre que o navbar for renderizado, será realizado o que está no useEffect
    useEffect(() => {
        // Se existir um token registrado no cookie, a função findUserLogged() será executada
        if (Cookies.get("token")) {
            findUserLogged();
        } 
    }, []);

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
                {/* Verifica se "user" é um objeto definido e se possui alguma chave. Se sim, aparecerá o "UserLoggedSpace", se não, aparecerá o botão de entrar */}
                {user && Object.keys(user).length !== 0 ? (
                    <UserLoggedSpace>
                        <Link to='/profile'>
                            <h2>{user.name}</h2>
                        </Link>
                        <i className="bi bi-box-arrow-right" onClick={signout}></i>
                    </UserLoggedSpace>
                ) : (
                    <Link to='/auth'>
                        <Button type="button" text="Entrar">Entrar</Button>
                    </Link>                 
                )}
            </Nav>
            {errors.title && <ErrorSpan><i className="bi bi-exclamation-triangle-fill"></i> {errors.title.message}</ErrorSpan>}
            <Outlet />
        </>
    )
} 