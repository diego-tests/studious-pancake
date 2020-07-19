<template>
    <div
        v-if="user"
        class="user"
    >
        <h1 v-text="fullName" />
        <img
            :src="user.avatar"
            :alt="fullName"
        >
        <a 
            :href="`mailto:${user.email}`"
        >email: {{ user.email }}</a>
        {{ user }}
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      user: state=> state.api.displayedUser,
    }),
    fullName() {
      return `${this.user.first_name} ${this.user.last_name}`
    },
  },
}
</script>