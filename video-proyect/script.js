document.addEventListener('DOMContentLoaded', (e)=>{    
    const btn = document.querySelector('.btn-modal');
    const contModal = document.getElementById("contModal");
    const videoModal = document.getElementById("modal");
    const reproducir = document.getElementById("reproducir");

//Evento Click en el button/video. Mostrar mdaol
    function modal(video, container){
        let cont = document.querySelector(`.${container}`)
        let videoCont = document.getElementById(video); 
    videoCont.addEventListener('click', (e)=>{
        mostrarModal();
    })
    reproducir.addEventListener('click', (e)=>{
        mostrarModal();
    })
//Mostrando modal
    const mostrarModal = ()=>{ 
        videoModal.appendChild(videoCont);
        videoModal.appendChild(reproducir);
        playVideo(videoCont, "reproducir");
        contModal.style.display="block";
//Cerrando Modal
        btn.addEventListener('click',()=>{
            cont.appendChild(reproducir);
            cont.appendChild(videoCont);
            videoCont.pause();
            reproducir.innerHTML  = '<i class="far fa-pause-circle"></i>';
            contModal.style.display="none";
        })
    }
//Reproducir video y animacion del button
    const playVideo = (video, btn)=>{
        const button = document.getElementById(`${btn}`);
        if(video.paused){
            video.play();
            button.classList.add('desaparecer-button');
            button.innerHTML  = '<i class="far fa-play-circle"></i>';
        }
        else{
            video.pause();
            button.innerHTML  = '<i class="far fa-pause-circle"></i>';
        }
    }
    playVideo(video, reproducir);
 }
modal("video", "cont-multimedia");
})
