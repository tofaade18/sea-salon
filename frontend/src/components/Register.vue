<template>
  <section class="text-center text-lg-start">
    <div class="container pt-4">
      <div class="row g-0 align-items-center">
        <div class="col-lg-6 mb-5 mb-lg-0 p-0">
          <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" style="width: 485px; border-radius: 25px; padding: 10px; box-shadow: 5px 10px 5px lightblue; height: 505px" alt="" />
        </div>
        <div class="col-lg-6 mb-5 mb-lg-0 p-0">
          <div class="card cascading-right bg-body-tertiary" style="
              backdrop-filter: blur(30px); margin-right: -39px; border-radius: 15px; padding: 10px; box-shadow: 10px 5px 5px black;
              ">
            <div class="card-body p-3 shadow-5 text-center">
              <h2 class="fw-bold mb-5">Daftar sekarang</h2>
              <Form @submit="handleRegister" :validation-schema="schema">
                <div v-if="!successful">
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <label class="form-label d-flex justify-content-flex-start" for="userID">User ID</label>
                        <Field name="userID" type="text" class="form-control" />
                        <ErrorMessage name="userID" class="error-feedback" />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <label class="form-label d-flex justify-content-flex-start" for="fullName">Full Name</label>
                        <Field name="fullName" type="text" class="form-control" />
                        <ErrorMessage name="fullName" class="error-feedback" />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <label for="phoneNumber" class="d-flex justify-content-flex-start">No. HP</label>
                        <Field name="phoneNumber" type="text" class="form-control" />
                        <ErrorMessage name="phoneNumber" class="error-feedback" />
                      </div>
                    </div>
                  </div>
                  <div class="form-outline mb-4">
                    <label for="email" class="d-flex justify-content-flex-start">Email</label>
                    <Field name="email" type="email" class="form-control" />
                    <ErrorMessage name="email" class="error-feedback" />
                  </div>
                  <div class="form-outline mb-4">
                    <label for="password" class="d-flex justify-content-flex-start">Password</label>
                    <Field name="password" type="password" class="form-control" />
                    <ErrorMessage name="password" class="error-feedback" />
                  </div>
                
                  <button type="submit" class="btn btn-primary btn-block mb-4" :disabled="loading">
                    <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                    Sign Up
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { useAuthStore } from "../store/auth.module";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
export default {
  name: "Register-page",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  setup() {
    const toast = useToast();
    const router = useRouter()
    const schema = yup.object().shape({
      userID: yup
        .string()
        .required("userID is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      fullName: yup
      .string()
      .required("Fullname is required!")
      .min(3, "Must be at least 3 characters!")
      .max(100, "Must be maximum 100 characters!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
      phoneNumber: yup
        .string()
        .required("Phone number is required!")
        .matches(/^[0-9]+$/, "Must be a valid phone number")
        .min(10, "Must be at least 10 digits!")
        .max(15, "Must be maximum 15 digits!"),
    });

    const handleRegister = async (values) => {
      // Your registration logic here
      try {
        const authStore = useAuthStore();
        const data = await authStore.register(values);
        toast.success(data.message);
        setTimeout(() => {
          router.push("/login");
        }, 3000); // Navigate to login route after 3 seconds
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    return {
      schema,
      handleRegister,
    };
  },
};
</script>

<style scoped>
.cascading-right {
  margin-right: -50px;
}

@media (max-width: 991.98px) {
  .cascading-right {
    margin-right: 0;
  }
}
</style>