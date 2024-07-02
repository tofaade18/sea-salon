<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Reservation Form</h4>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitReservation">
          <div class="form-group mb-3">
            <label for="name">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="reservation.name"
              required
              placeholder="Enter your name"
            />
          </div>

          <div class="form-group mb-3">
            <label for="phoneNumber">Phone Number</label>
            <input
              type="number"
              class="form-control"
              id="phoneNumber"
              v-model="reservation.phoneNumber"
              required
              placeholder="Enter your phone number"
            />
          </div>

          <div class="form-group mb-3">
            <label for="serviceType">Service Type</label>
            <select
              class="form-control"
              id="serviceType"
              v-model="reservation.serviceType"
              required
            >
              <option disabled value="">Select a service</option>
              <option>Haircuts and Styling</option>
              <option>Manicure and Pedicure</option>
              <option>Facial Treatments</option>
            </select>
          </div>

          <div class="form-group mb-3">
            <label for="datetime">Date and Time</label>
            <input
              type="datetime-local"
              class="form-control"
              id="datetime"
              v-model="reservation.datetime"
              required
            />
          </div>

          <button type="submit" :disabled="!isUser" class="btn btn-primary">Submit Reservation</button>
        </form>
      </div>
    </div>
    <h4 style="margin-top: 30px;">All Reservations</h4>
    <div class="reservations mt-5" style="display: grid; grid-template-columns: repeat(6,1fr);">
      <div v-for="reservation in reservations" :key="reservation.id" class="card mt-3">
        <div class="card-body">
          <h5 class="card-title">{{ reservation.name }}</h5>
          <p class="card-text"><strong>Phone Number:</strong> {{ reservation.phoneNumber }}</p>
          <p class="card-text"><strong>Service Type:</strong> {{ reservation.serviceType }}</p>
          <p class="card-text"><strong>Date and Time:</strong> {{ reservation.datetime }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useToast } from 'vue-toastification';
import ReservationDataService from "../services/reservationservice";
import { useAuthStore } from '@/store/auth.module';
export default {
  name: "ReservationForm",
  data() {
    return {
      reservation: {
        name: '',
        phoneNumber: '',
        serviceType: '',
        datetime: ''
      },
      message:'',
      reservations: []
    };
  },
  computed: {
    isUser() {
      const authStore = useAuthStore();
      return authStore.user;
    }
  },
  methods: {
    submitReservation() {
      if (this.isInvalidTime(this.reservation.datetime)) {
        const toast = useToast();
        toast.error('Reservations cannot be made between 21:00 and 09:00.');
        return;
      }
      var data = {
          name: this.reservation.name,
          phoneNumber: this.reservation.phoneNumber,
          serviceType: this.reservation.serviceType,
          datetime: this.reservation.datetime,
          userId: this.isUser.id
        };
      const toast = useToast();
      ReservationDataService.create(data)
      .then(response => {
        console.log(response.data);
        toast.success('Reservation submitted successfully!');
      })
      .catch(e => {
        console.log(e.message);
        toast.error(e.message);
      })
      this.reservation = {
        name: '',
        phoneNumber: '',
        serviceType: '',
        dateTime: ''
      };
    },
    isInvalidTime(datetime) {
      const time = new Date(datetime).getHours();
      return (time >= 21 || time < 9);
    },
    fetchReservations() {
      ReservationDataService.getAll()
        .then(response => {
          this.reservations = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    const isuser = useAuthStore();
    if (!isuser.user) {
      this.$router.push('/login');
    }
    this.fetchReservations();
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-top: 10rem;
}

.card-header {
  background-color: #f8f9fa;
  border-bottom: none;
  border-radius: 10px 10px 0 0;
  padding: 1rem 1.5rem;
}

.card-body {
  padding: 1.5rem;
}

.form-group label {
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.form-control {
  border-radius: 5px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  border-radius: 5px;
  padding: 0.5rem 1rem;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004085;
}
</style>