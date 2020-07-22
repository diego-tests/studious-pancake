export const apiList = 'apiList'
export const displayedUserData = 'displayedUserData'
export const isMorePagesAvailabe = 'isMorePagesAvailabe'

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
  [isMorePagesAvailabe](state) {
    return (state.totalPages !== null) && (state.totalPages > state.lastPageFetched)
  },
}