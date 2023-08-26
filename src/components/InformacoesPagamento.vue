<template>
  <div class="row">
    <div class="col-md-12">
      <!-- Carrinho de Compras -->
      <h4 class="mt-4"><i class="bi bi-cash"></i> Informações de pagamento</h4>

      <div class="table-responsive">
      <table class="table table-bordered table-striped ">
        <thead>
          <tr>
            <th>Status Pagto</th>
            <th>Forma de Pagto</th>
            <th>Data Pagto</th>
            <th>Folheto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span class="badge text-bg-success"
                ><i class="bi bi-check"></i> Confirmado</span
              >
            </td>
            <td>
              <img src="../assets/card.svg" alt="Cartão de Crédito" />
            </td>
            <td>21/08/2023 15:30</td>
            <td>R$ 235,90</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>
</template>

<script setup></script>
