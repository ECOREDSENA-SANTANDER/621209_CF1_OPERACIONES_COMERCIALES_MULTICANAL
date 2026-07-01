export default {
  global: {
    Name: 'Gestión de producto y marca',
    Description:
      'Este componente formativo orienta la gestión de la mezcla de productos, servicios y marca según el segmento de mercado. Integra conceptos de producto, <i>branding</i>, posicionamiento, normativa comercial y herramientas de <i>marketing digital</i> para apoyar la promoción, la identidad corporativa y el desarrollo de estrategias de <i>social media marketing</i> en contextos comerciales multicanal.',
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
      termino: 'Atributos del producto',
      significado:
        'Características tangibles e intangibles, como calidad, diseño, marca, funcionalidad y empaque, que permiten diferenciar un producto en el mercado.',
    },
    {
      termino: '<i>Branding</i>',
      significado:
        'Proceso estratégico de creación, desarrollo, gestión y posicionamiento de una marca para lograr reconocimiento, diferenciación y conexión con el público.',
    },
    {
      termino: 'Ciclo de vida del producto',
      significado:
        'Etapas por las que pasa un producto en el mercado: introducción, crecimiento, madurez y declive.',
    },
    {
      termino: 'Clasificación del producto',
      significado:
        'Forma de agrupar los productos según su uso, comportamiento de compra, durabilidad, finalidad o tipo de consumidor.',
    },
    {
      termino: 'Código de barras',
      significado:
        'Sistema de identificación automática que utiliza líneas, espacios y números para codificar información de un producto.',
    },
    {
      termino: '<i>E-business</i>',
      significado:
        'Modelo de negocio que utiliza internet y tecnologías digitales para realizar, gestionar y optimizar actividades comerciales y empresariales.',
    },
    {
      termino: 'Embalaje',
      significado:
        'Material utilizado para agrupar, proteger y facilitar el transporte, almacenamiento y distribución de productos.',
    },
    {
      termino: 'Empaque',
      significado:
        'Elemento que envuelve o contiene el producto para protegerlo, conservarlo, presentarlo y facilitar su comercialización.',
    },
    {
      termino: 'Envase',
      significado:
        'Recipiente que contiene directamente el producto y permite su conservación, dosificación, protección y uso.',
    },
    {
      termino: 'Etiqueta',
      significado:
        'Elemento informativo que acompaña al producto y comunica datos sobre su contenido, uso, características, condiciones legales o normativas.',
    },
    {
      termino: 'Identidad de marca',
      significado:
        'Conjunto de elementos visuales, comunicativos y simbólicos que representan la esencia, personalidad y valores de una marca.',
    },
    {
      termino: 'Línea de producto',
      significado:
        'Grupo de productos relacionados que comparten características, funciones, usos o necesidades similares dentro de una misma oferta comercial.',
    },
    {
      termino: 'Marca',
      significado:
        'Nombre, término, símbolo, diseño o combinación de elementos que identifica y diferencia un producto, servicio u organización en el mercado.',
    },
    {
      termino: '<i>Marketing digital</i>',
      significado:
        'Estrategias de promoción, comunicación y comercialización desarrolladas a través de medios, tecnologías y plataformas digitales.',
    },
    {
      termino: '<i>Marketing verde</i>',
      significado:
        'Estrategia de mercadeo orientada a promover productos, servicios y procesos ambientalmente sostenibles.',
    },
    {
      termino: 'Métricas digitales',
      significado:
        'Indicadores que permiten medir, analizar y evaluar el desempeño de estrategias, campañas y acciones desarrolladas en entornos digitales.',
    },
    {
      termino: 'Mezcla de producto',
      significado:
        'Conjunto total de líneas, categorías, referencias y productos que una empresa ofrece al mercado.',
    },
    {
      termino: 'Momentos de verdad',
      significado:
        'Interacciones clave entre el cliente y la empresa que influyen directamente en la percepción del servicio y la experiencia del consumidor.',
    },
    {
      termino: 'Plataformas digitales',
      significado:
        'Espacios en línea utilizados para la comunicación, promoción, venta, interacción y gestión comercial con los usuarios.',
    },
    {
      termino: 'Portafolio de productos',
      significado:
        'Conjunto total de líneas y productos que una empresa gestiona, comercializa y ofrece a diferentes segmentos de mercado.',
    },
    {
      termino: 'Posicionamiento',
      significado:
        'Lugar que ocupa una marca, producto o servicio en la mente del consumidor frente a la competencia.',
    },
    {
      termino: 'Producto',
      significado:
        'Bien, servicio, idea o experiencia que se ofrece en el mercado para satisfacer necesidades o deseos del consumidor.',
    },
    {
      termino: 'Propiedad intelectual',
      significado:
        'Conjunto de derechos legales que protegen creaciones, marcas, diseños, patentes, obras e invenciones.',
    },
    {
      termino: '<i>RFID</i>',
      significado:
        'Tecnología de identificación por radiofrecuencia que permite almacenar y transmitir datos de productos sin necesidad de contacto directo.',
    },
    {
      termino: 'Segmentación de mercado',
      significado:
        'Proceso de dividir el mercado en grupos de consumidores con características, necesidades o comportamientos similares.',
    },
    {
      termino: 'Servicio',
      significado:
        'Actividad intangible que busca satisfacer necesidades del cliente sin implicar la transferencia de propiedad de un bien físico.',
    },
    {
      termino: '<i>Social media marketing</i>',
      significado:
        'Uso estratégico de redes sociales para promocionar productos, interactuar con clientes, construir comunidad y posicionar marcas.',
    },
    {
      termino: 'Símbolo',
      significado:
        'Elemento gráfico que representa visualmente una marca y facilita su identificación, recordación y diferenciación.',
    },
    {
      termino: '<i>Target</i> o mercado objetivo',
      significado:
        'Grupo específico de consumidores al que se dirige una estrategia de mercadeo, comunicación o comercialización.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aaker, D. A. (2014). Construir marcas fuertes. Editorial Gestión 2000.',
      link: '',
    },
    {
      referencia:
        'Chaffey, D., & Ellis-Chadwick, F. (2019). Marketing digital: estrategia, implementación y práctica (7.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'GS1 Colombia. (s. f.). Estándares para códigos de barras y tecnología RFID.',
      link: '',
    },
    {
      referencia:
        'GS1 Colombia. (s. f.). ¿Qué significan los números en los códigos de barras?.',
      link: '',
    },
    {
      referencia:
        'Kotler, P., & Armstrong, G. (2017). Fundamentos de marketing (13.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Kotler, P., Kartajaya, H., & Setiawan, I. (2021). Marketing 5.0: tecnología para la humanidad. LID Editorial.',
      link: '',
    },
    {
      referencia:
        'Kotler, P., & Keller, K. L. (2016). Dirección de marketing (15.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social, & Fondo de las Naciones Unidas para la Infancia. (s. f.). Cartilla de lectura de etiquetado para familias ABCD: Apropia, Busca, Compara y Decide por opciones más saludables.',
      link: '',
    },
    {
      referencia:
        'Porter, M. E. (2009). Estrategia competitiva: técnicas para el análisis de los sectores industriales y de la competencia. Ediciones Pirámide.',
      link: '',
    },
    {
      referencia:
        'Rivera Camino, J., Arellano Cueva, R., & Molero Ayala, V. (2013). Conducta del consumidor: estrategias y políticas aplicadas al marketing. ESIC Editorial.',
      link: '',
    },
    {
      referencia:
        'Sainz de Vicuña, J. M. (2020). El plan de marketing en la práctica (23.ª ed.). ESIC Editorial.',
      link: '',
    },
    {
      referencia:
        'Selman, H. (2017). Marketing digital: estrategias para atraer clientes a tu negocio. Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Soroka, W. (2009). Fundamentos de tecnología de empaques. Institute of Packaging Professionals.',
      link: '',
    },
    {
      referencia:
        'Stanton, W. J., Etzel, M. J., & Walker, B. J. (2007). Fundamentos de marketing (14.ª ed.). McGraw-Hill Interamericana.',
      link: '',
    },
    {
      referencia:
        'Superintendencia de Industria y Comercio. (s. f.). Propiedad industrial y normativa vigente.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales Cabrera',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Angelica Varon Quintero',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturísticod - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
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
