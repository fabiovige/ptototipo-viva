<template>
  <div ref="printContentRef">
    <div>
      <div class="alert alert-success">
        <div class="d-flex justify-content-center my-3">
          <h4 class="ms-2">Bilhete processado com sucesso.</h4>
        </div>
      </div>

      <InformacoesBilhete />

      <InformacoesPagamentoSucesso />

      <InformacoesSeguradoSucesso />
    </div>

    <div class="d-flex">
      <RouterLink to="/bilhetes/1" class="btn btn-info">
        <i class="bi bi-house"></i> Voltar ao Início
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import InformacoesBilhete from "../components/InformacoesBilhete.vue";
import InformacoesPagamentoSucesso from "../components/InformacoesPagamentoSucesso.vue";
import InformacoesSeguradoSucesso from "../components/InformacoesSeguradoSucesso.vue";

const printContentRef = ref(null);
</script>

<style scoped>
@media print {
  .page-break {
    page-break-after: always;
  }
}
</style>
