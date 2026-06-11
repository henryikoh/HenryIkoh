<template>
  <div class="dark:bg-dark min-h-screen">
    <Navbar :show-profile="false" />
    <div class="wrapper w-11/12 md:w-3/5 mx-auto pt-8 md:pt-20 pb-20">
      <!-- Header -->
      <div class="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
        <img
          class="h-32 w-32 md:h-40 md:w-40 object-cover rounded-xl"
          src="/profile.jpeg"
          alt="Henry Ikoh"
        />
        <div>
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2">
            Henry Ikoh
          </h1>
          <p class="text-lg md:text-2xl text-gray-600 dark:text-gray-400 font-light">
            Systems Architect &amp; Product Engineer
          </p>
        </div>
      </div>

      <!-- Story -->
      <div class="space-y-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 font-light leading-relaxed">
        <p>
          I partner with founders, leaders, and organizations to diagnose
          broken systems and build the infrastructure their next stage
          requires. Most problems people fight every day aren't people
          problems &mdash; they're system problems. My work is helping you see
          the system clearly, then redesigning it so it actually works.
        </p>
        <p>
          I didn't take a straight path here. I stumbled into product
          management through a journey of self-discovery and many failed
          experiments &mdash; and somewhere along the way I realized that
          everything around us is a system: products, teams, cities,
          countries. Most are just poorly designed. That realization became
          the lens for everything I build.
        </p>
        <p>
          Today that lens lives in
          <nuxt-link
            to="/system"
            class="underline underline-offset-4 hover:opacity-70 transition-opacity text-gray-900 dark:text-white"
            >The <span style="color: #00ff9f">Zero</span> Point System</nuxt-link
          >
          &mdash; my process for mapping what's broken, redesigning from first
          principles, and proving the new design works with real data. I use
          it with early-stage founders, organizations that need a systems
          audit, and social enterprises ready to scale.
        </p>
        <p>
          When I'm not working with clients, I write. My
          <nuxt-link
            to="/thoughts"
            class="underline underline-offset-4 hover:opacity-70 transition-opacity text-gray-900 dark:text-white"
            >thoughts</nuxt-link
          >
          cover systems thinking, product building, Nigeria, and personal
          growth &mdash; because the people who build the future aren't
          special. They just refused to let the old system define what's
          possible and started building a new one.
        </p>
      </div>

      <!-- Links -->
      <div class="mt-12">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Find me elsewhere
        </h2>
        <div class="flex flex-wrap gap-3">
          <a
            v-for="link in socials"
            :key="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener"
            class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:border-gray-900 dark:hover:border-gray-300 transition-colors"
          >
            {{ link.label }}
          </a>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-12 border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-gray-50 dark:bg-gray-800">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Got a broken system?
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          If you see dysfunction everywhere and you're done with band-aid
          fixes, let's talk.
        </p>
        <nuxt-link
          to="/contact"
          class="inline-block bg-black dark:bg-gray-600 text-white px-7 py-3 text-lg rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
        >
          Diagnose Your System &rarr;
        </nuxt-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      socials: [
        { label: 'X / Twitter', url: 'https://x.com/henryikoh_' },
        {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/in/henry-ikoh-22a8b3109/',
        },
        { label: 'GitHub', url: 'https://github.com/henryikoh' },
        { label: 'YouTube', url: 'https://www.youtube.com/@HenryIkoh' },
        { label: 'Newsletter', url: 'https://henryikoh.substack.com/' },
        { label: 'Medium', url: 'https://medium.com/@henryikoh' },
      ],
    }
  },
  head() {
    return {
      title: 'About - Henry Ikoh',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Henry Ikoh is a systems architect and product engineer who helps founders and organizations see what's broken and design systems that actually work.",
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'About - Henry Ikoh',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            "Henry Ikoh is a systems architect and product engineer who helps founders and organizations see what's broken and design systems that actually work.",
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.henryikoh.com/about',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'About - Henry Ikoh',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'Systems architect and product engineer helping founders design systems that actually work.',
        },
      ],
      link: [{ rel: 'canonical', href: 'https://www.henryikoh.com/about' }],
    }
  },
}
</script>
