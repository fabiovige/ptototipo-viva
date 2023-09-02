<template>
  <NavBar />
  <BreadCrumb />
  <div class="container">
    <router-view />
  </div>
  <FooterComponent />
</template>

<style scoped>
.main-content {
  padding-top: 110px; /* Ajuste este valor para coincidir com a altura da sua navbar */
}

@media (max-width: 768px) {
  body {
    padding-bottom: 80px; /* ou qualquer valor adequado para mobile */
  }
}
</style>

<script setup>
import FooterComponent from "./components/FooterComponent.vue";
import BreadCrumb from "./components/UI/BreadCrumb.vue";
import NavBar from "./components/UI/NavBar.vue";

import { ref, watchEffect } from "vue";

const footerHeight = ref(80);
watchEffect(() => {
  // Seu código para atualizar footerHeight com base na altura real do rodapé
  document.body.style.paddingBottom = `${footerHeight.value}px`;
});
</script>
