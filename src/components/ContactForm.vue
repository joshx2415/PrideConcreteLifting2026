<template>
  <form 
    name="PrideForm2026" 
    id="myForm" 
    method="post" 
    netlify-honeypot="bot-field" 
    data-netlify="true" 
    enctype="application/x-www-form-urlencoded"
    @submit.prevent="checkForm"
    class="flex flex-col w-full max-w-4xl p-10 px-8 pt-8 pb-8 mx-auto transition duration-500 ease-in-out transform bg-white rounded-xl shadow-2xl"
  >
    <input type="hidden" name="form-name" value="PrideForm2026" />
    
    <div class="hidden">
      <label>
        Don't fill this out if you're human: 
        <input name="bot-field" v-model="formData.botField" />
      </label>
    </div>

    <div class="flex flex-wrap mb-6 -mx-3">
      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <label class="block mb-2 text-lg font-semibold text-navy-900" for="grid-title">Name</label>
        <input
          class="form-input w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pride-red focus:border-transparent"
          id="grid-title" type="text" name="name" v-model="formData.name" placeholder="John Smith">
      </div>

      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <label class="block mb-2 text-lg font-semibold text-navy-900" for="grid-url">Phone Number</label>
        <input
          class="form-input w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pride-red focus:border-transparent"
          id="grid-url" type="tel" name="telephone" v-model="formData.telephone" placeholder="(123) 456-7890">
      </div>
    </div>

    <div class="flex flex-wrap mb-6 -mx-3">
      <div class="w-full px-3">
        <label class="block mb-2 text-lg font-semibold text-navy-900" for="email"> 
          Email <span class="text-pride-red">*</span>
        </label>
        <input
          class="form-input w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pride-red focus:border-transparent"
          id="email" type="email" name="email" v-model="formData.email" placeholder="email@example.com"
          required="">
      </div>
    </div>

    <div class="flex flex-wrap mb-6 -mx-3">
      <div class="w-full px-3">
        <label class="block mb-2 text-lg font-semibold text-navy-900" for="message">
          Message <span class="text-pride-red">*</span>
        </label>
        <textarea
          class="form-input w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pride-red focus:border-transparent min-h-[150px]"
          id="description" type="text" name="message" v-model="formData.message" placeholder="Your Message..."
          required=""></textarea>
      </div>
    </div>

    <div class="flex flex-col items-center w-full pt-4 space-y-4">
      <div v-if="errors.length" class="w-full p-4 text-pride-red bg-red-50 border border-red-200 rounded-lg" role="alert">
        <p class="font-semibold mb-2">Please correct the following error(s):</p>
        <ul class="list-disc list-inside">
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </div>

      <button
        type="submit"
        name="button"
        :disabled="isSubmitting"
        :aria-busy="isSubmitting"
        :class="{'opacity-75 cursor-not-allowed': isSubmitting, 'hover:scale-105': !isSubmitting}"
        class="flex items-center justify-center w-full gap-3 px-6 py-4 text-lg font-semibold text-white transition duration-500 ease-in-out transform rounded-lg bg-pride-red shadow-lg hover:bg-red-700 focus:shadow-outline focus:outline-none focus:ring-4 focus:ring-red-300">

        <svg v-if="isSubmitting" class="animate-spin -ml-1 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>

        <span>{{ isSubmitting ? 'Sending...' : 'Submit' }}</span>

        <svg v-if="!isSubmitting" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
          <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"/>
        </svg>
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
          message: null,
          botField: ""
        },
        errors: [],
        isSubmitting: false,
      }
    },
    methods: {
      encode(data) {
        return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&");
      },
      checkForm: function (e) {
        this.errors = [];

        if (this.formData.email && this.formData.message) {
          this.isSubmitting = true;

          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: this.encode({ 
              "form-name": "PrideForm2026", 
              "bot-field": this.formData.botField, 
              ...this.formData 
            })
          })
            .then(() => {
              // ... success ...
              document.getElementById("myForm").innerHTML = `<div class="flex flex-col w-full p-8 text-center"><h3 class="mb-4 text-3xl font-bold text-navy-900">Contact Form Submitted!</h3><p class="text-xl text-gray-600">Thank you for reaching out to us - we will contact you as soon as we are able.</p></div>`
            })
            .catch(error => {
              alert(error);
              this.isSubmitting = false;
            });
        } else {
          if (!this.formData.email) this.errors.push('Email required.');
          if (!this.formData.message) this.errors.push('Message required.');
        }
        
        e.preventDefault();
      }
    }
  }
</script>

<style scoped>
.form-input {
  transition: all 0.3s ease-in-out;
}
.form-input:focus {
  outline: none;
}
</style>