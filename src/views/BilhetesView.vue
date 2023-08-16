<template>
  <div>
    <EmissorComponent />

    <hr />

    <div class="row my-3">
      <div class="col-12 d-flex justify-content-between">
        <div>
          <RouterLink to="/emissores" class="btn btn-secondary mt-3">
            <i class="bi bi-arrow-left-circle"></i> Voltar
          </RouterLink>
        </div>
        <div>
          <RouterLink to="/emitir" class="btn btn-dark mt-3 ms-2">
            <i class="bi bi-plus"></i> Emitir novo bilhete
          </RouterLink>
        </div>
      </div>
    </div>

    <data-table
      :title="title"
      :columns="columns"
      :data="tableData"
      :actions="actions"
    ></data-table>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import EmissorComponent from "../components/EmissorComponent.vue";

import DataTable from "../components/UI/DataTable.vue";

const title = "Bilhetes emitidos";
const columns = [
  { key: "id", label: "Id", style: { width: "100px" } },
  { key: "segurado", label: "Segurado", style: { width: "150px" } },
  { key: "plano", label: "Plano", style: { width: "100px" } },
  {
    key: "vigencia_inicio",
    label: "Vigência início",
    style: { width: "100px" },
  },
  { key: "vigencia_fim", label: "Vigência fim", style: { width: "100px" } },
  { key: "folheto", label: "Folheto", style: { width: "100px" } },
  { key: "status", label: "Status", style: { width: "100px" } },
  { key: "actions", label: "Ações", style: { width: "100px" } },
];
const tableData = [
  {
    id: 22929,
    segurado: "VIRGINIA MELLO SETRA",
    plano: "MUNDO 3",
    vigencia_inicio: "15/08/2023",
    vigencia_fim: "31/08/2023",
    folheto: "407,20",
    status: "Pago",
  },
  {
    id: 22928,
    segurado: "CAMILA RIBEIRO DE MELLO SETRA",
    plano: "Brasil [PLUS]",
    vigencia_inicio: "10/09/2023",
    vigencia_fim: "20/10/2023",
    folheto: "307,20",
    status: "Não Pago",
  },
  {
    id: 22927,
    segurado: "ADRIEN FOLCO FILHO",
    plano: "MUNDO 3",
    vigencia_inicio: "05/09/2023",
    vigencia_fim: "28/09/2023",
    folheto: "123,20",
    status: "Pago",
  },
];

const actions = [
  {
    label: "Gerenciar",
    icon: "bi-gear",
    handler: manage,
    class: "btn-secondary",
    route: "bilhetes",
  },
  { label: "Visualizar", icon: "bi-eye", handler: view, class: "btn btn-info" },
  {
    label: "Voucher",
    icon: "bi-bookmark-star",
    handler: voucher,
    class: "btn-primary",
    route: "bilhetes",
  },
];

function manage() {
  /* ... */
  console.log("manage");
}
function view() {
  /* ... */
}
function voucher() {
  /* ... */
}
</script>

<style scoped></style>
