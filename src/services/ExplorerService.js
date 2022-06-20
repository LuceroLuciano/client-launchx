import http from "../http-common";

class ExplorerService {
  getAll() {
    return http.get("/explorers");
  }
  get(id) {
    return http.get(`/explorers/${id}`);
  }
  create(data) {
    return http.post("/explorers", data);
  }
  update(id, data) {
    return http.put(`/explorers/${id}`, data);
  }
  delete(id) {
    return http.delete(`/explorers/${id}`);
  }

  // rutas de para NewMissionCommander

  getAllMC() {
    return http.get("/newmissioncommander");
  }
  getMC(id) {
    return http.get(`/newmissioncommander/${id}`);
  }
  createMC(data) {
    return http.post("/newmissioncommander", data);
  }
  updateMC(id, data) {
    return http.put(`/newmissioncommander/${id}`, data);
  }
  deleteMC(id) {
    return http.delete(`/newmissioncommander/${id}`);
  }
}

export default new ExplorerService();
