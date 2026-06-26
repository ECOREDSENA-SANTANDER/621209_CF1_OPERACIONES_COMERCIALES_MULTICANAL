<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Construcción y posicionamiento de marca

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-3.col-10
        img(src='@/assets/curso/temas/Tema2/img01.png', alt='')
      .col-lg-7
        .row.justify-content-center.align-items-center
          .col-lg-2.mb-3.d-none.d-lg-block
            img(src='@/assets/curso/temas/Tema2/ico.png', alt='')
          .col-lg-10
            p La construcción y el posicionamiento de marca permiten comprender cómo una organización, producto o servicio logra ser reconocido, diferenciado y recordado por el público. La marca no se limita al nombre o a sus elementos gráficos, sino que integra símbolos, emblemas, etiquetas, tipografías, valores, emociones, experiencias y percepciones que influyen en la decisión de compra.
        p En este apartado se abordan tres aspectos centrales: la marca y sus elementos de identificación, el #[em branding] como proceso de construcción de identidad, y el posicionamiento como estrategia para ocupar un lugar claro y diferenciado en la mente del consumidor.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-7
            .d-flex.align-items-center
              img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
              h3.bg1.py-3.w-card-text.text-white Elementos para construir y posicionar una marca
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in-left")
        .row.justify-content-center(titulo="Marca")
          .col-lg-7.mb-4.mb-md-0
            p Representa la forma en que una empresa, producto o servicio es percibido por el público. Integra elementos visuales, conceptuales y simbólicos que permiten generar reconocimiento y diferenciación.
          .col-lg-4.col-10.col-md-8
            figure
              img(src='@/assets/curso/temas/Tema2/aco1.png', alt='')
        .row.justify-content-center(titulo="<i>Branding</i>")
          .col-lg-7.mb-4.mb-md-0
            p Corresponde al proceso mediante el cual se construye y gestiona una marca para crear una identidad clara, coherente y diferenciada en el mercado.
          .col-lg-4.col-10.col-md-8
            figure
              img(src='@/assets/curso/temas/Tema2/aco2.png', alt='')
        .row.justify-content-center(titulo="Posicionamiento")
          .col-lg-7.mb-4.mb-md-0
            p Busca ubicar una marca, producto o servicio en un lugar claro y diferenciado en la mente del consumidor, destacando sus atributos, beneficios o ventajas frente a la competencia.
          .col-lg-4.col-10.col-md-8
            figure
              img(src='@/assets/curso/temas/Tema2/aco3.png', alt='')
      separador
      #t_2_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
        h2 2.1  Marca: símbolos, emblemas, etiqueta y caracteres que identifican el nombre

      .row.justify-content-center.align-items-center.mb-5.bg5(data-aos="zoom-in-left")
        .col-lg-5.d-none.d-lg-block
          img.izq2(src="@/assets/curso/temas/Tema2/img02.png")
        .col-lg-7
          p.p-3 La marca constituye uno de los activos más importantes de una organización, ya que representa la forma en que una empresa, producto o servicio es percibido por el público. No se limita únicamente al nombre o a los elementos gráficos, sino que incluye valores, emociones, experiencias y percepciones que los consumidores asocian con la empresa.
          p.px-3 La construcción de identidad de marca implica desarrollar elementos visuales, conceptuales y simbólicos que permitan diferenciar a la organización dentro del mercado y fortalecer su posicionamiento, lo que permite generar valor y diferenciación.
      
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-7
            .d-flex.align-items-center
              img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
              h3.bg1.py-3.w-card-text.text-white Ejemplo aplicado: marca en canales digitales

      .bloque-texto-g.bloque-texto-g--inverso.bg6.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/Tema2/img05.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 En los canales digitales, una marca se reconoce no solo por su logotipo o nombre comercial, sino también por la coherencia entre su identidad visual, el tono de comunicación, los mensajes, la experiencia de navegación y la facilidad con la que el usuario puede interactuar con la empresa. Por ejemplo, una organización puede fortalecer su marca cuando mantiene colores, tipografías, símbolos, estilo gráfico y mensajes consistentes en su sitio web, redes sociales, tienda virtual y canales de atención.
            br
            br 
            | Esta coherencia permite que el público identifique la marca con mayor facilidad, comprenda su propuesta de valor y la asocie con una experiencia clara, confiable y diferenciada. Por ello, la gestión de marca en medios digitales debe cuidar tanto los elementos visuales como la forma en que se comunica, atiende y acompaña al usuario durante su interacción con la organización.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-7
            .d-flex.align-items-center
              img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
              h3.bg1.py-3.w-card-text.text-white Marca en canales digitales

      TabsC.color-primario.mb-4
        .py-3.py-md-4(titulo="Identidad visual")
          .row.justify-content-center
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/Tema2/tabs1.png', alt='')
            .col-lg-6.mb-4.mb-md-0
              .col-lg-2.mb-3
                img(src='@/assets/curso/temas/Tema2/ico1.png', alt='')
              p Integra elementos como colores, tipografía, símbolos, emblemas y estilo gráfico, los cuales facilitan el reconocimiento de la marca.
        .py-3.py-md-4(titulo="Comunicación coherente")
          .row.justify-content-center
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/Tema2/tabs2.png', alt='')
            .col-lg-6.mb-4.mb-md-0
              .col-lg-2.mb-3
                img(src='@/assets/curso/temas/Tema2/ico2.png', alt='')
              p Permite que los mensajes publicados en canales digitales mantengan un tono claro, consistente y alineado con los valores de la organización.
        .py-3.py-md-4(titulo="Experiencia del usuario")
          .row.justify-content-center
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/Tema2/tabs3.png', alt='')
            .col-lg-6.mb-4.mb-md-0
              .col-lg-2.mb-3
                img(src='@/assets/curso/temas/Tema2/ico3.png', alt='')
              p Incluye la facilidad de navegación, la claridad de la información y la posibilidad de encontrar productos, servicios o canales de atención de manera sencilla.
        .py-3.py-md-4(titulo="Reconocimiento comercial")
          .row.justify-content-center
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/Tema2/tabs4.png', alt='')
            .col-lg-6.mb-4.mb-md-0
              .col-lg-2.mb-3
                img(src='@/assets/curso/temas/Tema2/ico4.png', alt='')
              p Se fortalece cuando el público identifica la marca, recuerda sus elementos distintivos y la asocia con una experiencia positiva.
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-7
            .d-flex.align-items-center
              img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
              h3.bg1.py-3.w-card-text.text-white Símbolos

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.mb-3
          img(src='@/assets/curso/temas/Tema2/img06.png', alt='')
        .col-lg-8
          p Los símbolos son representaciones gráficas que forman parte de la identidad visual de una marca y permiten identificarla fácilmente ante el público. Pueden estar representados por íconos o elementos gráficos asociados a la marca, los cuales ayudan a transmitir su personalidad y valores.
          .cajon.color-acento-contenido.p-5.mb-3
            p.mb-0 Su principal función es facilitar el reconocimiento visual de la marca y fortalecer su posicionamiento en la mente de los consumidores, ya que estos elementos se convierten en referentes visuales fáciles de recordar.
          p Existen diferentes tipos de símbolos que pueden representar una marca de manera clara y memorable. Algunos símbolos transmiten movimiento, dinamismo o rendimiento; otros comunican innovación, tradición, calidad, confianza, prestigio o pertenencia cultural. En el contexto comercial, lo importante es que el símbolo mantenga coherencia con la identidad de la marca, sea fácil de reconocer y pueda aplicarse en diferentes soportes, como empaques, etiquetas, piezas publicitarias, plataformas digitales y puntos de venta.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-7
            .d-flex.align-items-center
              img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
              h3.bg1.py-3.w-card-text.text-white Emblemas

      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/Tema2/img07.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los emblemas son representaciones gráficas que combinan texto e imagen en una sola unidad visual, formando un elemento distintivo que identifica a la marca de manera integral. A diferencia de otros elementos, el emblema integra el nombre de la marca dentro de un diseño cerrado o estructurado, lo que refuerza su identidad visual.
            br
            br
            | Su función principal es transmitir tradición, solidez y reconocimiento, siendo común en marcas que buscan proyectar historia, confianza o institucionalidad. Los emblemas facilitan la recordación y permiten una identificación clara en diferentes contextos comerciales.

      p Por ejemplo, una empresa colombiana dedicada a la producción y comercialización de café puede utilizar un emblema que integre el nombre de la marca, una figura relacionada con el origen del producto y una forma gráfica cerrada, como un círculo, escudo o sello. Este tipo de diseño permite comunicar tradición, procedencia, calidad y cercanía cultural, especialmente cuando se busca resaltar el vínculo entre el producto, el territorio y la experiencia del consumidor.
      
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-7
            .d-flex.align-items-center
              img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
              h3.bg1.py-3.w-card-text.text-white Elementos que conforman un emblema de marca

      .row.mb-4(data-aos="zoom-in-left")
        .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                figure
                  img(src='@/assets/curso/temas/Tema2/1.png', alt='')
            h4.text-center Nombre de la marca
            p.mb-0 Permite identificar verbalmente a la empresa, producto o servicio dentro del diseño gráfico del emblema.

        .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                figure
                  img(src='@/assets/curso/temas/Tema2/2.png', alt='')
            h4.text-center Elemento visual
            p.mb-0 Puede incluir una figura, símbolo, ícono o ilustración asociada con la identidad, el origen o la personalidad de la marca.

        .col-sm-6.col-lg-3.mb-4.mb-sm-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                figure
                  img(src='@/assets/curso/temas/Tema2/3.png', alt='')
            h4.text-center Forma estructurada
            p.mb-0 Integra los elementos en una composición cerrada, como un sello, escudo, círculo o marco, para fortalecer la unidad visual.

        .col-sm-6.col-lg-3.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5.col-lg-7
                figure
                  img(src='@/assets/curso/temas/Tema2/4.png', alt='')
            h4.text-center Valor de reconocimiento
            p.mb-0 Ayuda a que el público recuerde la marca y la asocie con atributos como tradición, confianza, calidad o trayectoria.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-7
            .d-flex.align-items-center
              img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
              h3.bg1.py-3.w-card-text.text-white Etiqueta

      p La etiqueta es el elemento informativo que se coloca en los productos para comunicar información relevante al consumidor.
      p La etiqueta puede incluir datos como:     

      .fondo02.p-5.mb-4
        .row.justify-content-center.align-items-center.fondosly
          .col-lg-4.mb-3
            img(src='@/assets/curso/temas/Tema2/img08.png', alt='')
          .col-lg-4.mb-3
            ul.lista-ul.lista-ul--separador
              li
                i.fas.fa-circle-check
                | Nombre de la marca.
              li
                i.fas.fa-circle-check
                | Ingredientes o componentes.
              li
                i.fas.fa-circle-check
                | Fecha de vencimiento.
              li
                i.fas.fa-circle-check
                | Instrucciones de uso.
              li
                i.fas.fa-circle-check
                | Información legal o normativa.
          .col-lg-3.mb-3
            img(src='@/assets/curso/temas/Tema2/img09.png', alt='')

      p Además de informar, la etiqueta también cumple una función comercial y visual, ya que puede influir en la decisión de compra. Cumple funciones informativas, legales y comerciales dentro del proceso de compra.

      .titulo-secundario.mb-4(data-aos="zoom-in-left")
        span.decorador
        h4.mb-0 Información que puede contener una etiqueta


      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in-left")
        .row.justify-content-center(titulo="Nombre de la marca")
          .col-lg-7.mb-4.mb-md-0
            p Permite identificar el producto y relacionarlo con la empresa que lo ofrece en el mercado.
          .col-lg-4.col-10.col-md-8
            figure
              img(src='@/assets/curso/temas/Tema2/acor1.png', alt='')
        .row.justify-content-center(titulo="Ingredientes o componentes")
          .col-lg-7.mb-4.mb-md-0
            p Presenta los elementos que conforman el producto y facilita que el consumidor conozca su composición.
          .col-lg-4.col-10.col-md-8
            figure
              img(src='@/assets/curso/temas/Tema2/acor2.png', alt='')
        .row.justify-content-center(titulo="Fecha de vencimiento")
          .col-lg-7.mb-4.mb-md-0
            p Indica el tiempo recomendado para el consumo o uso seguro del producto.
          .col-lg-4.col-10.col-md-8
            figure
              img(src='@/assets/curso/temas/Tema2/acor3.png', alt='')
        .row.justify-content-center(titulo="Instrucciones de uso")
          .col-lg-7.mb-4.mb-md-0
            p Orienta al consumidor sobre la forma adecuada de utilizar, conservar o manipular el producto.
          .col-lg-4.col-10.col-md-8
            figure
              img(src='@/assets/curso/temas/Tema2/acor4.png', alt='')
        .row.justify-content-center(titulo="Información legal o normativa")
          .col-lg-7.mb-4.mb-md-0
            p Incluye datos obligatorios según la regulación aplicable, como advertencias, registros o condiciones de comercialización.
          .col-lg-4.col-10.col-md-8
            figure
              img(src='@/assets/curso/temas/Tema2/acor5.png', alt='')

      .fondo02.p-5.mb-4
        .row.justify-content-center.align-items-center.fondosly.p-4
          .col-lg-4.mb-3
            img(src='@/assets/curso/temas/Tema2/img10.png', alt='')
          .col-lg-8.mb-0
            h4 Lectura sugerida
            p Para complementar el tema de etiqueta, se dispone del Anexo 1. “Cartilla ABCD de lectura de etiquetado para familias”, elaborado por el Ministerio de Salud y Protección Social y UNICEF Colombia. Este recurso permite reconocer, mediante un ejemplo aplicado al sector de alimentos, cómo la información de una etiqueta puede orientar decisiones de compra y consumo más informadas.
            p Durante la revisión del anexo, identifique datos como el nombre del producto, ingredientes o componentes, información nutricional, advertencias, instrucciones de uso, condiciones de conservación y demás elementos que ayudan al consumidor a comparar opciones y tomar decisiones acordes con sus necesidades.
          .col-lg-4
            a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo1_Cartilla_ABCD_de_lectura_de_etiquetado_para_familias.pdf')" target="_blank")
              span Descargar
              i.fas.fa-file-download

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-7
            .d-flex.align-items-center
              img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
              h3.bg1.py-3.w-card-text.text-white Caracteres que identifican el nombre
      
      .row.justify-content-center.align-items-center.mb-4.bg5(data-aos="zoom-in-left")
        .col-lg-5.d-none.d-lg-block
          img.izq2(src="@/assets/curso/temas/Tema2/img11.png")
        .col-lg-7
          p.p-3 Los caracteres que identifican el nombre se refieren al tipo de letra o estilo tipográfico que utiliza una marca para escribir su nombre. La tipografía ayuda a transmitir la personalidad de la empresa y facilita que las personas reconozcan la marca rápidamente.
          p.px-3 Por ejemplo, una marca dirigida al público infantil puede utilizar una tipografía decorativa que transmita creatividad, fantasía y cercanía; una empresa de tecnología puede emplear letras simples, limpias y modernas para comunicar innovación y facilidad de uso; y una organización con trayectoria puede utilizar una tipografía clásica para reforzar tradición, confianza y reconocimiento.

      p La marca es un elemento clave para que un emprendimiento sea reconocido, recordado y diferenciado en el mercado. Su construcción implica definir una propuesta de valor, una identidad visual, una forma de comunicación coherente y una estrategia de posicionamiento acorde con las necesidades del público objetivo.
    
    img(src='@/assets/curso/temas/Tema2/podcast.svg', alt='Texto que describa la imagen')
    .row.justify-content-center.g-0(data-aos="fade-right")
      .col-lg-12
        .tarjeta.clr--pink.p-4.rounded-0.h-100.color-primario
          .tarjeta.bg-white.p-4
            TarjetaAudio.color-secundario.mb-4.p-3(
            texto="Pódcast: Marca y emprendimiento: identidad que diferencia"
            :audio="require_src('@/assets/curso/temas/Tema2/podcast.svg')"
        )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p Para complementar este tema, se dispone del pódcast “Marca y emprendimiento: identidad que diferencia”. Este recurso permite reconocer, mediante una conversación aplicada, cómo la propuesta de valor, la identidad de marca, el branding, el posicionamiento, el marketing digital y la protección legal contribuyen al fortalecimiento de un emprendimiento.
            p Durante la revisión del pódcast, identifique cómo los elementos visuales, comunicativos y estratégicos de una marca pueden ayudar a generar confianza, diferenciación y recordación en el mercado.

      separador
      #t_2_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
        h2 2.2  #[em Branding] o construcción de marca: concepto, diseño, elementos, estructura y beneficios

      .bloque-texto-g.bloque-texto-g--inverso.bg6.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/Tema2/img12.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El #[em branding] es el proceso mediante el cual una empresa construye y gestiona su marca con el objetivo de crear una identidad clara y diferenciada en el mercado. A través del branding se desarrollan elementos visuales, comunicativos y emocionales que permiten que los consumidores identifiquen, recuerden y confíen en una marca.
          br 
          br 
          | El branding no se limita únicamente al logotipo o al diseño visual, sino que también incluye la forma en que la marca se comunica, los valores que transmite y la experiencia que ofrece a sus clientes.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-7
            .d-flex.align-items-center
              img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
              h3.bg1.py-3.w-card-text.text-white Concepto

      .row.justify-content-center.align-items-center.mb-3
        .col-lg-12
          img(src="@/assets/curso/temas/Tema2/img13.png")
      p El branding se refiere al conjunto de estrategias y acciones orientadas a construir, posicionar y fortalecer una marca en la mente de los consumidores. Su objetivo es generar reconocimiento, confianza y una conexión emocional con el público.
      p Una estrategia de branding busca que la marca sea fácilmente identificable y que se diferencie de sus competidores dentro del mercado. Por ejemplo, la marca Apple ha construido su branding alrededor de la innovación, el diseño minimalista y la tecnología de alta calidad.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-7
            .d-flex.align-items-center
              img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
              h3.bg1.py-3.w-card-text.text-white Diseño

      p El diseño de marca corresponde al desarrollo de los elementos visuales que representan a una empresa. Estos elementos permiten transmitir la personalidad de la marca y facilitar su reconocimiento. Entre los aspectos más importantes del diseño de marca se encuentran:

      .fondo02.p-5.mb-4
        .row.justify-content-center.align-items-center.fondosly
          .col-lg-4.mb-3
            img(src='@/assets/curso/temas/Tema2/img15.png', alt='')
          .col-lg-4.mb-3
            ul.lista-ul.lista-ul--separador
              li
                i.fas.fa-circle-check
                | Logotipo.
              li
                i.fas.fa-circle-check
                | Colores corporativos.
              li
                i.fas.fa-circle-check
                | Tipografía.
              li
                i.fas.fa-circle-check
                | Estilo gráfico.
              li
                i.fas.fa-circle-check
                | Diseño de productos o empaques.
          .col-lg-3.mb-3
            img(src='@/assets/curso/temas/Tema2/img14.png', alt='')

      .cajon.color-primario.p-4.mb-4
        p Un ejemplo de ello es una marca de bebidas no alcohólicas que utiliza de manera constante un color corporativo, una tipografía reconocible y un estilo visual coherente en sus empaques, piezas publicitarias y canales digitales. Esta consistencia permite fortalecer la recordación, transmitir personalidad de marca y facilitar que el consumidor identifique la empresa en diferentes contextos comerciales.













</template>

<script>
export default {
  name: 'Tema2',
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
