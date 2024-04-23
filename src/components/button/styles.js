import styled from "styled-components";

export const Button = styled.button`
    background: ${ props => props.isBack ? "transparent" :"#000000CC" } ;
    width: 342px;
    height: 74px;
    margin-top: 130px;
    border-radius: 14px;
    border:${ props => props.isBack ? "1px solid #ffffff" :"none"} ;
    

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
        transform: ${ props => props.isBack && "rotateY(180deg)"};
    }
`;