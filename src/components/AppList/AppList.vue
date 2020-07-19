<template>
    <section class="app-list">
        AppList
        <ListItem 
            v-for="item in apiList"
            :key="item.id"
            :item="item"
            :name="`${item.first_name} ${item.last_name}`"
            :avatar="item.avatar"
        />
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