<template>
  <div>
    <EmissorComponent />

    <h3>Emitir novo bilhete</h3>
    <hr />

    <form>
      <div class="row my-4">
        <h4>Vigência</h4>
        <div class="col-md-3">
          <label class="form-label">Início da vigência:</label>
          <input
            type="date"
            class="form-control"
            v-model="formulario.inicioVigencia"
          />
        </div>
        <div class="col-md-3">
          <label class="form-label">Fim da vigência:</label>
          <input
            type="date"
            class="form-control"
            v-model="formulario.fimVigencia"
          />
        </div>
        <div class="col-md-3">
          <label class="form-label">Destino:</label>
          <select
            class="form-select"
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
            <option v-for="plano in planos" :key="plano">{{ plano }}</option>
          </select>
        </div>
      </div>

      <hr />
      <!-- Dados do Cliente -->
      <div class="row my-4">
        <h4>Adicionar segurado</h4>

        <h5 class="my-3">Dados Pessoais</h5>
        <div class="col-md-3">
          <label for="inputEmail4" class="form-label">Nome completo</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            v-model="formulario.email"
          />
        </div>
        <div class="col-md-3">
          <label for="inputEmail4" class="form-label">CPF</label>
          <input
            type="email"
            class="form-control"
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
            class="form-control"
            id="inputEmail4"
            v-model="formulario.dataNascimento"
          />
        </div>
        <div class="col-md-3">
          <label for="inputEmail4" class="form-label">E-mail</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            v-model="formulario.email"
          />
        </div>
      </div>

      <div class="row my-3">
        <h5 class="my-3">Endereço</h5>
        <div class="col-md-2 mt-">
          <label for="inputZip" class="form-label">Cep</label>
          <input
            type="text"
            class="form-control"
            id="inputZip"
            v-model="formulario.cep"
          />
        </div>
        <div class="col-4">
          <label for="inputAddress" class="form-label">Endereço</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder=""
            v-model="formulario.endereco"
          />
        </div>
        <div class="col-md-2">
          <label for="inputZip" class="form-label">Número</label>
          <input
            type="text"
            class="form-control"
            id="inputZip"
            v-model="formulario.numero"
          />
        </div>
        <div class="col-md-4">
          <label for="inputZip" class="form-label">Complemento</label>
          <input
            type="text"
            class="form-control"
            id="inputZip"
            v-model="formulario.complemento"
          />
        </div>
      </div>
      <div class="row my-3">
        <div class="col-md-4">
          <label for="inputZip" class="form-label">Bairro</label>
          <input
            type="text"
            class="form-control"
            id="inputZip"
            v-model="formulario.bairro"
          />
        </div>

        <div class="col-md-4">
          <label for="inputZip" class="form-label">Cidade</label>
          <input
            type="text"
            class="form-control"
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

      <div class="row my-3">
        <h5 class="my-3">Contato de emergência</h5>
        <div class="col-md-4">
          <label for="inputZip" class="form-label">Nome completo</label>
          <input
            type="text"
            class="form-control"
            id="inputZip"
            v-model="formulario.nomeEmergencia"
          />
        </div>

        <div class="col-md-4">
          <label for="inputZip" class="form-label">Telefone</label>
          <input
            type="text"
            class="form-control"
            id="inputZip"
            v-model="formulario.telefoneEmergencia"
          />
        </div>

        <div class="col-md-4">
          <label for="inputState" class="form-label">E-mail</label>
          <select
            id="inputState"
            class="form-select"
            v-model="formulario.emailEmergencia"
          >
            <option selected>Selecione...</option>
            <option>...</option>
          </select>
        </div>
      </div>
    </form>

    <div class="row my-3">
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

    <div class="row my-5">
      <div class="col-md-6 d-flex justify-content-start">
        <RouterLink to="/bilhetes" class="btn btn-lg btn-secondary mt-3">
          <i class="bi bi-arrow-left-circle"></i> Voltar
        </RouterLink>
      </div>
      <div class="col-md-6 d-flex justify-content-end">
        <RouterLink to="/resumo" class="btn btn-lg btn-secondary mt-3">
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

const title = "Bilhetes emitidos";
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
  {
    segurado: "Pedro da Silva",
    cpf: "278.444.444.-33",
    data_nascimento: "15/08/1960",
    email: "pedro@gmail.com",
    telefone: "(11) 99999-9994",
  },
  {
    segurado: "Paulo da Silva",
    cpf: "378.444.444.-33",
    data_nascimento: "15/08/1900",
    email: "paulo@gmail.com",
    telefone: "(11) 99999-9993",
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
