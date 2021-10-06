import React from "react";

import { Container, Logo, Content, TitleMenu, MenuItens } from './style';

import logo from "../../assets/logo.png"

function Menu(){
    return(
        <>
            <Container>
                <Logo>
                    <img src={logo} alt="Logotipo"/> 
                </Logo>
                <Content>
                    <TitleMenu>
                        <h5>MEU PAINEL</h5>
                    </TitleMenu>
                    {/* TROCAR POR MAP */}
                    <MenuItens>
                        <p>DASHBOARD</p>
                    </MenuItens>
                    <MenuItens>
                        <p>CLIENTES</p>
                    </MenuItens>
                    <MenuItens>
                        <p>ESTOQUE</p>    
                    </MenuItens>
                    <MenuItens>
                        <p>FORNECEDORES</p>
                    </MenuItens>
                    <MenuItens>
                        <p>CONTAS A RECEBER</p>
                    </MenuItens>
                    <MenuItens>
                        <p>CONTAS A PAGAR</p>
                    </MenuItens>
                </Content>
            </Container>
        </>
    );
}

export default Menu;