import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Add extends Component {

    constructor(props){
        super(props)

        this.state={
            id: 0,
            titulo: '',
            categoria: '',
            valor: '',
            tipo: ''
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

        //pegar todas as chaves do localstorage
        const keys = Object.keys(localStorage)
        console.log(keys)

        //Converter para numero
        const keysID = parseInt(keys)
        // console.log(keysID)

        const localStorageLength = parseInt(localStorage.length)

        //Criar um array com os dados que a ser inseridos
        const dados = {
            titulo: this.state.titulo,
            categoria: this.state.categoria,
            valor: this.state.valor,
            tipo: this.state.tipo,
        }

        //condição para saber se o cadastro existe
        if(!localStorage.getItem(id)){
            alert(`Dados gravos com sucesso!`)   

            //Inserir no localStorage as informções digitadas no formulario.
            localStorage.setItem( id , JSON.stringify(dados))
        }else{
            for(let i = 0 ; i < localStorage.length ; i++){
                const obj = JSON.parse(localStorage.getItem(keys[i]))
                console.log("obj: "+obj.titulo)
                console.log("localStorage: "+localStorage.length)
                console.log("localStorage2: "+localStorage.key(i))
                console.log("keys[i]: "+keys[i])
    
                if(keys[i] < localStorageLength){
                    console.log("teste")

                    //Salvar no localstorage
                    localStorage.setItem( i+1 , JSON.stringify(dados))
    
                }
            }
        }



        event.preventDefault()
    }

    render(){
        return(
            <>

    <h3 className="subTitulos">PARA ADICIONAR, FAVOR PREENCHER OS CAMPO E CLICAR NO BOTÃO ADICIONAR</h3>

<br /><br />
    <div>
        <form onSubmit={this.handleSubmit}>

                    <section className="container row">
                        {/* <label htmlFor=""><p>TITULO</p></label> */}
                        <input type="text" className="inputWidth" value={this.state.titulo} onChange={this.clickTitulo} name="titulo" placeholder="TITULO"/>
                     </section>  

                     <section className="container row">   
                        {/* <label htmlFor=""><p>CATEGORIA</p></label> */}
                        <input type="text" className="inputWidth" value={this.state.categoria} onChange={this.clickCategoria} name="categoria" placeholder="CATEGORIA"/>

                        {/* <label htmlFor=""><p>VALOR</p></label> */}
                        <input type="text" className="inputWidth" value={this.state.valor} onChange={this.clickValor} name="valor" placeholder="VALOR" />

                        {/* <label htmlFor="" className="label" value={this.state.tipo} onChange={this.clickTipo}><p>TIPO</p></label> */}
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
                        <button type="submit" className="btnWidthAdicionar">ADICIONAR</button>
                    </section>   
        </form>
    </div>



</>
        )
    }

}

export default Add