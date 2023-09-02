<template>
  <nav class="navbar navbar-expand-lg bg-info-subtle shadow-sm fixed-top">
    <div class="container-fluid">
      <span class="navbar-brand mb-1 h1">
        <img src="../../assets/logo.png" />
      </span>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/">
              <i class="bi bi-house"></i> Home
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/emissores">
              <i class="bi bi-bookmark-star"></i> Emitir
            </RouterLink>
          </li>
        </ul>

        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/emissores">
              <i class="bi bi-box-arrow-right"></i> Sair
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup></script>
<style scoped>
.bg-custom {
  background-color: #5c1b8d;
}
</style>
