const btn_abrir = document.querySelector('#menu-mobile-abrir')
const btn_cerrar = document.querySelector('#menu-mobile-cerrar')
const barra_nav_lateral = document.querySelector('aside')
const imagenes_pantalla_completa = document.querySelectorAll('.contenido-texto-der img')

console.log(btn_abrir, btn_cerrar, barra_nav_lateral, imagenes_pantalla_completa)

btn_abrir.addEventListener('click', () => {
    console.log('abrir navegación lateral')
    barra_nav_lateral.style.transform = "translateX(0px)"
})

btn_cerrar.addEventListener('click', () => {
    console.log('cerrar navegación lateral')
    barra_nav_lateral.style.transform = "translateX(600px)"
})

imagenes_pantalla_completa.forEach((imagen) => {
    console.log(imagen)
    imagen.addEventListener('click', () => {
        imagen.classList.toggle('imagen-pantalla-completa')
    })
})

