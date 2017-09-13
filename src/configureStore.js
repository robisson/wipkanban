import {createStore} from 'redux';
import reducer from './reducers';

const configureStore = () => {
    

    const initialState = {
        columns: [
            {
                "id": 1,
                "title": "A fazer",
                "showInputEditNameColumn": false,
                "showInputNewTask": false,
                "tasks": [
                    {
                        "id": 1,
                        "title": "Relatório - Análise detalhada do consultor",
                        "checklists": "0/4",
                        "data_cadastro": "2017-08-14 09:16:18.989836",
                        "data_inicio_timer": null,
                        "data_termino": null,
                        "datafinalizacao": null,
                        "descricao": "",
                        "idcoluna": 84,
                        "idtarefa": 520,
                        "idusuario": 3363,
                        "marcadores": [
                            {
                                "cor": "rgb(0, 89, 147)",
                                "idmarcador": 233,
                                "nome": "Melhoria"
                            }
                        ],
                        "membros": [
                            {
                                "idusuario": 734,
                                "image": "/images/734-foto-apresentacao_small.jpg",
                                "nome": "LEONARDO AMERICO KEISMAN"
                            }, {
                                "idusuario": 3363,
                                "image": "/images/3363-foto-apresentacao_small.jpg",
                                "nome": "MAICON MORETTO DOS SANTOS"
                            }
                        ],
                        "nome": "MAICON MORETTO DOS SANTOS",
                        "posicao": 0,
                        "qtdComentarios": 0,
                        "realizado_data": false,
                        "status": true,
                        "timer_concluido": false,
                        "timer_end": null,
                        "timer_start": null,
                        "timer_status": null,
                        "titulo": "filtro de  nome do colaborador e  status"
                    }, {
                        "id": 2,
                        "title": "Detalhada do consultor",
                        "preview": false,
                        "checklists": "",
                        "membros": []
                    }, {
                        "id": 3,
                        "title": "Novo car de qualquer coisa",
                        "preview": false,
                        "checklists": "",
                        "membros": []
                    }
                ]
            }, {
                "id": 2,
                "title": "Fazendo",
                "showInputEditNameColumn": false,
                "showInputNewTask": false,
                "tasks": [
                    {
                        "id": 4,
                        "title": "Relatório 4 - Análise detalhada do consultor",
                        "preview": false,
                        "checklists": "",
                        "membros": []
                    }, {
                        "id": 5,
                        "title": " 5 - Detalhada do consultor",
                        "preview": false,
                        "checklists": "",
                        "membros": []
                    }
                ]
            }
        ]
        
    }

    const store = createStore(reducer, initialState);
    console.log(store.getState());
    return store;
}

export default configureStore;