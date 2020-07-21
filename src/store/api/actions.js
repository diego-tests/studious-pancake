import axios from 'axios'
import { SET_PAGES,
  SET_TOTAL_PAGES,
  SET_LAST_FETCHED_PAGE,
  SET_DISPLAYED_USER,
} from './mutations'
const api = process.env.VUE_APP_API_ENDPOINT


export const getNextPage = 'getNextPage'
export const getUser = 'getUser'

export const actions = {

  async [getNextPage]({ commit, state }) {
    if(state.totalPages < state.lastPageFetched) {
      return
    }
    let response
    try {
      const newPage = state.lastPageFetched ? state.lastPageFetched + 1 : 1 
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

  async [getUser]({ commit }, { id, user }) {
    if (user) {
      return commit(SET_DISPLAYED_USER, user)
    }
    commit(SET_DISPLAYED_USER, null)
    let response
    try {
      response = (await axios(`${api}/users/${id}`))?.data?.data
    } catch (err) {
      console.error(err)
    }
    if (!response) {
      return
    }
    return commit(SET_DISPLAYED_USER, response)
  },

}