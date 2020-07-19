export const apiList = 'apiList'
export const displayedUserData = 'displayedUserData'

export const getters = {
  [apiList](state) {
    const pages = state.pages
    if (!pages.length) {
      return null
    }
    return pages
  },
  [displayedUserData](state) {
    if (state.displayedUser) {
      return state.displayedUser
    }
  },
}