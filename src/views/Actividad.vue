<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Gestión de producto y marca',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> comprender y aplicar conceptos relacionados con producto, marca, identificación, normativa y estrategias digitales para gestionar ofertas comerciales en entornos multicanal.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'En la gestión comercial, un producto debe entenderse principalmente como:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un objeto físico que siempre se vende en una tienda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una oferta con atributos tangibles e intangibles que satisface necesidades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un elemento que solo se clasifica por su precio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un bien que no requiere diferenciación en el mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 2,
          texto:
            'Cuando una marca logra que el consumidor la asocie con confianza y prestigio, se evidencia principalmente un atributo:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Funcional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Logístico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Técnico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Intangible.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 3,
          texto:
            'Si un consumidor compara precio, calidad y diseño antes de comprar, el producto se clasifica como:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'De conveniencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Industrial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'De comparación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'De consumo inmediato.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 4,
          texto:
            'En el ciclo de vida del producto, la etapa en la que se lanza al mercado y requiere inversión en promoción es:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Introducción.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Madurez.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Declive.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fidelización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 5,
          texto:
            'Si una empresa ofrece un mismo producto en diferentes sabores y tamaños, está trabajando la:',
          imagen: '@/assets/actividad/imagen05.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Amplitud de la mezcla.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Consistencia de marca.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Profundidad de la mezcla.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Normativa comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 6,
          texto: 'Un momento de verdad en el servicio se presenta cuando:',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La empresa define únicamente el precio del producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El cliente tiene un contacto que influye en su percepción del servicio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Se elimina la interacción con el consumidor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El producto termina su ciclo de vida.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 7,
          texto:
            'El <em>branding</em> contribuye a la gestión comercial porque permite:',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir totalmente los costos de producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar la necesidad de comunicación con el cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reemplazar el producto por publicidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Construir y gestionar una identidad de marca diferenciada.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 8,
          texto:
            'Cuando una marca ocupa un lugar claro en la mente del consumidor frente a la competencia, se habla de:',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Posicionamiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Embalaje.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Código de barras.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Portafolio logístico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 9,
          texto: 'El código de barras aporta a la gestión comercial porque:',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Define la personalidad visual de la marca.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reemplaza la normativa de protección al consumidor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elimina la necesidad de inventarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Automatiza el registro, control y trazabilidad de productos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 10,
          texto:
            'Una ventaja de la tecnología <em>RFID</em> frente al código de barras es que permite:',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Usar únicamente etiquetas impresas visibles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar cualquier proceso de inventario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Leer múltiples productos a distancia sin contacto directo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Suprimir la identificación del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: 'El empaque cumple una función comercial cuando:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Comunica atributos del producto y ayuda a diferenciarlo en el punto de venta.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo sirve para transportar grandes volúmenes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reemplaza el envase y el embalaje en todos los casos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evita que el producto tenga marca.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 12,
          texto: 'El embalaje se diferencia del envase porque principalmente:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contiene directamente el producto para su uso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Define los colores corporativos de la marca.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mide las métricas digitales de una campaña.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Agrupa y protege productos durante transporte y distribución.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 13,
          texto:
            'En el <em>marketing green</em>, la promoción transparente es importante para:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ocultar los impactos ambientales del producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar mensajes engañosos o <em>greenwashing</em>.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar residuos en la distribución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar el consumo responsable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 14,
          texto:
            'La norma relacionada con protección al consumidor, información, garantías y publicidad es:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ley 1581 de 2012.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ley 256 de 1996.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ley 1480 de 2011.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Decisión Andina 486 de 2000.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 15,
          texto: 'Las patentes son importantes para una empresa porque:',
          imagen: '@/assets/actividad/imagen05.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Otorgan derechos exclusivos sobre una invención durante un tiempo determinado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Impiden desarrollar nuevos productos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo aplican para campañas en redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminan la necesidad de innovación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 16,
          texto:
            'La segmentación avanzada en <em>marketing digital</em> permite:',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Publicar el mismo mensaje a todas las personas sin análisis.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar la medición de resultados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reemplazar el análisis del consumidor por intuición.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Clasificar audiencias según variables demográficas, psicográficas y conductuales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 17,
          texto:
            'Para comunicación empresarial y <em>networking</em> profesional, la plataforma más pertinente es:',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'TikTok.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>LinkedIn</em>.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Instagram.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Facebook.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 18,
          texto:
            'Si el objetivo de una campaña digital es generar compras o registros, se deben priorizar métricas de:',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Alcance.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Interacción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Conversión.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Fidelización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 19,
          texto:
            'Una transacción electrónica realizada entre empresas corresponde al tipo de <em>e-business</em>:',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'B2B.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'B2C.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'C2C.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'C2B.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 20,
          texto: 'El <em>target</em> o mercado objetivo corresponde a:',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La totalidad de usuarios sin segmentación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un grupo específico de consumidores al que se dirige una estrategia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un empaque usado para proteger productos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una norma de propiedad industrial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
