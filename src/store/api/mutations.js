export const SET_PAGES = 'SET_PAGES'
export const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES'
export const SET_LAST_FETCHED_PAGE = 'SET_LAST_FETCHED_PAGE'
export const SET_DISPLAYED_USER = 'SET_DISPLAYED_USER'

export const initialState = {
  pages: [],
  totalPages: null,
  lastPageFetched: null, 
  displayedUser: null,
}

export const mutations = {
  [SET_PAGES](state, pages) {
    state.pages = [...state.pages, ...pages]
  },
  [SET_TOTAL_PAGES](state, totalPages) {
    state.totalPages = totalPages
  },
  [SET_LAST_FETCHED_PAGE](state, lastPageFetched) {
    state.lastPageFetched = lastPageFetched
  },
  [SET_DISPLAYED_USER](state, displayedUser) {
    state.displayedUser = displayedUser
  },
}