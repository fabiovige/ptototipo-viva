<template>
  <div>
    <data-table
      :title="title"
      :columns="columns"
      :data="tableData"
      :actions="actions"
    ></data-table>
  </div>
</template>

<script setup>
import DataTable from "../components/UI/DataTable.vue";

const title = "Emissores";
const columns = [
  { key: "razao_social", label: "Razão Social", style: { width: "150px" } },
  { key: "nome", label: "Nome", style: { width: "100px" } },
  { key: "email", label: "E-mail", style: { width: "100px" } },
  { key: "telefone", label: "Telefone", style: { width: "100px" } },
  { key: "actions", label: "Ações", style: { width: "100px" } },
];
const tableData = [
  {
    razao_social: "Empresa XYZ Ltda",
    nome: "João da Silva",
    email: "15/08/joao@gmail.com",
    telefone: "(11) 99999-9999",
  },
  {
    razao_social: "Empresa Maria XYZ Ltda",
    nome: "Maria da Silva",
    email: "maria@gmail.com",
    telefone: "(11) 99999-9992",
  },
  {
    razao_social: "Empresa Pedro XYZ Ltda",
    nome: "Pedro da Silva",
    email: "pedro@gmail.com",
    telefone: "(11) 99999-9993",
  },
];

const actions = [
  {
    label: "Gerenciar bilhetes",
    icon: "bi-gear",
    handler: manage,
    class: "btn-secondary",
    route: "bilhetes",
  },
  {
    label: "Visualizar",
    icon: "bi-eye",
    handler: view,
    class: "btn btn-info",
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
</script>

<style scoped></style>
