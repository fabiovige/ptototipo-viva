import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EmissorView from "../views/EmissorView.vue";
import BilhetesView from "../views/BilhetesView.vue";
import VisualizarView from "../views/VisualizarView.vue";
import VisualizarPendenteView from "../views/VisualizarPendenteView.vue";
import EmitirView from "../views/EmitirView.vue";
import ResumoView from "../views/ResumoView.vue";
import SucessoView from "../views/SucessoView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/emissores",
    name: "emissores",
    component: EmissorView,
  },
  {
    path: "/bilhetes/:id",
    name: "bilhetes",
    component: BilhetesView,
  },
  {
    path: "/visualizar/:id",
    name: "visualizar",
    component: VisualizarView,
  },
  {
    path: "/visualizar/pendente/:id",
    name: "visualizar-pendente",
    component: VisualizarPendenteView,
  },
  {
    path: "/emitir",
    name: "emitir",
    component: EmitirView,
  },
  {
    path: "/resumo",
    name: "resumo",
    component: ResumoView,
  },
  {
    path: "/sucesso",
    name: "sucesso",
    component: SucessoView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
