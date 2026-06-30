<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Mercadeo responsable y normativa comercial

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/Tema4/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El mercadeo responsable y la normativa comercial permiten comprender que la gestión del producto no depende únicamente de su diseño, presentación o promoción, sino también de su impacto ambiental, el cumplimiento legal y la protección de los activos intangibles de la organización. Por esta razón, las estrategias comerciales deben considerar criterios de sostenibilidad, transparencia, propiedad intelectual y protección al consumidor.
            br
            br
            | En este apartado se aborda el marketing green o mercadeo verde como una estrategia orientada a integrar prácticas sostenibles en la oferta comercial. Además, se revisa la normativa relacionada con legislación comercial vigente, propiedad intelectual, patentes e invenciones, con el fin de reconocer su importancia en la gestión ética, legal y competitiva de productos, servicios y marcas.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
            h3.bg1.py-3.w-card-text.text-white Relación entre sostenibilidad y normativa comercial

    TabsA.color-acento-botones.mb-2(data-aos="zoom-in-left")
            .tarjeta.bgrosado.p-4(titulo="Mercadeo responsable")
              p.mb-0 Integra prácticas sostenibles en el diseño, producción, distribución y comunicación de productos o servicios, buscando equilibrar los objetivos empresariales con la responsabilidad ambiental.
            .tarjeta.bgrosado.p-4(titulo="Normativa comercial")
              p.mb-0 Establece las reglas que regulan las actividades empresariales, la protección al consumidor, la competencia, la propiedad industrial y el uso adecuado de la información.
            .tarjeta.bgrosado.p-4(titulo="Protección de activos")
              p.mb-0 Permite reconocer que marcas, diseños, invenciones y obras pueden protegerse legalmente para evitar usos indebidos y fortalecer la competitividad de la organización.

    separador
    #t_4_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 4.1  #[em Marketing green] o mercadeo verde: concepto, mezcla, beneficios y procesos

    p El #[em marketing green] surge como respuesta a la necesidad de integrar prácticas sostenibles dentro de las estrategias comerciales, buscando equilibrar los objetivos empresariales con la responsabilidad ambiental.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Concepto

    .bloque-texto-g.bg7.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/Tema4/img02.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El #[em marketing green] o mercadeo verde es el conjunto de estrategias orientadas a promover productos y servicios que minimicen el impacto ambiental, incorporando criterios de sostenibilidad en su diseño, producción, distribución y consumo.

            br
            br
            | En el contexto empresarial, no se trata solo de comunicar valores ecológicos, sino de implementar acciones reales que respalden dichas promesas. Por ejemplo, una empresa de muebles y artículos para el hogar puede desarrollar productos con materiales reciclables, empaques responsables, procesos de producción más eficientes y estrategias de reutilización o reducción de residuos, alineando su propuesta de valor con el cuidado del medio ambiente.
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Mezcla

    p El mercadeo verde adapta la mezcla de mercadeo tradicional a criterios de sostenibilidad:
    .row.mb-4(data-aos="zoom-in-left")
        .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-secundario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                figure
                  img(src='@/assets/curso/temas/Tema4/1.png', alt='')
            h4.text-center Producto
            p.mb-0 Diseño ecológico, uso de materiales reciclables o biodegradables.

        .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-secundario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                figure
                  img(src='@/assets/curso/temas/Tema4/2.png', alt='')
            h4.text-center Precio
            p.mb-0 Puede reflejar costos asociados a procesos sostenibles, pero también valor percibido por el consumidor.
        .col-sm-6.col-lg-3.mb-4.mb-sm-0.d-flex
          .tarjeta--boton.color-secundario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                figure
                  img(src='@/assets/curso/temas/Tema4/3.png', alt='')
            h4.text-center Plaza
            p.mb-0 Distribución eficiente que reduzca impacto ambiental, también llamada logística verde.

        .col-sm-6.col-lg-3.d-flex
          .tarjeta--boton.color-secundario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                figure
                  img(src='@/assets/curso/temas/Tema4/4.png', alt='')
            h4.text-center Promoción
            p.mb-0 Comunicación transparente sobre prácticas sostenibles, evitando el #[em greenwashing].

    .cajon.color-primario.p-4.mb-4(data-aos="zoom-in-left")
      p.mb-0 Por ejemplo, una empresa del sector textil puede integrar sostenibilidad en toda su mezcla de mercadeo verde, desde el uso de fibras recicladas o materiales de menor impacto ambiental hasta campañas educativas enfocadas en el consumo responsable, la durabilidad de las prendas, la reparación, la reutilización y la reducción de residuos.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Sostenibilidad en la mezcla del mercadeo verde

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in-left")
        .row.justify-content-center(titulo="Producto sostenible")
          .col-lg-7.mb-4.mb-md-0
            p Integra materiales reciclados, reutilizables, biodegradables o de menor impacto ambiental, procurando mantener calidad, funcionalidad y seguridad para el consumidor.
          .col-lg-4.col-10.col-md-8
            figure
              img(src='@/assets/curso/temas/Tema4/aco1.png', alt='')
        .row.justify-content-center(titulo="Comunicación responsable")
          .col-lg-7.mb-4.mb-md-0
            p Presenta información clara y verificable sobre los beneficios ambientales del producto, evitando promesas exageradas o engañosas.
          .col-lg-4.col-10.col-md-8
            figure
              img(src='@/assets/curso/temas/Tema4/aco2.png', alt='')
        .row.justify-content-center(titulo="Consumo consciente")
          .col-lg-7.mb-4.mb-md-0
            p Promueve decisiones de compra basadas en la durabilidad, el uso adecuado, la reparación, la reutilización y la disposición responsable del producto.
          .col-lg-4.col-10.col-md-8
            figure
              img(src='@/assets/curso/temas/Tema4/aco3.png', alt='')
        .row.justify-content-center(titulo="Coherencia empresarial")
          .col-lg-7.mb-4.mb-md-0
            p Relaciona la sostenibilidad con acciones reales en producción, distribución, empaque, servicio al cliente y gestión de residuos.
          .col-lg-4.col-10.col-md-8
            figure
              img(src='@/assets/curso/temas/Tema4/aco4.png', alt='')


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Mezcla del mercadeo verde
    
    .fondo01.p-5.mb-4(data-aos="zoom-in-left")
        .row.justify-content-center.align-items-center.mb-2
          .col-lg-12
            .tarjeta.fondosly.p-4
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-md-0
                    h5 Producto sostenible
                    p Integra diseño ecológico y uso de materiales reciclables o biodegradables para reducir el impacto ambiental.
                  .col-lg-4.col-md-8
                    figure
                      img(src='@/assets/curso/temas/Tema4/sly1.png', alt='')
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-md-0
                    h5 Precio responsable
                    p Puede reflejar los costos de procesos sostenibles y el valor que el consumidor percibe en una propuesta ambientalmente responsable.
                  .col-lg-4.col-md-8
                    figure
                      img(src='@/assets/curso/temas/Tema4/sly2.png', alt='')
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-md-0
                    h5 Plaza o logística verde
                    p Busca una distribución eficiente que reduzca el impacto ambiental en el transporte, almacenamiento y entrega del producto.
                  .col-lg-4.col-md-8
                    figure
                      img(src='@/assets/curso/temas/Tema4/sly3.png', alt='')
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-md-0
                    h5 Promoción transparente
                    p Comunica prácticas sostenibles de forma clara y verificable, evitando mensajes engañosos o #[em greenwashing].
                  .col-lg-4.col-md-8
                    figure
                      img(src='@/assets/curso/temas/Tema4/sly4.png', alt='')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Beneficios

    p La implementación del #[em marketing green] genera ventajas competitivas:

    .row.mb-4.justify-content-center(data-aos="zoom-in-left")
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/Tema4/01.png' alt='')
            .tarjeta.bg9
              .p-4
                h4.text-center Diferenciación
                p.mb-0.text-center Posiciona la marca como responsable y consciente.

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/Tema4/02.png' alt='')
            .tarjeta.bg9
              .p-4
                h4.text-center Fidelización
                p.mb-0.text-center Atrae consumidores con valores ambientales.

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/Tema4/03.png' alt='')
            .tarjeta.bg9
              .p-4
                h4.text-center Reducción de costos
                p.mb-0.text-center Optimiza recursos y procesos.
      
    .row.mb-4.justify-content-center(data-aos="zoom-in-left")
      .col-lg-4.mb-4.col-md-6.h-100
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/Tema4/04.png' alt='')
          .tarjeta.bg9
            .p-4
              h4.text-center Reputación
              p.mb-4.text-center Fortalece la imagen corporativa.

      .col-lg-4.col-md-6.h-100
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/Tema4/05.png' alt='')
          .tarjeta.bg9
            .p-4
              h4.text-center Cumplimiento normativo 
              p.mb-0.text-center  Facilita la adaptación a regulaciones ambientales.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Procesos

    p El mercadeo verde implica la integración de prácticas sostenibles en toda la cadena de valor:
    .row.mb-4(data-aos="zoom-in-left")
        .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                figure
                  img(src='@/assets/curso/temas/Tema4/5.png', alt='')
            h4.text-center Diseño sostenible
            p.mb-0 Desarrollo de productos con menor impacto ambiental.

        .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                figure
                  img(src='@/assets/curso/temas/Tema4/6.png', alt='')
            h4.text-center Producción limpia
            p.mb-0 Uso eficiente de recursos y reducción de residuos.

        .col-sm-6.col-lg-3.mb-4.mb-sm-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                figure
                  img(src='@/assets/curso/temas/Tema4/7.png', alt='')
            h4.text-center Logística verde
            p.mb-0 Optimización del transporte y distribución.

        .col-sm-6.col-lg-3.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                figure
                  img(src='@/assets/curso/temas/Tema4/8.png', alt='')
            h4.text-center Consumo responsable
            p.mb-0 Promoción de hábitos sostenibles en el cliente.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Procesos del mercadeo verde

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
        .col-lg-10
          PasosA.color-acento-contenido.mb-0(tipo="n")(data-aos="zoom-in-left")
            .row
              .col-md-8.mb-4.mb-md-0
                h4 Diseñar con sostenibilidad
                p Se desarrollan productos con menor impacto ambiental desde su concepción.
              .col-md-3.col-8
                figure
                  img(src='@/assets/curso/temas/Tema4/pass1.svg', alt='')


            .row
              .col-md-3.mb-4.mb-md-0.col-8
                figure
                  img(src='@/assets/curso/temas/Tema4/pass2.svg', alt='')

              .col-md-8
                h4.text-izq Producir de forma limpia
                p.text-izq Se busca usar eficientemente los recursos y reducir residuos en los procesos productivos.     

            .row
              .col-md-8.mb-4.mb-md-0
                h4 Distribuir con logística verde
                p Se optimizan el transporte y la distribución para disminuir el impacto ambiental.    
              .col-md-3.col-8
                figure
                  img(src='@/assets/curso/temas/Tema4/pass3.svg', alt='')
            
            .row
              .col-md-3.col-8.mb-4
                figure
                  img(src='@/assets/curso/temas/Tema4/pass4.svg', alt='')
              .col-md-8.mb-4.mb-md-0
                h4.text-izq Promover consumo responsable
                p.text-izq Se orienta al cliente hacia hábitos de consumo más sostenibles y conscientes.

    .bloque-texto-g.bloque-texto-g--inverso.bg2.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/Tema4/img04.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El mercadeo verde puede aplicarse en diferentes decisiones de la mezcla de mercadeo, como el diseño del producto, el precio, la distribución y la comunicación de prácticas sostenibles. Este enfoque permite reconocer que la sostenibilidad no se limita al mensaje publicitario, sino que debe reflejarse en acciones concretas relacionadas con empaques, proveedores, materiales, canales de distribución y consumo responsable.
          br 
          
    .cajon.color-acento-contenido.p-4.mb-4(data-aos="zoom-in-left")
      p Para complementar este tema, se dispone del video “¿Qué es mercadeo verde (#[em Green Marketing])? Ejemplos de mercadeo verde en el mundo”, el cual permite identificar cómo diferentes organizaciones aplican acciones sostenibles en la mezcla de mercadeo. Durante la revisión del recurso, identifique ejemplos relacionados con producto, precio, distribución y comunicación, y relacione estas prácticas con procesos de diseño sostenible, producción limpia, logística verde y consumo responsable.

    figure.mb-4(data-aos="zoom-in-left")
        .video
          iframe(iframe width="560" height="315" src="https://www.youtube.com/embed/PbdVwChb71Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
        figcaption Video: ¿Qué es mercadeo verde (#[em Green Marketing])? Ejemplos de mercadeo verde en el mundo


    separador
    #t_4_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 4.2  Normativa: legislación comercial vigente, propiedad intelectual, patentes e invenciones

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-12.mb-3
        img(src='@/assets/curso/temas/Tema4/img05.png', alt='')
      p La normativa establece el marco legal que regula las actividades comerciales, garantizando el cumplimiento de disposiciones relacionadas con propiedad, competencia y protección del consumidor. Su aplicación permite que las organizaciones desarrollen productos, marcas y estrategias comerciales bajo principios de transparencia, equidad y seguridad en las relaciones de mercado.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Legislación comercial vigente

    p La legislación comercial comprende el conjunto de normas que regulan las actividades empresariales, incluyendo la comercialización de productos, la protección al consumidor y las prácticas de mercado. Estas normas buscan garantizar transparencia, equidad y seguridad en las relaciones comerciales.
    
    .titulo-sexto.color-secundario(data-aos='fade-right').mb-3
      h5 Tabla 8.
      span Normatividad comercial y de protección al consumidor en Colombia
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a
          table
            thead
              tr
                th.bg4 Norma
                th.bg4 Tipo
                th.bg4 Enfoque
                th.bg4 Aspectos que regula
                th.bg4 Aplicación en el #[em marketing] y producto
            tbody
              tr
                td Ley 1480 de 2011
                td Ley
                td Protección al consumidor
                td Información, calidad, garantías, publicidad.
                td Etiquetado, comunicación comercial, condiciones de venta.
              tr
                td Decreto 735 de 2013
                td Decreto
                td Garantías
                td Reglamenta garantías legales y procedimientos.
                td Atención postventa y servicio al cliente.
              tr
                td Decreto 1369 de 2014
                td Decreto
                td Comercio electrónico
                td Protección al consumidor en entornos digitales.
                td #[em E-commerce], información en plataformas digitales.
              tr
                td Decisión Andina 486 de 2000
                td Norma supranacional
                td Propiedad industrial
                td Marcas, patentes, diseños industriales.
                td Protección de marca, innovación y diferenciación.
              tr
                td Ley 256 de 1996
                td Ley
                td Competencia desleal
                td Prácticas comerciales indebidas.
                td Publicidad y estrategias comerciales éticas.
              tr
                td Ley 1581 de 2012
                td Ley
                td Protección de datos
                td Tratamiento de datos personales.
                td #[em Marketing digital], bases de datos de clientes.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Normas que orientan la gestión comercial

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-3.mb-3.col-8.col-md-5
        img(src='@/assets/curso/temas/Tema4/img06.png', alt='')
      .col-lg-9
        TabsA.color-acento-botones.mb-2
          .tarjeta.bgrosado.p-4(titulo="Protección al consumidor")
              p.mb-0 La Ley 1480 de 2011 regula aspectos relacionados con información, calidad, garantías y publicidad, lo que impacta el etiquetado, la comunicación comercial y las condiciones de venta.
          .tarjeta.bgrosado.p-4(titulo="Garantías")
              p.mb-0 El Decreto 735 de 2013 reglamenta garantías legales y procedimientos, por lo que se relaciona con la atención postventa y el servicio al cliente.
          .tarjeta.bgrosado.p-4(titulo="Comercio electrónico")
              p.mb-0 El Decreto 1369 de 2014 se relaciona con la protección del consumidor en entornos digitales y aplica a información presentada en plataformas de #[em e-commerce.]
          .tarjeta.bgrosado.p-4(titulo="Propiedad industrial")
              p.mb-0 La Decisión Andina 486 de 2000 regula marcas, patentes y diseños industriales, aportando a la protección de la marca, la innovación y la diferenciación.
          .tarjeta.bgrosado.p-4(titulo="Competencia desleal")
              p.mb-0 La Ley 256 de 1996 regula prácticas comerciales indebidas y orienta el desarrollo de publicidad y estrategias comerciales éticas.
          .tarjeta.bgrosado.p-4(titulo="Protección de datos")
              p.mb-0 La Ley 1581 de 2012 regula el tratamiento de datos personales, aspecto clave en bases de datos de clientes y acciones de #[em marketing digital.]
          

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Propiedad intelectual

    .bloque-texto-g.bg7.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/Tema4/img07.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La propiedad intelectual protege las creaciones de la mente, como marcas, diseños, patentes y obras, otorgando derechos exclusivos a sus creadores.
            br
            br
            | En el contexto del #[em marketing], es fundamental para proteger la identidad de marca y evitar el uso indebido por parte de terceros. 

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Patentes e invenciones

    .cajon.color-primario.p-4.mb-4(data-aos="zoom-in-left")
      p Las patentes son derechos otorgados sobre invenciones que permiten a su titular explotar de manera exclusiva un producto o proceso durante un tiempo determinado.
      p Esto incentiva la innovación y el desarrollo tecnológico, ya que protege las inversiones en investigación. 
      p Las patentes permiten proteger invenciones, productos o procesos que aportan valor al mercado. En el contexto del emprendimiento, comprender este proceso ayuda a reconocer cuándo una idea puede convertirse en un activo protegido y cómo la propiedad industrial puede fortalecer la competitividad de un negocio.
    
    img(src='@/assets/curso/temas/Tema4/podcast.svg', alt='Texto que describa la imagen')
    .row.justify-content-center.g-0(data-aos="fade-right")
      .col-lg-12
        .tarjeta.clr--pink.p-4.rounded-0.h-100.color-primario
          .tarjeta.bg-white.p-4
            TarjetaAudio.color-secundario.mb-4.p-3(
            texto="Pódcast: Patentes y emprendimiento: proteger una invención para crecer"
            :audio="require_src('@/assets/curso/temas/Tema2/podcast.svg')"
        )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p Para complementar este tema, se dispone del pódcast “Patentes y emprendimiento: proteger una invención para crecer”. Este recurso permite reconocer, mediante una conversación aplicada, cuáles son los requisitos generales que debe cumplir una invención, por qué es importante revisar antecedentes antes de iniciar una solicitud y cuál es el papel de la Superintendencia de Industria y Comercio en el proceso de protección de una patente en Colombia.
            p Durante la revisión del pódcast, identifique la relación entre innovación, propiedad industrial, protección legal y ventaja competitiva para un emprendimiento.
































</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
