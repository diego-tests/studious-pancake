<template functional>
    <router-link
        :to="{name: `user`, params: {id:props.item.id, user: props.item}}"
        class="list-item"
    >
        <img
            :src="props.avatar"
            :alt="props.name"
        >
        {{ props.name }}
    </router-link>
</template>
<script>

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
  },
}
</script>