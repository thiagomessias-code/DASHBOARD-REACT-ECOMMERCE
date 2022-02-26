import { combineReducers } from "redux";
import pedidosReducer from './pedido_reducer'
import authReducer from './auth_reducer';

const reducers = combineReducers({
    auth: authReducer,
    pedido: pedidosReducer
});


export default reducers;