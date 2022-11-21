import styled from "styled-components"
import { useNavigate } from "react-router-dom";

export default function Transação(props) {
    let {data,descricao,valor,tipo,_id} = props.transaction;
    let navigate = useNavigate();
    return (
        <Container onClick={()=>{handleClick(descricao,valor,tipo,_id,navigate)}}>
            <Data>{data}</Data>
            <Descricao>{descricao}</Descricao>
            <Valor cor={tipo==='E'}>{valor}</Valor>
        </Container>
    )
}

function handleClick(descricao,valor,tipo,_id,navigate){
    navigate('/cadastroRegistro', { state: { valor,descricao,tipo,id:_id } })
}

const Container = styled.div`
    display: flex;
    width: 92%;
    padding-top: 8px;
    position: relative;
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
    position: absolute;
    right: 0;

    color: ${props => props.cor ?  '#03AC00' : '#C70000'};
`

//let navigate = useNavigate();
//navigate('/sucesso', { state: { ids, compradores, selecionados, assentos } })
//const location = useLocation();