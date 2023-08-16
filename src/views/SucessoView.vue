<template>
  <div ref="printContentRef">
    <div>
      <div class="alert alert-success">
        <h2 class="d-flex justify-content-center my-3">
          <i class="bi bi-star"></i> Parabéns, seu pedido foi processado com
          sucesso!
          <i class="bi bi-star"></i>
        </h2>
      </div>

      <div class="row">
        <div class="col-md-6">
          <!-- Cliente -->
          <h4 class="mt-4">
            <i class="bi bi-calendar"></i> Resumo da sua solicitação
          </h4>
          <table class="table table-bordered">
            <tr>
              <td><strong>Data de emissão:</strong></td>
              <td>21/08/2023 15:30</td>
            </tr>
            <tr>
              <td><strong>Plano</strong></td>
              <td>Brasil PLUS</td>
            </tr>
            <tr>
              <td><strong>Total Apólices:</strong></td>
              <td>2</td>
            </tr>
          </table>
        </div>
        <div class="col-md-6">
          <!-- Cliente -->
          <h4 class="mt-4"><i class="bi bi-calendar"></i></h4>
          <table class="table table-bordered">
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
              <td><strong>Dias:</strong></td>
              <td>17</td>
            </tr>
          </table>
        </div>
      </div>

      <div class="page-break"></div>
      <div class="row">
        <div class="col-md-12">
          <!-- Carrinho de Compras -->
          <h4 class="mt-4"><i class="bi bi-people"></i> Segurados</h4>
          <table class="table table-bordered">
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
                <td>Fanbio dos Santos Martins</td>
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

      <div class="row">
        <div class="col-md-6">
          <RouterLink to="/emissores" class="btn btn-lg btn-secondary">
            <i class="bi bi-check"></i> Emitir novo bilhete
          </RouterLink>
        </div>
        <div class="col-md-6 text-end">
          <RouterLink
            @click="printPDF"
            to="/sucesso"
            class="btn btn-lg btn-primary"
          >
            <i class="bi bi-printer"></i> Imprimir
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const printContentRef = ref(null);
const printPDF = () => {
  if (printContentRef.value) {
    const printContent = printContentRef.value.innerHTML;
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
  }
};
</script>

<style scoped>
@media print {
  .page-break {
    page-break-after: always;
  }
}
</style>
