import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";

import {FaBars} from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";


const DrawerMenu = ({ width=280, children }) => {

    const [isOpen, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(isOpen => !isOpen);
    }

    return (
        <>
            <div className="header">
                {/*클릭되었을 때 준비한 함수 호출! on off 개념*/}
                <FaBars onClick={() => toggleMenu()}></FaBars>
                {isOpen ? <ShowMenu>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ShowMenu> : <HideMenu>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                </HideMenu>}

            </div>
        </>
    );
}
export default DrawerMenu;

const ShowMenu = styled.ul`
  background-color: #ddd;
  width: 40%;
  height: 500px;
  position: absolute;
  left: 0;
  transition: 1s;
`

const HideMenu = styled.ul`
  width: 40%;
  height: 500px;
  position: absolute;
  left: -40%;
  transition: 1s;
`