import styled from "styled-components"
import Background from "../../assets/background1.svg"


export const Container = styled.div`
    background:  url("${Background}");
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    height: 100vh;

`;

export const Image = styled.img`
    margin-top: 30px;


`;





export const InputLabel = styled.p`
    letter-spacing: -0.408px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;    
    line-height: 22px;
    color: #EEEEEE;
    margin-left: 25px;
`;

export const Input = styled.input`
    background: #FFFFFF40;
    box-shadow: 0px 4px 4px 0px #00000040;
    width: 342px;
    height: 58px;
    border-radius: 14px;
    border: none;
    outline: none;
    padding-left: 25px;
    color: #ffffff;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 34px;


`;



