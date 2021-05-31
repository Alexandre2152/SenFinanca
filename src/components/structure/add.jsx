import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Add extends Component {

    constructor(props){
        super(props)

        this.state={
            titulo: "",
            categoria: "",
            valor: "",
            tipo: ""
        }

        this.clickTitulo = this.clickTitulo.bind(this)
        this.clickCategoria = this.clickCategoria.bind(this)
        this.clickValor = this.clickValor.bind(this)
        this.clickTipo = this.clickTipo.bind(this)
    }

    clickTitulo(e){
        this.setState({ titulo: e.target.titulo})
    }

    clickCategoria(e){
        this.setState({ categoria: e.target.categoria})
    }

    clickValor(e){
        this.setState({ valor: e.target.valor})
    }

    clickTipo(e){
        this.setState({ tipo: e.target.tipo})
    }

    handleSubmit(e){
        e.preventDefault()

        const dados = {
            titulo: this.state.titulo,
            categoria: this.state.categoria,
            valor: this.state.valor,
            tipo: this.state.tipo,

        }

        localStorage.setItem("item", JSON.stringify(dados))

        e.preventDefault()
    }

    render(){
        return(
            <>

    <h3 className="subTitulos">PARA ADICIONAR, FAVOR PREENCHER OS CAMPO E CLICAR NO BOTÃO ADICIONAR</h3>

<br /><br />
    <div>
        <form onSubmit={this.handleSubmit}>
            <table className="tabAdd">
                <tr>
                    <td>
                        <label htmlFor=""><p>TITULO</p></label>
                        <input type="text" value={this.state.titulo} onChange={this.clickTitulo} name="titulo" />
                    </td>
                

                    <td>
                        <label htmlFor=""><p>CATEGORIA</p></label>
                        <input type="text" value={this.state.categoria} onChange={this.clickCategoria} name="categoria" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor=""><p>VALOR</p></label>
                        <input type="text" value={this.state.valor} onChange={this.clickValor} name="valor" />
                    </td>

                    <td>
                        <label htmlFor="" className="label"><p>TIPO</p></label>
                        <select name="tipo">
                            <option value=""> </option>
                            <option value="entrada">ENTRADA</option>
                            <option value="saida">SAIDA</option>
                        </select>
                    </td>
                </tr>
            </table>
            <Link to="/">
            <button className="btnVoltar">VOLTAR</button>
            </Link>
            <button type="submit" className="btnAdd">ADICIONAR</button>
        </form>
    </div>



</>
        )
    }

}

export default Add