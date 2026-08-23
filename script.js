/* =====================================================
   DATOS DE LAS SOCIEDADES
===================================================== */

const sociedades = {

    sa: {

        icono: "🏛",

        titulo: "Sociedad Anónima",

        siglas: "S.A.",

        descripcion:
            "La Sociedad Anónima existe bajo una denominación y se compone exclusivamente de socios cuya obligación se limita al pago de sus acciones.",

        caracteristicas: [
            "El capital está representado por acciones.",
            "Debe existir bajo una denominación social.",
            "Cuenta con accionistas.",
            "Tiene órganos de administración y vigilancia conforme al régimen aplicable."
        ],

        beneficios: [
            "Permite organizar el capital mediante acciones.",
            "La obligación de los accionistas se limita al pago de sus acciones.",
            "Puede facilitar la participación de inversionistas.",
            "Es utilizada para diferentes actividades empresariales."
        ],

        requisitos: [

            {
                texto: "Contar con por lo menos dos socios.",
                url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGSM.pdf",
                boton: "Consultar fundamento legal →"
            },

            {
                texto: "Cada socio debe suscribir por lo menos una acción.",
                url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGSM.pdf",
                boton: "Consultar fundamento legal →"
            },

            {
                texto: "Establecer el capital social y suscribirlo íntegramente.",
                url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGSM.pdf",
                boton: "Consultar LGSM →"
            },

            {
                texto: "Cumplir las formalidades de constitución e inscripción.",
                url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGSM.pdf",
                boton: "Consultar LGSM →"
            }

        ],

        riesgos: [
            "Requiere una estructura administrativa formal.",
            "Implica obligaciones legales y fiscales.",
            "Una administración deficiente puede generar problemas financieros.",
            "La constitución puede resultar más compleja que una SAS."
        ],

        adecuada:
            "Puede ser adecuada para proyectos empresariales que requieren una estructura cuyo capital esté representado mediante acciones."

    },


    srl: {

        icono: "🤝",

        titulo: "Sociedad de Responsabilidad Limitada",

        siglas: "S. de R.L.",

        descripcion:
            "Es una sociedad constituida entre socios obligados al pago de sus aportaciones y cuyo capital se encuentra dividido en partes sociales.",

        caracteristicas: [
            "El capital se divide en partes sociales.",
            "Las partes sociales no están representadas por títulos negociables.",
            "No puede tener más de cincuenta socios.",
            "Su administración está a cargo de uno o más gerentes."
        ],

        beneficios: [
            "Permite mantener un grupo de socios definido.",
            "La responsabilidad está vinculada a las aportaciones.",
            "Puede ser adecuada para pequeñas y medianas empresas.",
            "Permite regular la admisión de nuevos socios."
        ],

        requisitos: [

            {
                texto: "No puede tener más de cincuenta socios.",
                url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGSM.pdf",
                boton: "Consultar fundamento legal →"
            },

            {
                texto: "Establecer el capital social y dividirlo en partes sociales.",
                url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGSM.pdf",
                boton: "Consultar fundamento legal →"
            },

            {
                texto: "El capital debe estar íntegramente suscrito.",
                url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGSM.pdf",
                boton: "Consultar LGSM →"
            },

            {
                texto: "Al constituirse debe exhibirse por lo menos el 50% del valor de cada parte social.",
                url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGSM.pdf",
                boton: "Consultar LGSM →"
            }

        ],

        riesgos: [
            "La entrada de nuevos socios está sujeta a las reglas legales y sociales.",
            "Puede ser menos flexible para incorporar inversionistas.",
            "Debe cumplir las reglas establecidas en el contrato social."
        ],

        adecuada:
            "Puede ser una alternativa para negocios con un grupo de socios definido y una estructura basada en partes sociales."

    },


    sas: {

        icono: "📋",

        titulo: "Sociedad por Acciones Simplificada",

        siglas: "S.A.S.",

        descripcion:
            "La Sociedad por Acciones Simplificada permite a una o más personas físicas constituir una sociedad mediante el procedimiento electrónico previsto por la legislación.",

        caracteristicas: [
            "Puede constituirse por una o más personas físicas.",
            "El capital está representado por acciones.",
            "El procedimiento de constitución utiliza medios electrónicos.",
            "La figura está sujeta a condiciones y límites establecidos por la legislación."
        ],

        beneficios: [
            "El procedimiento de constitución es electrónico.",
            "El trámite de constitución es gratuito.",
            "Puede constituirse por una sola persona física.",
            "Puede facilitar la formalización de determinados emprendimientos."
        ],

        requisitos: [

            {
                texto: "Contar con e.firma válida y vigente.",
                url: "https://wwwmat.sat.gob.mx/tramites/16703/obten-tu-certificado-de-e.firma",
                boton: "Tramitar e.firma en SAT →"
            },

            {
                texto: "Contar con autorización para el uso de denominación o razón social.",
                url: "https://www.gob.mx/tuempresa",
                boton: "Consultar Secretaría de Economía →"
            },

            {
                texto: "Ser una o más personas físicas que cumplan las condiciones legales.",
                url: "https://www.gob.mx/tramites",
                boton: "Consultar trámites oficiales →"
            },

            {
                texto: "Realizar el procedimiento electrónico de constitución.",
                url: "https://www.gob.mx/tuempresa",
                boton: "Consultar portal oficial →"
            }

        ],

        riesgos: [
            "Está sujeta a condiciones y límites establecidos por la legislación.",
            "Debe cumplir obligaciones fiscales y administrativas.",
            "El crecimiento del negocio puede requerir analizar otras estructuras societarias.",
            "Debe verificarse que el proyecto cumpla las condiciones de la figura."
        ],

        adecuada:
            "Puede resultar atractiva para ciertos emprendimientos y pequeñas empresas que cumplen las condiciones legales."

    },


    cooperativa: {

        icono: "👥",

        titulo: "Sociedad Cooperativa",

        siglas: "S. COOP.",

        descripcion:
            "Es una organización social integrada por personas físicas con intereses comunes que buscan satisfacer necesidades individuales y colectivas mediante actividades económicas.",

        caracteristicas: [
            "Se basa en solidaridad, esfuerzo propio y ayuda mutua.",
            "Reconoce un voto por socio.",
            "Es de capital variable.",
            "Tiene duración indefinida."
        ],

        beneficios: [
            "Promueve la colaboración entre integrantes.",
            "Favorece la participación democrática.",
            "Permite unir recursos y esfuerzos.",
            "Puede contribuir al desarrollo económico y social."
        ],

        requisitos: [

            {
                texto: "Contar, como regla general, con un mínimo de cinco socios.",
                url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGSC.pdf",
                boton: "Consultar LGSC →"
            },

            {
                texto: "Realizar la asamblea constitutiva de los interesados.",
                url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGSC.pdf",
                boton: "Consultar fundamento →"
            },

            {
                texto: "Elaborar las bases constitutivas.",
                url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGSC.pdf",
                boton: "Consultar LGSC →"
            },

            {
                texto: "Elegir los órganos sociales correspondientes.",
                url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGSC.pdf",
                boton: "Consultar LGSC →"
            }

        ],

        riesgos: [
            "Las decisiones requieren coordinación entre los integrantes.",
            "Puede ser necesario llegar a acuerdos entre diferentes socios.",
            "Una administración inadecuada puede afectar a la organización."
        ],

        adecuada:
            "Puede ser apropiada cuando varias personas buscan organizarse para satisfacer necesidades comunes mediante cooperación y participación."

    }

};


/* =====================================================
   CREAR LISTAS
===================================================== */

function crearLista(lista) {

    return lista
        .map(item => `<li>${item}</li>`)
        .join("");

}


function crearRequisitos(lista) {

    return lista
        .map(item => {

            return `
                <li class="requirement-item">

                    <div class="requirement-text">

                        <span class="check-symbol">
                            ✓
                        </span>

                        <span>
                            ${item.texto}
                        </span>

                    </div>

                    <a
                        href="${item.url}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="official-link">

                        ${item.boton}

                    </a>

                </li>
            `;

        })
        .join("");

}


/* =====================================================
   MOSTRAR SOCIEDAD
===================================================== */

function mostrarSociedad(tipo) {

    const sociedad = sociedades[tipo];

    const panel =
        document.getElementById(
            "societyInformation"
        );


    panel.innerHTML = `

        <div class="detail-header">

            <div class="detail-icon">
                ${sociedad.icono}
            </div>

            <div>

                <h3>
                    ${sociedad.titulo}
                </h3>

                <span>
                    ${sociedad.siglas}
                </span>

            </div>

        </div>


        <p class="detail-description">

            ${sociedad.descripcion}

        </p>


        <div class="detail-grid">


            <div class="detail-box">

                <h4>
                    Características
                </h4>

                <ul>

                    ${crearLista(
                        sociedad.caracteristicas
                    )}

                </ul>

            </div>


            <div class="detail-box">

                <h4>
                    Beneficios
                </h4>

                <ul>

                    ${crearLista(
                        sociedad.beneficios
                    )}

                </ul>

            </div>


            <div class="detail-box requirements-box">

                <h4>
                    Requisitos oficiales
                </h4>

                <p class="requirement-note">

                    Selecciona los botones para consultar
                    la fuente o trámite correspondiente.

                </p>

                <ul class="requirements-list">

                    ${crearRequisitos(
                        sociedad.requisitos
                    )}

                </ul>

            </div>


            <div class="detail-box">

                <h4>
                    Riesgos y desventajas
                </h4>

                <ul>

                    ${crearLista(
                        sociedad.riesgos
                    )}

                </ul>

            </div>


            <div class="detail-box suitable-box">

                <h4>
                    ¿Para quién puede ser adecuada?
                </h4>

                <p>
                    ${sociedad.adecuada}
                </p>

            </div>

        </div>

    `;


    panel.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}


/* =====================================================
   MENÚ
===================================================== */

const menuButton =
    document.getElementById(
        "menuButton"
    );

const navMenu =
    document.getElementById(
        "navMenu"
    );


if (menuButton && navMenu) {

    menuButton.addEventListener(
        "click",
        () => {

            navMenu.classList.toggle(
                "active"
            );

        }
    );

}


/* =====================================================
   CERRAR MENÚ
===================================================== */

document
    .querySelectorAll(".nav-menu a")
    .forEach(enlace => {

        enlace.addEventListener(
            "click",
            () => {

                navMenu.classList.remove(
                    "active"
                );

            }
        );

    });


/* =====================================================
   PREGUNTAS FRECUENTES
===================================================== */

document
    .querySelectorAll(".faq-question")
    .forEach(pregunta => {

        pregunta.addEventListener(
            "click",
            () => {

                const actual =
                    pregunta.parentElement;


                document
                    .querySelectorAll(".faq-item")
                    .forEach(item => {

                        if (item !== actual) {

                            item.classList.remove(
                                "active"
                            );

                        }

                    });


                actual.classList.toggle(
                    "active"
                );

            }
        );

    });