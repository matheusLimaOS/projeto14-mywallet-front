import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";
import { AuthContext } from "../providers/Auth";

export default function Transação(props) {
    let {user} = React.useContext(AuthContext);
    let {data,descricao,valor,tipo,_id} = props.transaction;
    let navigate = useNavigate();
    return (
        <Container>
            <div onClick={()=>{handleClick(descricao,valor,tipo,_id,navigate)}}>
                <Data>{data}</Data>
                <Descricao>{descricao}</Descricao>
            </div>
            <div>
                <Valor cor={tipo==='E'}>{valor}</Valor>
                <Excluir onClick={()=>{excluir(_id,user.token,props.deletou,props.setDeletou)}}>X</Excluir>
            </div>
        </Container>
    )
}

async function excluir(_id,token,deletou,setDeletou){
    let veri = window.confirm("Deseja realmente excluir o registro?");

    if(veri){
        try{
            await axios.delete(`${process.env.REACT_APP_BASE_URL}/transactions/${_id}`,{
                headers: {
                    token: token
                }
            })

            setDeletou(!deletou);
        }
        catch(e){
            console.log(e);
        }
    }
}
function handleClick(descricao,valor,tipo,_id,navigate){
    navigate('/cadastroRegistro', { state: { valor,descricao,tipo,id:_id } })
}


const Excluir = styled.button`
    font-family: 'Raleway',sans-serif;
    right: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    border: none;
    background-color: white;
    color: #C6C6C6;
`

const Container = styled.div`
    display: flex;
    width: 92%;
    padding-top: 8px;
    justify-content: space-between;
    div{
        display: flex;
    }
`

const Data = styled.p`
    font-family: 'Raleway', sans-serif;;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #C6C6C6;
`

const Descricao = styled.p`
    font-family: 'Raleway',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-left: 15px;

    color: #000000;
`

const Valor = styled.p`
    font-family: 'Raleway',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    right: 0;
    margin-right: 5px;

    color: ${props => props.cor ?  '#03AC00' : '#C70000'};
`

//let navigate = useNavigate();
//navigate('/sucesso', { state: { ids, compradores, selecionados, assentos } })
//const location = useLocation();