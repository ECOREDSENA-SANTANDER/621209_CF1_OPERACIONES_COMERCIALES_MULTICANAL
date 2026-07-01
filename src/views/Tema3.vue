<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Identificación, presentación y protección del producto

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-5.mb-3.col-10
        img(src='@/assets/curso/temas/Tema3/img01.png', alt='')
      .col-lg-7
        .row.justify-content-center.align-items-center
          .col-lg-2.mb-3.d-none.d-lg-block
            img(src='@/assets/curso/temas/Tema3/img02.png', alt='')
          .col-lg-10
            p La identificación, presentación y protección del producto permiten fortalecer la gestión comercial y logística de la oferta. En este proceso intervienen herramientas como códigos de barras y etiquetas #[em RFID], que facilitan el seguimiento y control de productos; así como elementos físicos como empaque, envase y embalaje, que protegen, comunican y facilitan la comercialización.
        p Estos elementos cumplen funciones complementarias dentro de la cadena de valor. Mientras los sistemas de identificación apoyan la trazabilidad, el inventario y la automatización, la presentación física del producto influye en la conservación, la percepción del consumidor, la experiencia de compra y la distribución.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Ruta de identificación y presentación del producto

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
        .col-lg-10
          PasosA.color-acento-contenido.mb-0(tipo="n")(data-aos="zoom-in-left")
            .row
              .col-md-8.mb-4.mb-md-0
                h4 Identificar el producto
                p Se reconocen herramientas como códigos de barras y etiquetas #[em RFID], que permiten registrar, controlar y hacer seguimiento a los productos en procesos comerciales y logísticos.
              .col-md-3.col-8
                figure
                  img(src='@/assets/curso/temas/Tema3/pas1.svg', alt='')


            .row
              .col-md-3.mb-4.mb-md-0.col-8
                figure
                  img(src='@/assets/curso/temas/Tema3/pas2.svg', alt='')

              .col-md-8
                h4.text-izq Presentar el producto
                p.text-izq Se analiza el empaque y el envase como elementos que protegen, informan y comunican atributos, beneficios e identidad de marca.

            .row
              .col-md-8.mb-4.mb-md-0
                h4 Proteger el producto
                p Se estudia el embalaje como elemento clave para agrupar, transportar y conservar los productos durante su manipulación, almacenamiento y distribución.    
              .col-md-3.col-8
                figure
                  img(src='@/assets/curso/temas/Tema3/pas3.svg', alt='')
            
    separador
    #t_3_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 3.1  Códigos de barras: concepto, tipos y características
    
    .row.justify-content-center.align-items-center.mb-4.bg5(data-aos="zoom-in-left")
      .col-lg-5.d-none.d-lg-block
        img.izq2(src="@/assets/curso/temas/Tema3/img03.png")
      .col-lg-7
        p.p-3 Los códigos de barras son herramientas fundamentales en la gestión comercial y logística, ya que permiten identificar productos de manera rápida y precisa. Su uso facilita el control de inventarios, la automatización de procesos y la eficiencia en puntos de venta.
   
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Concepto
    
    .bloque-texto-g.bloque-texto-g--inverso.bg6.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/Tema3/img04.png')})`}"
        )
      .bloque-texto-g__texto.p-4
        p.mb-0 El código de barras es un sistema de identificación automática que utiliza una serie de líneas y espacios de diferentes grosores para representar información codificada de un producto, la cual puede ser leída mediante dispositivos electrónicos.
          br
          br
          | En el contexto empresarial, los códigos de barras permiten agilizar procesos como facturación, inventario y trazabilidad de productos. Por ejemplo, en supermercados, tiendas de autoservicio o puntos de venta, el uso de códigos de barras permite registrar productos en caja de forma rápida, actualizar inventarios y reducir errores en precios o referencias.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Tipos

    p Existen diferentes tipos de códigos de barras, los cuales varían según su estructura, capacidad de almacenamiento y aplicación.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Tipos de códigos de barras

    .row.mb-4(data-aos="zoom-in-left")
        .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                .icono
                  img(src='@/assets/curso/temas/Tema3/1.svg', alt='')
            h4.text-center EAN-13
            p.mb-0 Es un código de 13 dígitos de estándar internacional. Su uso común se relaciona con productos de consumo masivo.

        .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                .icono
                  img(src='@/assets/curso/temas/Tema3/2.svg', alt='')
            h4.text-center UPC
            p.mb-0 Es un código utilizado principalmente en Estados Unidos. Se emplea en #[em retail] y supermercados.

        .col-sm-6.col-lg-3.mb-4.mb-sm-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                .icono
                  img(src='@/assets/curso/temas/Tema3/3.svg', alt='')
            h4.text-center Code 39
            p.mb-0 Permite incluir letras y números. Su uso es frecuente en industria y logística.

        .col-sm-6.col-lg-3.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                .icono
                  img(src='@/assets/curso/temas/Tema3/4.svg', alt='')
            h4.text-center QR (2D)
            p.mb-0 Almacena mayor cantidad de información. Se utiliza en #[em marketing] y acceso digital.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Características

    p Los códigos de barras presentan características que los convierten en una herramienta eficiente dentro de la gestión comercial. Por ejemplo, en empresas de logística y transporte, los códigos de barras permiten rastrear envíos en tiempo real, identificar el estado de cada paquete, controlar su ubicación y mejorar la eficiencia operativa durante el proceso de distribución. 
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Características de los códigos de barras

    .row.mb-4.justify-content-center
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/Tema3/01.png' alt='')
            .tarjeta.bg9
              .p-4
                h4.text-center Automatización
                p.mb-0.text-center Permiten registrar productos de forma rápida mediante escaneo, reduciendo tiempos en procesos operativos.

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/Tema3/02.png' alt='')
            .tarjeta.bg9
              .p-4
                h4.text-center Precisión
                p.mb-0.text-center Minimizan errores humanos en la digitación de información, especialmente en inventarios y ventas.
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/Tema3/03.png' alt='')
            .tarjeta.bg9
              .p-4
                h4.text-center  Estandarización
                p.mb-0.text-center Siguen normas internacionales que garantizan su uso global y compatibilidad entre sistemas.
      
    .row.mb-4.justify-content-center(data-aos="zoom-in-left")
      .col-lg-4.mb-4.col-md-6.h-100
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/Tema3/04.png' alt='')
          .tarjeta.bg9
            .p-4
              h4.text-center Rapidez
              p.mb-0.text-center Facilitan procesos en puntos de venta, mejorando la experiencia del cliente.

      .col-lg-4.col-md-6.h-100
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/Tema3/05.png' alt='')
          .tarjeta.bg9
            .p-4
              h4.text-center Trazabilidad
              p.mb-0.text-center Permiten hacer seguimiento del producto desde su origen hasta su comercialización.


    .tarjeta.color-acento-contenido.p-5.mb-5(data-aos="zoom-in-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
          img(src="@/assets/curso/temas/Tema3/icoo.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-3 ¿Qué significan los números en los códigos de barras?
              p.mb-0 Para fortalecer la comprensión sobre la estructura y utilidad de los códigos de barras en la identificación de productos, consulte el recurso “¿Qué significan los números en los códigos de barras?”. Durante la revisión, identifique qué información contiene un código de barras, cómo se interpreta su composición y por qué este sistema facilita la comercialización, trazabilidad y gestión de los productos en el mercado.
            .col-sm-auto
              a.boton.color-acento-botones(:href="('https://gs1co.org/blog/que-significan-los-numeros-en-los-codigos-de-barras')" target="_blank")
                span Enlace web
                i.fas.fa-file-code

    separador
    #t_3_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 3.2  Etiqueta #[em RFID]: concepto, tipos y usos

    p La tecnología #[em RFID] representa una evolución en los sistemas de identificación de productos, permitiendo mayor eficiencia en la gestión logística y comercial. Su implementación facilita el control, seguimiento y automatización de procesos en tiempo real.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Concepto

    .bloque-texto-g.bg7.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/Tema3/img05.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La etiqueta #[em RFID (Radio Frequency Identification)] es un dispositivo que utiliza ondas de radio para almacenar y transmitir información de un producto de forma inalámbrica, sin necesidad de contacto directo o línea de visión.

            br
            br
            | A diferencia del código de barras, la tecnología #[em RFID] permite leer múltiples productos simultáneamente y a mayor distancia, lo que optimiza procesos de inventario y trazabilidad. Por ejemplo, en tiendas de moda o establecimientos comerciales con alto volumen de referencias, las etiquetas #[em RFID] permiten conocer en tiempo real la disponibilidad de productos, agilizar la reposición, controlar inventarios y reducir tiempos en procesos de venta o verificación.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Tipos
    p Los tipos de etiquetas #[em RFID] se diferencian principalmente por su fuente de energía y su forma de funcionamiento, lo que determina su alcance, costo y aplicación en los procesos comerciales y logísticos.
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Tipos de etiquetas #[em RFID]

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.bg4.p-5      
        h5.text-center Pasivas
        p No cuentan con batería interna y se activan mediante la energía emitida por el lector. Son las más utilizadas en entornos de #[em retail] e inventarios debido a su bajo costo y facilidad de implementación.
      
      .col-md.tarjeta.bg12.p-5        
        h5.text-center Activas
        p Incorporan una batería propia que les permite transmitir señales de manera autónoma. Se utilizan en el seguimiento de activos de alto valor, ya que ofrecen mayor alcance y precisión.
      
      .col-md.tarjeta.bg4.p-5    
        h5.text-center Semipasivas
        p Combinan una batería interna con la activación por lector, lo que permite mejorar su rendimiento sin alcanzar el costo de las etiquetas activas. Son empleadas en procesos logísticos especializados que requieren mayor control.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Usos

    p El uso de #[em RFID] se ha extendido en diferentes sectores debido a su capacidad de automatizar procesos y mejorar la precisión de la información.


    .row.mb-4(data-aos="zoom-in-left")
        .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                .icono
                  img(src='@/assets/curso/temas/Tema3/5.svg', alt='')
            h4.text-center Gestión de inventarios
            p.mb-0 Permite conocer en tiempo real la ubicación y cantidad de productos.

        .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                .icono
                  img(src='@/assets/curso/temas/Tema3/6.svg', alt='')
            h4.text-center Control logístico
            p.mb-0 Facilita el seguimiento de mercancías durante transporte y almacenamiento.

        .col-sm-6.col-lg-3.mb-4.mb-sm-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                .icono
                  img(src='@/assets/curso/temas/Tema3/7.svg', alt='')
            h4.text-center Seguridad
            p.mb-0 Ayuda a prevenir pérdidas y controlar accesos en productos o activos.

        .col-sm-6.col-lg-3.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                .icono
                  img(src='@/assets/curso/temas/Tema3/8.svg', alt='')
            h4.text-center Experiencia del cliente
            p.mb-0 Agiliza procesos de compra y pago en tiendas.

    p Por ejemplo, una tienda deportiva puede utilizar tecnología #[em RFID] para mejorar la gestión de inventarios, conocer la disponibilidad de productos en tiempo real y reducir tiempos en la caja mediante sistemas de autopago o verificación rápida.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Usos de la tecnología #[em RFID]

    .row.mb-4(data-aos="zoom-in-left")
        .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
          .tarjeta-numerada.color-acento-contenido.p-4.h-100
            .tarjeta-numerada__numero
              .h2 1
            p.text-center 
              b Gestión de inventarios
            p.text-center Permite conocer en tiempo real la ubicación y cantidad de productos.

        .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
          .tarjeta-numerada.color-secundario.p-4.h-100
            .tarjeta-numerada__numero
              .h2 2
            p.text-center 
              b Control logístico
            p.text-center Facilita el seguimiento de mercancías durante transporte y almacenamiento.
        .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
          .tarjeta-numerada.color-primario.p-4.h-100
            .tarjeta-numerada__numero
              .h2 3
            p.text-center 
              b Seguridad
            p.text-center Ayuda a prevenir pérdidas y controlar accesos en productos o activos.

        .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
          .tarjeta-numerada.color-acento-botones.p-4.h-100
            .tarjeta-numerada__numero
              .h2 4
            p.text-center 
              b Experiencia del cliente
            p.text-center Agiliza procesos de compra y pago en tiendas.

    separador
    #t_3_3.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 3.3  Empaque: concepto, tipos, funciones y usos

    p El empaque no solo protege el producto, sino que actúa como un elemento estratégico que influye directamente en la percepción del consumidor y en la decisión de compra en el punto de venta.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Concepto


    .bloque-texto-g.bloque-texto-g--inverso.bg2.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/Tema3/img06.png')})`}"
        )
      .bloque-texto-g__texto.p-4
        p.mb-0 El empaque es el conjunto de materiales que envuelven o contienen un producto con el propósito de protegerlo, conservarlo y facilitar su comercialización. Además, cumple una función comunicativa al transmitir atributos, beneficios e identidad de marca.
          br
          br
          | En el contexto comercial, el empaque se diseña considerando el segmento de mercado, el canal de distribución y el posicionamiento del producto. Por ejemplo, un producto alimenticio tipo pasabocas puede utilizar un empaque rígido, compacto y fácil de manipular, que proteja el contenido, facilite su almacenamiento y permita diferenciarlo frente a otras alternativas ubicadas en el punto de venta.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Funciones estratégicas del empaque

    TabsA.color-acento-botones.mb-2
      .tarjeta.bgrosado.p-4(titulo="Protección")
        p.mb-0 El empaque ayuda a conservar el producto, evitar daños, mantener sus condiciones de uso y reducir riesgos durante la manipulación.
      .tarjeta.bgrosado.p-4(titulo="Comunicación")
        p.mb-0 Permite presentar información sobre la marca, los atributos, los beneficios, el contenido, el uso y las condiciones del producto.
      .tarjeta.bgrosado.p-4(titulo="Diferenciación")
        p.mb-0 Contribuye a que el producto se distinga frente a otras opciones mediante diseño, forma, colores, materiales o presentación.
      .tarjeta.bgrosado.p-4(titulo="Experiencia del consumidor")
        p.mb-0 Facilita la manipulación, apertura, almacenamiento y uso del producto, influyendo en la percepción de calidad y valor.
     
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Tipos

    p Los tipos de empaque se estructuran según su función dentro de la cadena de valor:

    .tarjeta--container.row.mb-3
      .col-md.tarjeta.bg4.p-5      
        h5.text-center Primario
        p Tiene contacto directo con el producto, garantizando su conservación y presentación. Es clave en la experiencia del consumidor.
      
      .col-md.tarjeta.bg12.p-5        
        h5.text-center Secundario
        p Agrupa varios empaques primarios, facilitando la manipulación y exhibición en puntos de venta.
      
      .col-md.tarjeta.bg4.p-5    
        h5.text-center Terciario
        p Está orientado al transporte y almacenamiento, optimizando la logística y distribución.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Usos

    p El empaque se aplica en distintos niveles del entorno empresarial:

    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
        .col-lg-9.position-relative
          .avatar
            figure
              img(src="@/assets/curso/temas/Tema3/figura.svg", alt="alt").img250
          
          .crd.crd--avatarHorizontal.crd--first.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/Tema3/azul.png", alt="alt").img100
              .col
                h5 Comercial
                p Influye en la decisión de compra y en la percepción de calidad.
          
          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/Tema3/celeste.png", alt="alt").img100
              .col
                h5 Logístico
                p Permite optimizar procesos de almacenamiento y distribución.
          
          .crd.crd--avatarHorizontal.crd--last.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/Tema3/marron.png", alt="alt").img100
              .col
                h5 Estratégico
                p Fortalece la identidad de marca y el posicionamiento.

    p Por ejemplo, una empresa de productos tecnológicos puede utilizar empaques minimalistas, resistentes y organizados para proteger el producto, facilitar su apertura y reforzar una experiencia de compra asociada con calidad, innovación y cuidado en los detalles.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Funciones y usos del empaque

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in-left")
        .row.justify-content-center(titulo="Protección")
          .col-lg-7.mb-4.mb-md-0
            p Resguarda el producto frente a impactos, humedad o contaminación.
          .col-lg-4.col-10.col-md-8
            figure
              img(src='@/assets/curso/temas/Tema3/aco1.png', alt='')
        .row.justify-content-center(titulo="Conservación")
          .col-lg-7.mb-4.mb-md-0
            p Mantiene las condiciones óptimas del producto durante su vida útil.
          .col-lg-4.col-10.col-md-8
            figure
              img(src='@/assets/curso/temas/Tema3/aco2.png', alt='')
        .row.justify-content-center(titulo="Comunicación")
          .col-lg-7.mb-4.mb-md-0
            p Transmite información relevante como marca, beneficios y características.
          .col-lg-4.col-10.col-md-8
            figure
              img(src='@/assets/curso/temas/Tema3/aco3.png', alt='')

        .row.justify-content-center(titulo="Diferenciación")
          .col-lg-7.mb-4.mb-md-0
            p Permite destacar el producto frente a la competencia en el punto de venta.
          .col-lg-4.col-10.col-md-8
            figure
              img(src='@/assets/curso/temas/Tema3/aco4.png', alt='')
        .row.justify-content-center(titulo="Uso comercial, logístico y estratégico")
          .col-lg-7.mb-4.mb-md-0
            p El empaque influye en la decisión de compra, optimiza procesos de almacenamiento y distribución, y fortalece la identidad de marca.
          .col-lg-4.col-10.col-md-8
            figure
              img(src='@/assets/curso/temas/Tema3/aco5.png', alt='')

    separador
    #t_3_4.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 3.4  Envase: concepto, tipos, funciones y usos

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/Tema3/img07.png')})`}"
        )
      .bloque-texto-g__texto.p-4
        p.mb-0 El envase constituye el primer nivel de contacto físico con el producto, siendo clave en la conservación, dosificación y experiencia de uso.
          br
          br
          | #[b Concepto]
          br
          br
          | El envase es el recipiente que contiene directamente el producto, diseñado para protegerlo, conservarlo y facilitar su uso por parte del consumidor. Desde una perspectiva comercial, el envase debe responder a criterios de funcionalidad, ergonomía y sostenibilidad.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Tipos

    p Los envases se clasifican principalmente por material y funcionalidad:

    .row.mb-4(data-aos="zoom-in-left")
        .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                .icono
                  img.imgta(src='@/assets/curso/temas/Tema3/9.svg', alt='')
            h4.text-center Vidrio
            p.mb-0 Alta protección, reutilizable y asociado a productos premium.

        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7.h-100
                .icono
                  img(src='@/assets/curso/temas/Tema3/10.svg', alt='')
            h4.text-center Plástico
            p.mb-0 Versátil, ligero y de bajo costo.

        .col-sm-6.col-lg-3.mb-4.mb-sm-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                .icono
                  img(src='@/assets/curso/temas/Tema3/11.svg', alt='')
            h4.text-center Metal
            p.mb-0 Resistente y adecuado para conservación prolongada.

        .col-sm-6.col-lg-3
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                .icono
                  img(src='@/assets/curso/temas/Tema3/12.svg', alt='')
            h4.text-center Cartón
            p.mb-0 Ecológico y fácil de transportar.

    p Por ejemplo, una empresa de productos de cuidado personal puede desarrollar diferentes tipos de envases, como frascos de vidrio, tubos plásticos, latas metálicas o cajas de cartón, adaptados a distintos usos, tamaños de presentación, canales de distribución y necesidades del consumidor.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Funciones

    p El envase cumple funciones fundamentales:

    .row.mb-4.justify-content-center
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/Tema3/06.png' alt='')
            .tarjeta.bg9
              .p-4
                h4.text-center Contener
                p.mb-0.text-center Asegura que el producto se mantenga íntegro.

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/Tema3/07.png' alt='')
            .tarjeta.bg9
              .p-4
                h4.text-center Proteger
                p.mb-0.text-center Evita alteraciones externas.
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/Tema3/08.png' alt='')
            .tarjeta.bg9
              .p-4
                h4.text-center  Dosificar
                p.mb-0.text-center Facilita el uso adecuado del producto.
      
    .row.mb-4.justify-content-center(data-aos="zoom-in-left")
      .col-lg-4.mb-4.col-md-6.h-100
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/Tema3/09.png' alt='')
          .tarjeta.bg9
            .p-4
              h4.text-center Informar
              p.mb-0.text-center Comunica características, instrucciones y normativas.

      .col-lg-4.col-md-6.h-100
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/Tema3/010.png' alt='')
          .tarjeta.bg9
            .p-4
              h4.text-center Generar experiencia
              p.mb-0.text-center Influye en la percepción y comodidad del consumidor.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Usos

    p El envase se utiliza en diversos sectores:

    .tarjeta--container.row.mb-3
      .col-md.tarjeta.bg4.p-5      
        h5.text-center Alimentos
        p Conservación e higiene. Protege el producto de contaminación y mantiene su calidad durante almacenamiento y distribución.
      
      .col-md.tarjeta.bg12.p-5        
        h5.text-center Farmacéutico
        p Control y seguridad. Garantiza dosificación adecuada y cumplimiento de normas sanitarias.
      
      .col-md.tarjeta.bg4.p-5    
        h5.text-center Cosmético
        p Diferenciación y uso. Aporta valor estético y facilita la aplicación del producto.

    p Por ejemplo, una empresa de productos cosméticos puede utilizar envases funcionales y reconocibles que faciliten la aplicación del producto, protejan el contenido, comuniquen atributos de cuidado personal y fortalezcan la confianza del consumidor.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Funciones del envase

    .fondo01.p-5.mb-4(data-aos="zoom-in-left")
        .row.justify-content-center.align-items-center.mb-2
          .col-lg-12
            .tarjeta.fondosly.p-4
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-md-0
                    h5 Contener
                    p Asegura que el producto se mantenga íntegro.
                    h5 Proteger
                    p Evita alteraciones externas.
                  .col-lg-4.col-md-8
                    figure
                      img(src='@/assets/curso/temas/Tema3/sly1.png', alt='')
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-md-0
                    h5 Dosificar
                    p Facilita el uso adecuado del producto.
                    h5 Informar
                    p Comunica características, instrucciones y normativas.
                  .col-lg-4.col-md-8
                    figure
                      img(src='@/assets/curso/temas/Tema3/sly2.png', alt='')
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-md-0
                    h5 Generar experiencia
                    p Influye en la percepción y comodidad del consumidor.
                  .col-lg-4.col-md-8
                    figure
                      img(src='@/assets/curso/temas/Tema3/sly3.png', alt='')
              
    separador
    #t_3_5.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 3.5  Embalaje: concepto, tipos, funciones y usos

    p El embalaje está enfocado en la protección del producto durante su manipulación, almacenamiento y transporte dentro de la cadena logística.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Concepto

    .bloque-texto-g.bg7.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/Tema3/img08.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El embalaje es el conjunto de materiales utilizados para agrupar, proteger y facilitar el transporte de productos desde su origen hasta su destino final.
            br
            br
            | En el entorno empresarial, el embalaje es clave para garantizar la integridad del producto y optimizar costos logísticos. Por ejemplo, una plataforma de comercio electrónico puede diseñar embalajes adaptados al tamaño, peso y fragilidad del producto para reducir daños, optimizar el espacio de transporte y mejorar la eficiencia en la distribución.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Tipos

    p Los tipos de embalaje se clasifican según su función dentro de la logística y distribución:

    .tarjeta--container.row.mb-3(data-aos="zoom-in-left")
      .col-md.tarjeta.bg13.p-5      
        h5.text-center Individual
        p Protege una unidad específica del producto, evitando daños durante su manipulación y almacenamiento.
      
      .col-md.tarjeta.bg14.p-5        
        h5.text-center Colectivo
        p Agrupa varias unidades, facilitando su organización, conteo y manejo en procesos de almacenamiento y distribución.
      
      .col-md.tarjeta.bg13.p-5    
        h5.text-center De transporte
        p Permite movilizar grandes volúmenes de productos de forma eficiente, optimizando la carga, descarga y distribución en la cadena logística.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Funciones
    p El embalaje cumple funciones logísticas clave:

    .row.mb-4(data-aos="zoom-in-left")
        .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-secundario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                .icono
                  img(src='@/assets/curso/temas/Tema3/13.svg', alt='')
            h4.text-center Protección
            p.mb-0 Evita daños durante el transporte, resguardando el producto frente a impactos, humedad o manipulación inadecuada.

        .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-secundario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                .icono
                  img(src='@/assets/curso/temas/Tema3/14.svg', alt='')
            h4.text-center Almacenamiento
            p.mb-0 Facilita la organización en bodegas, permitiendo optimizar el espacio y el control de inventarios.
        .col-sm-6.col-lg-3.mb-4.mb-sm-0.d-flex
          .tarjeta--boton.color-secundario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                .icono
                  img(src='@/assets/curso/temas/Tema3/15.svg', alt='')
            h4.text-center Manipulación
            p.mb-0 Permite un manejo eficiente mediante sistemas de carga, descarga y movilización dentro de la cadena logística.

        .col-sm-6.col-lg-3.d-flex
          .tarjeta--boton.color-secundario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                .icono
                  img(src='@/assets/curso/temas/Tema3/16.svg', alt='')
            h4.text-center Optimización logística
            p.mb-0 Reduce costos y tiempos al mejorar la eficiencia en el transporte, distribución y almacenamiento.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Usos
    p El embalaje se aplica en distintos contextos:

    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
        .col-lg-9.position-relative
          .avatar
            figure
              img(src="@/assets/curso/temas/Tema3/figura2.svg", alt="alt").img250
          
          .crd.crd--avatarHorizontal.crd--first.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/Tema3/azul1.png", alt="alt").img100
              .col
                h5 Distribución
                p Traslado seguro de productos hacia puntos de venta o centros de consumo.
          
          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/Tema3/celeste1.png", alt="alt").img100
              .col
                h5 Exportación
                p Protección en envíos internacionales, cumpliendo condiciones de transporte y normativas.
          
          .crd.crd--avatarHorizontal.crd--last.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/Tema3/marron1.png", alt="alt").img100
              .col
                h5 #[em E-commerce]
                p Entrega segura al cliente final, garantizando la integridad del producto durante todo el proceso.

    .cajon.color-primario.p-4.mb-4(data-aos="zoom-in-left")
      p Por ejemplo, una empresa de transporte y distribución puede utilizar embalajes especializados para proteger productos en diferentes condiciones de manipulación, almacenamiento y traslado, asegurando que lleguen en buen estado al punto de venta o al cliente final.
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Uso del embalaje en la distribución de productos

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
        .col-lg-10
          PasosA.color-acento-contenido.mb-0(tipo="n")(data-aos="zoom-in-left")
            .row
              .col-md-8.mb-4.mb-md-0
                h4 Preparar el producto
                p Se revisan sus características, como tamaño, peso, fragilidad, condiciones de conservación y riesgos durante el transporte.
              .col-md-3.col-8
                figure
                  img(src='@/assets/curso/temas/Tema3/pas4.svg', alt='')


            .row
              .col-md-3.mb-4.mb-md-0.col-8
                figure
                  img(src='@/assets/curso/temas/Tema3/pas5.svg', alt='')

              .col-md-8
                h4.text-izq Seleccionar el embalaje
                p.text-izq Se eligen materiales adecuados, como cajas, protectores, separadores, sellos o elementos de amortiguación, según el tipo de producto. 

            .row
              .col-md-8.mb-4.mb-md-0
                h4 Proteger durante el traslado
                p El embalaje reduce riesgos de golpes, humedad, presión, pérdida, deterioro o manipulación inadecuada durante la distribución.  
              .col-md-3.col-8
                figure
                  img(src='@/assets/curso/temas/Tema3/pas6.svg', alt='')
            
            .row
              .col-md-3.col-8.mb-4
                figure
                  img(src='@/assets/curso/temas/Tema3/pas7.svg', alt='')
              .col-md-8.mb-4.mb-md-0
                h4.text-izq Facilitar la entrega
                p.text-izq Una adecuada identificación, rotulado y organización del embalaje permite entregar el producto de forma segura y oportuna.

    .cajon.color-acento-contenido.p-4.mb-4(data-aos="zoom-in-left")
      p Empaque, envase y embalaje son elementos complementarios dentro de la gestión del producto. Cada uno cumple funciones específicas que impactan la conservación, comercialización y distribución, integrándose como parte estratégica de la cadena de valor.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg1.py-3.w-card-text.text-white Diferencias entre empaque, envase y embalaje

    .row(data-aos="zoom-in-left")
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-5
              .icono2
                img(src='@/assets/curso/temas/Tema3/01.svg', alt='')
          h3.text-center Empaque
          p Envuelve o contiene un producto para protegerlo, conservarlo, facilitar su comercialización y comunicar atributos, beneficios e identidad de marca.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-botones.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              .icono2
                img(src='@/assets/curso/temas/Tema3/02.svg', alt='')
          h3.text-center Envase
          p Contiene directamente el producto y permite protegerlo, conservarlo, dosificarlo y facilitar su uso por parte del consumidor.
      
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-botones.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              .icono2
                img.imgta(src='@/assets/curso/temas/Tema3/03.svg', alt='')
          h3.text-center Embalaje
          p Agrupa, protege y facilita el transporte de productos desde su origen hasta su destino final.


























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
