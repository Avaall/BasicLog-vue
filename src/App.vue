<template>
  <CpHeader />
  <router-view class="view py-5" />
  <CpFooter />
  <div class="modal fade" id="contactoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content rounded-0">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Contacto</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>info@oye.com</p>
          <p class="text-primary">+1 123 123123123</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CpHeader from './components/CpHeader.vue'
import CpFooter from './components/CpFooter.vue'

export default {
  components: {
    CpHeader,
    CpFooter
  }
}
</script>
