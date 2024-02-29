
document.addEventListener('DOMContentLoaded', function() {
    const videoPlayer = document.getElementById('videoPlayer');
    const btnRetroceder = document.getElementById('btnRetroceder');
    const btnAvanzar = document.getElementById('btnAvanzar');
    const btnVideoAnterior = document.getElementById('btnVideoAnterior');
    const btnVideoSiguiente = document.getElementById('btnVideoSiguiente');

    
    const videos = ["/vds/Video laboratorio editado.mp4", "/vds/loros.mp4"];
    let videoActual = 0; 

    function cambiarVideo(index) {
        videoPlayer.src = videos[index];
        videoPlayer.load(); 
        videoPlayer.play();
        videoActual = index; 
    }

    btnVideoAnterior.addEventListener('click', function() {
        if (videoActual > 0) {
            cambiarVideo(0); // Vuelve al primer video.
        }
    });

    btnVideoSiguiente.addEventListener('click', function() {
        if (videoActual < videos.length - 1) {
            cambiarVideo(1); // Cambia al segundo video, "loros.mp4".
        }
    });

    btnRetroceder.addEventListener('click', function() {
        videoPlayer.currentTime = Math.max(0, videoPlayer.currentTime - 10);
    });

    btnAvanzar.addEventListener('click', function() {
        videoPlayer.currentTime = Math.min(videoPlayer.duration, videoPlayer.currentTime + 10);
    });
});
