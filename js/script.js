// Aqui você pode adicionar funções JavaScript, se necessário
document.getElementById('myVideo').addEventListener('play', function() {
    console.log('O vídeo está sendo reproduzido.');
});

document.getElementById('myVideo').addEventListener('pause', function() {
    console.log('O vídeo foi pausado.');
});

document.getElementById('myVideo').addEventListener('ended', function() {
    console.log('O vídeo terminou.');
});
