import React from "react";
import {Outlet} from 'react-router-dom'
import { Header } from "../../components/header";
import style from './default.module.css'
import { Container } from "../../components/container";
import { Footer } from "../../components/footer";

export const DefaultPage = () =>{
    return(
        <Container ContainerClass={style.container}>
            <Header />

            <Outlet/>

            <Footer />

        </Container>
    )
}