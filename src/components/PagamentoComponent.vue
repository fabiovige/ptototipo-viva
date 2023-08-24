<template>
  <div class="container mt-5">
    <h3 class="mb-4">Escolha a Forma de Pagamento</h3>
    <div class="mb-3">
      <label for="payment-method" class="form-label">Método de Pagamento</label>
      <select class="form-select" id="payment-method" v-model="paymentMethod">
        <option value="credit-card">Cartão de Crédito</option>
        <option value="invoice">Faturamento</option>
        <option value="pix">PIX</option>
      </select>
    </div>
    <div v-if="paymentMethod === 'credit-card'">
      <div class="card p-4">
        <div class="mb-3">
          <label for="card-number" class="form-label">Número do Cartão</label>
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              id="card-number"
              placeholder="1234 5678 9012 3456"
              v-model="cardNumber"
            />
            <span class="input-group-text">
              <i :class="getCardIcon()"></i>
            </span>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="card-name" class="form-label">Nome no Cartão</label>
            <input
              type="text"
              class="form-control"
              id="card-name"
              placeholder="Nome Completo"
            />
          </div>
          <div class="col-md-4 mb-3">
            <label for="card-expiration" class="form-label"
              >Data de Expiração</label
            >
            <input
              type="text"
              class="form-control"
              id="card-expiration"
              placeholder="MM/YY"
            />
          </div>
          <div class="col-md-2 mb-3">
            <label for="card-cvc" class="form-label"
              >CVC <i class="bi bi-lock-fill"></i
            ></label>
            <input
              type="text"
              class="form-control"
              id="card-cvc"
              placeholder="123"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-if="paymentMethod === 'invoice'" class="card p-4">
      <div class="mb-3">
        <label for="invoice-address" class="form-label"
          >Endereço de Faturamento <i class="bi bi-receipt"></i
        ></label>
        <input
          type="text"
          class="form-control"
          id="invoice-address"
          placeholder="Endereço Completo"
        />
      </div>
    </div>
    <div v-if="paymentMethod === 'pix'" class="card p-4">
      <div class="mb-3">
        <label for="pix-key" class="form-label"
          >Chave PIX <i class="bi bi-upc-scan"></i
        ></label>
        <input
          type="text"
          class="form-control"
          id="pix-key"
          placeholder="Chave PIX"
        />
      </div>
    </div>
    <div class="d-flex justify-content-end mt-4">
      <button class="btn btn-sm btn-primary">Efetuar Pagamento</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const cardNumber = ref("");
const paymentMethod = ref("invoice");

const cardBrand = computed(() => {
  const number = cardNumber.value.substring(0, 4);
  if (number.startsWith("4")) {
    return "visa";
  }
  if (number.startsWith("5")) {
    return "mastercard";
  }
  if (number.startsWith("3")) {
    return "amex";
  }
  if (number.startsWith("6")) {
    return "discover";
  }
  return null;
});

const getCardIcon = () => {
  switch (cardBrand.value) {
    case "visa":
      return "bi bi-credit-card-2-front";
    case "mastercard":
      return "bi bi-credit-card-2-front-fill";
    case "amex":
      return "bi bi-credit-card-fill";
    case "discover":
      return "bi bi-credit-card-2-back";
    default:
      return "bi bi-credit-card-2-front";
  }
};
</script>
