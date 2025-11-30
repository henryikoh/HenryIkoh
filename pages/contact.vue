<template>
  <div class="dark:bg-dark min-h-screen">
    <Navbar :show-profile="false" />
    <div class="wrapper w-11/12 md:w-3/5 mx-auto pt-8 md:pt-32 pb-20">
      <!-- Header -->
      <div class="mb-12">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Let's Build Your Future
        </h1>
        <p class="text-lg md:text-2xl text-gray-600 dark:text-gray-400 font-light">
          Ready to transform your vision into reality? Whether you need AI systems, product development, relationship management, or strategic guidance - I'm here to help.
        </p>
      </div>

      <!-- Success Message -->
      <div v-if="formSubmitted" class="bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-200 px-6 py-4 rounded-lg mb-8">
        <h3 class="font-bold text-xl mb-2">Thanks for reaching out!</h3>
        <p>I've received your message and will get back to you within 24-48 hours.</p>
      </div>

      <!-- Contact Form -->
      <form
        v-if="!formSubmitted"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
        class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-10 mb-8"
      >
        <!-- Netlify form detection -->
        <input type="hidden" name="form-name" value="contact" />

        <!-- Honeypot for spam prevention -->
        <p class="hidden">
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </p>

        <!-- Name Field -->
        <div class="mb-6">
          <label for="name" class="block text-gray-900 dark:text-white font-medium mb-2 text-lg">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            v-model="formData.name"
            required
            class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-400"
            placeholder="John Doe"
          />
        </div>

        <!-- Email Field -->
        <div class="mb-6">
          <label for="email" class="block text-gray-900 dark:text-white font-medium mb-2 text-lg">
            Your Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            v-model="formData.email"
            required
            class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-400"
            placeholder="john@example.com"
          />
        </div>

        <!-- Subject Field -->
        <div class="mb-6">
          <label for="subject" class="block text-gray-900 dark:text-white font-medium mb-2 text-lg">
            What do you need help with? *
          </label>
          <select
            id="subject"
            name="subject"
            v-model="formData.subject"
            required
            class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-400"
          >
            <option value="">Select a topic...</option>
            <option value="AI & Product Systems">AI & Product Systems</option>
            <option value="Relationships & Connection">Relationships & Connection</option>
            <option value="People & Transformation">People & Transformation</option>
            <option value="Integrated Solutions">Integrated Solutions</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
        </div>

        <!-- Message Field -->
        <div class="mb-6">
          <label for="message" class="block text-gray-900 dark:text-white font-medium mb-2 text-lg">
            Tell me about your vision *
          </label>
          <textarea
            id="message"
            name="message"
            v-model="formData.message"
            required
            rows="6"
            class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-400 resize-y"
            placeholder="What are you trying to build? What challenges are you facing? What does success look like for you?"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          :disabled="isSubmitting"
          class="w-full bg-black dark:bg-gray-600 text-white px-8 py-4 text-lg md:text-xl rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          {{ isSubmitting ? 'Sending...' : 'Send Message' }}
        </button>
      </form>

      <!-- Email Fallback -->
      <div class="text-center">
        <p class="text-gray-600 dark:text-gray-400 mb-4 text-lg">
          Prefer email?
        </p>
        <a
          href="mailto:henry@thinksenpai.com?subject=Contact from HenryIkoh.com"
          class="inline-block bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 text-lg rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
        >
          Email me directly
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  head() {
    return {
      title: 'Contact - Henry Ikoh',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Get in touch with Henry Ikoh to discuss your vision, product ideas, or collaboration opportunities.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Contact - Henry Ikoh'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Get in touch with Henry Ikoh to discuss your vision, product ideas, or collaboration opportunities.'
        }
      ]
    }
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      isSubmitting: false,
      formSubmitted: false
    }
  },
  methods: {
    async handleSubmit(e) {
      this.isSubmitting = true

      const form = e.target
      const formData = new FormData(form)

      try {
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        })

        this.formSubmitted = true
        this.isSubmitting = false

        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } catch (error) {
        console.error('Form submission error:', error)
        alert('There was an error submitting the form. Please try emailing me directly.')
        this.isSubmitting = false
      }
    }
  }
}
</script>
