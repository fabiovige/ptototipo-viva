<template>
  <div class="row">
    <div class="col-md-12">
      <!-- Carrinho de Compras -->
      <h4 class="my-4"><i class="bi bi-people"></i> Bilhete(s) emitido(s)</h4>

      <div class="card">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Id Bilhete</th>
                  <th>Cpf</th>
                  <th>Nome</th>
                  <th>E-mail</th>
                  <th>Telefone</th>
                  <th>Voucher</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>989765</td>
                  <td>123.456.678-02</td>
                  <td>Fabio dos Santos Martins</td>
                  <td>fabiovige@gmail.com</td>
                  <td>(11) 99999-0909</td>
                  <td nowrap="nowrap">
                    <a :href="pdfFile" download class="btn btn-sm btn-primary">
                      <i class="bi bi-bookmark-star"></i> Voucher
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>989765</td>
                  <td>123.456.678-02</td>
                  <td>Fabio dos Santos Martins</td>
                  <td>fabiovige@gmail.com</td>
                  <td>(11) 99999-0909</td>
                  <td nowrap="nowrap">
                    <a :href="pdfFile" download class="btn btn-sm btn-primary">
                      <i class="bi bi-bookmark-star"></i> Voucher
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>989765</td>
                  <td>123.456.678-02</td>
                  <td>Fabio dos Santos Martins</td>
                  <td>fabiovige@gmail.com</td>
                  <td>(11) 99999-0909</td>
                  <td nowrap="nowrap">
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
    </div>
  </div>
</template>

<script setup>
import pdfFile from '@/assets/voucher.pdf';
</script>
