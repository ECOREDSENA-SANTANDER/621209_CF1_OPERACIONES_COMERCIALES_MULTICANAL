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
