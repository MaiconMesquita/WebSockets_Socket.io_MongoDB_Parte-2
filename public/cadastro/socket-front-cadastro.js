const socket = io();

function emitirCadastrarUsuario(dados) {
  socket.emit('cadastrar_usuario', dados)  
};

socket.on('cadastro_sucesso', () => {
  alert('Cadastro realizado com sucesso')
  window.location.href = '/login/index.html'
});
socket.on('cadastro_erro', () => alert('Cadastro falhou'));
socket.on('usuario_existente', () => alert('Esse nome de usuário já existe'));


export { emitirCadastrarUsuario };