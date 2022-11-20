import styled from "styled-components"

export default function PaginaLogin(props) {
    return (
        <Container>
                <Header>
                    <h1>
                        Nova {props.tipo}
                    </h1>
                </Header>
            <ContainerForm>
                <form>
                    <input placeholder="Valor" type="text"></input>
                    <input placeholder="Descrição" type="email"></input>
                    <button>Salvar {props.tipo}</button>
                </form>
            </ContainerForm>
        </Container>
    )
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
    font-family: 'Raleway';
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