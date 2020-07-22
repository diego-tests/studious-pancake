import { apiList, isMorePagesAvailabe, getters } from '../getters'
import { isEqual } from 'lodash'

describe(apiList, ()=>{
  it('returns null if pages is an empty array', ()=>{
    const state = { pages: [] }
    expect(getters[apiList](state)).toBe(null)
  })
  it('returns pages as is if it\'s not an empty array', ()=>{
    const pages = [1, 2, 3]
    const state = { pages }
    expect(isEqual(getters[apiList](state), pages)).toBeTruthy()
  })
})
describe(isMorePagesAvailabe, ()=>{
  it('returns false if totalPages is null', ()=>{
    const state = { totalPages: null }
    expect(getters[isMorePagesAvailabe](state)).toBe(false)
  })
  it('returns false if lastPageFetched is superior to totalPages', ()=>{
    const state = { totalPages: 1, lastPageFetched: 2 }
    expect(getters[isMorePagesAvailabe](state)).toBe(false)
  })
  it('returns true if lastPageFetched is inferior to totalPages', ()=>{
    const state = { totalPages: 2, lastPageFetched: 1 }
    expect(getters[isMorePagesAvailabe](state)).toBe(true)
  })
})