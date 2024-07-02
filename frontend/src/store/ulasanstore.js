import { defineStore } from 'pinia';
import UlasanDataService from '../services/ulasandataservice';
export const useUlasanStore = defineStore('ulasan', {
  state: () => ({
    currentUlasan: null,
    ulasans: [],
    newUlasanText: "",
    newUlasanRating: 0,
    message: '',
    error: false,
  }),
  actions: {
    async getUlasan(id) {
      try {
        const response = await UlasanDataService.get(id);
        this.currentUlasan = response.data;
      } catch (e) {
        console.error(e);
      }
    },
    async addUlasan(id, data) {
      try {
        const response = await UlasanDataService.create(id, data);
        this.message = 'Review added successfully!';
        console.log(response.data)
    } catch (e) {
        console.error(e);
        this.message = 'Error adding review.';
      }
    },
    async updateUlasan(id, data) {
      try {
        const response = await UlasanDataService.update(id, data);
        this.message = 'Review updated successfully!';
        console.log(response.data)
      } catch (e) {
        console.error(e);
        this.message = 'Error updating review.';
      }
    },
    async deleteUlasan(id, data) {
      try {
        await UlasanDataService.delete(id,data);
        this.message = 'Review deleted successfully!';
      } catch (e) {
        console.error(e);
        this.message = 'Error deleting review.';
      }
    },
  },
});
