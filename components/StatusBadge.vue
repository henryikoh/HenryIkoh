<template>
  <span
    class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
    :class="statusClass"
  >
    <span class="w-2 h-2 rounded-full mr-2" :class="dotClass"></span>
    {{ status }}
  </span>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      required: true,
      validator: (value) => ['Active', 'Completed', 'In Progress', 'Upcoming'].includes(value)
    }
  },
  computed: {
    statusClass() {
      const classes = {
        'Active': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
        'Completed': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
        'In Progress': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
        'Upcoming': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
      }
      return classes[this.status] || classes['Active']
    },
    dotClass() {
      const classes = {
        'Active': 'bg-green-500',
        'Completed': 'bg-blue-500',
        'In Progress': 'bg-yellow-500',
        'Upcoming': 'bg-purple-500'
      }
      return classes[this.status] || classes['Active']
    }
  }
}
</script>
