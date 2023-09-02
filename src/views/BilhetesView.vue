<template>
  <div>
    <EmissorComponent />

    <div class="row">
      <div
        class="col-12 d-flex justify-content-md-end justify-content-start mb-3 mb-md-0"
      >
        <RouterLink to="/emitir" class="btn btn-success">
          <i class="bi bi-plus"></i> Emitir novo bilhete
        </RouterLink>
      </div>
    </div>

    <data-table
      :title="title"
      :columns="columns"
      :data="mappedTableData"
      :actions="actions"
    ></data-table>

    <div class="row mt-3">
      <div class="col-12 d-flex justify-content-between">
        <div>
          <RouterLink to="/emissores" class="btn btn-info">
            <i class="bi bi-arrow-left-circle"></i> Voltar
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import EmissorComponent from "../components/EmissorComponent.vue";
import DataTable from "../components/UI/DataTable.vue";

const router = useRouter(); // Inicialize o roteador aqui
const title = "Bilhetes";

const columns = [
  { key: "id", label: "Id", style: { width: "50px" } },
  { key: "emissor", label: "Usuário emissor", style: { width: "150px" } },
  { key: "cpf", label: "Cpf", style: { width: "100px" } },
  { key: "segurado", label: "Segurado", style: { width: "150px" } },
  { key: "plano", label: "Plano", style: { width: "100px" } },
  { key: "folheto", label: "Folheto", style: { width: "100px" } },
  { key: "status", label: "Status Pagto", style: { width: "100px" } },
  { key: "actions", label: "Ações", style: { width: "100px" } },
];

const tableData = [
  {
    id: 22929,
    emissor: "Paulo Silva",
    cpf: "123.456.789.77",
    segurado: "VIRGINIA MELLO SETRA",
    plano: "MUNDO 3",
    folheto: "407,20",
    status: "Confirmado",
  },
  {
    id: 22928,
    emissor: "Paulo Silva",
    cpf: "123.456.789.77",
    segurado: "CAMILA RIBEIRO DE MELLO SETRA",
    plano: "Brasil [PLUS]",
    folheto: "307,20",
    status: "Pendente",
  },
  {
    id: 22927,
    emissor: "Paulo Silva",
    cpf: "123.456.789.77",
    segurado: "ADRIEN FOLCO FILHO",
    plano: "MUNDO 3",
    folheto: "123,20",
    status: "Confirmado",
  },
];

const actions = [
  {
    key: "visualizar",
    label: "Visualizar",
    icon: "bi-eye",
    handler: view,
    class: "btn btn-info",
    route: status.includes("Confirmado") ? "visualizar" : "visualizar/pendente", // A rota pode ser determinada aqui também
  },
];

function view(item) {
  console.log(item);
  router.push(item.route);
}

const tableDataRef = ref(tableData);
const mappedTableData = computed(() =>
  tableDataRef.value.map((item) => ({
    ...item,
    route: item.status.includes("Confirmado")
      ? "visualizar"
      : "visualizar/pendente",
  }))
);
</script>

<style scoped></style>
