<template>
    <div class="home">
        <AppList />
    </div>
</template>

<script>
// @ is an alias to /src
import AppList from '../components/AppList/AppList'

export default {
  name: 'Home',
  components: {
    AppList,
  },
}
</script>
