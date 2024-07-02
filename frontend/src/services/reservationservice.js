import http from "../http-common";

class ReservationDataService {
  get(id) {
    return http.get(`/home/${id}`);
  }

  getAll() {
    return http.get(`/home/reservation`);
  }
  create(data) {
    return http.post(`/home/`, data);
  }

  update(id, data) {
    return http.put(`/home/edit/${id}`, data);
  }

  delete(id, data) {
    return http.delete(`/home/delete/${id}`, data);
  }
}

export default new ReservationDataService();