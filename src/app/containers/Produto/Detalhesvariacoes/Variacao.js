import React, { Component } from "react";
import Titulo from "../../../components/Texto/Titulo";

class Variacoes extends Component {
    state = {
        variacoes:
            [{ nome: "p", id: "1F1DFG5FG" },
            { nome: "m", id: "1F1DFG5FG" }]
    }

    render() {
        const {variacoes} = this.state;
        return (
            <div className="Variacoes flex vertical flex-center">
                <Titulo tipo="h2" titulo="Variações"/>
                {
                    variacoes.map((item, idx) => (
                        <div className="Variacao-item">
                            <span>{item.nome}</span>
                        </div>
                    ))
                }

            </div>
        )
    }
}

export default Variacoes; 