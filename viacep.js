import {PreencherCampos} from './Campos.js'
import { LimparCampos } from './Campos.js';

const ApiCep = async () => {
    LimparCampos()
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`

    if(cep.length === 8){
        const response = await fetch(url)
        const data = await response.json()
        if (data.hasOwnProperty('erro')){
        document.getElementById('endereco').value = 'Cep invalido'
        document.getElementById('bairro').value = 'Cep invalido'
        document.getElementById('cidade').value = 'Cep invalido'
        document.getElementById('estado').value = 'Cep invalido'
        }else{
        PreencherCampos(data)
        console.log(data)
        } 
    }else{
        document.getElementById('endereco').value = 'Cep invalido'
        document.getElementById('bairro').value = 'Cep invalido'
        document.getElementById('cidade').value = 'Cep invalido'
        document.getElementById('estado').value = 'Cep invalido'
    }
}



document.getElementById('cep').addEventListener('focusout' , ApiCep)
