<template>
    <div class="sea-salon">
      <h1>SEA Salon</h1>
      <p class="slogan">“Beauty and Elegance Redefined”</p>
      
      <h2>Services Offered</h2>
      <ul>
        <li><a href="/hairstyle">Haircuts and Styling</a></li>
        <li><a href="/manicure">Manicure and Pedicure</a></li>
        <li><a href="/facial">Facial Treatments</a></li>
      </ul>
      <h2>Contact Details</h2>
      <ul class="contacts">
        <li>
          <strong>Thomas</strong>
          <p><i class="fas fa-phone"></i>Phone Number: 08123456789</p>
        </li>
        <li>
          <strong>Sekar</strong>
          <p><i class="fas fa-phone"></i>Phone Number: 08164829372</p>
        </li>
      </ul>
    </div>
    <div class="feedback-form">
    <h2 id="fh2">WE APPRECIATE YOUR REVIEW!</h2>
<h6 id="fh6">Your review will help us to improve our products and customer services.</h6>


<form id="feedback" @submit.prevent="processReview">
  <div class="pinfo">Your personal info</div>
  
<div class="form-group">
  <div class="col-md-4 inputGroupContainer">
  <div class="input-group">
  <span class="input-group-addon"><i class="fa fa-user"></i></span>
  <label for="name"></label>
  <input name="name" placeholder="Enter your name" class="form-control" type="text" v-model="ulasans.name" required>
    </div>
  </div>
</div>
 <div class="pinfo">Rate our overall services.</div>
  

<div class="form-group">
  <div class="col-md-4 inputGroupContainer">
  <div class="input-group">
  <span class="input-group-addon"><i class="fa fa-heart"></i></span>
  <label for="rating"></label>
   <select class="form-control" id="rating" v-model="ulasans.rating" required>
      <option value=1>1</option>
      <option value=2>2</option>
      <option value=3>3</option>
      <option value=4>4</option>
      <option value=5>5</option>
    </select>
    </div>
  </div>
</div>

 <div class="pinfo">Write your feedback.</div>
  

<div class="form-group">
  <div class="col-md-4 inputGroupContainer">
  <div class="input-group">
  <span class="input-group-addon"><i class="fa fa-pencil"></i></span>
  <input name="ulasan" class="form-control" id="review" type="text" v-model="ulasans.ulasan" required>
    </div>
  </div>
</div>

 <button type="submit" class="btn btn-primary">Submit</button>


</form>
<h2 style="margin-bottom: 30px; margin-left: 20px">Review from Our Customers</h2>
<div v-for="item in ulasanall" :key="item.id" class="review" style="margin-left: 20px;">
    <div class="review-box">
      <div class="review-author">
        <div class="review-author-img">
        <i class="fas fa-circle-user"></i><strong style="margin-left: 5px;">{{item.name}}</strong>-<span v-for="n in item.rating" :key="n" class="star">★</span>
        </div>
      </div>
      <div class="review-comment">
        <p>{{item.ulasan}}</p>
      </div>
    </div>
    </div>
</div>
  </template>
  
  <script>
import { useToast } from 'vue-toastification';
import UlasanDataService from "../services/ulasandataservice.js";
import { useAuthStore } from '@/store/auth.module';
  export default {
    name: 'SeaSalon',
    data() {
      return {
        ulasans: {
          name: '',
          ulasan: '',
          rating: ''
        },
        message:'',
        ulasanall: null
      };
    },
    computed: {
      isUser() {
        const authStore = useAuthStore();
        return authStore.user;
      }
    },
    methods: {
      submitReview() {
        var data = {
          name: this.ulasans.name,
          ulasan: this.ulasans.ulasan,
          rating: this.ulasans.rating,
          userId: this.isUser.id
        };
        const toast = useToast();
        UlasanDataService.create(data)
          .then(response => {
            console.log(response.data);
            toast.success('Ulasan submitted successfully!');
            this.list()
          })
          .catch(e => {
            console.log(e.message);
            toast.error(e.message)
          });
        this.ulasans = {
          name: '',
          ulasan: '',
          rating: ''
        };
      },
      updateReview() {
        var data = {
          name: this.ulasans.name,
          ulasan: this.ulasans.ulasan,
          rating: this.ulasans.rating
        }
        const toast = useToast();
        UlasanDataService.update(this.isUser.id, data)
          .then(response => {
            console.log(response.data);
            toast.success('Ulasan updated successfully!');
            this.list()
          })
          .catch(e => {
            console.log(e.message);
            toast.error(e.message)
          });
      },
      processReview() {
        var a = 0
        for (let index = 0; index < this.ulasanall.length; index++) {
          if (this.ulasanall[index].userId === this.isUser.id) {
            a++
            break
          }}
        if (a==1) {
          this.updateReview();
        }
        else {
          console.log(this.isUser.id)
          console.log(this.ulasanall.userId)
          this.submitReview();
        }
      },
      list() {
        UlasanDataService.getAll()
          .then(response => {
            this.ulasanall = response.data;
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
      this.list();
    }
  }
  </script>
  
  <style scoped>
  .sea-salon {
    text-align: center;
    padding: 2rem;
    font-family: Arial, sans-serif;
  }
  
  .slogan {
    font-style: italic;
    margin-bottom: 2rem;
  }
  
  h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 1rem;
  }
  
  .contacts li p {
    margin: 0;
  }
  .feedback-form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
  }
  #feedback {
  width: 100%;
  margin: 10px auto;
  padding: 20px;
  border: solid 1px #f1f1f1;
  background: #fbfbfb;
  box-shadow: #e6e6e6 0 0 4px ;
  border-radius: 0.25rem;
}

@media (max-width: 720px) {
  #feedback{
    max-width: 90%;
  }
}

@media (max-width: 500px) {
  #feedback{
    padding: 10px;
  }
}

#fh2{
 padding: 2px 15px;
 color: #ff4d4d;
 text-align: center;
 
 
}

@media (max-width: 400px) {
  #fh2{
    font-size: 20px;
  }
}


#fh6 {
 padding: 2px 15px;
 color: #01549b;
 text-align: center;
 font-weight: normal;
}

@media (max-width: 400px) {
  #fh6{
    font-size: 12px;
  }
}

.pinfo {
 margin: 8px auto;
 font-weight: bold;
 line-height: 1.5;
 color: #0d0d0d;
}
.form-group {
  margin-bottom: 1rem;
}
  
.form-control {
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  line-height: 1.25;
  font-weight: bold;
  color: #6C6262;
  background-color: #fff;
  background-image: none;
  -webkit-background-clip: padding-box;
          background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
}

.form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}

.form-control:focus {
  color: #696060;
  background-color: #fff;
  border-color: #5cb3fd;
  outline: none;
}

.form-control::-webkit-input-placeholder {
  color: #F34949;
  opacity: 1;
}

.form-control::-moz-placeholder {
  color: brown;
  opacity: 1;
}

.form-control:-ms-input-placeholder {
  color: blue;
  opacity: 1;
}

.form-control::placeholder {
  color: white;
  opacity: 1;
}

.form-control:disabled, .form-control[readonly] {
  background-color: red;
  opacity: 1;
}

.form-control:disabled {
  cursor: not-allowed;
}

select.form-control:not([size]):not([multiple]) {
  height: calc(2.25rem + 2px);
}

select.form-control:focus::-ms-value {
  color: green;
  background-color: #fff;
}

.form-control-file,
.form-control-range {
  display: block;
}

.input-group {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
}

.input-group .form-control {
  position: relative;
  z-index: 2;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  width: 1%;
  margin-bottom: 0;
}

.input-group .form-control:focus, .input-group .form-control:active, .input-group .form-control:hover {
  z-index: 3;
}

.input-group-addon,
.input-group-btn,
.input-group .form-control {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.input-group-addon:not(:first-child):not(:last-child),
.input-group-btn:not(:first-child):not(:last-child),
.input-group .form-control:not(:first-child):not(:last-child) {
  border-radius: 0;
}

.input-group-addon,
.input-group-btn {
  white-space: nowrap;
  vertical-align: middle;
}

.input-group-addon {
  width: 45px;
  padding: 0.5rem 0.75rem;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.25;
  color: #2e2e2e;
  text-align: center;
  background-color: #eceeef;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}

.input-group-addon.form-control-sm,
.input-group-sm > .input-group-addon,
.input-group-sm > .input-group-btn > .input-group-addon.btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}

.input-group-addon.form-control-lg,
.input-group-lg > .input-group-addon,
.input-group-lg > .input-group-btn > .input-group-addon.btn {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}

.input-group-addon input[type="radio"],
.input-group-addon input[type="checkbox"] {
  margin-top: 0;
}

.input-group .form-control:not(:last-child),
.input-group-addon:not(:last-child),
.input-group-btn:not(:last-child) > .btn,
.input-group-btn:not(:last-child) > .btn-group > .btn,
.input-group-btn:not(:last-child) > .dropdown-toggle,
.input-group-btn:not(:first-child) > .btn:not(:last-child):not(.dropdown-toggle),
.input-group-btn:not(:first-child) > .btn-group:not(:last-child) > .btn {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}

.input-group-addon:not(:last-child) {
  border-right: 0;
}

.input-group .form-control:not(:first-child),
.input-group-addon:not(:first-child),
.input-group-btn:not(:first-child) > .btn,
.input-group-btn:not(:first-child) > .btn-group > .btn,
.input-group-btn:not(:first-child) > .dropdown-toggle,
.input-group-btn:not(:last-child) > .btn:not(:first-child),
.input-group-btn:not(:last-child) > .btn-group:not(:first-child) > .btn {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

.form-control + .input-group-addon:not(:first-child) {
  border-left: 0;
}

.btn {
  display: inline-block;
  font-weight: normal;
  line-height: 1.25;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.btn:focus, .btn:hover {
  text-decoration: none;
}

.btn:focus, .btn.focus {
  outline: 0;
  -webkit-box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.25);
          box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.25);
}

.btn.disabled, .btn:disabled {
  cursor: not-allowed;
  opacity: .65;
}

.btn:active, .btn.active {
  background-image: none;
}

a.btn.disabled,
fieldset[disabled] a.btn {
  pointer-events: none;
}

.btn-primary {
  color: #fff;
  background-color: #0275d8;
  border-color: #0275d8;
}

.btn-primary:hover {
  color: #fff;
  background-color: #025aa5;
  border-color: #01549b;
}

.btn-primary:focus, .btn-primary.focus {
  -webkit-box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.5);
          box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.5);
}

.btn-primary.disabled, .btn-primary:disabled {
  background-color: #0275d8;
  border-color: #0275d8;
}

.btn-primary:active, .btn-primary.active,
.show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #025aa5;
  background-image: none;
  border-color: #01549b;
}
  </style>