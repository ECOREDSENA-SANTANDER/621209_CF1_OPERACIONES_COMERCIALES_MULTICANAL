export default {
  global: {
    Name: 'Gestión de producto y marca',
    Description:
      'Este componente formativo orienta la gestión de la mezcla de productos, servicios y marca según el segmento de mercado. Integra conceptos de producto, branding, posicionamiento, normativa comercial y herramientas de marketing digital para apoyar la promoción, la identidad corporativa y el desarrollo de estrategias de social media marketing en contextos comerciales multicanal.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Gestión estratégica del producto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Producto: concepto, atributos, clasificación, características, referencias y tipos.',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Mezcla de producto: concepto, estructura, categoría, línea de producto, portafolio y ciclo de vida.',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Servicios: concepto, características, cultura y momentos de verdad.',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Construcción y posicionamiento de marca',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Marca: símbolos, emblemas, etiqueta y caracteres que identifican el nombre.',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              '<i>Branding</i> o construcción de marca: concepto, diseño, elementos, estructura y beneficios.',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Posicionamiento: concepto, estrategias y beneficios.',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Identificación, presentación y protección del producto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Códigos de barras: concepto, tipos y características.',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Etiqueta <i>RFID</i>: concepto, tipos y usos.',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Empaque: concepto, tipos, funciones y usos.',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Envase: concepto, tipos, funciones y usos.',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Embalaje: concepto, tipos, funciones y usos.',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Mercadeo responsable y normativa comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              '<i>Marketing green</i> o mercadeo verde: concepto, mezcla, beneficios y procesos.',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Normativa: legislación comercial vigente, propiedad intelectual, patentes e invenciones.',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Estrategias digitales para la gestión comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              '<i>Marketing digital</i>: concepto, características y técnicas.',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              '<i>Social media marketing</i>: concepto, plataformas, estrategias, medios y métricas.',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: '<i>E-business</i>: concepto, tipos, clases y beneficios.',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '---',
      link: '---',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '---',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: ' ',
          cargo: ' ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: ' ',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
