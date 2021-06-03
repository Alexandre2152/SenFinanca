import React, { Component } from 'react'

class Teste extends Component {



    render() {

        const array = {
            id: 2,
            titulo1: "subtitulo1",
            titulo2: "subtitulo2",
            titulo3: "subtitulo3",

        }

        localStorage.setItem('item2', JSON.stringify(array))

        const text = localStorage.getItem("item2")
        const text2 = JSON.parse(text)
        console.log(text2)




        return (
            Teste
        )
    }

}

export default Teste