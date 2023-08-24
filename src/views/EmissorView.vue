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

const actions = [
  {
    label: "Visualizar",
    icon: "bi-eye",
    handler: manage,
    class: "btn-info",
    route: "bilhetes",
  },
  {
    label: "Bilhetes",
    icon: "bi-bookmark-star",
    handler: manageBilhetes,
    class: "btn-primary",
    route: "bilhetes",
  },
];

function manage() {
  /* ... */
  console.log("manage");
}
function manageBilhetes() {
  /* ... */
  console.log("manage");
}

// Generate content
const generateRandomEmail = (name) => `${name.split(" ").join(".")}@gmail.com`;

const generateRandomData = () => {
  const names = [
    "João da Silva",
    "Maria da Silva",
    "Pedro da Silva",
    "Lucas da Silva",
    "Ana da Silva",
    "Rafael da Silva",
    "Bruna da Silva",
    "Carlos da Silva",
    "Fernanda da Silva",
    "Luiza da Silva",
  ];
  const razaoSociais = [
    "Empresa XYZ Ltda",
    "Empresa ABC Ltda",
    "Empresa LMN Ltda",
  ];

  const tableData = [];

  for (let i = 1; i <= 10; i++) {
    const randomNameIndex = Math.floor(Math.random() * names.length);
    const randomRazaoSocialIndex = Math.floor(
      Math.random() * razaoSociais.length
    );
    const name = names[randomNameIndex];
    const razaoSocial = razaoSociais[randomRazaoSocialIndex];
    const email = generateRandomEmail(name);
    const telefone = `(11) 99999-${Math.floor(Math.random() * 9000) + 1000}`;

    tableData.push({
      id: i,
      razao_social: razaoSocial,
      nome: name,
      email: email,
      telefone: telefone,
    });
  }

  return tableData;
};

const tableData = generateRandomData();
</script>

<style scoped></style>
