<template>
  <div>
    <EmissorComponent />
    <form>
      <!-- Vigência -->
      <h4><i class="bi bi-calendar"></i> Informações do plano</h4>
      <div class="card">
        <div class="card-body">
          <div class="row my-1">
            <div class="col-md-3">
              <label class="form-label">Dt. Início:</label>
              <input
                type="date"
                class="form-control mb-2"
                v-model="formulario.inicioVigencia"
              />
            </div>
            <div class="col-md-3">
              <label class="form-label">Dt. Fim:</label>
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
      <h4 class="mt-3"><i class="bi bi-person"></i> Informações do segurado</h4>
      <div class="card">
        <div class="card-body">
          <div class="row my-1">
            <h5 class="my-1">Dados Pessoais</h5>

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
              <label for="inputEmail4" class="form-label">Nome completo</label>
              <input
                type="email"
                class="form-control mb-2"
                id="inputEmail4"
                v-model="formulario.email"
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
      <div class="col-md-12 d-flex justify-content-center">
        <button
          @click="adicionarSegurado"
          id="adicionar"
          class="btn btn-success"
        >
          <i class="bi bi-check-circle"></i> Salvar
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
        <RouterLink to="/bilhetes/1" class="btn btn-info">
          <i class="bi bi-x-circle"></i> Cancelar emissão
        </RouterLink>
      </div>
      <div>
        <RouterLink to="/resumo" class="btn btn-success">
          <i class="bi bi-check-circle"></i> Visualizar informações
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
    cpf: "111.234.567-02",
    nome: "Fabio dos Santos Martins",
    dataNascimento: "03/02/2001",
  },
  {
    cpf: "111.234.567-02",
    nome: "Valéria Gonçalvez Nunes",
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

const title = "Segurados";

const columns = [
  { key: "cpf", label: "Cpf", style: { width: "100px" } },
  { key: "segurado", label: "Nome", style: { width: "150px" } },
  {
    key: "data_nascimento",
    label: "Dt. Nascimento",
    style: { width: "100px" },
  },
  { key: "idade", label: "Idade", style: { width: "100px" } },
  { key: "email", label: "E-mail", style: { width: "100px" } },
  { key: "telefone", label: "Telefone", style: { width: "100px" } },
  { key: "actions", label: "Ações", style: { width: "100px" } },
];
const tableData = [
  {
    cpf: "878.444.444-33",
    segurado: "Andréia da Silva",
    data_nascimento: "15/08/1980",
    idade: "37",
    email: "andreia@gmail.com",
    telefone: "(11) 99999-9999",
  },
  {
    cpf: "578.444.444-33",
    segurado: "Maria da Silva",
    data_nascimento: "15/08/1970",
    idade: "47",
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
    label: "Remover",
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
