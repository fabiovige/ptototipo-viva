<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
    <div class="container">
      <a class="navbar-brand" href="#">Sistema Seguro Viagem - Protótipo</a>
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
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/emissores">Emissor</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container mt-3">
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
        <li class="breadcrumb-item active" aria-current="page">Bilhetes</li>
      </ol>
    </nav>
  </div>
  <div class="container">
    <div class="card shadow-sm">
      <div class="card-body">
        <router-view />
      </div>
    </div>
  </div>

  <FooterComponent />
</template>

<style></style>

<script setup>
import FooterComponent from "./components/FooterComponent.vue";
</script>
