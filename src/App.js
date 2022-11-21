import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./providers/Auth";
import PaginaLogin from "./components/Login";
import PaginaCadastro from "./components/Cadastro";
import PaginaInicial from "./components/PaginaInicial"
import CadastroRegistro from "./components/CadastroRegistro"

export default function App() {
    return (
        <>
            <AuthProvider>
                <GlobalStyle />
                <BrowserRouter>
                    <Routes>
                        <Route path="/Home" element={<PaginaInicial/>}></Route>
                        <Route path="/" element={<PaginaLogin />}></Route>
                        <Route path="/cadastro" element={<PaginaCadastro />}></Route>
                        <Route path="/cadastroRegistro" element={<CadastroRegistro/>}></Route>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>

    )
}

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700&family=Righteous&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap');
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    h2,h1{
        margin-block:0;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`