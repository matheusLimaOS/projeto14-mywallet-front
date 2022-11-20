import { Link,useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../assets/MyWallet.png"
import { useState } from "react";
import axios from "axios";

export default function PaginaLogin() {
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");
    let [name,setName] = useState("");
    let [confirmPassword,setConfirmPassword] = useState("");
    let navigate = useNavigate();
    return (
        <Container>
            <ContainerForm>
                <img alt="MyWallet" src={logo}/>
                <form onSubmit={(e)=>handleSubmit(e,name,email,password,confirmPassword,navigate)}>
                    <input placeholder="Nome" value={name} onChange={(e)=>{setName(e.target.value)}} type="text"></input>
                    <input placeholder="E-mail" value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email"></input>
                    <input placeholder="Senha" value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password"></input>
                    <input placeholder="Confirme a senha" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} type="password"></input>
                    <button>Cadastrar</button>
                    <Link to="/">Já tem uma conta? Entre agora!</Link>
                </form>
            </ContainerForm>
        </Container>
    )
}

async function handleSubmit(e,name,email,password,confirmPassword,navigate){
    e.preventDefault();
    try{
        await axios.post("http://localhost:5000/signup",{name,email,password,confirmPassword});
        navigate("/");
    }
    catch(e){
        alert(e.response.data);
    }
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #8C11BE;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ContainerForm = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    flex-direction: column;
    h1{
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;

        color: #FFFFFF;
    }
    img{
        width: 147px;
        height: 50px;
        margin-bottom: 24px;
    }
    form{
        display: flex;
        width: 90%;
        flex-direction: column;
        input{
            border-radius: 5px;
            height: 58px;
            padding-left: 15px;
            margin-bottom: 13px;
            border: none;

            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;

            color: #000000;
        }
        button{
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 23px;

            color: #FFFFFF;
            border: none;
            height: 46px;
            background: #A328D6;
            border-radius: 5px;
            margin-bottom: 35px;
        }
        a{
            text-align: center;
            text-decoration: none;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 15px;
            line-height: 18px;

            color: #FFFFFF;
        }
    }
`