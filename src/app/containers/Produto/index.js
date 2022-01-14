import React, { Component } from "react";
import DetalhesDoProduto from './DetalhesDoProduto'


class Produto extends Component {
    render() {
        return (
            <div className="Produto full-width flex vertical">
                <div className="Card">
                    <DetalhesDoProduto />
                </div>
              
            </div>
        )
    }
}

export default Produto;