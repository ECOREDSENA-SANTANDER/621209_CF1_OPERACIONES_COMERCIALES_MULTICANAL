<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Gestión estratégica del producto
    
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
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
      
      PasosA.color-acento-contenido.mb-5(tipo="n")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Producto
            p Representa la base de la oferta comercial de una organización y permite generar valor en el mercado mediante atributos, características, referencias y tipos.
          .col-md-3
            figure
              img(src='@/assets/curso/temas/Tema1/pas1.svg', alt='')


        .row
          .col-md-3.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/Tema1/pas2.svg', alt='')

          .col-md-8
            h4.text-izq Mezcla de producto
            p.text-izq Permite estructurar la oferta comercial mediante líneas, categorías, portafolio y ciclo de vida, asegurando coherencia entre productos y segmentos de mercado.        

        .row
          .col-md-8.mb-4.mb-md-0
            h4 Servicios
            p Complementan la oferta comercial mediante experiencias, soluciones, cultura de servicio y momentos de verdad que influyen en la percepción del cliente.      
          .col-md-3
            figure
              img(src='@/assets/curso/temas/Tema1/pas3.svg', alt='')
      
      separador
      #t_1_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
        h2 1.1  Producto: concepto, atributos, clasificación, características, referencias y tipos
        
      .row.justify-content-center.mb-5
        .col-lg-12
          img(src='@/assets/curso/temas/Tema1/img02.png', alt='')

      p El producto representa la base de la oferta comercial de una organización y constituye el principal medio para generar valor en el mercado. Su gestión estratégica permite responder a necesidades específicas del consumidor y construir diferenciación en entornos competitivos.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
            h3.bg1.py-3.w-card-text.text-white Concepto

      .cajon.color-primario.p-4.mb-4
        p El producto se define como un conjunto de atributos tangibles e intangibles que una empresa ofrece al mercado con el propósito de satisfacer necesidades o deseos. Desde una perspectiva técnica, no se limita a un bien físico, sino que incluye beneficios funcionales, emocionales y simbólicos que configuran la experiencia del consumidor.
        p En el contexto empresarial, el producto se diseña según el segmento de mercado y la propuesta de valor, considerando atributos como calidad, diseño y funcionalidad. Por ejemplo, una empresa de muebles para el hogar puede desarrollar productos modulares, funcionales y de diferentes tamaños, orientados a consumidores que buscan soluciones prácticas para organizar sus espacios.

      .titulo-secundario.mb-4
        span.decorador
        h4.mb-0 Ejemplo aplicado: categorías de producto en una tienda virtual

      .bloque-texto-g.bloque-texto-g--inverso.bg2.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/Tema1/img03.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 En una tienda virtual de muebles y artículos para el hogar, el producto no se presenta como un elemento aislado, sino como parte de una categoría que facilita la búsqueda, comparación y decisión de compra. Por ejemplo, una empresa puede organizar su oferta en categorías como muebles para sala, muebles para dormitorio, mesas, sillas, almacenamiento, decoración y accesorios para oficina. Esta organización permite que el consumidor encuentre con mayor facilidad lo que necesita y compare opciones según diseño, funcionalidad, tamaño, precio o materiales.
            br
      .titulo-secundario.mb-4
        span.decorador
        h4.mb-0 Organización del producto en una tienda virtual

      .row.justify-content-center.mb-3
        .col-lg-3
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
      
      figure.mb-4
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

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-9
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
        .col-lg-3
          img(src="@/assets/curso/temas/Tema1/img05.png")

      p Un caso representativo es el de los juegos de construcción, donde el producto trasciende el objeto físico e incorpora creatividad, aprendizaje y experiencia lúdica.

      .titulo-secundario.mb-4
        span.decorador
        h4.mb-0 Atributos que diferencian un producto

      .row.mb-4
        .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/Tema1/1.svg', alt='')
            h4.text-center Atributo funcional
            p.text-small.mb-0 Está relacionado con el desempeño, la utilidad y la solución que ofrece el producto frente a una necesidad específica.

        .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/Tema1/2.svg', alt='')
            h4.text-center Atributo tangible
            p.text-small.mb-0 Corresponde a las características físicas que pueden percibirse, como diseño, materiales, tamaño o acabado.

        .col-sm-6.col-lg-3.mb-4.mb-sm-0.d-flex
          .tarjeta--boton.color-primario.text-white--hover.p-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/Tema1/3.svg', alt='')
            h4.text-center Atributo intangible
            p.text-small.mb-0 Se relaciona con el valor percibido de la marca, su reputación o el prestigio que el consumidor asocia con el producto.

        .col-sm-6.col-lg-3.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/Tema1/4.svg', alt='')
            h4.text-center Atributo emocional
            p.text-small.mb-0 Incluye las sensaciones, experiencias o conexiones que el producto genera en el consumidor.
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
            h3.bg1.py-3.w-card-text.text-white Clasificación






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
