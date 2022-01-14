import React from "react";
import { Link } from "react-router-dom";

const Voltar = ({ path }) => ( <Link className="Link-voltar" to={path}> {"< Voltar"} </Link>
)

export default Voltar;