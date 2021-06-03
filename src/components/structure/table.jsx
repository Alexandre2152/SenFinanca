import { render } from '@testing-library/react';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Table extends Component{
    
    render(){
    const lista = Object.values(localStorage)
    // console.log(lista)

    // const vetorTitulo = []
    // const vetorCategoria = []
    // const vetorValor = []
    // const vetorTipo = []
    const all =[]


        for( let i=1 ; i<= localStorage.length; i++){
            //Converter o valor recebiso em um array
            const listar = localStorage.getItem(i)
            const listAll = JSON.parse(listar)

            // const listTitulo = listAll.titulo
            // const listCategoria = listAll.categoria
            // const listValor = listAll.valor
            // const listTipo = listAll.tipo
            
            
            // vetorTitulo.push(listTitulo)
            // vetorCategoria.push(listCategoria)
            // vetorValor.push(listValor)
            // vetorTipo.push(listTipo)

            all.push(listAll)
            
        }



    return(
        
        <>
        {console.log(all)}
        <br/><br/>
        <table>
            <tr>
                <button className="btnAdd"><Link to='/adicionar'><strong>ADICIONAR</strong></Link></button>
            </tr>

            <tr><p></p></tr>

            <tr className="linhaTitulo">
                <th>TITULO</th>
                <th>TIPO</th>
                <th>CATEGORIA</th>
                <th>VALOR</th>
                <th>DATA DA TRANSAÇÃO</th>
                <th>EDITAR/EXCLUIR</th>
            </tr>

            
            { all.map((item, i) => {
                        return (
            <tr className="linhaTitulo">
                            <>
                <td key={i}>{item.titulo}</td>
                <td key={i}>{item.tipo}</td>
                <td key={i}>{item.categoria}</td>
                <td key={i}>{item.valor}</td>
                <td key={i}>{item.data}</td>
                <td>
                    <Link to={`editar/${i+1}`}>
                    <button>EDITAR</button>
                    </Link>
                </td>
                
                </>
                    </tr>
            )
            }) 
                    }
        </table>

        </>
    )
}

}

export default Table