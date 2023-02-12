import React from "react";
import { PropText } from "../TilteComponent";
import styled from './header.module.css';
import { NavBar } from "../navBar";
export const Header = () => {
    return(
        <header className={styled.header}>
              <PropText
               Text= "store Tech"
               />
               <NavBar  />
        </header>
    )
}