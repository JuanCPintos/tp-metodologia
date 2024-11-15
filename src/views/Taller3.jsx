const Taller3 = () => {
  return (
    <>
      <div className="w-100 sm:px-28 p-0">
        <section className="w-100">
          <div className="w-100 px-4 flex flex-col items-center">
            <h4 className="text-center text-xl roboto-medium py-2 text-[#005BB3]">Normas APA</h4>
            <p className="text-justify text-xl indent-6 pt-4 text-[#005BB3]">
              ¿Qué son las normas APA?
            </p>
            <p className="text-justify indent-6 pt-2">
              Las normas APA en su 7ma edición son un conjunto de pautas creadas por la Asociación de Psicología Americana (APA) para ayudar a que los textos académicos se presenten de una forma clara y organizada. Estas reglas son usadas en muchos trabajos de estudio y investigación para asegurar que se respeten los derechos de los autores y se evite el plagio, siguiendo lo establecido en la Ley N° 11.723 sobre propiedad intelectual. La idea principal es que todos los trabajos académicos mantengan un estilo coherente, facilitando la lectura y comprensión de los textos.
            </p>
            <p className="text-justify text-xl indent-6 pt-4 text-[#005BB3]">
              Formato general del trabajo
            </p>
            <p className="text-justify indent-6 pt-2">
              Tipografía: Usa Times New Roman, tamaño 12.
            </p>
            <p className="text-justify indent-6 pt-2">
              Márgenes: A4, con márgenes normales y el texto justificado.
            </p>
            <p className="text-justify indent-6 pt-2">
              Interlineado: 1,5 en el texto general. Solo en tablas, figuras, notas al pie y fórmulas se usa interlineado simple.
            </p>
            <p className="text-justify indent-6 pt-2">
              Numeración: todas las páginas deben estar enumeradas en la esquina inferior derecha, salvo la carátula. Impreso o escrito en un solo lado de la hoja.
            </p>
            <p className="text-justify indent-6 pt-2">
              Redacción: Puede estar escrito en primera persona (singular o plural) o en un tono impersonal, pero una vez elegido el estilo, debe mantenerse el mismo a lo largo del trabajo.
            </p>
            <p className="text-justify text-xl indent-6 pt-4 text-[#005BB3]">
              Tipos de citas.
            </p>
            <p className="text-justify text-xl indent-6 pt-4 text-[#005BB3]">
              Citas textuales o directas
            </p>
            <p className="text-justify indent-6 pt-2">
              Menos de 40 palabras: el texto debe estar entre comillas e indicando el apellido del autor, el año de publicación y la página de donde fue tomado.
            </p>
            <p className="text-justify indent-6 pt-2">
              Más de 40 palabras: Escribir el texto en un bloque aparte, sin comillas, con una sangría de 1,27 cm desde el margen izquierdo. Hay que asegurarse de indicar la fuente incluyendo el apellido del autor, el año de publicación y la página.
            </p>
            <p className="text-justify text-xl indent-6 pt-4 text-[#005BB3]">
              Ejemplo de más de 40 palabras
            </p>
            <p className="text-justify indent-6 pt-2">
              Según <cite>Molina,M(2022)</cite>, la digitalización se refiere en concreto a la mejora de procesos, funciones y operaciones comerciales mediante el aprovechamiento de la tecnología en el espacio digital. Busca el procesamiento de la información, la automatización de las opercaiones, procesos y el uso de aplicaciones informáticas.
            </p>
            <p className="text-justify text-xl indent-6 pt-4 text-[#005BB3]">
              Citas parafraseadas o indirectas
            </p>
            <p className="text-justify indent-6 pt-2">
              <ul className="list-disc">
                <li>Apellido del autor y año de publicación.</li>
                <li>Sin comillas, ya que se trata de nuestras propias palabras.</li>
              </ul>
            </p>
            <p className="text-justify text-xl indent-6 pt-4 text-[#005BB3]">
              Citas de corporaciones, instituciones u organizaciones.
            </p>
            <p className="text-justify indent-6 pt-2">
              Según un informe del Foro Económico Mundial publicado a fines de 2020, "como consecuencia de la aceleración en el uso y apropiación de la tecnología, se espera que para el año 2025 desaparezcan unos 85 millones de puestos de trabajos en 26 países. Sin embargo, esta misma aceleración traerá la creación de 97 millones de trabajos"<cite>(The Global Risks Report, 2021, p.33)</cite>
            </p>
            <p className="text-justify text-xl indent-6 pt-4 text-[#005BB3]">
              Citas de varios autores
            </p>
            <p className="text-justify indent-6 pt-2">
              Se presentan dos posibilidades:
            </p>
            <ul className="list-disc">
              <li>
                Citas con 2 autores: en todas las citas se mencionan a ambos autores.
              </li>
              <li>
                Citas con 3 o más autores: desde la primera se menciona al primero seguido de la frase et .al.
              </li>
            </ul>
            <p className="text-justify text-xl indent-6 pt-4 text-[#005BB3]">
              Son las fuentes que usamos y citamos en nuestro trabajo académico. Se ordenan alfabéticamente y se incluyen estos datos básicos:
            </p>
            <ul className="list-disc">
              <li>Apellido(s) e inicial(es) de los autores. ¿Quién?</li>
              <li>Año o fecha (entre paréntesis y seguido de un punto). ¿Cuándo?</li>
              <li>Título de la fuente. ¿Qué?</li>
              <li>Editorial o enlace (URL o DOI). ¿Dónde?</li>
            </ul>
            <p className="text-justify indent-6 pt-2">Diario Clarin. (2022, 28 abril). Cómo la tecnología está reconfigurando el mundo del trabajo. <a className="underline text-blue-900 hover:text-blue-600" target="_blank" href="https://www.clarin.com/brandstudio/tecnologia-reconfigurando-mundotrabajo_0_0c57FvKwb0.html?gad_source=1&gclid=Cj0KCQjw_sq2BhCUARIsAlVqmQvhD1nWf1rPhNRBEex9Q3U14dLTXjKfslVfZETdzPE2M28foEHhEUIaAjbKEALW_wcB">https://www.clarin.com/brandstudio/tecnologia-reconfigurando-mundotrabajo</a></p>
            <p className="text-justify indent-6 pt-2">En asociación con Marsh McLenannan, SK Group y Zurich Insurance Group. (2021). Informe de riesgo globales 2021 16a edición. <a className="underline text-blue-900 hover:text-blue-600 w" target="_blank" href="https://www3.weforum.org/docs/WEF_The_Global_Risks_Report_2021.pdf">https://www3.weforum.org/docs/WEF-The-Global-Risks-Report-2021.pdf</a></p>

          </div>
        </section>
      </div>
    </>
  )
}

export default Taller3

