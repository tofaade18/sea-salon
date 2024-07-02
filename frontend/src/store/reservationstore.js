import { defineStore } from 'pinia';
import ReservationDataService from '../services/reservationservice';
export const reservationservice = defineStore('reservation', {
  state: () => ({
    currentreservation: null,
    reservation: [],
    message: '',
    error: false,
  }),
  actions: {
    async getReservation(id) {
      try {
        const response = await ReservationDataService.get(id);
        this.currentreservation = response.data;
      } catch (e) {
        console.error(e);
      }
    },
    async addReservation(data) {
      try {
        const response = await ReservationDataService.create(data);
        this.message = 'Review added successfully!';
        console.log(response.data)
    } catch (e) {
        console.error(e);
        this.message = 'Error adding review.';
      }
    },
    async updateReservation(id, data) {
      try {
        const response = await ReservationDataService.update(id, data);
        this.message = 'Review updated successfully!';
        console.log(response.data)
      } catch (e) {
        console.error(e);
        this.message = 'Error updating review.';
      }
    },
    async deleteReservation(id, data) {
      try {
        await ReservationDataService.delete(id,data);
        this.message = 'Review deleted successfully!';
      } catch (e) {
        console.error(e);
        this.message = 'Error deleting review.';
      }
    },
  },
});
