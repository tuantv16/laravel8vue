<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2 class="contact-title">Thông tin liên lạc</h2>
      </div>
      <div class="col-lg-8">
        <form
          class="form-contact contact_form"
          v-on:submit.prevent="saveContact"
          action=""
          method="post"
          id="contactForm"
          novalidate="novalidate"
        >
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <textarea
                  class="form-control w-100"
                  name="message"
                  v-model="message"
                  id="message"
                  cols="30"
                  rows="9"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Enter Message'"
                  placeholder=" Enter Message"
                ></textarea>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <input
                  class="form-control valid"
                  name="name"
                  id="name"
                  type="text"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Enter your name'"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <input
                  class="form-control valid"
                  name="email"
                  id="email"
                  type="email"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Enter email address'"
                  @change="validEmail"
                  placeholder="Email"
                />
                <span v-bind:class="{ err_input: isEmailActive, none_error: doneValid.email }" class="">{{error.email}}</span>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <input
                  class="form-control"
                  name="subject"
                  id="subject"
                  type="text"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Enter Subject'"
                  placeholder="Enter Subject"
                />
              </div>
            </div>
          </div>
          <div class="form-group mt-3">
            <button
              type="submit"
              class="button button-contactForm boxed-btn"
              v-on:click="saveContact"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <div class="col-lg-3 offset-lg-1">
        <div class="media contact-info">
          <span class="contact-info__icon"><i class="ti-home"></i></span>
          <div class="media-body">
            <h3>Buttonwood, California.</h3>
            <p>Rosemead, CA 91770</p>
          </div>
        </div>
        <div class="media contact-info">
          <span class="contact-info__icon"><i class="ti-tablet"></i></span>
          <div class="media-body">
            <h3>+1 253 565 2365</h3>
            <p>Mon to Fri 9am to 6pm</p>
          </div>
        </div>
        <div class="media contact-info">
          <span class="contact-info__icon"><i class="ti-email"></i></span>
          <div class="media-body">
            <h3>support@colorlib.com</h3>
            <p>Send us your query anytime!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("Component contact.");
  },
  data() {
    return {
      message: '',
      error: {
          email : ''
      },
      doneValid: {
          email: false
      },
      isEmailActive : false
    };
  },
  methods: {
    //validate email
    validEmail: function (e) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(e.target.value);
        var email = e.target.value;
      if (!re.test(email)) {
          this.error.email = 'Email này không hợp lệ';
          this.isEmailActive = true;
          this.doneValid.email = false;
      } else {
          this.error.email = 'Email hợp lệ';
          this.isEmailActive = false;
          this.doneValid.email = true;
      }
    },
    saveContact: function (event) {
      event.preventDefault();
      console.log(this.message);
    },
  },
};
</script>

<style >
    .err_input {
        color: #ff2828 !important;
        font-size:13px
    }

    .none_error {
        color: green !important;
        font-size:13px
    }
</style>
