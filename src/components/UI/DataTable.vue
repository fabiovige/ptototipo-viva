<template>
  <div>
    <h3>{{ title }}</h3>

    <div class="input-group mb-2">
      <input
        type="text"
        class="form-control"
        placeholder="Filtrar"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        v-model="filter"
      />
      <span class="input-group-text" id="basic-addon2"
        ><i class="bi bi-search"></i
      ></span>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered table- table-striped table-hover">
        <thead>
          <tr>
            <th
              v-for="column in columns"
              :key="column.label"
              :style="column.style"
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
              :style="column.style"
            >
              {{ row[column.key] }}

              <template v-if="column.key === 'actions'">
                <router-link
                  v-for="action in props.actions"
                  :key="action.label"
                  :to="`/${action.route}/${row.id}`"
                  :class="`btn ${action.class} btn-sm me-1`"
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

      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
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

const filter = ref("");

const filteredData = computed(() => {
  if (filter.value) {
    return props.data.filter((row) => {
      return Object.values(row).some((value) =>
        String(value).toLowerCase().includes(filter.value.toLowerCase())
      );
    });
  }
  return props.data;
});
</script>

<style scoped>
.actions-cell {
  white-space: nowrap;
  overflow: auto;
}
</style>
