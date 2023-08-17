<template>
  <div>
    <EmissorComponent />

    <h3>Emitir novo bilhete</h3>

    <form>
      <!-- Vigência -->
      <h5>Informações do plano e vigência</h5>
      <div class="card">
        <div class="card-body">
          <div class="row my-1">
            <div class="col-md-3">
              <label class="form-label">Início da vigência:</label>
              <input
                type="date"
                class="form-control mb-2"
                v-model="formulario.inicioVigencia"
              />
            </div>
            <div class="col-md-3">
              <label class="form-label">Fim da vigência:</label>
              <input
                type="date"
                class="form-control mb-2"
                v-model="formulario.fimVigencia"
              />
            </div>
            <div class="col-md-3">
              <label class="form-label">Destino:</label>
              <select
                class="form-control mb-2 form-select"
                v-model="destino"
                @change="atualizarPlanos"
              >
                <option>Demais Países</option>
                <option>Estados Unidos</option>
                <option>Europa</option>
                <option>América Latina</option>
                <option>Brasil</option>
              </select>
            </div>
            <div class="col-md-3">
              <label class="form-label">Plano:</label>
              <select class="form-select">
                <option v-for="plano in planos" :key="plano">
                  {{ plano }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- Dados do Cliente -->
      <h5 class="mt-3">Informações do segurado</h5>
      <div class="card">
        <div class="card-body">
          <div class="row my-1">
            <h5 class="my-1">Dados Pessoais</h5>
            <div class="col-md-3">
              <label for="inputEmail4" class="form-label">Nome completo</label>
              <input
                type="email"
                class="form-control mb-2"
                id="inputEmail4"
                v-model="formulario.email"
              />
            </div>
            <div class="col-md-3">
              <label for="inputEmail4" class="form-label">CPF</label>
              <input
                type="email"
                class="form-control mb-2"
                id="inputEmail4"
                v-model="formulario.cpf"
              />
            </div>
            <div class="col-md-3">
              <label for="inputEmail4" class="form-label"
                >Data de Nascimento:</label
              >
              <input
                type="date"
                class="form-control mb-2"
                id="inputEmail4"
                v-model="formulario.dataNascimento"
              />
            </div>
            <div class="col-md-3">
              <label for="inputEmail4" class="form-label">E-mail</label>
              <input
                type="email"
                class="form-control mb-2"
                id="inputEmail4"
                v-model="formulario.email"
              />
            </div>
          </div>

          <h5 class="mt-3">Endereço</h5>

          <div class="row my-1">
            <div class="col-md-2 mt-">
              <label for="inputZip" class="form-label">Cep</label>
              <input
                type="text"
                class="form-control mb-2"
                id="inputZip"
                v-model="formulario.cep"
              />
            </div>
            <div class="col-4">
              <label for="inputAddress" class="form-label">Endereço</label>
              <input
                type="text"
                class="form-control mb-2"
                id="inputAddress"
                placeholder=""
                v-model="formulario.endereco"
              />
            </div>
            <div class="col-md-2">
              <label for="inputZip" class="form-label">Número</label>
              <input
                type="text"
                class="form-control mb-2"
                id="inputZip"
                v-model="formulario.numero"
              />
            </div>
            <div class="col-md-4">
              <label for="inputZip" class="form-label">Complemento</label>
              <input
                type="text"
                class="form-control mb-2"
                id="inputZip"
                v-model="formulario.complemento"
              />
            </div>

            <div class="col-md-4">
              <label for="inputZip" class="form-label">Bairro</label>
              <input
                type="text"
                class="form-control mb-2"
                id="inputZip"
                v-model="formulario.bairro"
              />
            </div>

            <div class="col-md-4">
              <label for="inputZip" class="form-label">Cidade</label>
              <input
                type="text"
                class="form-control mb-2"
                id="inputZip"
                v-model="formulario.cidade"
              />
            </div>

            <div class="col-md-4">
              <label for="inputState" class="form-label">Estado</label>
              <select
                id="inputState"
                class="form-select"
                v-model="formulario.estado"
              >
                <option selected>Selecione...</option>
                <option>...</option>
              </select>
            </div>
          </div>

          <h5 class="mt-3">Contato de emergência</h5>

          <div class="row my-1">
            <div class="col-md-4">
              <label for="inputZip" class="form-label">Nome completo</label>
              <input
                type="text"
                class="form-control mb-2"
                id="inputZip"
                v-model="formulario.nomeEmergencia"
              />
            </div>

            <div class="col-md-4">
              <label for="inputZip" class="form-label">Telefone</label>
              <input
                type="text"
                class="form-control mb-2"
                id="inputZip"
                v-model="formulario.telefoneEmergencia"
              />
            </div>

            <div class="col-md-4">
              <label for="inputZip" class="form-label">E-mail</label>
              <input
                type="text"
                class="form-control mb-2"
                id="inputZip"
                v-model="formulario.email"
              />
            </div>
          </div>
        </div>
      </div>
    </form>

    <div class="row mt-3">
      <div class="col-md-12 d-flex justify-content-between">
        <button
          @click="adicionarSegurado"
          id="adicionar"
          class="btn btn-primary justify-content-end"
        >
          <i class="bi bi-plus"></i> Adicionar segurado
        </button>
      </div>
    </div>

    <data-table
      :title="title"
      :columns="columns"
      :data="tableData"
      :actions="actions"
    ></data-table>

    <div class="d-flex justify-content-between mt-3">
      <div>
        <RouterLink to="/bilhetes/1" class="btn btn-secondary">
          <i class="bi bi-arrow-left-circle"></i> Voltar
        </RouterLink>
      </div>
      <div>
        <RouterLink to="/resumo" class="btn btn-primary">
          <i class="bi bi-credit-card"></i> Ir para o pagamento
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import EmissorComponent from "../components/EmissorComponent.vue";
const destino = ref("");
const planos = ref([]);

const segurados = ref([
  {
    nome: "Fabio dos Santos Martins",
    cpf: "111.234.567-02",
    dataNascimento: "03/02/2001",
  },
  {
    nome: "Valéria Gonçalvez Nunes",
    cpf: "111.234.567-02",
    dataNascimento: "03/02/1999",
  },
]);

const adicionarSegurado = () => {
  const novoSegurado = {
    nome: "Nome",
    cpf: "000.000.000-00",
    dataNascimento: "00/00/0000",
  };
  segurados.value.push(novoSegurado);
};

const atualizarPlanos = () => {
  switch (destino.value) {
    case "Estados Unidos":
      planos.value = [
        "Liberty Explorer",
        "Stars & Stripes Advantage",
        "American Dream Premium",
      ];
      break;
    case "Europa":
      planos.value = [
        "Alpine Adventure",
        "Renaissance Voyager",
        "European Elegance Elite",
      ];
      break;
    case "América Latina":
      planos.value = ["Tango Trail", "Amazon Explorer", "Latin Fiesta Deluxe"];
      break;
    case "Brasil":
      planos.value = [
        "Samba Sunshine",
        "Amazon Rainforest Trek",
        "Carnival Celebration Package",
      ];
      break;
    case "Demais Países":
      planos.value = [
        "Global Wanderer",
        "Worldwide Explorer",
        "Universal Traveler Premium",
      ];
      break;
    default:
      planos.value = ["Local Journey Package"];
  }
};

const formulario = ref({
  // Você pode definir valores padrão aqui ou deixar vazio
});

import DataTable from "../components/UI/DataTable.vue";

const title = "Segurados contemplados";
const columns = [
  { key: "segurado", label: "Segurado", style: { width: "150px" } },
  { key: "cpf", label: "Cpd", style: { width: "100px" } },
  {
    key: "data_nascimento",
    label: "Data de Nascimento",
    style: { width: "100px" },
  },
  { key: "email", label: "E-mail", style: { width: "100px" } },
  { key: "telefone", label: "Telefone", style: { width: "100px" } },
  { key: "actions", label: "Ações", style: { width: "100px" } },
];
const tableData = [
  {
    segurado: "Andréia da Silva",
    cpf: "878.444.444.-33",
    data_nascimento: "15/08/1980",
    email: "andreia@gmail.com",
    telefone: "(11) 99999-9999",
  },
  {
    segurado: "Maria da Silva",
    cpf: "578.444.444.-33",
    data_nascimento: "15/08/1970",
    email: "maria@gmail.com",
    telefone: "(11) 99999-9995",
  },
];

const actions = [
  {
    label: "Editar",
    icon: "bi-pencil",
    handler: edit,
    class: "btn-success",
    route: "bilhetes",
  },
  {
    label: "Excluir",
    icon: "bi-trash",
    handler: remove,
    class: "btn-danger",
    route: "bilhetes",
  },
];

function edit() {
  /* ... */
}
function remove() {
  /* ... */
}
</script>
