import './ListaSuspensa.css'

function ListaSuspensa(props){
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select >
                {props.areas.map(area => <option key={area}>{area}
                </option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa