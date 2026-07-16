import Vue from 'vue'

// v-reveal — fades/rises an element in when it scrolls into view.
// Optional value = stagger delay in ms, e.g. v-reveal="120"

let observer = null

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            entry.target.classList.remove('reveal-hidden')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
  }
  return observer
}

Vue.directive('reveal', {
  inserted(el, binding) {
    const reducedMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion || !('IntersectionObserver' in window)) return

    // Content already on screen at hydration stays put — no flash
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return

    if (binding.value) {
      el.style.setProperty('--motion-delay', `${binding.value}ms`)
    }
    el.classList.add('reveal-hidden')
    getObserver().observe(el)
  },
  unbind(el) {
    if (observer) observer.unobserve(el)
  },
})
