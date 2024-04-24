import { Outlet } from "react-router-dom";
import logo from "../../images/logo.png";
import { Nav, Button, LogoImage, InputSpace } from "./NavbarStyle";

export function Navbar(){
    return (
        <>
            <Nav>
                <InputSpace>
                    <i className="bi bi-search"></i>
                    <input type="text" placeholder="Pesquise por um título" />
                </InputSpace>
                <LogoImage src={logo} alt="Logo do Breaking News" />
                <Button>Entrar</Button>
            </Nav>
            <Outlet />
        </>
    )
} 