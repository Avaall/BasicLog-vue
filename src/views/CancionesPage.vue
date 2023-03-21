<template>
    <div>
        <div class="container">
            <div>
                <h1>Canciones</h1>
                <input type="text" placeholder="buscar.." class="form-control" id="buscador" v-model="buscar">
            </div>
            <div v-if="buscar !== ''" class="mt-3 d-block">
                <div v-for="cancion of canciones.canciones" :key="cancion.id" class="cartas mb-3">
                    <div v-if="cancion.nombre.trim().toLowerCase().indexOf(buscar.toLowerCase()) !== -1">
                        <div class="card text-center">
                            <div class="card-header">
                                <div v-if="cancion.icono === 1">
                                    <img :src="imagen1" alt="" class="img-canciones">
                                </div>
                                <div v-if="cancion.icono === 2">
                                    <img :src="imagen2" alt="" class="img-canciones">
                                </div>
                                <div v-if="cancion.icono === 3">
                                    <img :src="imagen3" alt="" class="img-canciones">
                                </div>
                                <div v-if="cancion.icono === 4">
                                    <img :src="imagen4" alt="" class="img-canciones">
                                </div>
                            </div>
                            <div class="card-body">
                                <strong>{{ cancion.nombre }}</strong>
                                <div v-if="cancion.ruta === 'uno.mp3'">
                                    <audio controls class="audio mt-3">
                                        <source :src="cancion1" type="audio/mpeg">
                                    </audio>
                                </div>
                                <div v-if="cancion.ruta === 'dos.mp3'">
                                    <audio controls class="audio mt-3">
                                        <source :src="cancion2" type="audio/mpeg">
                                    </audio>
                                </div>
                                <div v-if="cancion.ruta === 'tres.mp3'">
                                    <audio controls class="audio mt-3">
                                        <source :src="cancion3" type="audio/mpeg">
                                    </audio>
                                </div>
                                <div v-if="cancion.ruta === 'cuatro.mp3'">
                                    <audio controls class="audio mt-3">
                                        <source :src="cancion4" type="audio/mpeg">
                                    </audio>
                                </div>
                                <div v-if="cancion.ruta === 'cinco.mp3'">
                                    <audio controls class="audio mt-3">
                                        <source :src="cancion5" type="audio/mpeg">
                                    </audio>
                                </div>
                                <div v-if="cancion.ruta === 'seis.mp3'">
                                    <audio controls class="audio mt-3">
                                        <source :src="cancion6" type="audio/mpeg">
                                    </audio>
                                </div>
                                <div v-if="cancion.ruta === 'siete.mp3'">
                                    <audio controls class="audio mt-3">
                                        <source :src="cancion7" type="audio/mpeg">
                                    </audio>
                                </div>
                                <div v-if="cancion.ruta === 'ocho.mp3'">
                                    <audio controls class="audio mt-3">
                                        <source :src="cancion8" type="audio/mpeg">
                                    </audio>
                                </div>
                                <div v-if="cancion.ruta === 'nueve.mp3'">
                                    <audio controls class="audio mt-3">
                                        <source :src="cancion9" type="audio/mpeg">
                                    </audio>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="mt-3 d-flex flex-row flex-wrap justify-content-between">
                <div class="cartas mb-3" v-for="cancion of canciones.canciones" :key="cancion.id">
                    <div class="card text-center">
                        <div class="card-header">
                            <div v-if="cancion.icono === 1">
                                <img :src="imagen1" alt="" class="img-canciones">
                            </div>
                            <div v-if="cancion.icono === 2">
                                <img :src="imagen2" alt="" class="img-canciones">
                            </div>
                            <div v-if="cancion.icono === 3">
                                <img :src="imagen3" alt="" class="img-canciones">
                            </div>
                            <div v-if="cancion.icono === 4">
                                <img :src="imagen4" alt="" class="img-canciones">
                            </div>
                        </div>
                        <div class="card-body">
                            <strong>{{ cancion.nombre }}</strong>
                            <div v-if="cancion.ruta === 'uno.mp3'">
                                <audio controls class="audio mt-3">
                                    <source :src="cancion1" type="audio/mpeg">
                                </audio>
                            </div>
                            <div v-if="cancion.ruta === 'dos.mp3'">
                                <audio controls class="audio mt-3">
                                    <source :src="cancion2" type="audio/mpeg">
                                </audio>
                            </div>
                            <div v-if="cancion.ruta === 'tres.mp3'">
                                <audio controls class="audio mt-3">
                                    <source :src="cancion3" type="audio/mpeg">
                                </audio>
                            </div>
                            <div v-if="cancion.ruta === 'cuatro.mp3'">
                                <audio controls class="audio mt-3">
                                    <source :src="cancion4" type="audio/mpeg">
                                </audio>
                            </div>
                            <div v-if="cancion.ruta === 'cinco.mp3'">
                                <audio controls class="audio mt-3">
                                    <source :src="cancion5" type="audio/mpeg">
                                </audio>
                            </div>
                            <div v-if="cancion.ruta === 'seis.mp3'">
                                <audio controls class="audio mt-3">
                                    <source :src="cancion6" type="audio/mpeg">
                                </audio>
                            </div>
                            <div v-if="cancion.ruta === 'siete.mp3'">
                                <audio controls class="audio mt-3">
                                    <source :src="cancion7" type="audio/mpeg">
                                </audio>
                            </div>
                            <div v-if="cancion.ruta === 'ocho.mp3'">
                                <audio controls class="audio mt-3">
                                    <source :src="cancion8" type="audio/mpeg">
                                </audio>
                            </div>
                            <div v-if="cancion.ruta === 'nueve.mp3'">
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
import datos from '../assets/datos.json'

export default {
  data () {
    return {
      canciones: datos,
      imagen1: '',
      imagen2: '',
      imagen3: '',
      imagen4: '',
      cancion1: '',
      cancion2: '',
      cancion3: '',
      cancion4: '',
      cancion5: '',
      cancion6: '',
      cancion7: '',
      cancion8: '',
      cancion9: '',
      buscar: ''
    }
  },
  mounted () {
    this.imagen1 = require('@/assets/img/icon_1.svg')
    this.imagen2 = require('@/assets/img/icon_2.svg')
    this.imagen3 = require('@/assets/img/icon_3.svg')
    this.imagen4 = require('@/assets/img/icon_4.svg')
    this.cancion1 = require('@/assets/music/uno.mp3')
    this.cancion2 = require('@/assets/music/dos.mp3')
    this.cancion3 = require('@/assets/music/tres.mp3')
    this.cancion4 = require('@/assets/music/cuatro.mp3')
    this.cancion5 = require('@/assets/music/cinco.mp3')
    this.cancion6 = require('@/assets/music/seis.mp3')
    this.cancion7 = require('@/assets/music/siete.mp3')
    this.cancion8 = require('@/assets/music/ocho.mp3')
    this.cancion9 = require('@/assets/music/nueve.mp3')
  }
}
</script>
