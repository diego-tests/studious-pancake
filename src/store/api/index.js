import { mutations, initialState } from './mutations'
import { actions } from './actions'
import { getters } from './getters'

export const api = {
  state: () => ({
    ...initialState,
  }),
  mutations,
  actions,
  getters,
}