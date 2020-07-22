<template>
    <AppUser
        v-if="user"
        :user="user"
    />
</template>
<script>
import { mapState } from 'vuex'
import AppUser from '../components/AppUser/AppUser'
export default {
  components: {
    AppUser,
  },
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
<style lang="scss" scoped>
img {
    border-radius: 50%;
    display: block;
    margin: auto;
}

h1 {
    margin-top: 1.5rem;
    text-align: center;
}
</style>