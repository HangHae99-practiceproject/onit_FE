import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import { createGlobalStyle } from "styled-components";

//pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import PastPlan from "./pages/PastPlan";
import AddPlans from "./pages/AddPlans";
import Home from "./pages/Home";
import PlanSetName from "./pages/PlanSetName";
import EditPlan from "./pages/EditPlan";
import OAuthHandler from "./service/OAuthHandler";

//redux
import { setFCMToken } from "./redux/modules/user";
import { useDispatch, useSelector } from "react-redux";

//firebase
import { messaging, app } from './firebase';
import { deleteToken, getToken, getMessaging, onMessage } from 'firebase/messaging'
import { onBackgroundMessage } from "firebase/messaging/sw";
//cookie
import { getCookie, deleteCookie, setCookie } from "./shared/utils/Cookie";

function App() {
    const dispatch = useDispatch();
    const islogin = localStorage.getItem('token') ? true : false;
    const userNick = document.cookie.split("=")[1];
    const user = useSelector(state => state?.user?.user_info)
    const browsernoti = Notification.permission === 'granted' ? true : false;

  useEffect(() => {
    // if (user.isNoticeAllowed !== undefined) {
    //   // console.log('noti ', user);
    //   if (browsernoti === user.isNoticeAllowed) {
    //     // console.log('noti서로 같음', user.isNoticeAllowed);
    //     return;
    //   } else {
        // console.log('noti서로 다름', user.isNoticeAllowed);
        if(islogin) {
          if (!browsernoti) {
          console.log('알람을 받을수 없다')
          const data = {
            token: '',
          };
          console.log(data)
          getToken(messaging, {
            vapidKey: "BLg2NeG06gdfa1DbdDn1E6VFSD8a82zuaxgPXS5drdMaqUSf_lY421iglOkbev53HaDsl2jkw5vxgMaA4b6wfug",
          }).then(token => {
            deleteToken(messaging).then(() => {
              console.log('deleteFCMtoken');
              localStorage.removeItem('FCMtoken');
            });
          });
          dispatch(setFCMToken(data));
          return;
        } else {
          console.log('noti 토큰 보냄');
          getToken(messaging, {
            vapidKey: "BLg2NeG06gdfa1DbdDn1E6VFSD8a82zuaxgPXS5drdMaqUSf_lY421iglOkbev53HaDsl2jkw5vxgMaA4b6wfug",
          }).then(token => {
            console.log(token);
            localStorage.setItem('FCMtoken', token);
            const data = {
              token: localStorage.getItem('FCMtoken'),
            };
            dispatch(setFCMToken(data));
          });
        }
        } return;
      }
  )
  const messaging = getMessaging(app);
  onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
  });

//   onBackgroundMessage(messaging, (payload) => {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };

//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });


  return (
      <>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/add" element={<AddPlans/>}/>
          <Route path="/main" element={<Main/>}/>
          <Route path="/detail/:planId" element={<Detail/>}/>
          <Route path="/details/:url" element={<PlanSetName islogin={islogin} userNick={userNick} />} />
          <Route path="/past" element={<PastPlan/>}/>
          <Route path="/edit/:planId" element={<EditPlan/>}/>
          <Route path="/users/kakao/callback" element={<OAuthHandler/>}/>
        </Routes>
        <GlobalStyle/>
      </>

  );
}

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

