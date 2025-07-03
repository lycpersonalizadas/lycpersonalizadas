
import React from 'react';

// NOTA IMPORTANTE DEL DESARROLLADOR PARA EL USUARIO:
// - Para 'src': DEBES usar una URL DIRECTA a un archivo de TU IMAGEN (ej. .jpg, .png).
//   NO uses el enlace de la publicación de Instagram para 'src'.
//   Primero descarga tu imagen de Instagram, luego súbela a un servicio de hosting de imágenes (como Cloudinary, ImgBB, GitHub)
//   o a una carpeta 'public/images' en tu proyecto, y usa esa URL/ruta aquí.
//   Ejemplos de 'src': "https://res.cloudinary.com/tu-cuenta/image/upload/tu-imagen.jpg" o "/images/tu-imagen-real.jpg"
// - Para 'postUrl': Usa el enlace directo a tu PUBLICACIÓN DE INSTAGRAM correspondiente a la imagen.
// - Para 'alt': Describe la imagen de forma concisa y relevante, incluyendo palabras clave si es natural.
//   Los 'alt' texts a continuación son EJEMPLOS MEJORADOS. ¡DEBES PERSONALIZARLOS PARA TUS IMÁGENES REALES!

const galleryImages = [
  {
    id: 1,
    src: "https://ik.imagekit.io/enoz7muet/foto1.jpeg", 
    alt: "Gorra trucker de alta gama, perfecta como artículo corporativo en Argentina - Ver en Instagram", 
    postUrl: "https://www.instagram.com/p/DAn_FegPB25/?igsh=MWR1bDl0MnE0MDdm" 
  },
  {
    id: 2,
    src: "https://ik.imagekit.io/lmpdfv6pk/foto5.jpeg?updatedAt=1749404021687", 
    alt: "Modelo trucker negro con logo 'Lycpersonalizadas', muestra de gorra corporativa - Ver en Instagram", 
    postUrl: "https://www.instagram.com/p/CDPoXcsD4eT/?igsh=MTlzNXd6eG5paGM5Zg==" 
  },
  {
    id: 3,
    src: "https://ik.imagekit.io/lmpdfv6pk/foto4.jpeg?updatedAt=1749404203432",
    alt: "Surtido de gorras camionero con sublimación, ideal para celebraciones y material de marca en Argentina - Ver en Instagram",
    postUrl: "https://www.instagram.com/p/CW6scJmvMA5/?igsh=MTVhbWVnOGYxeHN6eQ=="
  },
  {
    id: 4,
    src: "https://ik.imagekit.io/lmpdfv6pk/foto2.jpeg?updatedAt=1749404260144",
    alt: "Primer plano de gorras con diseño propio con sublimación, muestra de artículos publicitarios y para quinceañeras - Ver en Instagram", 
    postUrl: "https://www.instagram.com/p/C40rWEfLBbb/?igsh=Yno2NWlxNGtjMjhi" 
  },
  {
    id: 5,
    src: "https://ik.imagekit.io/lmpdfv6pk/foto3.jpeg?updatedAt=1749404288172", 
    alt: "Conjunto de gorras a medida con múltiples diseños, calidad Lycpersonalizadas para publicidad masiva - Ver en Instagram", 
    postUrl: "https://www.instagram.com/p/C3c-qFPMCHn/?igsh=Z2R0dnV0ZjJnNWw=" 
  },
  {
    id: 6,
    src: "https://ik.imagekit.io/lmpdfv6pk/WhatsApp%20Image%202023-02-19%20at%2021.08.39.jpeg?updatedAt=1749417861720", 
    alt: "Ejemplos de gorras estilo camionero con textos y logos, óptimas para campañas y artículos corporativos - Ver en Instagram", 
    postUrl: "https://www.instagram.com/p/CfCKyZfr2wX/?igsh=YXN2OWc0YXQwOXN3" 
  },
  {
    id: 7,
    src: "https://ik.imagekit.io/lmpdfv6pk/victor.jpg?updatedAt=1749420482681",
    alt: "Gorra 'Victor' con diseño sofisticado, creación de Lycpersonalizadas - Ver en Instagram",
    postUrl: "https://www.instagram.com/p/Cs_-J3Gvxmn/?igsh=bW03aXc2NjVoYXM3" 
  },
  {
    id: 8,
    src: "https://ik.imagekit.io/lmpdfv6pk/pilusoss.jpg?updatedAt=1749420634121", 
    alt: "Selección de pilusos publicitarios con diseño propio, opción diferente para material de marca en Argentina - Ver en Instagram",
    postUrl: "https://www.instagram.com/p/DCHXfegvdaN/?igsh=Ym9wZ3owcHJsbWU4" 
  },
  {
    id: 9,
    src: "https://ik.imagekit.io/lmpdfv6pk/CLIENTES.jpg?updatedAt=1749430659227",
    alt: "Composición de gorras con diseño propio y trucker para clientes felices, ejemplos de material promocional - Ver más",
    postUrl: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTcyNzk0NDA4MTk2OTgx?story_media_id=1944791919201607256&igsh=MXdoODFpZzl3M21ibw==" 
  },
  {
    id: 10,
    src: "https://ik.imagekit.io/lmpdfv6pk/WhatsApp%20Image%202025-07-03%20at%2017.03.26.jpeg?updatedAt=1751577545913",
    alt: "Gorra trucker negra con logo 'B' personalizado, un ejemplo de nuestros diseños a medida - Ver más en Instagram",
    postUrl: "https://www.instagram.com/lycpersonalizadas?igsh=NnMzMTR4ejlieTJs"
  }
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-16 bg-white sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Nuestra Creatividad en Acción</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Muestrario de Gorras Trucker y Artículos Publicitarios
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Descubre nuestra creatividad en gorras estilo camionero a medida, creaciones originales, remeras y otros productos. Haz clic para explorar en Instagram.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <a
              key={image.id}
              href={image.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
              aria-label={`Ver: ${image.alt.replace(" - Ver en Instagram", "").replace(" - Ver más", "")}`}
            >
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg group-hover:opacity-75 transition-opacity duration-300">
                <img src={image.src} alt={image.alt} className="object-cover w-full h-full" />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold px-4 text-center">{image.alt.replace(" - Ver en Instagram", "").replace(" - Ver más ejemplos", "")}</p>
              </div>
            </a>
          ))}
        </div>
         <p className="mt-12 text-center text-gray-500 px-4">
          Nota: Esta galería exhibe nuestros proyectos auténticos. ¡Acompáñanos en Instagram para ver más creaciones de gorras y artículos de marca!
        </p>
      </div>
    </section>
  );
};

export default Gallery;
