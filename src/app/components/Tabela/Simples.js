import React from "react";
import { Link } from "react-router-dom";


const TabelaSimples = ({ cabecalho, dados }) => (
    <div className="TabelaSimples">
        <table className="simples">
            <thead>
                <tr>
                    {
                        cabecalho.map((item, index) => (
                            <th key={index}>{item}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    dados.map((linha, idx) => (
                        <tr key={idx}>
                            {
                                cabecalho.map((item, index) => (
                                    <td key={index}>{linha[item] || ""}</td>
                                ))
                            }
                            {linha["botaoDetalhes"] && (
                                <td>
                                    <Link to={linha["botaoDetalhes"]}>
                                        <button className="button button-danger  button-small">Detalhes</button>
                                    </Link>
                                </td>
                            )}
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
)

export default TabelaSimples;