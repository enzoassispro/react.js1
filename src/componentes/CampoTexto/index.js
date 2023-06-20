import './CampoTexto.css'
/* import { useState } from 'react' */

 function CampoTexto(props){


/* let valor ="" */

/* const [valor, setValor] = useState("") */

/* const aoDigitado = (evento) => {
  valor = evento.target.value
 console.log(valor)
} */

/* props.aoAlterar(aoDigitado.target.value) */

function aoDigitado(event){
  props.aoAlterar (event.target.value)

}

  return(
    <div className='campo-texto'>
        <label>{props.label}</label>
        <input value={props.valor} onChange={aoDigitado} placeholder={props.placeholder} required={props.obrigatorio}/>
    </div> 
  )
 }
export default CampoTexto