<template>
  <div>
    <div class="row">
      <div class="col-12 d-flex justify-content-end">
        <div>
          <RouterLink to="/emitir" class="btn btn-success">
            <i class="bi bi-plus"></i> Emitir novo bilhete
          </RouterLink>
        </div>
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
import DataTable from "../components/UI/DataTable.vue";
const router = useRouter(); // Inicialize o roteador aqui
const title = "Bilhetes emitidos";

const columns = [
  { key: "id", label: "Id", style: { width: "100px" } },
  { key: "cpf", label: "Cpf", style: { width: "100px" } },
  { key: "segurado", label: "Segurado", style: { width: "150px" } },
  { key: "plano", label: "Plano", style: { width: "100px" } },
  {
    key: "vigencia_inicio",
    label: "Dt. Início",
    style: { width: "100px" },
  },
  { key: "vigencia_fim", label: "Dt. Fim", style: { width: "100px" } },
  { key: "folheto", label: "Folheto", style: { width: "100px" } },
  { key: "status", label: "Status Pagto", style: { width: "100px" } },
  { key: "actions", label: "Ações", style: { width: "100px" } },
];

const tableData = [
  {
    id: 22929,
    cpf: "123.456.789.77",
    segurado: "VIRGINIA MELLO SETRA",
    plano: "MUNDO 3",
    vigencia_inicio: "15/08/2023",
    vigencia_fim: "31/08/2023",
    folheto: "407,20",
    status: "Confirmado",
  },
  {
    id: 22928,
    cpf: "123.456.789.77",
    segurado: "CAMILA RIBEIRO DE MELLO SETRA",
    plano: "Brasil [PLUS]",
    vigencia_inicio: "10/09/2023",
    vigencia_fim: "20/10/2023",
    folheto: "307,20",
    status: "Pendente",
  },
  {
    id: 22927,
    cpf: "123.456.789.77",
    segurado: "ADRIEN FOLCO FILHO",
    plano: "MUNDO 3",
    vigencia_inicio: "05/09/2023",
    vigencia_fim: "28/09/2023",
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
