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
  {
    key: "razao_social",
    label: "Razão Social",
    style: { width: "150px" },
    class: "",
  },
  { key: "nome", label: "Nome" },
  { key: "email", label: "E-mail" },
  { key: "telefone", label: "Telefone" },
  { key: "actions", label: "Ações" },
];
const tableData = [
  {
    id: 1,
    razao_social: "Empresa XYZ Ltda",
    nome: "João da Silva",
    email: "15/08/joao@gmail.com",
    telefone: "(11) 99999-9999",
  },
  {
    id: 2,
    razao_social: "Empresa Maria XYZ Ltda",
    nome: "Maria da Silva",
    email: "maria@gmail.com",
    telefone: "(11) 99999-9992",
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
