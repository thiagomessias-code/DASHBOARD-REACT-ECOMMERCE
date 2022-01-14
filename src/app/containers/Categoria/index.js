import React, { Component } from "react";
import DetalhesDaCategoria from './DetalhesDaCategoria'
import ListaDeProdutos from './ListaDeProdutos'


class Categoria extends Component {
    render() {
        return (
            <div className="Categoria full-width flex vertical">
                <div class="Card">
                    <DetalhesDaCategoria />
                </div>

                <div>
                    <ListaDeProdutos />
                </div>

            </div>

        )
    }
}


export default Categoria;