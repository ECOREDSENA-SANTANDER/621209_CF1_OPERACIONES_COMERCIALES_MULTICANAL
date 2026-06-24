<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p El componente formativo Gestión de producto y marca aborda la importancia del producto como eje central de la oferta comercial y como punto de partida para generar valor en el mercado. A través de este componente, se reconoce cómo los productos, servicios, marcas y estrategias de posicionamiento permiten responder a las necesidades de diferentes segmentos de mercado. Además, se integran conceptos relacionados con mezcla de producto, atributos, clasificación, #[em branding], empaque, envase, embalaje y elementos de identificación comercial, necesarios para comprender cómo se estructura una oferta competitiva.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        img(src='@/assets/curso/portada/intro.png', alt='')
      .col-lg-8
        p Este componente es importante porque permite analizar la forma en que las organizaciones diseñan, presentan, diferencian y protegen sus productos en contextos comerciales cada vez más dinámicos. También facilita la comprensión de aspectos normativos, de propiedad intelectual y de sostenibilidad, los cuales influyen en la gestión responsable de la marca y en la toma de decisiones comerciales. De esta manera, el aprendiz fortalece su capacidad para interpretar el mercado, reconocer oportunidades de diferenciación y proponer acciones acordes con las características del consumidor.
        .cajon.color-primario.p-4
          p El desarrollo temático se abordará de manera progresiva, iniciando con los fundamentos del producto, la mezcla de producto y los servicios. Luego, se profundizará en la marca, el #[em branding] y el posicionamiento, para continuar con códigos de barras, etiqueta #[em RFID], empaque, envase, embalaje, #[em marketing green] y normativa comercial. Finalmente, se integrarán herramientas y estrategias de #[em marketing digital], #[em social media marketing] y #[em e-business], orientadas a fortalecer la promoción, la comunicación y la gestión comercial en entornos multicanal.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
