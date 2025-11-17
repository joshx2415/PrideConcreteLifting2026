<template>
  <form name="PrideForm" id="myForm" method="post" data-netlify="true" enctype="application/x-www-form-urlencoded"
    @submit.prevent="checkForm"
    class="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white border md:rounded-lg lg:w-1/2">
    <input type="hidden" name="form-name" value="PrideForm" />
    <div class="flex flex-wrap mb-6 -mx-3">

      <!-- NAME -->
      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <label class="text-base leading-7 text-gray-500" for="grid-title">Name</label>
        <input
          class="w-full px-4 py-2 mt-2 text-base text-black bg-blue-900 transition duration-500 ease-in-out transform border-transparent rounded-sm bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
          id="grid-title" type="text" name="name" v-model="formData.name" placeholder="eg. John Smith">
      </div>

      <!-- PHONE NUMBER -->
      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <label class="text-base leading-7 text-gray-500" for="grid-url">Phone Number</label>
        <input
          class="w-full px-4 py-2 mt-2 text-base text-black bg-blue-900 transition duration-500 ease-in-out transform border-transparent rounded-sm bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
          id="grid-url" type="tel" name="telephone" v-model="formData.telephone" placeholder="(123) 456-7890">
      </div>
    </div>

    <div class="flex flex-wrap mb-2 -mx-3">

      <!-- EMAIL -->
      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <label class="text-base leading-7 text-gray-500" for="email"> Email <span
            class="text-red">*</span></label>
        <input
          class="w-full px-4 py-2 mt-2 text-base text-black bg-blue-900 transition duration-500 ease-in-out transform border-transparent rounded-sm bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
          id="email" type="email" name="email" v-model="formData.email" placeholder="email@example.com"
          required="">
      </div>

    </div>

    <div class="flex flex-wrap mb-6 -mx-3">
      <!-- MESSAGE -->
      <div class="w-full px-3">
        <label class="text-base leading-7 text-gray-500" for="message">Message <span
            class="text-red">*</span></label>
        <textarea
          class="w-full px-4 py-2 mt-2 text-base text-black bg-blue-900 transition duration-500 ease-in-out transform border-transparent rounded-sm bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 apearance-none autoexpand"
          id="description" type="text" name="message" v-model="formData.message" placeholder="Your Message..."
          required=""></textarea>
      </div>
    </div>

    <div class="flex items-center w-full pt-4">

      <!-- ERRORS! -->
      <p v-if="errors.length" class="text-red p-3">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
      </p>

      <!-- SUBMIT -->
      <button type="submit" name="button" class="flex justify-center w-full butt py-3 font-semibold text-white transition duration-500 ease-in-out transform bg-blue-900 border-blue-600 rounded-sm text-base focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800 ">
        Submit
        <!-- <Icon name="fa-solid:paper-plane" class="w-6 h-6" /> -->
      </button>
    </div>

  </form>
</template>

<script>
  export default {
    data() {
      return {
        formData: {
          name: null,
          telephone: null,
          email: null,
          message: null
        },
        errors: [],
      }
    },
    methods: {
      encode(data) {
        return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&");
      },
      checkForm: function (e) {
        if (this.formData.email && this.formData.message) {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: this.encode({ "form-name": "PrideForm", ...this.formData })
          })
            .then(() => {
              document.getElementById("myForm").innerHTML = `
            <div class="flex flex-col w-full mb-4 text-left p-4 lg:text-center">
              <h1 id="contact" class="mb-2 text-3xl font-bold text-black tracking-tighter lg:text-5xl md:text-4xl">
                <!-- <Icon name="fa-solid:satellite-dish" class="w-6 h-6" /> -->  Contact Form Submitted!
              </h1>
              <p class="mt-4 text-lg tracking-wide text-black">
                Thank you for reaching out to us - we will contact you as soon as we are able.
              </p>
            </div>
            `
            })
            .catch(error => alert(error));
        }
        this.errors = [];
        if (!this.formData.email) {
          this.errors.push('Email required.');
        }
        if (!this.formData.message) {
          this.errors.push('Message required.');
        }
        e.preventDefault();
      }
    }
  }
</script>
