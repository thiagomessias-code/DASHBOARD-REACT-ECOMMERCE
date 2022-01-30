import React from "react";

 export const TextoDados = ({chave, valor, vertical = false}) =>(
    <div className={`Texto-Dados flex ${vertical ? "vertical" : "horizontal"}`}>
        <strong className="flex flex-center">{chave}:&nbsp;</strong>
        <span>{valor}</span>
    </div>
)

