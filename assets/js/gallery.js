document.addEventListener('DOMContentLoaded', function () {
    let imagenes = [
      { img: './assets/img/Fotos Pag Web Jedan/1.JPG' },
      { img: './assets/img/Fotos Pag Web Jedan/2.JPG' },
      { img: './assets/img/Fotos Pag Web Jedan/3.JPG' },
      { img: './assets/img/Fotos Pag Web Jedan/4.JPG' },
      { img: './assets/img/Fotos Pag Web Jedan/5.JPG' },
      { img: './assets/img/Fotos Pag Web Jedan/6.JPG' },
      { img: './assets/img/Fotos Pag Web Jedan/7.JPG' },
      { img: './assets/img/Fotos Pag Web Jedan/8.JPG' },
      { img: './assets/img/Fotos Pag Web Jedan/9.JPG' },
      { img: './assets/img/Fotos Pag Web Jedan/10.JPG' },
      { img: './assets/img/Fotos Pag Web Jedan/11.JPG' },
      { img: './assets/img/Fotos Pag Web Jedan/12.JPG' },
      { img: './assets/img/Fotos Pag Web Jedan/13.JPG' },
      { img: './assets/img/Fotos Pag Web Jedan/14.JPG' },
      { img: './assets/img/Fotos Pag Web Jedan/15.JPG' },
      { img: './assets/img/Fotos Pag Web Jedan/16.JPG' },
      { img: './assets/img/Fotos Pag Web Jedan/17.JPG' },
      { img: './assets/img/Fotos Pag Web Jedan/18.JPG' },
      { img: './assets/img/Fotos Pag Web Jedan/19.JPG' },
      { img: './assets/img/Fotos Pag Web Jedan/20.JPG' },
      { img: './assets/img/Fotos Pag Web Jedan/21.JPG' },
      { img: './assets/img/Fotos Pag Web Jedan/22.JPG' },
      { img: './assets/img/Fotos Pag Web Jedan/23.JPG' },
      { img: './assets/img/Fotos Pag Web Jedan/24.JPG' },
      { img: './assets/img/Fotos Pag Web Jedan/25.JPG' }
    ];
    let contador = 0;
    const contenedor = document.querySelector('.slideshow');
    const overlay = document.querySelector('.overlay');
    const galeria_imagenes = document.querySelectorAll('.galeria img');
    const img_slideshow = document.querySelector('.slideshow img');
    
    contenedor.addEventListener('click', function (event) {
      let atras = contenedor.querySelector('.atras'),
        adelante = contenedor.querySelector('.adelante'),
        img = contenedor.querySelector('img'),
        tgt = event.target;
      if (tgt == atras) {
        if (contador > 0) {
          img.src = imagenes[contador - 1].img;
          contador--;
        } else {
          img.src = imagenes[imagenes.length - 1].img;
          contador = imagenes.length - 1;
        }
      } else if (tgt == adelante) {
        if (contador < imagenes.length - 1) {
          img.src = imagenes[contador + 1].img;
          contador++;
        } else {
          img.src = imagenes[0].img;
          contador = 0;
        }
      }
    });
    Array.from(galeria_imagenes).forEach((img) => {
      img.addEventListener('click', event => {
        const imagen_seleccionada = +event.target.dataset.imgMostrar;
        img_slideshow.src = imagenes[imagen_seleccionada].img;
        contador = imagen_seleccionada;
        overlay.style.opacity = 1;
        overlay.style.visibility = 'visible';
      }) 
    });
    document.querySelector('.btn_cerrar').addEventListener('click', () => {
      overlay.style.opacity = 0;
      overlay.style.visibility = 'hidden';
    });
   });