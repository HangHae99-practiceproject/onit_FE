import React from 'react';
import styled from "styled-components";
import Logo from '../img/Logo.svg'
import Event from '../img/icon/event.svg'
import Gift from '../img/icon/gift.svg'
import First from '../img/1st.png'
import Second from '../img/2nd.png'
import Third from '../img/3rd.png'
import theme from "../styles/theme";

const EventBackGround = (props) => {

    return (
        <Container>
            <HeadContainer>
                <img alt='logo' src={Logo}/>
                <p>온세상을 잇다, 온잇</p>
            </HeadContainer>

            <Text>
                <p>만들고, 공유하고, 확인하는 약속 공유 플랫폼 온잇에서</p>
                <p>모든 약속을 관리하고 세상과 나를 이어보세요.</p>
            </Text>

            <EventContainer>
                {/*<img alt='event' src={Event}/>*/}
                <div className='event'>Event</div>
                <p>온잇에서 약속 계획 만들고, 친구들에게 공유하고 선물 받자!</p>
                <img alt='gift' src={Gift}/>
            </EventContainer>

            <EventDateContainer>
                <h5>참여기간</h5>
                <p> 2022.05.27(금) ~ 06.03(금)</p>
            </EventDateContainer>

            <EventJoinContainer>
                <h5>참여방법</h5>
                <div className='step'>
                    <div className='step-by-step'>
                        <p>Step 1.</p>
                        <p>약속을 만들고 친구들과 실시간 위치를 공유해 보세요~</p>
                    </div>
                    <div className='step-by-step'>
                        <p>Step 2.</p>
                        <p>온잇을 이용하면서 찾은 오류들을 구글폼에 통해 제출해 주세요~</p>
                    </div>
                    <div className='step-by-step'>
                        <p>Step 3.</p>
                        <button
                            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdWEil2no-Yr36o5IdMrNLpLfgvt1DPUyUC3cPyQ72GFoBSPQ/viewform', '_blank')}>참여
                        </button>
                        <p>'참여' 버튼을 눌러서 참여하면 끝입니다.</p>
                    </div>
                </div>
            </EventJoinContainer>

            <GiftContainer>
                <h5>상품</h5>
                <div className='img-container'>
                    <img alt='first' src={First}/>
                    <img alt='second' src={Second}/>
                    <img alt='third' src={Third}/>
                </div>
            </GiftContainer>
        </Container>
    );
}

export default EventBackGround;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 50px;
  margin-left: 100px;
  padding-left: 100px;
  @media (max-width: 1520px) {
    margin-left: 0;
    padding-left: 50px;
  }
  @media (max-width: 1400px) {
    margin-left: 0;
    padding-left: 0;
  }
`

const HeadContainer = styled.div`
  display: flex;
  flex-direction: row;
  //margin-left: 100px;

  img {
    width: 50%;
    max-width: 200px;
  }

  p {
    font-weight: bold;
    font-size: 20px;
    display: flex;
    align-items: end;
    justify-content: center;
    margin-left: 20px;
  }
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 25px 0;

  p {
    padding: 5px;
    font-size: 18px;
  }
`

const EventContainer = styled.div`
  display: flex;
  //margin-left: 100px;
  margin-bottom: 25px;
  min-width: 640px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 50px;
    background-color: ${theme.color.green};
    font-weight: bold;
    font-size: 30px;
    border: none;
    border-radius: 10px;
  }

  p {
    font-weight: bold;
    font-size: 26px;
    display: flex;
    align-items: end;
    margin-left: 40px;
    padding-bottom: 6px;
    min-width: 600px;
    line-height: 50px;
  }

  img:last-of-type {
    margin-left: 40px;
    width: 50px;
    height: 50px;
  }
`

const EventDateContainer = styled.div`
  display: flex;
  margin-bottom: 25px;
  //margin-left: 100px;

  h5 {
    width: 15%;
    font-weight: bold;
    font-size: 24px;
    min-width: 155px;
    line-height: 30px;
  }

  p {
    display: flex;
    align-items: end;
    font-weight: bold;
    font-size: 20px;
    margin-left: 30px;
    line-height: 30px;
  }
`

const EventJoinContainer = styled.div`
  display: flex;
  margin-bottom: 25px;
  //margin-left: 100px;

  h5 {
    width: 15%;
    font-weight: bold;
    font-size: 24px;
    min-width: 155px;
    line-height: 30px;
  }

  .step {
    width: 80%;
    margin-left: 25px;
  }

  .step-by-step {
    display: flex;
    align-items: center;
    background-color: ${theme.color.white};
    width: 80%;
    min-width: 640px;
    max-width: 650px;
    height: 50px;
    margin-bottom: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(132, 132, 132, 0.4);
  }

  button {
    width: 10%;
    height: 30px;
    margin-left: 30px;
    background-color: ${theme.color.green};
    border: none;
    border-radius: 10%;
    font-weight: bold;
    font-size: 18px;
  }

  p:first-of-type {
    width: 10%;
    font-size: 18px;
  }

  p {
    display: flex;
    align-items: end;
    margin: 0 0 0 30px;
    font-weight: bold;
  }
`

const GiftContainer = styled.div`
  display: flex;
  //margin-left: 100px;

  .img-container {
    min-width: 660px;
    margin-left: 20px;
  }

  h5 {
    width: 15%;
    font-weight: bold;
    font-size: 24px;
    min-width: 155px;
    line-height: 30px;
  }

  img {
    width: 100%;
    max-width: 220px;
  }
`

