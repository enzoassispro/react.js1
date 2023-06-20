
import { useState } from 'react';
import Banner from './componentes/banner';
import Formulario from './componentes/formulario';
import Time from './componentes/Time';


function App() {
  const areas = [
    {
      nome: 'Mecânica',
      corFundo:'#ffe6f2',
      corBorda: '#ff1a8c'
    },
    {
      nome: 'Elétrica',
      corFundo:'#b3b3ff',
      corBorda: ' #000099'
    },
    {
      nome: 'Tencnologia da Inovação',
      corFundo:'#e6ffe6',
      corBorda: '#00e600'
    },
    {
      nome: 'Logística',
      corFundo:'#ffffe6',
      corBorda: '#ffff00'
    },
    {
      nome: 'Gestão',
      corFundo:'#e6ffff',
      corBorda: '#66ffff'
    }
  ]

  const [professores, setProfessores] = useState([])

  function aoAdicionarProfessor (professor){
    setProfessores([...professores, professor])
    console.log (professor)
  }

  return (
      <div>
        <Banner/>
        <Formulario 
          times = {areas.map(area => area.nome)}
          aoCadastrarProfessor = {professor => aoAdicionarProfessor (professor)}
        />
        {areas.map(area => <Time 
                            nome={area.nome}
                            background={area.corFundo} 
                            corDaBorda={area.corBorda}
                            cards = {professores.filter(professor => professor.area === area.nome)} 
                          />
                            
        )}
      </div>
  );


  
}

export default App;
