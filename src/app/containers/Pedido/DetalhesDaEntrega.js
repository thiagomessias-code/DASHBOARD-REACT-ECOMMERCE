import React, { Component } from "react";

import Titulo from "../../components/Texto/Titulo";
import ListaDinamica from '../../components/Listas/ListaDinamicaSimples';
import InputValor from "../../components/Inputs/InputValor";



class DetalhesDaEntrega extends Component {

    state = {
        status: [
            "Preparando para envio",
            "Entrega Transportadora",
            "Em Transito"
        ],
        codigoDeRastreamento: "PA1234587BR"
    }

    onAddListaDinamica = (texto) => {
        if (!texto) return false;
        let { status } = this.state;
        status.push(texto)
        this.setState({ status });
    }


    handleSubmit = (value) => {
        this.setState({ codigoDeRastreamento: value })
        alert("Salvo")
    }

    render() {
        const { status, codigoDeRastreamento } = this.state;
        return (
            <div className="Detalhes-da-Entrega">
                <Titulo tipo="h3" titulo="Entrega" />
                <br />
                <label>Código De Rastreamento</label>
                <InputValor
                    value={codigoDeRastreamento}
                    handleSubmit={(value) => this.handleSubmit(value)}
                    name={"codigoDeRastreamento"} />
                <br />
                <ListaDinamica
                    dados={status}
                    onAdd={this.onAddListaDinamica} />
            </div>
        )
    }
}

export default DetalhesDaEntrega;