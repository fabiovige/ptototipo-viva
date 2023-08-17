<template>
  <div>
    <EmissorComponent />

    <h3>Confirmação do pedido</h3>
    <hr />
    <div class="row">
      <div class="col-md-4">
        <h5><i class="bi bi-credit-card"></i> Forma de Pagamento</h5>
        <div class="card">
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
                <label for="cardName" class="form-label">Nome do Titular</label>
                <input
                  v-model="cardName"
                  type="text"
                  class="form-control mb-2"
                  id="cardName"
                  required
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

              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    value="faturamento"
                    v-model="paymentMethod"
                    id="faturamento"
                  />
                  <label class="form-check-label" for="faturamento"
                    >Faturamento</label
                  >
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <!-- Outras Informações -->
        <h5><i class="bi bi-calendar"></i> Plano</h5>
        <table class="table">
          <tr>
            <td><strong>Início da Vigência:</strong></td>
            <td>01/01/2023</td>
          </tr>
          <tr>
            <td><strong>Fim da Vigência:</strong></td>
            <td>10/01/2023</td>
          </tr>
          <tr>
            <td><strong>Destino:</strong></td>
            <td>Brasil</td>
          </tr>
          <tr>
            <td><strong>Plano:</strong></td>
            <td>Brasil PLUS</td>
          </tr>
          <tr>
            <td><strong>Dias:</strong></td>
            <td>17</td>
          </tr>
        </table>

        <!-- Carrinho de Compras -->
        <h5><i class="bi bi-people"></i> Segurados contemplados</h5>
        <table class="table table-bordered table-hover table-striped">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Cpf</th>
              <th>Idade</th>
              <th>Preço Unitário</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fabio dos Santos Martins</td>
              <td>123.456.678-02</td>
              <td>52</td>
              <td>R$ 50,00</td>
              <td>R$ 100,00</td>
            </tr>
            <tr>
              <td>Valéria Martins</td>
              <td>234.988.977-02</td>
              <td>22</td>
              <td>R$ 30,00</td>
              <td>R$ 30,00</td>
            </tr>
            <tr>
              <td>Isabela Nunes Martins</td>
              <td>234.988.977-02</td>
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

    <div class="d-flex justify-content-between">
      <div>
        <RouterLink to="/emitir" class="btn btn-secondary">
          <i class="bi bi-arrow-left-circle"></i> Voltar
        </RouterLink>
      </div>
      <div>
        <RouterLink to="/sucesso" class="btn btn-primary">
          <i class="bi bi-credit-card"></i> Confirmar pagamento
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import creditCardType from "credit-card-type";
import EmissorComponent from "../components/EmissorComponent.vue";

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
