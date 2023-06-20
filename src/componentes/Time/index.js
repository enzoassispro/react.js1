import './Time.css'
import Card from '../Card'

const Time = (props) => {
    return(
        <section className='time' style={{backgroundColor:props.background}}> 
            <h3 style={{borderBlockColor:props.corDaBorda}}>{props.nome}</h3>

            {props.cards.map(professor => <Card
                nome={professor.nome}
                posicao={professor.posicao}
                imagem={professor.imagem}
            />)}
        </section>
    )
}

export default Time