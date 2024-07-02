import http from "../http-common";

class UlasanDataService {
  get(id) {
    return http.get(`/home/ulasan/${id}`);
  }

  getAll() {
    return http.get(`/home/`);
  }
  create(data) {
    return http.post(`/home/ulpost/`, data);
  }

  update(id, data) {
    return http.put(`/home/ulupdate/${id}`, data);
  }

  delete(id, data) {
    return http.delete(`/home/uldel/${id}`, data);
  }
}

export default new UlasanDataService();