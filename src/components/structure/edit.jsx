import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Edit extends Component{
    constructor(props){
        super(props)

        const url = window.location.href
        const id = url.substring(url.lastIndexOf('/')+1)

        const item = JSON.parse(localStorage.getItem(id))

        this.state={
            id: id,
            titulo: item.titulo,
            categoria: item.categoria,
            valor: item.valor,
            tipo: item.tipo
        }
        this.clickTitulo = this.clickTitulo.bind(this)
        this.clickCategoria = this.clickCategoria.bind(this)
        this.clickValor = this.clickValor.bind(this)
        this.clickTipo = this.clickTipo.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    clickTitulo(event){
        this.setState({ titulo: event.target.value})
    }

    clickCategoria(event){
        this.setState({ categoria: event.target.value})
    }

    clickValor(event){
        this.setState({ valor: event.target.value})
    }

    clickTipo(event){
        this.setState({ tipo: event.target.value})
    }
   
    handleSubmit(event){

        //Pegar o ID
        const id = this.state.id

        //Converter para inteiro os valores do tamanho do array salvo no localstorage
        const localStorageLength = parseInt(localStorage.length)

        //Formatar data atual
        const data = new Date()
        const dia = String(data.getDate()).padStart(2, '0')
        const mes = String(data.getMonth() +1).padStart(2, '0')
        const ano = data.getFullYear()
        const dataAtual = `${dia} / ${mes} / ${ano}`
        // console.log(dataAtual)

        //Criar um array com os dados que a ser inseridos
        const dados = {
            titulo: this.state.titulo,
            categoria: this.state.categoria,
            valor: this.state.valor,
            tipo: this.state.tipo,
            data: dataAtual
        }

        localStorage.setItem( id , JSON.stringify(dados))

        this.props.history.push("/")

        event.preventDefault()
    }
    
    render(){

        return(
            <>

    <h3 className="subTitulos">PARA EDITAR, FAVOR ALTERAR OS CAMPOS ESPECIFICOS E CLICAR NO BOTÃO EDITAR</h3>

<br /><br />
    <div>
        <form onSubmit={this.handleSubmit}>

                    <section className="container row">
                        {/* <label htmlFor=""><p>TITULO</p></label> */}
                        <input type="text" className="inputWidth" value={this.state.titulo} onChange={this.clickTitulo} name="titulo" placeholder="TITULO"/>
                     </section>  

                     <section className="container row">   
                     
                        <input type="text" className="inputWidth" value={this.state.categoria} onChange={this.clickCategoria} name="categoria" placeholder="CATEGORIA"/>

                        <input type="text" className="inputWidth" value={this.state.valor} onChange={this.clickValor} name="valor" placeholder="VALOR" />

                        <select name="tipo" className="inputWidth" value={this.state.tipo} onChange={this.clickTipo}>
                            <option value="Escolha um tipo">TIPO</option>
                            <option value="entrada">ENTRADA</option>
                            <option value="saida">SAIDA</option>
                        </select>
                    </section>     

                    <section className="container row"> 
                        <Link to="/">
                        <button className="btnWidthVoltar">VOLTAR</button>
                        </Link>
                        <button type="submit" className="btnWidthAdicionar">EDITAR</button>
                    </section>   
        </form>
    </div>



</>
        )
    }
}

export default Edit