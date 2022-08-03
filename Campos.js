export const PreencherCampos = ({logradouro , bairro , localidade , uf}) => {
 document.getElementById('endereco').value = logradouro
 document.getElementById('bairro').value = bairro
 document.getElementById('cidade').value = localidade
 document.getElementById('estado').value = uf
}

export const LimparCampos = () => {
document.getElementById('endereco').value = null
 document.getElementById('bairro').value = null
 document.getElementById('cidade').value = null
 document.getElementById('estado').value = null
}