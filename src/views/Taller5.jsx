const Taller5 = () => {
  return (
    <>
      <div className="w-100 sm:px-28 p-0">
        <section className="w-100">
          <div className="w-100 px-4 flex flex-col items-center">
            <h4 className="text-center text-xl roboto-medium py-2 text-[#005BB3]">Diseñando instrumentos de recolección de datos en investigación social</h4>
            <p className="text-justify indent-6">
              Existen distintas técnicas de recolección de datos como:
            </p>
            <ul className="list-disc w-3/4">
              <li>Observación</li>
              <li>Entrevista</li>
              <li>Encuesta</li>
              <li>Sesión de grupo</li>
            </ul>
            <p className="text-justify text-xl indent-6 pt-4 text-[#005BB3]">
              Encuesta
            </p>
            <p className="indent text-justify pt-2">
              Es un procedimiento de investigación, en la que el investigador recopila información mediante el cuestionario previamente diseñado. El objetivo de la encuesta es obtener información específica sobre las opiniones, comportamientos, características o conocimientos de un grupo de interés, en relación con un tema particular.
            </p>
            <p className="text-justify indent-6">
              Reglas de redacción de preguntas en una encuesta
            </p>
            <p className="indent text-justify pt-2 pb-2">
              La formulación de las preguntas es fundamental para la validez y confiabilidad de los datos. Algunas reglas clave para redactar preguntas en una encuesta son:
            </p>
            <ul className="list-disc w-3/4">
              <li>Claridad y precisión</li>
              <li>Simplicidad</li>
              <li>Neutralidad</li>
              <li>Evitar preguntas compuestas</li>
              <li>Uso de escalas coherentes</li>
              <li>Evitar preguntas largas</li>
            </ul>
            <p className="text-justify text-xl indent-6 pt-4 text-[#005BB3]">
              Ejemplo de encuesta:
            </p>
            <p className="text-justify text-xl indent-6 pt-4 text-[#005BB3]">
              Introducción
            </p>
            <p className="indent text-justify pt-2 pb-2">
              Queridos encuestados, somos estudiantes de ciencias económicas de la UNNE y estamos llevando a cabo un trabajo de investigación sobre ¨ El impacto de la digitalización en el mercado laboral en argentina pre y post pandemia (2019-2024) ¨ para la catedra metodología de la investigación. Esta encuesta está dirigida a trabajadores dentro del rango de edad de 18 años hasta su jubilación. Tales respuestas serán anónimas y serán utilizadas exclusivamente con fines del trabajo de investigación. Muchas gracias por su colaboración.
            </p>
            <p className="indent text-justify pt-2 pb-2">
              Preguntas abiertas (cualitativas) y Cerradas (cuantitativas)
            </p>
            <p className="indent text-justify pt-2 pb-2">
              Datos buscados:
            </p>
            <ol className="list-decimal pl-7 flex flex-col gap-3">
              <li className="">
                <p>¿Qué edad tienes?</p>
                <ol className="list-decimal pl-7">
                  <li>18 a 25</li>
                  <li>26 a 34</li>
                  <li>35 a 44</li>
                  <li>45 a 54</li>
                  <li>55 o más</li>
                </ol>
              </li>
              <li className="">
                <p>Género</p>
                <ol className="list-decimal pl-7">
                  <li>Masculino</li>
                  <li>Femenino</li>
                  <li>Otro</li>
                  <li>Prefiero no responder</li>
                </ol>
              </li>
              <li className="">
                <p>Sector laboral</p>
                <ol className="list-decimal pl-7">
                  <li>Industrial</li>
                  <li>Telecomunicaciones</li>
                  <li>Comercio</li>
                  <li>De servicio</li>
                  <li>Otros</li>
                </ol>
              </li>
              <li className="">
                <p>Puesto de trabajo</p>
                <ol className="list-decimal pl-7">
                  <li>Directivo</li>
                  <li>Gernete</li>
                  <li>Técnico en sistemas</li>
                  <li>Operario</li>
                  <li>Empleado</li>
                  <li>Otro</li>
                </ol>
              </li>
              <li className="">
                <p>Nivel de estudios</p>
                <ol className="list-decimal pl-7">
                  <li>Primario</li>
                  <li>Secundario</li>
                  <li>Gardo universitario</li>
                  <li>Tecnicautura</li>
                  <li>Curso de acutualización en tecnología o digitalización</li>
                </ol>
              </li>
            </ol>
            
            <p className="text-justify text-xl pt-4 text-[#005BB3]">
              En este trabajo no utilizamos preguntas abiertas.
            </p>

          </div>
        </section>
      </div>
    </>
  )
}
export default Taller5