<template>
    <header>
        <header class="d-md-flex align-items-center px-3 d-none">
            <div id="espacio-1">
              <img src="../assets/img/logo.png" alt="" class="img-fluid">
              <span class="text-primary">OYE</span>
            </div>
            <nav id="nav-1">
              <router-link class="link-nav-1 px-4" to="/">Inicio</router-link>
              <router-link class="link-nav-1 px-4" to="/Canciones">Canciones</router-link>
            </nav>
            <nav id="nav-2">
              <button type="button" class="btn btn-primary rounded-0" data-bs-toggle="modal" data-bs-target="#contactoModal">
                Contacto
              </button>
              <router-link class="btn btn-primary btn-color rounded-0 mx-3" to="/LogIn">Inicio de Sesión</router-link>
              <router-link class="btn btn-primary btn-color rounded-0" to="/Registro">Registro</router-link>
            </nav>
          </header>
          <header class="d-flex d-md-none">
            <div id="espacio-1">
              <img src="../assets/img/logo.png" alt="" class="img-fluid mx-2">
              <span class="text-primary">OYE</span>
            </div>
            <div class="dropdown">
              <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-list"></i>
              </a>
              <ul class="dropdown-menu p-2">
                <div class="d-flex flex-column">
                  <router-link class="linki" to="/">Inicio</router-link>
                  <router-link class="linki" to="/Canciones">Canciones</router-link>
                  <button type="button" class="btn btn-primary rounded-0" data-bs-toggle="modal" data-bs-target="#contactoModal">
                    Contacto
                  </button>
                  <router-link class="btn btn-primary btn-color rounded-0" to="/LogIn">Inicio de Sesión</router-link>
                  <router-link class="btn btn-primary btn-color rounded-0" to="/Registro">Registro</router-link>
                </div>
              </ul>
            </div>
          </header>
    </header>
</template>
