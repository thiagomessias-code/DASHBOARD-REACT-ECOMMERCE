import React from "react";

const InputSimples = ({ type, label, value, onChange, erros }) => (
    <div className="Input-Simples flex vertical">
       { label && (<label>{label}</label>)}
       { erros && (<small className="small-danger">{erros}</small>)}
        <input
            type={type}
            value={value}
            onChange={onChange}
            className={`${erros ? "input-error" : ""}`}
        />
        
    </div>
)

export default InputSimples