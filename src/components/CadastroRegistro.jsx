import styled from "styled-components"
import { useLocation,useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import React from "react";
import { AuthContext } from "../providers/Auth";

export default function CadastroRegistro() {
    const location = useLocation();
    let {user} = React.useContext(AuthContext);
    let {valor,descricao,tipo,id} = location.state;
    let [value,setValue] = useState(valor === undefined ? "" : valor);
    let [description,setDescription] = useState(descricao === undefined ? "" : descricao);
    let navigate = useNavigate();
    return (
        <Container>
                <Header>
                    <h1>
                        Nova {tipo === 'E' ? 'Entrada' : 'Saida'}
                    </h1>
                </Header>
            <ContainerForm>
                <form onSubmit={(e)=>handleSubmit(e,user.token,value,id,description,tipo,navigate)}>
                    <input type="number" placeholder="Valor" value={value} onChange={(e)=>setValue(e.target.value)}></input>
                    <input placeholder="Descrição"  value={description} onChange={(e)=>setDescription(e.target.value)} type="text"></input>
                    <button>Salvar {tipo === 'E' ? 'Entrada' : 'Saida'}</button>
                </form>
            </ContainerForm>
        </Container>
    )
}

async function handleSubmit(e,token,value,id,description,tipo,navigate){
    e.preventDefault();
    
    if(id){
        try{
            await axios.put("http://localhost:5000/transactions",{_id:id,tipo,valor:parseFloat(value),descricao:description},{
                headers: {
                    token: token
                }
            })

            navigate("/Home");
        }
        catch(e){
            console.log(e);
        }
    }
    else{
        try{
            await axios.post("http://localhost:5000/transactions",{tipo,descricao:description,valor:parseFloat(value)},{
                headers: {
                    token: token
                }
            })

            
            navigate("/Home");
        }
        catch(e){
            console.log(e)
        }
        
    }
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Raleway',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
    height: 90px;
    width: 100%;
    h1{
        margin-left: 25px;
    }
`
const ContainerForm = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    flex-direction: column;
    h1{
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

            font-family: 'Raleway',sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;

            color: #000000;
        }
        button{
            font-family: 'Raleway',sans-serif;
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
            font-family: 'Raleway',sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 15px;
            line-height: 18px;

            color: #FFFFFF;
        }
    }
`