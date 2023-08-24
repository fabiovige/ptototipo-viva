<template>
  <NavBar />

  <div class="container main-content mt-3">
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
        <li class="breadcrumb-item active" aria-current="page">Bilhetes</li>
      </ol>
    </nav>
  </div>
  <div class="container">
    <router-view />
  </div>

  <FooterComponent />
</template>

<style scoped>
.main-content {
  padding-top: 60px; /* Ajuste este valor para coincidir com a altura da sua navbar */
}
</style>

<script setup>
import NavBar from "./components/UI/NavBar.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>
