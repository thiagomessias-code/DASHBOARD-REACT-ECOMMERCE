import React, { Component } from "react";
import DetalhesDoCliente from './DetalhesDoCliente'
import DetalhesDoPedidos from './DetalhesDoPedidos'

class Cliente extends Component {
    render() {
        return (
            <div className="Cliente full-width flex vertical">
                <div class="Card">
                    <DetalhesDoCliente />
                </div>
                <div className="Sub-Card">
                <DetalhesDoPedidos/>
                </div>
            </div>

        )
    }
}


export default Cliente;