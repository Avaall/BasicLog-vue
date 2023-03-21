<template>
    <div class="d-flex justify-content-center">
        <div id="contenedor-login">
            <h1>Registro</h1>
            <hr class="border border-seccondary border-2 mt-0">
            <form @submit.prevent="submitForm">
                <div class="mb-3">
                    <label for="correo" class="form-label">Correo electrónico *</label>
                    <input type="email" placeholder="correo electrónico" :class="{ 'form-control': true, 'is-valid': emailCorrecto, 'is-invalid': emailError }" v-model="email" @input="validateEmail" id="correo" required>
                    <span v-if="emailError" class="invalid-feedback">{{ emailError }}</span>
                    <span v-if="emailCorrecto" class="valid-feedback">{{ emailCorrecto }}</span>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Contraseña *</label>
                    <input minlength="8" type="password" placeholder="contraseña" :class="{ 'form-control': true, 'is-valid': passwordCorrecto, 'is-invalid': passwordError }" v-model="password" @input="passwordValidate" id="password" required>
                    <span v-if="passwordError" class="invalid-feedback">{{ passwordError }}</span>
                    <span v-if="passwordCorrecto" class="valid-feedback">{{ passwordCorrecto }}</span>
                </div>
                <div class="mb-3">
                    <label for="repetirPassword" class="form-label">Confirmación de contraseña *</label>
                    <input minlength="8" type="password" placeholder="Confirmación de contraseña" :class="{ 'form-control': true, 'is-valid': passwordRepetirCorrecto, 'is-invalid': passwordRepetirError }" v-model="passwordRepetir" @input="passwordRepetirValidate" id="repetirPassword" required>
                    <span v-if="passwordRepetirError" class="invalid-feedback">{{ passwordRepetirError }}</span>
                    <span v-if="passwordRepetirCorrecto" class="valid-feedback">{{ passwordRepetirCorrecto }}</span>
                </div>
                <div class="form-group">
                    <label for="select">Género musical favorito *</label>
                    <select :class="{ 'form-control': true, 'is-invalid': selectError }" id="select" v-model="selectText">
                        <option selected value="">Seleccione...</option>
                        <option value="rock">Rock</option>
                        <option value="balada">Balada</option>
                        <option value="salsa">Salsa</option>
                        <option value="otro">Otro</option>
                    </select>
                    <span v-if="selectError" class="invalid-feedback">{{ selectError }}</span>
                </div>
                <div class="mt-3">
                    <label class="form-label">Edad *</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" name="radiosEdad" type="radio" id="radio1" value="menor a 20" required>
                    <label class="form-check-label" for="radio1">
                        Menor a 20
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" name="radiosEdad" type="radio" id="radio2" value="20 a 40">
                    <label class="form-check-label" for="radio2">
                        20 a 40
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" name="radiosEdad" type="radio" id="radio3" value="mayor a 50">
                    <label class="form-check-label" for="radio3">
                        Mayor a 50
                    </label>
                </div>
                <div class="form-check my-3">
                    <input class="form-check-input" type="checkbox" id="checkTerminos" required>
                    <label class="form-check-label" for="checkTerminos">
                      Acepto los términos de uso *
                    </label>
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
    const email = ref('')
    const emailError = ref('')
    const emailCorrecto = ref('')

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

    const password = ref('')
    const passwordError = ref('')
    const passwordCorrecto = ref('')

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

    const passwordRepetir = ref('')
    const passwordRepetirError = ref('')
    const passwordRepetirCorrecto = ref('')

    const passwordRepetirValidate = () => {
      if (!passwordRepetir.value) {
        passwordRepetirError.value = 'Confirmar la contraseña es obligatorío'
        passwordRepetirCorrecto.value = ''
      } else if (passwordRepetir.value !== password.value) {
        passwordRepetirError.value = 'La contraña debe coincidir'
        passwordRepetirCorrecto.value = ''
      } else {
        passwordRepetirError.value = ''
        passwordRepetirCorrecto.value = 'Confirmación correcta de contraseña'
      }
    }

    const selectText = ref('')
    const selectError = ref('')

    const submitForm = () => {
      if (!selectText.value) {
        selectError.value = 'Debe seleccionar un género musical'
      } else if (!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        validateEmail()
      } else if (!password.value || password.value.length <= 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(password.value)) {
        passwordValidate()
      } else if (!passwordRepetir.value || passwordRepetir.value !== password.value) {
        passwordRepetirValidate()
      } else {
        window.alert('Registro exitoso')
        router.push('/LogIn')
      }
    }

    // Retorna los datos y funciones necesarios en el template.
    return {
      email,
      emailError,
      emailCorrecto,
      validateEmail,
      password,
      passwordError,
      passwordCorrecto,
      passwordValidate,
      passwordRepetir,
      passwordRepetirError,
      passwordRepetirCorrecto,
      passwordRepetirValidate,
      selectText,
      selectError,
      submitForm
    }
  }
})
</script>
