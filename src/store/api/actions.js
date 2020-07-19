import axios from 'axios'
import { SET_PAGES,
  SET_TOTAL_PAGES,
  SET_LAST_FETCHED_PAGE,
} from './mutations'
const api = process.env.VUE_APP_API_ENDPOINT


export const getNextPage = 'getNextPage'

export const actions = {

  async [getNextPage]({ commit, state }) {
    if(state.totalPages > state.lastPageFetched) {
      return
    }
    let response
    try {
      const newPage = state.pageNumber ? state.pageNumber + 1 : 1 
      response = (await axios(`${api}/users?page=${newPage}`))?.data
    } catch (err) {
      console.error(err)
    }

    if (!response) {
      return
    }

    const page = response?.data
    const totalPages = response?.total_pages
    const pageNumber = response?.page
    commit(SET_PAGES, page)
    commit(SET_TOTAL_PAGES, totalPages)
    commit(SET_LAST_FETCHED_PAGE, pageNumber)
  },


}