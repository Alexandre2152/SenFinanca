import React from 'react'

import Header from './structure/header'
import Filter from './structure/filter'
import Table from './structure/table'

const Home = () => (
    <div className="corpoPagina">
    <Header/>

    <Filter/>
        
    <Table/>

    </div>
)

export default Home