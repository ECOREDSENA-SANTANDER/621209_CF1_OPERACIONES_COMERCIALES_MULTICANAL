<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Gestión estratégica del producto
    
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/Tema1/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La gestión estratégica del producto permite comprender cómo una organización estructura su oferta comercial para responder a las necesidades del consumidor y generar valor en el mercado. Para lograrlo, se analizan tres elementos centrales: el producto, la mezcla de producto y los servicios, ya que estos permiten organizar la oferta, diferenciarla frente a la competencia y fortalecer la toma de decisiones comerciales.

            br
            br
            | En este apartado se abordan los conceptos, atributos, clasificaciones, características, referencias y tipos de producto. También se estudia la mezcla de producto, su estructura, categorías, líneas, portafolio y ciclo de vida. Finalmente, se revisan los servicios como parte de la oferta comercial, teniendo en cuenta sus características, la cultura de servicio y los momentos de verdad.
      
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
            h3.bg1.py-3.w-card-text.text-white Ruta de la gestión estratégica del producto
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido.mb-3(tipo="n")(data-aos="zoom-in-left")
            .row
              .col-md-8.mb-4.mb-md-0
                h4 Producto
                p Representa la base de la oferta comercial de una organización y permite generar valor en el mercado mediante atributos, características, referencias y tipos.
              .col-md-3.col-8
                figure
                  img(src='@/assets/curso/temas/Tema1/pas1.svg', alt='')


            .row
              .col-md-3.mb-4.mb-md-0.col-8
                figure
                  img(src='@/assets/curso/temas/Tema1/pas2.svg', alt='')

              .col-md-8
                h4.text-izq Mezcla de producto
                p.text-izq Permite estructurar la oferta comercial mediante líneas, categorías, portafolio y ciclo de vida, asegurando coherencia entre productos y segmentos de mercado.        

            .row
              .col-md-8.mb-4.mb-md-0
                h4 Servicios
                p Complementan la oferta comercial mediante experiencias, soluciones, cultura de servicio y momentos de verdad que influyen en la percepción del cliente.      
              .col-md-3.col-8
                figure
                  img(src='@/assets/curso/temas/Tema1/pas3.svg', alt='')
      
      separador
      #t_1_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
        h2 1.1  Producto: concepto, atributos, clasificación, características, referencias y tipos
        
      .row.justify-content-center.mb-2(data-aos="zoom-in-left")
        .col-lg-12
          img(src='@/assets/curso/temas/Tema1/img02.png', alt='')

      p El producto representa la base de la oferta comercial de una organización y constituye el principal medio para generar valor en el mercado. Su gestión estratégica permite responder a necesidades específicas del consumidor y construir diferenciación en entornos competitivos.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
            h3.bg1.py-3.w-card-text.text-white Concepto

      .cajon.color-primario.p-4.mb-4(data-aos="zoom-in-left")
        p El producto se define como un conjunto de atributos tangibles e intangibles que una empresa ofrece al mercado con el propósito de satisfacer necesidades o deseos. Desde una perspectiva técnica, no se limita a un bien físico, sino que incluye beneficios funcionales, emocionales y simbólicos que configuran la experiencia del consumidor.
        p En el contexto empresarial, el producto se diseña según el segmento de mercado y la propuesta de valor, considerando atributos como calidad, diseño y funcionalidad. Por ejemplo, una empresa de muebles para el hogar puede desarrollar productos modulares, funcionales y de diferentes tamaños, orientados a consumidores que buscan soluciones prácticas para organizar sus espacios.

      .titulo-secundario.mb-4(data-aos="zoom-in-left")
        span.decorador
        h4.mb-0 Ejemplo aplicado: categorías de producto en una tienda virtual

      .bloque-texto-g.bloque-texto-g--inverso.bg2.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/Tema1/img03.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 En una tienda virtual de muebles y artículos para el hogar, el producto no se presenta como un elemento aislado, sino como parte de una categoría que facilita la búsqueda, comparación y decisión de compra. Por ejemplo, una empresa puede organizar su oferta en categorías como muebles para sala, muebles para dormitorio, mesas, sillas, almacenamiento, decoración y accesorios para oficina. Esta organización permite que el consumidor encuentre con mayor facilidad lo que necesita y compare opciones según diseño, funcionalidad, tamaño, precio o materiales.
            br
      .titulo-secundario.mb-4(data-aos="zoom-in-left")
        span.decorador
        h4.mb-0 Organización del producto en una tienda virtual

      .row.justify-content-center.mb-0(data-aos="zoom-in-left")
        .col-lg-3.col-8.mb-4.col-md-5
          img(src='@/assets/curso/temas/Tema1/img04.png', alt='')
        .col-lg-9
          TabsA.color-acento-botones.mb-5
            .tarjeta.bgrosado.p-4(titulo="Categoría")
              p.mb-0 Agrupa productos que cumplen una función similar o responden a una misma necesidad del consumidor, como muebles para sala, dormitorio u oficina.
            .tarjeta.bgrosado.p-4(titulo="Producto")
              p.mb-0 Corresponde al bien específico que se ofrece dentro de una categoría, por ejemplo, una silla ergonómica, una mesa auxiliar o un sofá modular.
            .tarjeta.bgrosado.p-4(titulo="Atributos")
              p.mb-0 Incluye características como diseño, material, tamaño, color, funcionalidad, durabilidad y facilidad de uso.
            .tarjeta.bgrosado.p-4(titulo="Valor para el consumidor")
              p.mb-0 Permite identificar cómo el producto resuelve una necesidad, mejora una experiencia o aporta beneficios funcionales, emocionales o simbólicos.
            .tarjeta.bgrosado.p-4(titulo="Decisión de compra")
              p.mb-0 La forma en que se presenta y organiza el producto ayuda al consumidor a comparar alternativas y seleccionar la opción más adecuada según sus necesidades.

      p Para ampliar la comprensión del concepto de producto, se dispone del video “El producto”, en el cual se explica cómo este puede estar representado por bienes físicos, servicios, ideas o experiencias, de acuerdo con la necesidad que busca satisfacer en el mercado.
      
      figure.mb-4(data-aos="zoom-in-left")
        .video
          iframe(iframe width="560" height="315" src="https://www.youtube.com/embed/LN1eBcD5H4M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
        figcaption Video: El producto

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
            h3.bg1.py-3.w-card-text.text-white Atributos

      p Los atributos del producto son las características que permiten su identificación, diferenciación y valoración en el mercado. Estos atributos incluyen elementos funcionales, físicos y simbólicos que influyen en cómo el consumidor percibe el producto frente a otras alternativas. Su adecuada gestión permite destacar beneficios, generar valor y orientar la decisión de compra, convirtiéndose en un factor clave para la competitividad.

      .titulo-sexto.color-secundario(data-aos='fade-right')
        h5 Tabla 1.
        span Atributos del producto

      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-9.mb-4
          .tabla-a
            table
              thead
                tr
                  th.bg4 Tipo de atributo
                  th.bg4 Enfoque
                  th.bg4 Ejemplo aplicado
              tbody
                tr
                  td Funcional
                  td Relacionado con el desempeño, utilidad y solución que ofrece el producto frente a una necesidad específica.
                  td Resistencia y agarre de un calzado #[em outdoor].
                tr
                  td Tangible
                  td Características físicas perceptibles como diseño, materiales, tamaño o acabado.
                  td Uso de materiales #[em premium] en un reloj.
                tr
                  td Intangible
                  td Valor percibido asociado a la marca, reputación o prestigio del producto.
                  td Reconocimiento de marca en productos de tecnología.
                tr
                  td Emocional
                  td Sensaciones, experiencias o conexiones que el producto genera en el consumidor.
                  td Sentido de pertenencia al usar una marca deportiva.
        .col-lg-3.col-7.col-md-5
          img(src="@/assets/curso/temas/Tema1/img05.png")

      p Un caso representativo es el de los juegos de construcción, donde el producto trasciende el objeto físico e incorpora creatividad, aprendizaje y experiencia lúdica.

      .titulo-secundario.mb-4
        span.decorador
        h4.mb-0 Atributos que diferencian un producto

      .row.mb-4(data-aos="zoom-in-left")
        .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                .icono
                  img(src='@/assets/curso/temas/Tema1/13.svg', alt='')
            h4.text-center Atributo funcional
            p.mb-0 Está relacionado con el desempeño, la utilidad y la solución que ofrece el producto frente a una necesidad específica.

        .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                .icono
                  img(src='@/assets/curso/temas/Tema1/14.svg', alt='')
            h4.text-center Atributo tangible
            p.mb-0 Corresponde a las características físicas que pueden percibirse, como diseño, materiales, tamaño o acabado.

        .col-sm-6.col-lg-3.mb-4.mb-sm-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                .icono
                  img(src='@/assets/curso/temas/Tema1/15.svg', alt='')
            h4.text-center Atributo intangible
            p.mb-0 Se relaciona con el valor percibido de la marca, su reputación o el prestigio que el consumidor asocia con el producto.

        .col-sm-6.col-lg-3.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                .icono
                  img(src='@/assets/curso/temas/Tema1/16.svg', alt='')
            h4.text-center Atributo emocional
            p.mb-0 Incluye las sensaciones, experiencias o conexiones que el producto genera en el consumidor.
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
            h3.bg1.py-3.w-card-text.text-white Clasificación

      .row.justify-content-center.align-items-center.mb-5.bg5(data-aos="zoom-in-left")
        .col-lg-5.d-none.d-lg-block
          img.izq(src="@/assets/curso/temas/Tema1/img06.png")
        .col-lg-7
          p.p-4.mb-0 La clasificación del producto permite organizar la oferta según su uso, comportamiento de compra o finalidad, facilitando la definición de estrategias comerciales diferenciadas. Esta clasificación es clave para entender cómo el consumidor toma decisiones y cómo la empresa debe estructurar variables como precio, promoción y distribución.
          p.px-4 Los productos se clasifican principalmente en bienes de consumo, conveniencia, comparación y especialidad y bienes industriales, cada uno con características específicas que determinan su gestión comercial.


      .titulo-sexto.color-secundario(data-aos='fade-right')
        h5 Tabla 2.
        span Clasificación y caracterización de productos

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-9.mb-4
          .tabla-a
            table
              thead
              caption Nota. Adaptada de Kotler y Armstrong (2017).
                tr
                  th.bg4.w-25 Tipo de producto
                  th.bg4 Caracterización
                  th.bg4 Ejemplo aplicado
              tbody
                tr
                  td Conveniencia
                  td Productos de compra frecuente, bajo costo y mínima comparación; el consumidor busca rapidez y disponibilidad.
                  td #[em Snacks] o bebidas de consumo inmediato.
                tr
                  td Comparación
                  td Productos que requieren evaluación previa en aspectos como calidad, precio o diseño; implican mayor involucramiento.
                  td Electrodomésticos o ropa.
                tr
                  td Especialidad
                  td Productos con alto valor percibido, fuerte diferenciación y lealtad de marca; el consumidor realiza un esfuerzo adicional para adquirirlos.
                  td Vehículos de lujo como Porsche.
                tr
                  td Industrial
                  td Bienes destinados a procesos productivos o comerciales; su compra es racional, técnica y basada en especificaciones.
                  td Maquinaria o insumos industriales.
        .col-lg-3.col-7.col-md-5
          img(src="@/assets/curso/temas/Tema1/img07.png")

      .cajon.color-primario.p-4.mb-4(data-aos="zoom-in-left")
        p La clasificación de los productos puede observarse con claridad cuando se comparan ofertas orientadas al consumidor final con aquellas dirigidas a procesos técnicos y productivos. En el mercado de consumo, por ejemplo, una tienda deportiva puede ofrecer productos de conveniencia y comparación, como accesorios de uso frecuente, prendas de vestir o implementos para actividad física, cuya compra depende del precio, el diseño, la funcionalidad y la preferencia del consumidor. En contraste, en el mercado industrial se comercializan bienes orientados a procesos de fabricación, mantenimiento o soporte técnico, cuya adquisición se fundamenta en especificaciones, rendimiento, durabilidad y requerimientos operativos.


      .titulo-secundario.mb-4
        span.decorador
        h4.mb-0 Ejemplo aplicado: diferencias entre productos de consumo e industriales

      p Los productos de consumo están dirigidos al usuario final y suelen diseñarse para satisfacer necesidades cotidianas, personales o familiares. Su compra puede estar influida por factores como la experiencia de uso, la presentación, la comodidad, la disponibilidad o la preferencia por una marca. Por su parte, los productos industriales se destinan a actividades productivas, comerciales o técnicas, por lo que su adquisición responde a criterios más racionales, como eficiencia, capacidad de trabajo, compatibilidad técnica, seguridad y cumplimiento de especificaciones.


      .titulo-secundario.mb-4(data-aos="zoom-in-left")
        span.decorador
        h4.mb-0 Clasificación del producto según su finalidad

      .row.justify-content-center.align-items-center.mb-0
        .col-lg-12
          TabsA.color-acento-botones.mb-5
            .tarjeta.bgrosado.p-4(titulo="Producto de conveniencia")
              p.mb-0 Es de compra frecuente, bajo costo y rápida decisión. El consumidor lo adquiere con poco esfuerzo de comparación y espera encontrarlo fácilmente.

            .tarjeta.bgrosado.p-4(titulo="Producto de comparación")
              p.mb-0 Requiere análisis previo por parte del consumidor, quien compara variables como precio, calidad, diseño, tamaño o funcionalidad antes de decidir.

            .tarjeta.bgrosado.p-4(titulo="Producto de especialidad")
              p.mb-0 Tiene un alto valor percibido y una fuerte diferenciación. El consumidor está dispuesto a invertir más tiempo, esfuerzo o dinero para obtenerlo.

            .tarjeta.bgrosado.p-4(titulo="Producto industrial")
              p.mb-0 Se dirige a empresas, talleres, fábricas o procesos técnicos. Su compra depende de especificaciones, desempeño, durabilidad y utilidad dentro de una actividad productiva.

      p.mb-4 Las características del producto corresponden a los elementos que determinan su desempeño, calidad y aceptación en el mercado. Estas incluyen:

      .titulo-secundario.mb-4
        span.decorador
        h4.mb-0 Características que fortalecen el valor del producto

      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in-left")
        .row.justify-content-center(titulo="Diseño")
          .col-lg-7.mb-4.mb-md-0
            p Se refiere a la forma, estilo y apariencia del producto, integrando aspectos estéticos y funcionales que facilitan su uso y generan atractivo para el consumidor.
          .col-lg-4.col-10.col-md-8
            figure
              img(src='@/assets/curso/temas/Tema1/aco1.png', alt='')
        .row.justify-content-center(titulo="Funcionalidad")
          .col-lg-7.mb-4.mb-md-0
            p Corresponde a la capacidad del producto para cumplir eficientemente con la necesidad para la cual fue creado, garantizando utilidad y desempeño.
          .col-lg-4.col-10.col-md-8
            figure
              img(src='@/assets/curso/temas/Tema1/aco2.png', alt='')
        .row.justify-content-center(titulo="Durabilidad")
          .col-lg-7.mb-4.mb-md-0
            p Hace referencia al tiempo de vida útil del producto y su resistencia al uso o desgaste, influyendo en la percepción de calidad.
          .col-lg-4.col-10.col-md-8
            figure
              img(src='@/assets/curso/temas/Tema1/aco3.png', alt='')
        .row.justify-content-center(titulo="Adaptabilidad")
          .col-lg-7.mb-4.mb-md-0
            p Es la capacidad del producto para ajustarse a diferentes usos, contextos o necesidades del consumidor, ampliando su aplicabilidad en el mercado.
          .col-lg-4.col-10.col-md-8
            figure
              img(src='@/assets/curso/temas/Tema1/aco4.png', alt='')
        .row.justify-content-center(titulo="Presentación")
          .col-lg-7.mb-4.mb-md-0
            p Corresponde a la forma en que el producto se muestra al consumidor, incluyendo empaque, etiqueta y apariencia, lo que impacta en la decisión de compra.
          .col-lg-4.col-10.col-md-8
            figure
              img(src='@/assets/curso/temas/Tema1/aco5.png', alt='')  

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
            h3.bg1.py-3.w-card-text.text-white Referencias


      .bloque-texto-g.bloque-texto-g--inverso.bg6.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/Tema1/img08.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Las referencias del producto corresponden a las distintas versiones o presentaciones dentro de una misma categoría, permitiendo atender diversos segmentos de mercado.
            br
            br 
            | Esta estrategia facilita ampliar la cobertura sin modificar la esencia del producto. Por ejemplo, Red Bull ofrece diferentes referencias como versiones sin azúcar, ediciones especiales y distintos tamaños, adaptándose a preferencias del consumidor.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
            h3.bg1.py-3.w-card-text.text-white Tipos

      p Los tipos de producto responden a su comportamiento en el mercado y al nivel de involucramiento del consumidor en la compra. Se clasifican de la siguiente manera:

      .row.mb-4(data-aos="zoom-in-left")
        .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-lg-7.col-5.d-flex.justify-content-center
                .icono
                  img(src='@/assets/curso/temas/Tema1/svg.svg', alt='')
            h4.text-center Producto de conveniencia
            p.mb-0 Corresponde a bienes de compra frecuente, de bajo costo y adquiridos con mínimo esfuerzo por parte del consumidor. Su disponibilidad y accesibilidad son factores clave. Ejemplo: bebidas de consumo diario.

        .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-lg-7.col-5.d-flex.justify-content-center
                .icono
                  img(src='@/assets/curso/temas/Tema1/svg2.svg', alt='')
            h4.text-center Producto de comparación
            p.mb-0 Implica un proceso de evaluación previa en aspectos como calidad, precio o diseño. El consumidor analiza diferentes opciones antes de tomar la decisión de compra. Ejemplo: televisores o electrodomésticos.

        .col-sm-6.col-lg-3.mb-4.mb-sm-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-lg-7.col-5.d-flex.justify-content-center
                .icono
                  img(src='@/assets/curso/temas/Tema1/svg3.svg', alt='')
            h4.text-center Producto de especialidad
            p.mb-0 Se caracteriza por un alto valor percibido, fuerte diferenciación y preferencia de marca. El consumidor está dispuesto a realizar un mayor esfuerzo para adquirirlo. Ejemplo: perfumes de lujo como los de Chanel.

        .col-sm-6.col-lg-3.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-lg-7.col-5.d-flex.justify-content-center
                .icono
                  img(src='@/assets/curso/temas/Tema1/svg4.svg', alt='')
            h4.text-center Producto industrial
            p.mb-0 Está destinado a procesos productivos o comerciales y su compra es más racional, basada en especificaciones técnicas y necesidades empresariales. Ejemplo: equipos de construcción.

      separador
      #t_1_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
        h2 1.2  Mezcla de producto: concepto, estructura, categoría, línea de producto, portafolio y ciclo de vida

      .bloque-texto-g.bg7.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/Tema1/img09.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La mezcla de producto permite estructurar la oferta comercial de una empresa de manera estratégica, asegurando coherencia entre los productos y cobertura de diferentes segmentos de mercado. Su adecuada gestión incide directamente en la competitividad, rentabilidad y posicionamiento de la organización.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
            h3.bg1.py-3.w-card-text.text-white Concepto

      p La mezcla de producto se refiere al conjunto total de productos y líneas que una empresa ofrece al mercado. Esta mezcla constituye la base de la oferta comercial y permite atender diversas necesidades del consumidor mediante una propuesta organizada y diversificada.
      p En el contexto empresarial, la mezcla de producto debe mantener coherencia en términos de calidad, mercado objetivo y posicionamiento. Por ejemplo, una empresa de consumo masivo puede gestionar múltiples líneas en categorías como cuidado personal, limpieza y productos para el hogar, manteniendo consistencia en su propuesta de valor.


      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-7
            .d-flex.align-items-center
              img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
              h3.bg1.py-3.w-card-text.text-white Estructura

      P La estructura de la mezcla de producto permite analizar la composición del portafolio y su nivel de diversificación, facilitando la toma de decisiones estratégicas.

      .titulo-sexto.color-secundario(data-aos='fade-right')
        h5 Tabla 3.
        span Estructura de la mezcla de producto

      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
        .col-lg-9.mb-4
          .tabla-a
            table
              caption Nota. Adaptada de Kotler y Armstrong (2017).
              thead
                tr
                  th.bg4.w-25 Elemento
                  th.bg4 Descripción
                  th.bg4 Aplicación estratégica
              tbody
                tr
                  td Amplitud
                  td Número de líneas de producto que maneja la empresa.
                  td Define el alcance en el mercado.
                tr
                  td Longitud
                  td Cantidad total de productos dentro de todas las líneas.
                  td Mide el tamaño del portafolio.
                tr
                  td Profundidad
                  td Número de versiones o referencias por producto.
                  td Permite segmentar el mercado.
                tr
                  td Consistencia
                  td Relación o coherencia entre las líneas de producto.
                  td Facilita posicionamiento y gestión.
        .col-lg-3.col-7.col-md-5
          img(src="@/assets/curso/temas/Tema1/img10.png")

      .cajon.color-primario.p-4.mb-4(data-aos="zoom-in-left")
        p Por ejemplo, una empresa de consumo masivo puede manejar varias líneas de producto, como alimentos empacados, productos de cuidado personal y artículos para el hogar. Esta variedad evidencia la amplitud de su mezcla. A su vez, cada línea puede incluir diferentes productos y presentaciones, como tamaños, sabores, usos o referencias específicas, lo que permite identificar la longitud y profundidad del portafolio. La consistencia se evidencia cuando todas las líneas guardan relación con el mercado objetivo, los canales de distribución y la propuesta de valor de la organización.

      .titulo-secundario.mb-4(data-aos="zoom-in-left")
        span.decorador
        h4.mb-0 Ejemplo aplicado: análisis de la mezcla de producto

      .row.justify-content-center.align-items-center.mb-5.bg5(data-aos="zoom-in-left")
        .col-lg-5.d-none.d-lg-block
          img.izq(src="@/assets/curso/temas/Tema1/img11.png")
        .col-lg-7
          p.p-3 Para comprender la estructura de la mezcla de producto, puede analizarse una empresa que ofrece productos de consumo masivo para el hogar. Su amplitud se reconoce en la cantidad de líneas que maneja, como limpieza, cuidado personal y alimentos empacados. La longitud se identifica en el número total de productos disponibles dentro de esas líneas. La profundidad se observa en las distintas versiones o referencias de un mismo producto, como tamaños, fragancias, presentaciones o usos. Finalmente, la consistencia se relaciona con la coherencia entre las líneas, el tipo de consumidor, los canales de venta y la estrategia comercial de la empresa.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-7
            .d-flex.align-items-center
              img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
              h3.bg1.py-3.w-card-text.text-white Estructura de la mezcla de producto
      .row.mb-4(data-aos="zoom-in-left")
        .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-lg-7.col-5
                .icono
                  img(src='@/assets/curso/temas/Tema1/5.svg', alt='')
            h4.text-center Amplitud
            p.mb-0 Número de líneas de producto que maneja la empresa. Define el alcance en el mercado.

        .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-lg-7.col-5
                .icono
                  img(src='@/assets/curso/temas/Tema1/6.svg', alt='')
            h4.text-center Longitud
            p.mb-0 Cantidad total de productos dentro de todas las líneas. Mide el tamaño del portafolio.

        .col-sm-6.col-lg-3.mb-4.mb-sm-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-lg-7.col-5
                .icono
                  img(src='@/assets/curso/temas/Tema1/7.svg', alt='')
            h4.text-center Profundidad
            p.mb-0 Número de versiones o referencias por producto. Permite segmentar el mercado.

        .col-sm-6.col-lg-3.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-lg-7.col-5
                .icono
                  img(src='@/assets/curso/temas/Tema1/8.svg', alt='')
            h4.text-center Consistencia
            p.mb-0 Relación o coherencia entre las líneas de producto. Facilita el posicionamiento y la gestión.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-7
            .d-flex.align-items-center
              img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
              h3.bg1.py-3.w-card-text.text-white Categoría

      .bloque-texto-g.bg8.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/Tema1/img12.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La categoría de producto agrupa bienes que satisfacen necesidades similares, permitiendo organizar la oferta y facilitar su gestión comercial. Esta clasificación contribuye a estructurar el portafolio y mejorar la toma de decisiones en el punto de venta.

      .row.mb-4(data-aos="zoom-in-left")
        .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
          .tarjeta-numerada.color-acento-contenido.p-4.h-100
            .tarjeta-numerada__numero
              .h2 1
            p.text-center 
              b Organización de la oferta
            p.text-center La categorización permite agrupar productos de forma lógica, facilitando su ubicación, control y análisis dentro del portafolio comercial. Esto mejora la gestión interna y la planificación del surtido.

        .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
          .tarjeta-numerada.color-secundario.p-4.h-100
            .tarjeta-numerada__numero
              .h2 2
            p.text-center 
              b Toma de decisiones comerciales
            p.text-center Al identificar categorías, la empresa puede definir estrategias específicas de precio, promoción y exhibición según el comportamiento del consumidor en cada grupo de productos.
        .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
          .tarjeta-numerada.color-primario.p-4.h-100
            .tarjeta-numerada__numero
              .h2 3
            p.text-center 
              b Gestión del surtido
            p.text-center Permite determinar qué productos incluir, mantener o retirar dentro de una categoría, optimizando la rotación y evitando sobreoferta o desabastecimiento.

        .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
          .tarjeta-numerada.color-acento-botones.p-4.h-100
            .tarjeta-numerada__numero
              .h2 4
            p.text-center 
              b Análisis del mercado
            p.text-center Facilita el estudio del comportamiento del consumidor, la competencia y las tendencias dentro de cada categoría, permitiendo identificar oportunidades de crecimiento.

      p Por ejemplo, en un supermercado, las categorías como alimentos orgánicos, bebidas no alcohólicas y productos especializados permiten segmentar la oferta y responder a consumidores con preferencias específicas.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-7
            .d-flex.align-items-center
              img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
              h3.bg1.py-3.w-card-text.text-white Línea de producto

      .row.justify-content-center.align-items-center.mb-5.bg5(data-aos="zoom-in-left")
        .col-lg-5.d-none.d-lg-block
          img.izq(src="@/assets/curso/temas/Tema1/img13.png")
        .col-lg-7
          p.p-3 Una línea de producto corresponde a un conjunto de productos relacionados entre sí porque cumplen funciones similares, atienden una misma necesidad o se dirigen a un segmento específico del mercado. Por ejemplo, una empresa dedicada al cuidado personal puede manejar una línea de higiene oral compuesta por crema dental, cepillos, seda dental y enjuague bucal; una línea de cuidado corporal con jabones, cremas y desodorantes; y una línea de limpieza del hogar con detergentes, desinfectantes y limpiadores multiusos.
          p.px-3 Este ejemplo permite comprender que cada línea agrupa productos con características relacionadas, pero con funciones, presentaciones o referencias diferentes. La adecuada organización de las líneas facilita la gestión comercial, la exhibición, la comunicación de beneficios y la identificación de oportunidades para ampliar la oferta.

      .titulo-secundario.mb-4(data-aos="zoom-in-left")
        span.decorador
        h4.mb-0 Ejemplo de líneas de producto

      .fondo01.p-5.mb-4(data-aos="zoom-in-left")
        .row.justify-content-center.align-items-center.mb-2
          .col-lg-12
            .tarjeta.fondosly.p-4
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-md-0
                    h5 Línea de higiene oral
                    p Agrupa productos relacionados con el cuidado de la boca, como crema dental, cepillo, seda dental y enjuague bucal.
                  .col-lg-4.col-md-8
                    figure
                      img(src='@/assets/curso/temas/Tema1/sly1.png', alt='')
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-md-0
                    h5 Línea de cuidado corporal
                    p Incluye productos orientados al aseo y bienestar personal, como jabones, cremas, desodorantes o productos para el cuidado de la piel.
                  .col-lg-4.col-md-8
                    figure
                      img(src='@/assets/curso/temas/Tema1/sly2.png', alt='')
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-md-0
                    h5 Línea de limpieza del hogar
                    p Integra productos destinados al aseo de espacios, como detergentes, desinfectantes, limpiadores y ambientadores.
                  .col-lg-4.col-md-8
                    figure
                      img(src='@/assets/curso/temas/Tema1/sly3.png', alt='')
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-md-0
                    h5 Gestión comercial
                    p La organización por líneas permite clasificar mejor la oferta, facilitar la exhibición, orientar promociones y responder a necesidades específicas del consumidor.
                  .col-lg-4.col-md-8
                    figure
                      img(src='@/assets/curso/temas/Tema1/sly4.png', alt='')

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-7
            .d-flex.align-items-center
              img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
              h3.bg1.py-3.w-card-text.text-white Portafolio

      .row.justify-content-center.mb-3(data-aos="zoom-in-left")
        .col-lg-4.mb-3.col-8.col-md-6
          img(src='@/assets/curso/temas/Tema1/img14.svg', alt='')
        .col-lg-8
          p El portafolio de productos integra el conjunto total de líneas y productos que ofrece una empresa, representando su capacidad para atender diferentes mercados.
          .cajon.color-acento-contenido.p-5.mb-4
            p Un portafolio equilibrado permite diversificar riesgos, aprovechar oportunidades y optimizar recursos comerciales. Por ejemplo, una empresa de alimentos puede contar con un portafolio conformado por líneas de productos lácteos, bebidas no alcohólicas, alimentos preparados y productos funcionales, dirigidos a distintos segmentos de consumidores según sus hábitos de compra, necesidades nutricionales, preferencias de consumo y momentos de uso.

      .cajon.color-primario.p-4.mb-4
        p.mb-0 Revise el video “Portafolio y características del producto” para reconocer la importancia de presentar información clara sobre los productos que integran un portafolio comercial.

      figure.mb-4(data-aos="zoom-in-left")
        .video
          iframe(iframe width="560" height="315" src="https://www.youtube.com/embed/QrJ2hZkRpiM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
        figcaption Video: Portafolio y características del producto 

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-7
            .d-flex.align-items-center
              img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
              h3.bg1.py-3.w-card-text.text-white Ciclo de vida

      p El ciclo de vida del producto describe las etapas por las que atraviesa un producto desde su introducción hasta su salida del mercado, permitiendo ajustar estrategias en cada fase.
      .titulo-sexto.color-secundario(data-aos='fade-right').mb-1
        h5 Tabla 4.
        span Ciclo de vida del producto
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-7.mb-3
          .tabla-a
            table
              caption Nota. Adaptada de Kotler (2016).
              thead
                tr
                  th.bg4.w-25 Etapa
                  th.bg4 Característica
                  th.bg4 Enfoque comercial
              tbody
                tr
                  td Introducción
                  td Lanzamiento y baja penetración.
                  td Inversión en promoción.
                tr
                  td Crecimiento
                  td Aumento de ventas y aceptación.
                  td Expansión y posicionamiento.
                tr
                  td Madurez
                  td Estabilidad y alta competencia.
                  td Diferenciación y fidelización.
                tr
                  td Declive
                  td Disminución de demanda.
                  td Reducción o retiro del producto.
        .col-lg-5.col-10.col-md-8
          img(src='@/assets/curso/temas/Tema1/img15.png', alt='')

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-7
            .d-flex.align-items-center
              img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
              h3.bg1.py-3.w-card-text.text-white Ciclo de vida del producto
      .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
        .col-lg-10
          PasosA.color-acento-contenido.mb-0(tipo="n")(data-aos="zoom-in-left")
            .row
              .col-md-8.mb-4.mb-md-0
                h4 Introducción
                p El producto se lanza al mercado y presenta baja penetración. El enfoque comercial se centra en la inversión en promoción.
              .col-md-3.col-8
                figure
                  img(src='@/assets/curso/temas/Tema1/pas4.svg', alt='')


            .row
              .col-md-3.mb-4.mb-md-0.col-8
                figure
                  img(src='@/assets/curso/temas/Tema1/pas5.svg', alt='')

              .col-md-8
                h4.text-izq Crecimiento
                p.text-izq Las ventas aumentan y el producto logra mayor aceptación. El enfoque comercial se orienta a la expansión y el posicionamiento.      

            .row
              .col-md-8.mb-4.mb-md-0
                h4 Madurez
                p El producto alcanza estabilidad y enfrenta alta competencia. El enfoque comercial se dirige a la diferenciación y fidelización.     
              .col-md-3.col-8
                figure
                  img(src='@/assets/curso/temas/Tema1/pas6.svg', alt='')
            
            .row
              .col-md-3.col-8.mb-4
                figure
                  img(src='@/assets/curso/temas/Tema1/pas7.svg', alt='')
              .col-md-8.mb-4.mb-md-0
                h4.text-izq Declive
                p.text-izq La demanda disminuye. El enfoque comercial se orienta a la reducción o retiro del producto.
          
      separador
      #t_1_3.titulo-segundo.mb-4(data-aos="zoom-in-left")
        h2 1.3  Servicios: concepto, características, cultura y momentos de verdad
      
      .bloque-texto-g.bloque-texto-g--inverso.bg2.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/Tema1/img16.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los servicios constituyen una parte fundamental de la oferta comercial, especialmente en entornos donde el valor se genera a partir de experiencias y soluciones más que de bienes físicos. Su gestión exige un enfoque centrado en el cliente y en la calidad del proceso.
            br
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-7
            .d-flex.align-items-center
              img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
              h3.bg1.py-3.w-card-text.text-white Concepto

      .row.justify-content-center.align-items-center.mb-5.bg5(data-aos="zoom-in-left")
        .col-lg-5.d-none.d-lg-block
          img.izq(src="@/assets/curso/temas/Tema1/img18.png")
        .col-lg-7
          p.p-3 El servicio es una actividad o conjunto de actividades de naturaleza intangible que una empresa ofrece para satisfacer necesidades del cliente, sin implicar la transferencia de propiedad de un bien físico. 
          p.px-3 En el contexto empresarial, los servicios se diseñan considerando la experiencia del usuario, la eficiencia operativa y la percepción de valor. Por ejemplo, una plataforma de contenido digital puede ofrecer acceso a música, cursos, videos o entretenimiento, donde el valor se centra en la personalización, la accesibilidad, la facilidad de uso y la disponibilidad continua del servicio.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-7
            .d-flex.align-items-center
              img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
              h3.bg1.py-3.w-card-text.text-white Características de los servicios
      p Los servicios presentan particularidades que los diferencian de los productos físicos y condicionan su gestión comercial:

      .row.mb-4(data-aos="zoom-in-left")
        .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-lg-7.col-5
                .icono
                  img(src='@/assets/curso/temas/Tema1/9.svg', alt='')
            h4.text-center Intangibilidad
            p.mb-0 Los servicios no pueden percibirse físicamente antes de su consumo, lo que obliga a generar confianza mediante marca, evidencia física o reputación.

        .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-lg-7.col-5
                .icono
                  img(src='@/assets/curso/temas/Tema1/10.svg', alt='')
            h4.text-center Inseparabilidad
            p.mb-0 La producción y el consumo del servicio ocurren de manera simultánea, lo que implica interacción directa entre cliente y proveedor.

        .col-sm-6.col-lg-3.mb-4.mb-sm-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-lg-7.col-5
                .icono
                  img(src='@/assets/curso/temas/Tema1/11.svg', alt='')
            h4.text-center Variabilidad
            p.mb-0 La calidad del servicio puede variar dependiendo de quién lo presta, el momento y las condiciones, lo que exige procesos de estandarización.

        .col-sm-6.col-lg-3.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-lg-7.col-5
                .icono
                  img(src='@/assets/curso/temas/Tema1/12.svg', alt='')
            h4.text-center Perecibilidad
            p.mb-0 Los servicios no pueden almacenarse, por lo que la capacidad no utilizada representa pérdida de oportunidad comercial.

      .cajon.color-acento-contenido.p-4.mb-4(data-aos="zoom-in-left")
        p Revise el video “Clasificación de los servicios” para reconocer distintas formas de clasificar los servicios y relacionarlas con ejemplos cotidianos como educación, atención médica, restaurantes, transporte, servicios contables, telefonía o entretenimiento.


      figure.mb-4(data-aos="zoom-in-left")
        .video
          iframe(iframe width="560" height="315" src="https://www.youtube.com/embed/zTgk6ZaHVV0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
        figcaption Video: Clasificación de los servicios

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-7
            .d-flex.align-items-center
              img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
              h3.bg1.py-3.w-card-text.text-white Cultura

      p La cultura de servicio se refiere al conjunto de valores, prácticas y comportamientos organizacionales orientados a garantizar la satisfacción del cliente en cada interacción.

      .row.mb-4(data-aos="zoom-in-left")
        .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
          .tarjeta-numerada.color-acento-contenido.p-4.h-100
            .tarjeta-numerada__numero
              .h2 1
            p.text-center 
              b Enfoque al cliente
            p.text-center Las decisiones se orientan a responder necesidades y expectativas del usuario.

        .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
          .tarjeta-numerada.color-secundario.p-4.h-100
            .tarjeta-numerada__numero
              .h2 2
            p.text-center 
              b Calidad en la atención
            p.text-center Se busca consistencia en la experiencia ofrecida.
        .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
          .tarjeta-numerada.color-primario.p-4.h-100
            .tarjeta-numerada__numero
              .h2 3
            p.text-center 
              b Compromiso organizacional
            p.text-center Todos los niveles de la empresa participan en la prestación del servicio

        .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
          .tarjeta-numerada.color-acento-botones.p-4.h-100
            .tarjeta-numerada__numero
              .h2 4
            p.text-center 
              b Mejora continua
            p.text-center Se analizan procesos para optimizar la experiencia del cliente.

      .cajon.color-primario.p-4.mb-4
        p En el contexto comercial actual, la cultura de servicio también se evidencia en los canales digitales. Por ejemplo, una entidad que ofrece atención en línea puede fortalecer la experiencia del usuario mediante respuestas oportunas, navegación clara, acceso fácil a información, opciones de autogestión, seguimiento de solicitudes y acompañamiento durante el uso del servicio. Esto permite que el cliente perciba confianza, cercanía y eficiencia en cada punto de contacto.
      
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-7
            .d-flex.align-items-center
              img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
              h3.bg1.py-3.w-card-text.text-white Cultura de servicio en canales digitales

      TabsA.color-acento-botones.mb-3(data-aos="zoom-in-left")
            .tarjeta.bgrosado.p-4(titulo="Atención centrada en el usuario")
              p.mb-0 La organización reconoce las necesidades del cliente y orienta sus procesos para facilitar la atención, la solución de dudas y el acceso a la información.
            .tarjeta.bgrosado.p-4(titulo="Canales claros y accesibles")
              p.mb-0 Los medios digitales deben permitir que el usuario encuentre información, realice solicitudes o gestione servicios de forma sencilla y comprensible.
            .tarjeta.bgrosado.p-4(titulo="Respuesta oportuna")
              p.mb-0 La calidad del servicio se fortalece cuando la empresa responde en tiempos adecuados y brinda información clara sobre el estado de cada solicitud.
            .tarjeta.bgrosado.p-4(titulo="Mejora de la experiencia")
              p.mb-0 El análisis de comentarios, reclamos y necesidades permite ajustar procesos, mejorar la atención y fortalecer la relación con el cliente.


      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-7
            .d-flex.align-items-center
              img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
              h3.bg1.py-3.w-card-text.text-white Momentos de verdad

      p Los momentos de verdad son los puntos de contacto entre el cliente y la empresa que influyen directamente en la percepción del servicio.

      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-6
          ul.lista-ul.lista-ul--separador
            li
              i.fas.fa-circle-check
              | #[b Interacción inicial:] primer contacto con la empresa o plataforma.
            li
              i.fas.fa-circle-check
              | #[b Prestación del servicio:] experiencia durante el uso del servicio.
            li
              i.fas.fa-circle-check
              | #[b Atención de soporte:] solución de dudas o inconvenientes.
            li
              i.fas.fa-circle-check
              | #[b Seguimiento:] acciones posteriores que fortalecen la relación con el cliente.
        .col-lg-6.col-10.col-md-7
          img(src="@/assets/curso/temas/Tema1/img19.png")

      p Por ejemplo, en una aplicación de domicilios, momentos como la facilidad de uso de la app, la claridad en la información del pedido, el tiempo de entrega, el seguimiento del servicio y la atención al cliente determinan la experiencia del usuario.
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-7
            .d-flex.align-items-center
              img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
              h3.bg1.py-3.w-card-text.text-white Momentos de verdad en el servicio

      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
        .col-lg-10
          PasosA.color-acento-contenido.mb-3(tipo="n")(data-aos="zoom-in-left")
            .row
              .col-md-8.mb-4.mb-md-0
                h4 Introducción
                p El producto se lanza al mercado y presenta baja penetración. El enfoque comercial se centra en la inversión en promoción.
              .col-md-3.col-8
                figure
                  img(src='@/assets/curso/temas/Tema1/pas8.svg', alt='')


            .row
              .col-md-3.mb-4.mb-md-0.col-8
                figure
                  img(src='@/assets/curso/temas/Tema1/pas9.svg', alt='')

              .col-md-8
                h4.text-izq Prestación del servicio
                p.text-izq Hace referencia a la experiencia durante el uso del servicio y al cumplimiento de lo ofrecido.   

            .row
              .col-md-8.mb-4.mb-md-0
                h4 Atención de soporte
                p Incluye la solución de dudas o inconvenientes que pueden presentarse durante la experiencia del cliente.    
              .col-md-3.col-8
                figure
                  img(src='@/assets/curso/temas/Tema1/pas10.svg', alt='')
            
            .row
              .col-md-3.col-8.mb-4
                figure
                  img(src='@/assets/curso/temas/Tema1/pas11.svg', alt='')
              .col-md-8.mb-4.mb-md-0
                h4.text-izq Seguimiento
                p.text-izq Comprende las acciones posteriores que fortalecen la relación con el cliente y mejoran su percepción del servicio.



















  </template>

<script>
export default {
  name: 'Tema1',
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
