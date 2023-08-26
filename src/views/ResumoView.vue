<template>
  <div>
    <div class="row">
      <div
        class="col-12 d-flex justify-content-md-end justify-content-start mb-3 mb-md-0"
      >
        <RouterLink to="/emitir" class="btn btn-info">
          <i class="bi bi-arrow-left-circle"></i> Corrigir informações
        </RouterLink>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <!-- Carrinho de Compras -->
        <h4><i class="bi bi-calendar"></i> Informações do plano</h4>
        <div class="table-responsive">
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Data de emissão</th>
                <th>Plano</th>
                <th>Dt. Início</th>
                <th>Dt. Fim</th>
                <th>Total Apólices</th>
                <th>Dias</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>21/08/2023 15:30</td>
                <td>Brasil PLUS</td>
                <td>Brasil</td>
                <td>10/07/2023 00:00</td>
                <td>11/08/2023 23:59</td>
                <td>10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <!-- Carrinho de Compras -->
        <h4 class="mt-4"><i class="bi bi-people"></i> Bilhetes</h4>
        <div class="table-responsive">
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Cpf</th>
                <th>Nome</th>
                <th>Idade</th>
                <th>Preço Unitário</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>123.456.678-02</td>
                <td>Fabio dos Santos Martins</td>
                <td>52</td>
                <td>R$ 50,00</td>
                <td>R$ 100,00</td>
              </tr>
              <tr>
                <td>234.988.977-02</td>
                <td>Valéria Martins</td>
                <td>22</td>
                <td>R$ 30,00</td>
                <td>R$ 30,00</td>
              </tr>
              <tr>
                <td>234.988.977-02</td>
                <td>Isabela Nunes Martins</td>
                <td>37</td>
                <td>R$ 30,00</td>
                <td>R$ 30,00</td>
              </tr>
              <tr>
                <td colspan="4" class="text-end"><strong>Total:</strong></td>
                <td>R$ 160,00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <h4><i class="bi bi-credit-card"></i> Forma de pagamento</h4>

    <div class="row">
      <div class="col-md-6">
        <!-- faturamento-->
        <div class="card mb-3">
          <div class="card-body">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked
              />
              <div class="d-flex justify-content-between">
                <label class="form-check-label" for="flexRadioDefault1">
                  Faturamento
                </label>

                <div>
                  <img src="../assets/faturamento.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- cartão de crédito -->
        <div class="card mb-3">
          <div class="card-body">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />

              <div class="d-flex justify-content-between">
                <label class="form-check-label" for="flexRadioDefault1">
                  Cartão de Crédito
                </label>

                <div>
                  <img src="../assets/card.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- pix -->
        <div class="card mb-3">
          <div class="card-body">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />

              <div class="d-flex justify-content-between">
                <label class="form-check-label" for="flexRadioDefault1">
                  Pix
                </label>

                <div>
                  <img src="../assets/pix.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- boleto -->
        <div class="card">
          <div class="card-body">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />

              <div class="d-flex justify-content-between">
                <label class="form-check-label" for="flexRadioDefault1">
                  Boleto
                </label>

                <div>
                  <img src="../assets/boleto.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card mt-3 mt-md-0">
          <div class="card-body">
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <label for="cardNumber" class="form-label"
                  >Número do Cartão <span v-html="cardIcon"></span
                ></label>
                <input
                  v-model="cardNumber"
                  @keyup="validateCard"
                  type="text"
                  class="form-control mb-2"
                  id="cardNumber"
                  maxlength="19"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="cardName" class="form-label"
                  >Nome do títular do cartão</label
                >
                <input
                  v-model="cardName"
                  type="text"
                  class="form-control mb-2"
                  id="cardName"
                  required
                  placeholder="João da Silva Mello"
                />
              </div>

              <div class="mb-3">
                <label for="expiryDate" class="form-label"
                  >Data de Validade</label
                >
                <input
                  v-model="expiryDate"
                  type="text"
                  class="form-control mb-2"
                  id="expiryDate"
                  placeholder="MM/YY"
                  maxlength="5"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="cvv" class="form-label">CVV</label>
                <input
                  v-model="cvv"
                  type="text"
                  class="form-control mb-2"
                  id="cvv"
                  maxlength="3"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-3 d-flex justify-content-end">
      <div>
        <RouterLink to="/sucesso" class="btn btn-success">
          <i class="bi bi-check-circle"></i> Confirmar pagamento
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import creditCardType from "credit-card-type";
import { ref } from "vue";

const cardNumber = ref("");
const cardIcon = ref("");
const cardName = ref("");
const expiryDate = ref("");
const cvv = ref("");

const submitForm = () => {
  // Lógica de validação e envio do formulário
  alert("Formulário enviado!");
};

const validateCard = () => {
  const cardType = creditCardType(cardNumber.value);
  if (cardType.length > 0) {
    switch (cardType[0].type) {
      case "visa":
        cardIcon.value = '<i class="bi bi-credit-card-2-front"></i>'; // Você pode alterar o ícone conforme sua preferência
        break;
      case "mastercard":
        cardIcon.value = '<i class="bi bi-credit-card-2-front"></i>'; // Você pode alterar o ícone conforme sua preferência
        break;
      // Adicione mais cases para outros tipos de cartão, se necessário
    }
  } else {
    cardIcon.value = ""; // Limpar ícone se o cartão não for reconhecido
  }
};
</script>
