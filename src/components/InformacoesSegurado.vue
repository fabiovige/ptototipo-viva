<template>
  <div class="row">
    <div class="col-md-12">
      <!-- Carrinho de Compras -->
      <h4 class="mt-4"><i class="bi bi-person"></i> Informações do segurado</h4>

      <div class="table-responsive">
      <table class="table table-bordered table-striped ">
        <thead>
          <tr>
            <th>Cpf</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>Voucher</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>123.456.678-02</td>
            <td>Fabio dos Santos Martins</td>
            <td>fabiovige@gmail.com</td>
            <td>(11) 99999-0909</td>
            <td>
              <a :href="pdfFile" download class="btn btn-sm btn-primary">
                <i class="bi bi-bookmark-star"></i> Voucher
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import pdfFile from "@/assets/voucher.pdf";
</script>
