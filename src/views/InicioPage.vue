<template>
  <div>
    <div class="container">
      <div id="tarjeta" class="py-5 d-flex flex-column flex-md-row">
        <div class="px-5 mb-3 mb-md-0">
          <h1>Canciones gratis para la comunidad!</h1>
          <p>Con este sitio podrás escuchar audios de manera libre...</p>
          <router-link class="btn btn-primary font" to="/Canciones">Canciones</router-link>
        </div>
        <div class="mx-0 mx-md-5 px-5 px-md-0">
          <div class="carousel slide w-100" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active car-1" data-bs-interval="3000">
              </div>
              <div class="carousel-item car-2" data-bs-interval="3000">
              </div>
              <div class="carousel-item car-3" data-bs-interval="3000">
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="border border-seccondary border-2 mt-5 mb-3">
      <div id="text-top" class="text-center">
        Top 3
      </div>
      <hr class="border border-seccondary border-2 mt-1">
      <div class="inicio-canciones">
        <div class="texto-normal d-none d-md-block">Nombre</div>
        <div class="texto-normal">Canción</div>
      </div>
      <hr class="border border-seccondary border-2 mt-1">
      <div v-for="repro of canciones.canciones" :key="repro.id">
        <div v-if="repro.reproducciones == valorCancion[0]">
          <div class="inicio-canciones">
            <div class="text-primary texto d-none d-md-block">{{ repro.nombre }}</div>
            <div>
              <div v-if="repro.ruta === 'uno.mp3'">
                <audio controls class="audio mt-3">
                  <source :src="cancion1" type="audio/mpeg">
                </audio>
              </div>
              <div v-if="repro.ruta === 'dos.mp3'">
                <audio controls class="audio mt-3">
                  <source :src="cancion2" type="audio/mpeg">
                </audio>
              </div>
              <div v-if="repro.ruta === 'tres.mp3'">
                <audio controls class="audio mt-3">
                  <source :src="cancion3" type="audio/mpeg">
                </audio>
              </div>
              <div v-if="repro.ruta === 'cuatro.mp3'">
                <audio controls class="audio mt-3">
                  <source :src="cancion4" type="audio/mpeg">
                </audio>
              </div>
              <div v-if="repro.ruta === 'cinco.mp3'">
                <audio controls class="audio mt-3">
                  <source :src="cancion5" type="audio/mpeg">
                </audio>
              </div>
              <div v-if="repro.ruta === 'seis.mp3'">
                <audio controls class="audio mt-3">
                  <source :src="cancion6" type="audio/mpeg">
                </audio>
              </div>
              <div v-if="repro.ruta === 'siete.mp3'">
                <audio controls class="audio mt-3">
                  <source :src="cancion7" type="audio/mpeg">
                </audio>
              </div>
              <div v-if="repro.ruta === 'ocho.mp3'">
                <audio controls class="audio mt-3">
                  <source :src="cancion8" type="audio/mpeg">
                </audio>
              </div>
              <div v-if="repro.ruta === 'nueve.mp3'">
                <audio controls class="audio mt-3">
                  <source :src="cancion9" type="audio/mpeg">
                </audio>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-for="repro of canciones.canciones" :key="repro.id">
        <div v-if="repro.reproducciones == valorCancion[1]">
          <div class="inicio-canciones">
            <div class="text-primary texto d-none d-md-block">{{ repro.nombre }}</div>
            <div>
              <div v-if="repro.ruta === 'uno.mp3'">
                <audio controls class="audio mt-3">
                  <source :src="cancion1" type="audio/mpeg">
                </audio>
              </div>
              <div v-if="repro.ruta === 'dos.mp3'">
                <audio controls class="audio mt-3">
                  <source :src="cancion2" type="audio/mpeg">
                </audio>
              </div>
              <div v-if="repro.ruta === 'tres.mp3'">
                <audio controls class="audio mt-3">
                  <source :src="cancion3" type="audio/mpeg">
                </audio>
              </div>
              <div v-if="repro.ruta === 'cuatro.mp3'">
                <audio controls class="audio mt-3">
                  <source :src="cancion4" type="audio/mpeg">
                </audio>
              </div>
              <div v-if="repro.ruta === 'cinco.mp3'">
                <audio controls class="audio mt-3">
                  <source :src="cancion5" type="audio/mpeg">
                </audio>
              </div>
              <div v-if="repro.ruta === 'seis.mp3'">
                <audio controls class="audio mt-3">
                  <source :src="cancion6" type="audio/mpeg">
                </audio>
              </div>
              <div v-if="repro.ruta === 'siete.mp3'">
                <audio controls class="audio mt-3">
                  <source :src="cancion7" type="audio/mpeg">
                </audio>
              </div>
              <div v-if="repro.ruta === 'ocho.mp3'">
                <audio controls class="audio mt-3">
                  <source :src="cancion8" type="audio/mpeg">
                </audio>
              </div>
              <div v-if="repro.ruta === 'nueve.mp3'">
                <audio controls class="audio mt-3">
                  <source :src="cancion9" type="audio/mpeg">
                </audio>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-for="repro of canciones.canciones" :key="repro.id">
        <div v-if="repro.reproducciones == valorCancion[2]">
          <div class="inicio-canciones">
            <div class="text-primary texto d-none d-md-block">{{ repro.nombre }}</div>
            <div>
              <div v-if="repro.ruta === 'uno.mp3'">
                <audio controls class="audio mt-3">
                  <source :src="cancion1" type="audio/mpeg">
                </audio>
              </div>
              <div v-if="repro.ruta === 'dos.mp3'">
                <audio controls class="audio mt-3">
                  <source :src="cancion2" type="audio/mpeg">
                </audio>
              </div>
              <div v-if="repro.ruta === 'tres.mp3'">
                <audio controls class="audio mt-3">
                  <source :src="cancion3" type="audio/mpeg">
                </audio>
              </div>
              <div v-if="repro.ruta === 'cuatro.mp3'">
                <audio controls class="audio mt-3">
                  <source :src="cancion4" type="audio/mpeg">
                </audio>
              </div>
              <div v-if="repro.ruta === 'cinco.mp3'">
                <audio controls class="audio mt-3">
                  <source :src="cancion5" type="audio/mpeg">
                </audio>
              </div>
              <div v-if="repro.ruta === 'seis.mp3'">
                <audio controls class="audio mt-3">
                  <source :src="cancion6" type="audio/mpeg">
                </audio>
              </div>
              <div v-if="repro.ruta === 'siete.mp3'">
                <audio controls class="audio mt-3">
                  <source :src="cancion7" type="audio/mpeg">
                </audio>
              </div>
              <div v-if="repro.ruta === 'ocho.mp3'">
                <audio controls class="audio mt-3">
                  <source :src="cancion8" type="audio/mpeg">
                </audio>
              </div>
              <div v-if="repro.ruta === 'nueve.mp3'">
                <audio controls class="audio mt-3">
                  <source :src="cancion9" type="audio/mpeg">
                </audio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import datosCanciones from '../assets/datos.json'

export default {
  data () {
    return {
      canciones: datosCanciones,
      cancionRepro: 0,
      valorCancion: [],
      cancion1: '',
      cancion2: '',
      cancion3: '',
      cancion4: '',
      cancion5: '',
      cancion6: '',
      cancion7: '',
      cancion8: '',
      cancion9: ''
    }
  },
  mounted () {
    this.agregar()
    this.cancion1 = require('@/assets/music/uno.mp3')
    this.cancion2 = require('@/assets/music/dos.mp3')
    this.cancion3 = require('@/assets/music/tres.mp3')
    this.cancion4 = require('@/assets/music/cuatro.mp3')
    this.cancion5 = require('@/assets/music/cinco.mp3')
    this.cancion6 = require('@/assets/music/seis.mp3')
    this.cancion7 = require('@/assets/music/siete.mp3')
    this.cancion8 = require('@/assets/music/ocho.mp3')
    this.cancion9 = require('@/assets/music/nueve.mp3')
  },
  methods: {
    agregar () {
      for (this.cancionRepro of this.canciones.canciones) {
        this.valorCancion.push(this.cancionRepro.reproducciones)
        this.valorCancion.sort(function (a, b) { return b - a })
      }
    }
  }
}
</script>
