<template>
    <div class="d-flex justify-content-center">
        <div id="contenedor-login">
            <h1>Inicio de Sesión</h1>
            <hr class="border border-seccondary border-2 mt-1">
            <form @submit.prevent="submitForm">
                <div class="mb-3">
                    <label for="correo" class="form-label">Correo electrónico</label>
                    <input type="email" placeholder="correo electrónico" :class="{ 'form-control': true, 'is-valid': emailCorrecto, 'is-invalid': emailError }" v-model="email" @input="validateEmail" id="correo" required>
                    <span v-if="emailError" class="invalid-feedback">{{ emailError }}</span>
                    <span v-if="emailCorrecto" class="valid-feedback">{{ emailCorrecto }}</span>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Contraseña</label>
                    <input minlength="8" type="password" placeholder="contraseña" :class="{ 'form-control': true, 'is-valid': passwordCorrecto, 'is-invalid': passwordError }" v-model="password" @input="passwordValidate" id="password" required>
                    <span v-if="passwordError" class="invalid-feedback">{{ passwordError }}</span>
                    <span v-if="passwordCorrecto" class="valid-feedback">{{ passwordCorrecto }}</span>
                </div>
                <button type="submit" class="btn btn-primary">Iniciar sesión</button>
            </form>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import router from '../router'

export default defineComponent({
  setup () {
    // Define el estado de los campos de entrada y errores.
    const email = ref('')
    const emailError = ref('')
    const emailCorrecto = ref('')
    const password = ref('')
    const passwordError = ref('')
    const passwordCorrecto = ref('')

    // Define la función de validación de correo electrónico.
    const validateEmail = () => {
      if (!email.value) {
        emailError.value = 'El correo electrónico es obligatorio'
        emailCorrecto.value = ''
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        emailError.value = 'El correo electrónico no es válido'
        emailCorrecto.value = ''
      } else {
        emailError.value = ''
        emailCorrecto.value = 'Correo válido'
      }
    }
    const passwordValidate = () => {
      if (!password.value) {
        passwordError.value = 'La contraseña es obligatoría'
        passwordCorrecto.value = ''
      } else if (password.value.length <= 8) {
        passwordError.value = 'La contraseña debe tener minimo 8 caracteres'
        passwordCorrecto.value = ''
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password.value)) {
        passwordError.value = 'La contraseña debe contar con un caracter especial'
        passwordCorrecto.value = ''
      } else {
        passwordError.value = ''
        passwordCorrecto.value = 'Contraseña válida'
      }
    }
    const submitForm = () => {
      window.alert('Inicio de sesion exitoso')
      router.push('/')
    }

    // Retorna los datos y funciones necesarios en el template.
    return {
      email,
      password,
      emailError,
      emailCorrecto,
      passwordCorrecto,
      passwordError,
      validateEmail,
      passwordValidate,
      submitForm
    }
  }
})
</script>
