import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import logo from '../../images/logo.png';
import { Nav, Button, LogoImage, InputSpace } from './NavbarStyle';

export function Navbar(){
    const { register, handleSubmit, reset } = useForm();
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
                <Button>Entrar</Button>
            </Nav>
            <Outlet />
        </>
    )
} 