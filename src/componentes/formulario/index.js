import "./formulario.css"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../listaSuspensa"
import Botao from "../Botao"



function Formulario(){

    const setores= [
        'Mecânica',
        'Logística',
        'Elétrica',
        'Tecnologia da inovação',
        'Alimentos',
        'Gestão'
]
    return(
        <section className="form">
            <form>
                <h2>Preencha os dados para cadastrar</h2>
                <CampoTexto label="Nome:" placeholder="Nome do Jogador" obrigatorio={true}/>
                <CampoTexto label="Posição:" placeholder="Posição do jogador" obrigatorio={true}/>
                <CampoTexto label="Imagem:" placeholder="Imagem do Jogador"/>    
                <ListaSuspensa label="Área" areas= {setores} />
                <Botao texto="Cadastrar"/>
            </form>
        </section>
    )
}

export default Formulario
