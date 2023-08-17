<template>
  <div>
    <h4 class="mt-3">{{ title }}</h4>

    <!-- filter -->
    <div class="input-group mb-2">
      <input
        type="text"
        class="form-control"
        placeholder="Pesquisar"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        v-model="filter"
      />
    </div>

    <div class="d-flex justify-content-between align-items-center">
      <div class="mb-2 text-muted">
        Total de registros: <strong>{{ allData.length }}</strong>
      </div>
      <div class="mb-2">
        <select
          v-model="pageSize"
          class="form-select form-select-sm"
          id="pageSize"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>

    <!-- table  -->
    <div class="table-responsive">
      <table class="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th
              v-for="column in columns"
              :key="column.label"
              :style="
                column.key === 'actions' ? { width: '60px' } : column.style
              "
            >
              {{ column.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in filteredData" :key="row.id">
            <td
              class="actions-cell"
              v-for="column in columns"
              :key="column.key"
              :style="
                column.key === 'actions' ? { width: '60px' } : column.style
              "
            >
              {{ row[column.key] }}

              <template v-if="column.key === 'actions'">
                <router-link
                  v-for="action in props.actions"
                  :key="action.label"
                  :to="`/${action.route}/${row.id}`"
                  :class="`btn ${action.class} btn-sm ms-2 `"
                  :title="action.label"
                  data-bs-toggle="tooltip"
                >
                  <i :class="action.icon"></i> {{ action.label }}
                </router-link>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- pagination -->
    <div class="mt-3 d-flex justify-content-center">
      <ul class="pagination pagination-sm mb-0">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a class="page-link" href="#" @click="firstPage">Primeiro</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a class="page-link" href="#" @click="prevPage">Anterior</a>
        </li>
        <li
          class="page-item"
          v-for="page in totalPages"
          :key="page"
          :class="{ active: currentPage === page }"
        >
          <a class="page-link" href="#" @click="updatePage(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link" href="#" @click="nextPage">Próximo</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link" href="#" @click="lastPage">Último</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from "vue";

const props = defineProps({
  title: String,
  columns: Array,
  data: Array,
  actions: Array,
});

const pageSize = ref(5);
const filter = ref("");
const currentPage = ref(1);

// Filtrando os dados com base no filtro
const allData = computed(() => {
  if (filter.value.trim() === "") return props.data;
  return props.data.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(filter.value.toLowerCase())
    )
  );
});

// Calculando o número total de páginas
const totalPages = computed(() => {
  return Math.ceil(allData.value.length / pageSize.value);
});

// Extraindo os dados para a página atual
const filteredData = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return allData.value.slice(start, end);
});

// Função para atualizar a página
const updatePage = (page) => {
  currentPage.value = Math.min(Math.max(page, 1), totalPages.value);
};

// Funções de navegação
const nextPage = () => updatePage(currentPage.value + 1);
const prevPage = () => updatePage(currentPage.value - 1);
const firstPage = () => updatePage(1);
const lastPage = () => updatePage(totalPages.value);
</script>

<style scoped>
.actions-cell {
  white-space: nowrap;
}
</style>
