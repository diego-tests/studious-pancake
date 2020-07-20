<template>
    <section class="app-list">
        <h1>
            User List
        </h1>
        <ul>
            <ListItem 
                v-for="item in apiList"
                :key="item.id"
                :item="item"
                :name="`${item.first_name} ${item.last_name}`"
                :avatar="item.avatar"
            />
        </ul>
    </section>
</template>
<script>
import  { mapGetters, mapActions } from 'vuex'
import { getNextPage } from '../../store/api/actions'
import { apiList } from '../../store/api/getters'
import ListItem from './ListItem/ListItem'

export default {
  components: {
    ListItem,
  },
  computed: {
    ...mapGetters({
      apiList,
    }),
  },
  created() {
    if(!this.apiList) {
      this.getNextPage()
    }
  },
  methods: {
    ...mapActions({
      getNextPage,
    }),
  },
}
</script>
<style lang="scss" scoped>
ul {
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    width: 100%;
}
</style>