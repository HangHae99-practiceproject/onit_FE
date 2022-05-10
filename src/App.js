import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import PastPlan from "./pages/PastPlan";
import AddPlans from "./pages/AddPlans";
import Test from "./pages/Test";
import Home from "./pages/Home";
import PlanSetName from "./pages/PlanSetName";
import Real from "./pages/teeest";
import EditPlan from "./pages/EditPlan";
import OAuthHandler from "./service/OAuthHandler";
import OAuthKakaoHandler from "./service/OAuthKakaoHandler";


function App() {

    const isLogin = !!localStorage.getItem('token');
    const userNick = document.cookie.split("=")[1];


    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/add" element={<AddPlans/>}/>
                <Route path="/main" element={<Main/>}/>
                <Route path="/detail/:planId" element={<Detail/>}/>
                <Route path="/details/:url" element={<PlanSetName isLogin={isLogin} userNick={userNick} />} />
                <Route path="/past" element={<PastPlan/>}/>
                <Route path="/test" element={<Test/>}/>
                <Route path="/real" element={<Real/>}/>
                <Route path="/edit/:planId" element={<EditPlan/>}/>
                <Route path="/users/kakao/callback" element={<OAuthHandler/>}/>
            </Routes>
            <GlobalStyle/>
        </>
    );
}

// 노란색 #FFD046 / 라임색 #A1ED00

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`

export default App;

