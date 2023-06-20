import './ListaSuspensa.css'

function ListaSuspensa(props){
    
    function digitado (evento){
        props.aoAlterar (evento.target.value)
    }
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select value={props.valor} onChange={digitado}>
                {props.areas.map(area => <option key={area}>{area}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa