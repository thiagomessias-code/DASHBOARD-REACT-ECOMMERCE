import React, { Component } from "react";
import Titulo from '../../components/Texto/Titulo';
import Tabela from '../../components/Tabela/Simples';
import Voltar from "../../components/Links/Voltar";
import moment from "moment";




class Avaliacoes extends Component {
   
    render() {

        //Dados
        const dados = [
            {
                "Cliente": "Cliente 1",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDetalhes": "/avaliacao/DS6FD65DGF"
            },
            {
                "Cliente": "Cliente 2",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDetalhes": "/avaliacao/DS6FD65DGF"
            },
            {
                "Cliente": "Cliente 3",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDetalhes": "/avaliacao/DS6FD65DGF"
            },
            {
                "Cliente": "Cliente 4",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDetalhes": "/avaliacao/DS6FD65DGF"
            },
            {
                "Cliente": "Cliente 5",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDetalhes": "/avaliacao/DS6FD65DGF"
            },
            {
                "Cliente": "Cliente 6",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDetalhes": "/avaliacao/DS6FD65DGF"
            },
            
        ];

        return (
            <div className=" Avaliacoes full-width">
                <div className="Card">
                <Voltar path="/produto/9jhf6"/>
                    <Titulo tipo='h1' titulo='Avaliações - Produto 1' />
                    <br />
                   
                    <br />
                    <Tabela
                        cabecalho={["Cliente", "Data"]}
                        dados={dados}
                    />
                </div>
            </div>
        )
    }
}

export default Avaliacoes;