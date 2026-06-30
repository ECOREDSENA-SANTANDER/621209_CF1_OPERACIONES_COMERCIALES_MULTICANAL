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
                p Se reconocen herramientas como códigos de barras y etiquetas RFID, que permiten registrar, controlar y hacer seguimiento a los productos en procesos comerciales y logísticos.
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
                figure
                  img(src='@/assets/curso/temas/Tema3/1.png', alt='')
            h4.text-center EAN-13
            p.mb-0 Es un código de 13 dígitos de estándar internacional. Su uso común se relaciona con productos de consumo masivo.

        .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                figure
                  img(src='@/assets/curso/temas/Tema3/2.png', alt='')
            h4.text-center UPC
            p.mb-0 Es un código utilizado principalmente en Estados Unidos. Se emplea en retail y supermercados.

        .col-sm-6.col-lg-3.mb-4.mb-sm-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                figure
                  img(src='@/assets/curso/temas/Tema3/3.png', alt='')
            h4.text-center Code 39
            p.mb-0 Permite incluir letras y números. Su uso es frecuente en industria y logística.

        .col-sm-6.col-lg-3.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                figure
                  img(src='@/assets/curso/temas/Tema3/4.png', alt='')
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
    p Los tipos de etiquetas RFID se diferencian principalmente por su fuente de energía y su forma de funcionamiento, lo que determina su alcance, costo y aplicación en los procesos comerciales y logísticos.
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
                figure
                  img(src='@/assets/curso/temas/Tema3/5.png', alt='')
            h4.text-center Gestión de inventarios
            p.mb-0 Permite conocer en tiempo real la ubicación y cantidad de productos.

        .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                figure
                  img(src='@/assets/curso/temas/Tema3/6.png', alt='')
            h4.text-center Control logístico
            p.mb-0 Facilita el seguimiento de mercancías durante transporte y almacenamiento.

        .col-sm-6.col-lg-3.mb-4.mb-sm-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                figure
                  img(src='@/assets/curso/temas/Tema3/7.png', alt='')
            h4.text-center Seguridad
            p.mb-0 Ayuda a prevenir pérdidas y controlar accesos en productos o activos.

        .col-sm-6.col-lg-3.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                figure
                  img(src='@/assets/curso/temas/Tema3/8.png', alt='')
            h4.text-center Experiencia del cliente
            p.mb-0 Agiliza procesos de compra y pago en tiendas.

    p Por ejemplo, una tienda deportiva puede utilizar tecnología RFID para mejorar la gestión de inventarios, conocer la disponibilidad de productos en tiempo real y reducir tiempos en la caja mediante sistemas de autopago o verificación rápida.

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
