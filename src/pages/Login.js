import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from 'react-router-dom'
import styled from "styled-components";
import Swal from "sweetalert2";

import {login, login2, setLoading} from "../redux/modules/user";
import {LoginP} from "../img";
import eyeOff from "../img/icon/eyeOff.svg";
import eyeOn from "../img/icon/eyeOn.svg";
import KakaoButton from "../components/KakaoButton";
import theme from "../styles/theme";

const Login = (props) => {
    const {join} = useParams();
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const loading = useSelector((state) => state.user.loading)

    const [username, setUsername] = useState('')
    const [pw, setPw] = useState('')
    const [hidePassword, setHidePassword] = useState(true)

    const toggleHidePassword = () => {
        setHidePassword(!hidePassword)
    }

    const Login = () => {
        if (join) {
            if (username === '' || pw === '') {
                Swal.fire({
                    // title: 'Error!',
                    text: '아이디, 비밀번호 모두 입력해주세요',
                    icon: 'error',
                })
            } else {
                const loginData = {
                    username,
                    password: pw,
                };
                dispatch(login2({data: loginData, join, navigate}));
            }
        }
        if (!join) {
            if (username === '' || pw === '') {
                Swal.fire({
                    // title: 'Error!',
                    text: '아이디, 비밀번호 모두 입력해주세요',
                    icon: 'error'
                })
            } else {
                const loginData = {
                    username,
                    password: pw,
                };
                dispatch(login({data: loginData, navigate}));
            }
        }
    };

    //엔터 입력시
    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            Login();
        }
    };

    if (loading === 'pending') {
        return 'loading...'
    }
    if (loading === 'failed') {
        setTimeout(() => {
            dispatch(setLoading('idle'))
        }, 1000)
        return 'failed...'
    }

    return (
        <Container>
            <h3 className='login-text'>로그인</h3>
            <InputBox>
                <input
                    placeholder='아이디를 입력하세요'
                    onKeyPress={handleKeyPress}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </InputBox>

            <InputBox>
                <input
                    placeholder='비밀번호 입력하세요'
                    type={hidePassword ? 'password' : 'text'}
                    onKeyPress={handleKeyPress}
                    onChange={(e) => setPw(e.target.value)}
                />
                {hidePassword && <img alt='eye-off' src={eyeOff} onClick={toggleHidePassword}/>}
                {!hidePassword && <img alt='eye-on' src={eyeOn} onClick={toggleHidePassword}/>}
            </InputBox>

            <LoginBox>
                <button
                    onClick={Login}
                >로그인
                </button>
                <KakaoButton/>
            </LoginBox>

            <SignupBox>
                <span>아직 회원이 아니신가요?</span>
                {join ?
                <p onClick={() => {
                    navigate(`/signup/${join}`)
                }}>회원가입하기</p>
                :
                <p onClick={() => {
                    navigate('/signup')
                }}>회원가입하기</p>
            }
            </SignupBox>

            <LoginLogoBox>
                <img alt='login-page' src={LoginP}/>
            </LoginLogoBox>
        </Container>
    )
}

export default Login

const Container = styled.div`
  position: relative;
  height: 100%;
  background-color: ${theme.color.gray7};

  .login-text {
    color: black;
    font-size: 24px;
    font-weight: bold;
    padding: 130px 0 30px 40px;
  }
`

const InputBox = styled.div`
  position: relative;
  display: flex;
  width: 80%;
  margin: 0 auto 20px auto;

  input {
    background-color: ${theme.color.white};
    padding: 12px;
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 10px;
  }

  img {
    position: absolute;
    right: 10px;
    top: 7px;
  }
`
const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto 30px auto;

  button {
    width: 90%;
    height: 40px;
    border: none;
    border-radius: 10px;
    color: black;
    background-color: #A1ED00;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 15px;
  }
`

const SignupBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;

  span {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    color: black;
  }

  p {
    display: flex;
    justify-content: center;
    color: black;
    cursor: pointer;
    font-weight: bold;
    text-decoration: underline
  }
`

const LoginLogoBox = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`