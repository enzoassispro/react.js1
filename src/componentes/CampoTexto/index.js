import './CampoTexto.css'

 function CampoTexto(props){


let valor =" Enzo Assis"

const aoDigitado = (evento) => {
  valor = evento.target.value
 console.log(valor)
}

  return(
    <div className='campo-texto'>
        <label>{props.label}</label>
        <input onChange={aoDigitado} placeholder={props.placeholder} required={props.obrigatorio}/>
    </div> 
  )
 }
export default CampoTexto