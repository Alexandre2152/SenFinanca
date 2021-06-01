import React from 'react'


const Table = () => (
<>

<br/><br/>
<table>
    <tr>
        <button className="btnAdd"><strong>ADICIONAR</strong></button>
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
    
    <tr className="linhaTitulo">
        <td>xxxxxxxxxxxxxxxxx</td>
        <td>xxxxx</td>
        <td>xxxxxxxxxxx</td>
        <td>xxxxxx</td>
        <td>xxxxx/x/x/xxxxx</td>
        <td>xxxxxxxxxx</td>
    </tr>
</table>

</>
)


export default Table