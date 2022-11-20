import styled from "styled-components"
import { LogOutOutline } from 'react-ionicons'
import { Link } from "react-router-dom"
import { AddCircleOutline } from 'react-ionicons'
import { RemoveCircleOutline } from 'react-ionicons'

export default function PaginaLogin() {
    return (
        <Container>
            <Header>
                <h1>
                    Olá, Fulano
                </h1>
                <LogOutOutline
                    color={'#ffffff'} 
                    height="30px"
                    width="30px"
                    />
            </Header>
            <ContainerDados>
                <h1>
                    Não há registros de entrada ou saída
                </h1>
            </ContainerDados>
            <Footer>
                <Link>
                    <button>
                        <AddCircleOutline
                            color={'#ffffff'} 
                            height="25px"
                            width="25px"
                        />
                        <div>
                            <p>Nova</p>
                            <p>entrada</p>
                        </div>
                    </button>
                </Link>
                <Link>
                    <button>
                        <RemoveCircleOutline
                            color={'#ffffff'} 
                            height="25px"
                            width="25px"
                        />

                        <div>
                            <p>Nova</p>
                            <p>saída</p>
                        </div>
                    </button>
                </Link>
            </Footer>

        </Container>
    )
}
const ContainerDados = styled.div`
    height: calc(100vh - 225px);
    margin-left: 25px;
    margin-right: 25px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;

        color: #868686;
    }
`
const Header = styled.div`
    display: flex;
    height: 75px;
    justify-content: space-between;
    align-items: center;
    h1{
        
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
    padding-left: 25px;
    padding-right: 25px;
`
const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 150px;
    padding-left: 25px;
    padding-right: 25px;

    button{
        width: 40vw;
        height: 115px;
        background: #A328D6;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        border: none;
        color: #FFFFFF;
        p{
            text-align: start;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 17px;
            line-height: 20px;

            color: #FFFFFF;
        }
        div{
            margin-left: 5px;
        }
        span{
            margin-left: 5px;
        }
    }
`
const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
`
//let navigate = useNavigate();
//navigate('/sucesso', { state: { ids, compradores, selecionados, assentos } })
//const location = useLocation();