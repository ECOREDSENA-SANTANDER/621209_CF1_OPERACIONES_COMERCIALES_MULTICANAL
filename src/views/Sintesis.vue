<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo Gestión de producto y marca desarrolla los fundamentos del producto y su relación con la mezcla de producto como base para la gestión comercial. Además, integra el análisis de los servicios como parte de la oferta de valor, la marca como elemento diferenciador en el mercado, el #[em branding] como proceso de construcción de identidad y el posicionamiento como estrategia para ocupar un lugar claro en la mente del consumidor.
    p Asimismo, aborda elementos técnicos para la identificación, presentación y protección de los productos, como los códigos de barras, la tecnología #[em RFID], el empaque, el envase y el embalaje. También incorpora el #[em marketing green] o mercadeo verde como enfoque sostenible, la normativa comercial relacionada con la propiedad intelectual, las patentes y las invenciones, así como estrategias digitales como el #[em marketing digital], el #[em social media marketing] y el #[em e-business], orientadas a fortalecer la gestión de productos y marcas en entornos multicanal.
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa mental titulado “Gestión de producto y marca”. Del título principal se desprenden cinco bloques temáticos: producto y oferta, marca y posicionamiento, identificación y presentación, responsabilidad y normativa, y estrategias digitales. El bloque producto y oferta incluye producto, mezcla de producto, servicios, portafolio y ciclo de vida, y explica que organiza lo que se ofrece al mercado. El bloque marca y posicionamiento incluye marca, símbolos, emblemas, etiqueta, branding y posicionamiento, y señala que diferencia la marca frente al consumidor. El bloque identificación y presentación incluye código de barras, RFID, empaque, envase y embalaje, y explica que permite reconocer, proteger y entregar el producto. El bloque responsabilidad y normativa incluye marketing green, normativa comercial, propiedad intelectual, patentes e invenciones, y orienta una gestión legal y sostenible. El bloque estrategias digitales incluye marketing digital, social media marketing, métricas y e-business, y destaca que fortalece la promoción en canales digitales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
