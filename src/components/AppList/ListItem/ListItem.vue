<template functional>
    <li class="list-item">
        <router-link
            :to="{name: `user`, params: {id:props.item.id, user: props.item}}"
            class="link"
        >
            <div class="img-wrapper">
                <img
                    :src="props.avatar"
                    :alt="props.name"
                >
            </div>
            <div class="name">
                {{ props.name }}
            </div>
        </router-link>
    </li>
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

<style lang="scss" scoped>
@use '../../../scss/responsive' as *;

.list-item {
    align-items: stretch;
    box-shadow: 0 0 2px black;
    display: flex;
    width: 100%;

    & + & {
        margin: 1rem 0 0;
    }

    @include breakpoint($small) {
        max-width: calc((100% / 2) - 2rem);

        &,
        & + & {
            margin: 1rem;
        }
    }

    @include breakpoint($medium) {
        max-width: calc((100% / 3) - 3rem);

        &,
        & + & {
            margin: 1rem;
        }
    }
}

.link {
    color: black;
    display: flex;
    min-height: 12.8rem;
    text-decoration: none;
    width: 100%;
}

.img-wrapper {
    align-items: center;
    display: flex;
    min-height: 10rem;
    min-width: 12rem;
    padding: 0 1rem;
}

img {
    border-radius: 50%;
    max-height: 10rem;
}

.name {
    align-items: center;
    display: flex;
    font-weight: bold;
    justify-content: center;
    width: 100%;
}

</style>