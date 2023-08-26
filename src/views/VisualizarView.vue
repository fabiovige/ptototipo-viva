<template>
  <div>
    <div class="row">
      <div class="col-12 d-flex justify-content-between">
        <div>
          <h4>Bilhete ID: #98765</h4>
          <span class="small text-muted">Emitido: 15/08/2023 13:45</span>
        </div>
        <div>
          <button class="btn btn-danger">
            <i class="bi bi-x-circle"></i> Cancelar bilhete
          </button>
        </div>
      </div>
    </div>

    <div class="card my-3">
      <div class="card-body">
        <InformacoesBilhete />

        <InformacoesPagamento />

        <InformacoesSegurado />
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 d-flex justify-content-between">
        <div>
          <RouterLink to="/bilhetes/1" class="btn btn-info">
            <i class="bi bi-arrow-left-circle"></i> Voltar
          </RouterLink>
        </div>
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
