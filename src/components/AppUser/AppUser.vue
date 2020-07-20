<template>
    <section
        v-if="user"
        class="user"
    >
        <div class="content">
            <div class="img-wrapper">
                <img
                    :src="user.avatar"
                    :alt="fullName"
                >
            </div>
            <h1 v-text="fullName" />
            <a 
                class="mailto"
                :href="`mailto:${user.email}`"
            >
                <EmailSvg class="email-svg" /> {{ user.email }}
            </a>
            <div class="links">
                <router-link to="/">
                    <ListSvg class="list-svg" />
                </router-link>
            </div>
        </div>
    </section>
</template>
<script>
import EmailSvg from './images/mail.svg'
import ListSvg from './images/list.svg'
export default {
  components: {
    EmailSvg,
    ListSvg,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    fullName() {
      return `${this.user.first_name} ${this.user.last_name}`
    },
  },
}
</script>
<style lang="scss" scoped>
.user {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: calc(100vh - 2rem);
}

.content {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 0 20rem;
    position: relative;
}

.img-wrapper {
    min-height: 12.8rem;
}

img {
    border-radius: 50%;
    display: block;
    margin: auto;
}

h1 {
    margin-top: 1.5rem;
    text-align: center;
}

.mailto {
    align-items: center;
    color: black;
    display: flex;
}

.email-svg {
    margin: 0 1rem 0 0;
}

.links {
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
}
</style>