
const Taller1 = () => {
  return (
    <>
      <div className="w-100 sm:px-28 p-0">
        <section className="w-100">
          <div className="w-100 px-4 flex flex-col items-center">
            <h4 className="text-center text-xl roboto-medium py-2 text-[#005BB3]">Técnicas de fichajes</h4>
            <p className="text-justify indent-6">
              Este taller tenía como objetivo principal:
            </p>
            <p className="text-justify indent-6 pt-2">
              1.Identificar diferentes clases de fuentes de información y confeccionar fichas con la información recolectada.
            </p>
            <p className="text-justify indent-6 pt-2">
              En este taller aprendimos a buscar fuentes de información y a usar técnicas de fichaje para contar con ellas cuando fuera necesario.
            </p>
            <h4 className="text-center text-xl roboto-medium py-2 text-[#005BB3]">Que es el fichaje:</h4>
            <p className="text-justify indent-6 pt-2">
              Técnica por la cual se construye un instrumento que nos permite guardar en forma escrita, de manera económica, sencilla, lo más completa posible, la información que será necesaria y utilizada a lo largo de toda la investigación
            </p>
            <p className="text-justify text-xl indent-6 pt-4 text-[#005BB3]">
              Clases de fichaje:
            </p>
            <ul className="list-disc w-3/4">
              <li>
                <p className="indent pt-2">
                  FICHAS BIBLIOGRAFICAS O INDICES: por autores o por materias
                </p>
              </li>
              <li>
                <p className="indent pt-2">
                  FICHA DE CONTENIDO: textual
                </p>
              </li>
              <li>
                <p className="indent pt-2">
                  FICHA DE DOCUMENTACION: de resumen o se síntesis
                </p>
              </li>
            </ul>
            <h4 className="text-center text-xl roboto-medium py-2 text-[#005BB3]">Modelo de ficha</h4>

            <p className="text-justify text-xl indent-6 text-[#005BB3]">
              Anverso
            </p>
            <ul className="list-disc w-3/4">
              <li>
                <p className="indent pt-2">
                  Autor: apellido/s, nombre/s
                </p>
              </li>
              <li>
                <p className="indent pt-2">
                  Año de publicación:
                </p>
              </li>
              <li>
                <p className="indent pt-2">
                  Titulo: Libro,  Revista, Capitulo
                </p>
              </li>
              <li>
                <p className="indent pt-2">
                  Número de Edición
                </p>
              </li>
              <li>
                <p className="indent pt-2">
                  Editorial
                </p>
              </li>
              <li>
                <p className="indent pt-2">
                  Lugar de edición
                </p>
              </li>
              <li>
                <p className="indent pt-2">
                  Paginas
                </p>
              </li>
              <li>
                <p className="indent pt-2">
                  Origen de la información: ej. Biblioteca de la facultad de Ciencias Económicas
                </p>
              </li>
            </ul>

            <p className="text-justify text-xl indent-6 pt-4 text-[#005BB3]">
              Reverso
            </p>
            <ul className="list-disc w-3/4">
              <li>
                <p className="indent pt-2">
                  Resumes
                </p>
              </li>
              <li>
                <p className="indent pt-2">
                  Sintesis
                </p>
              </li>
              <li>
                <p className="indent pt-2">
                  Observación
                </p>
              </li>
              <li>
                <p className="indent pt-2">
                  Copia textual del documento
                </p>
              </li>
            </ul>
            <div 
            className="w-[340px] sm:w-3/4"
            >
              <p className="pt-3 text-center">Modelo de ficha de nuestro trabajo</p>
              <img src="/taller1.png" alt="Modelo de ficha" />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Taller1