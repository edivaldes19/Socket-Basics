const socketController = (socket) => {
    console.log('ID DEL CLIENTE CONECTADO', socket.id)
    socket.on('disconnect', () => console.log('Cliente desconectado', socket.id))
    socket.on('enviar-mensaje', (payload) => console.log(payload))
}
module.exports = { socketController }