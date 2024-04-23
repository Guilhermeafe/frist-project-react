import styled from "styled-components"
import Background from "../../assets/background.svg"


export const Container = styled.div`
    background:  url("${Background}");
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    height: 100%;
    min-height: 100vh;

`;

export const Image = styled.img`
    margin-top: 30px;


`;







export const Button = styled.button`
    background: transparent;
    width: 342px;
    height: 74px;
    margin-top: 120px;
    border-radius: 14px;
    border: 1px solid #ffffff;

    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;
    color: #ffffff;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }

    img{
        transform: rotateY(180deg);
    }
`;

export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;

    background: #FFFFFF40;
    box-shadow: 0px 4px 4px 0px #00000040;
    width: 342px;
    height: 58px;
    border-radius: 14px;
    border: none;
    outline: none;
    margin-top: 20px;

    p{
        color: #ffffff;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`