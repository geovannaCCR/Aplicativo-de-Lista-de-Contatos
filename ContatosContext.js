import React, {createContext, useReducer} from 'react';
import contatos from './contatos.js';

const initialState = { contatos }
const ContatosContext = createContext({})

const actions = {
    createContato(state, action) {
        const contato = action.payload
        contato.id = Math.random()
        return {
            ...state,
            contatos: [... state.contatos, contato],
        }
    },
    updateContato(state, action) {
        const updated = action.payload
        return {
            ...state,
            contatos: state.contatos.map(c => c.id === updated.id ? updated: c)
        }
    },
    deleteContato(state, action) {
        const contato = action.payload
            return {
                ...state,
                contatos: state.contatos.filter(c => c.id !== contato.id)
            }
    }
}

export const ContatosProvider = props => {

    function reducer(state, action) {
            const fn = actions[action.type]
            return fn ? fn(state, action) : state    
        }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <ContatosContext.Provider value ={{
            state, dispatch
        }}>
            {props.children}
        </ContatosContext.Provider>
    )
}

export default ContatosContext;