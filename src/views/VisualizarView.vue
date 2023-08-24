<template>
  <div>
    <div class="row mt-3">
      <div class="col-12 d-flex align-content-center justify-content-between">
        <div>
          <h4>Bilhete ID: #98765</h4>
        </div>
      </div>
    </div>

    <InformacoesBilhete />

    <InformacoesPagamento />

    <InformacoesSegurado />

    <div class="row">
      <div class="col-md-12 d-flex justify-content-between">
        <div>
          <RouterLink to="/bilhetes/1" class="btn btn-sm btn-secondary">
            <i class="bi bi-arrow-left-circle"></i> Voltar
          </RouterLink>
        </div>

        <button class="btn btn-sm btn-danger">
          <i class="bi bi-x-circle"></i> Cancelar bilhete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import InformacoesBilhete from "../components/InformacoesBilhete.vue";
import InformacoesPagamento from "../components/InformacoesPagamento.vue";
import InformacoesSegurado from "../components/InformacoesSegurado.vue";
</script>

<style scoped></style>
