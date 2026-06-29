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

    TabsA.color-acento-botones.mb-5
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

    .cajon.color-primario.p-4.mb-4
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

    .row.mb-4.justify-content-center
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
