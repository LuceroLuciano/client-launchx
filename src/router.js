import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/explorers",
    name: "explorers",
    component: () => import("./components/ExplorersList")
  },
  {
    path: "/explorer/:id",
    name: "explorer-details",
    component: () => import("./components/Explorer")
  },
  {
    path: "/add",
    name: "add-explorer",
    component: () => import("./components/AddExplorer")
  },

  // Rutas para NewMissionCommander
  
  // Agregar nuevo registro
  {
    path: "/addMissionCommander",
    name: "add-newMissionCommander",
    component: () => import("./components/AddNewMissionCommander")
  },

  // Mostrar registros
  {
    path: "/missionCommander",
    name: "missionCommander",
    component: () => import("./components/MissionCommanderList")
  }
  

];


const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
