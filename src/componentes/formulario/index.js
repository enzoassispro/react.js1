import "./formulario.css"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../listaSuspensa"
import Botao from "../Botao"
import { useState } from "react"



function Formulario(props){

function aoSubmeter(event){
    event.preventDefault()
    props.aoCadastrarProfessor({
        nome: nome,
        posicao: posicao,
        imagem: imagem,
        area: area,
    })
}

const [nome, setNome] = useState("")
const [posicao,setPosicao] = useState("")
const [imagem,setImagem] = useState("")
const [area,setArea] = useState("")

    return(
        <section className="form">
            <form onSubmit={aoSubmeter}>
                <h2>Preencha os dados para cadastrar</h2>
                <CampoTexto 
                    label="Nome:" placeholder="Nome do Jogador" obrigatorio={true}
                    valor = {nome}
                    aoAlterar = {valor => setNome(valor)}
                />
                <CampoTexto 
                    label="Posição:" placeholder="Posição do jogador" obrigatorio={true}
                    valor = {posicao}
                    aoAlterar = {valor => setPosicao(valor)}
                />
                <CampoTexto 
                    label="Imagem:" placeholder="Imagem do Jogador"
                    valor = {imagem}
                    aoAlterar = {valor => setImagem(valor)}
                />    
                <ListaSuspensa label="Área" areas= {props.times}
                    valor = {area}
                    aoAlterar = {valor => setArea(valor)}
                />
                <Botao texto="Cadastrar"/>
            </form>
        </section>
    )
}

export default Formulario
