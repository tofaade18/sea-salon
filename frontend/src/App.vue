<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg fixed-top" style="background-color: rgba(245,217,214, 0.8); max-width: 100%; min-width: 150px; justify-content: space-between;">
      <div class="navbar-nav mr-auto">
        <router-link to="/home">
          <div style="font-size: x-large; color: black; margin-left: 10px;">
          <i class="fas fa-home-lg"></i>
          </div>
        </router-link>
        <li class="nav-item" v-if="currentUser">
          <router-link to="/home" class="nav-link" style="color: rgb(0, 0, 0);">
           SEA Salon
          </router-link>
        </li>
      </div>

      <div v-if="!currentUser" class="navbar-nav nav-pills ml-auto">
        <!-- <li class="nav-item dropdown">
          <router-link to="#" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <font-awesome-icon icon="boxes" /> Product and Services
          </router-link>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <router-link to="/haircuts" class="dropdown-item">
              <font-awesome-icon icon="cut" /> Haircuts and Styling
            </router-link>
            <router-link to="/manicure" class="dropdown-item">
              <font-awesome-icon icon="hand-sparkles" /> Manicure and Pedicure
            </router-link>
            <router-link to="/facial" class="dropdown-item">
              <font-awesome-icon icon="spa" /> Facial Treatments
            </router-link>
          </div>
        </li> -->
        <li class="nav-item">
          <router-link to="/reservation" class="nav-link" active-class="active">
            <font-awesome-icon icon="calendar-alt" /> Reservation
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/register" class="nav-link" active-class="active">
            <font-awesome-icon icon="user-plus" /> Sign Up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link" active-class="active">
            <font-awesome-icon icon="sign-in-alt" /> Login
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto align-items-center">
        <li class="nav-item">
          <router-link to="/reservation" class="nav-link" active-class="active" style="color: black;">
            <font-awesome-icon icon="calendar-alt" /> Reservation
          </router-link>
        </li>
        <li class="nav-item" style="margin-left: 10px;">
          <p class="nav-link" style="color: black; display: contents;">
            <font-awesome-icon icon="user" />
            {{ currentUser.userID }}
          </p>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" @click.prevent="showLogoutModal" style="color: black;">
            <font-awesome-icon icon="sign-out-alt" /> LogOut
          </a>
        </li>
      </div>
    </nav>

    <div class="container-fluid px-0" style="margin-top: 56px;">
      <router-view />
    </div>
    <div v-if="showModal" class="modal fade show" tabindex="-1" role="dialog" style="display: block; background-color: rgba(0, 0, 0, 0.5);">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Logout</h5>
            <button type="button" class="close" aria-label="Close" @click="closeModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Apakah Anda yakin ingin keluar?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">Batal</button>
            <button type="button" class="btn btn-danger" @click="confirmLogout">Logout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '@/store/auth.module';
import { computed, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const authStore = useAuthStore();

    const currentUser = computed(() => authStore.user);
    const showAdminBoard = computed(() => currentUser.value && currentUser.value.roles && currentUser.value.roles.includes('ROLE_ADMIN'));
    const showModeratorBoard = computed(() => currentUser.value && currentUser.value.roles && currentUser.value.roles.includes('ROLE_MODERATOR'));
    const router = useRouter();
    const showModal = ref(false);

    const showLogoutModal = () => {
      showModal.value = true;
    };

    const closeModal = () => {
      showModal.value = false;
    };
    const confirmLogout = () => {
      authStore.logout();
      closeModal();
      setTimeout(() => {
        router.push('/login');
      }, 1000); 
    };
    onMounted(() => {
      if (!currentUser.value) {
        router.push('/login');
      }
    });
    return {
      currentUser,
      showAdminBoard,
      showModeratorBoard,
      showModal,
      showLogoutModal,
      closeModal,
      confirmLogout,
    };
  },
};
</script>

<style>
#app {
  width: 100%;
}
.nav-item {
  --clr: rgb(25, 23, 22);
  --clr-alpha: rgb(247, 197, 159, 0.1);
  animation: spinner 1.6s infinite ease;
  transform-style: preserve-3d;
}
.nav-link:hover {
  transform: translateX(10px);
  opacity: 0.9;
}
.nav-link{
  margin-left: 10px;
}
</style>
