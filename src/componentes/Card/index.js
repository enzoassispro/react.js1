import './card.css'

const Card = (props) => {
    return(
        <div className='cards'>
            <div className='cabecalho'>
                <img src={props.imagem} alt={props.nome}/>
            </div>

            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.posicao}</h5>
            </div>
        </div>
    )
}

export default Card