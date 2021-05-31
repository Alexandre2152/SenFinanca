import React from 'react'

import IconeEntrada from '../assets/icon/entrada.svg'
import IconeSaida from '../assets/icon/saida.svg'
import IconeTotal from '../assets/icon/total.svg'

const Filter = () => (

    <table className="tabelaFiltro">
        <tr >
            <td>
                <img src={IconeEntrada} alt="ENTRADA" className="icone" />
                <div className="fundofiltro">
                    <div className="filtroEntrada">
                        <span>Entrada</span> <br/>
                        <strong>R$ xxxx,xx</strong>
                    </div>
                </div> 
            </td>
          
            <td>
                <img src={IconeSaida} alt="ENTRADA" className="icone" />
                <div className="fundofiltro">
                    <div className="filtroEntrada">
                        <span>Saida</span> <br/>
                        <strong>R$ xxxx,xx</strong>
                    </div>
                </div> 
            </td>
            
            <td>
                <img src={IconeTotal} alt="ENTRADA" className="icone" />
                <div className="fundofiltro">
                    <div className="filtroEntrada">
                        <span>Total</span> <br/>
                        <strong>R$ xxxx,xx</strong>
                    </div>
                </div>  
            </td>
           
        </tr>
        
    </table>

)

export default Filter