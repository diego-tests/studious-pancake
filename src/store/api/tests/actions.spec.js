import axios from 'axios'
import { getNextPage, getUser, actions } from '../actions'
import { SET_PAGES, SET_TOTAL_PAGES, SET_LAST_FETCHED_PAGE, SET_DISPLAYED_USER } from '../mutations'
import { axiosPageResponse, mockUser } from '../../../helpers/test-helpers/testMocks'


jest.mock('axios')

let commit;

beforeEach(()=>{
  commit = jest.fn()
})

afterEach(()=>{
  jest.clearAllMocks()
})
describe(getNextPage, ()=>{
  it(`does three commits (${SET_PAGES}, ${SET_TOTAL_PAGES}, ${SET_LAST_FETCHED_PAGE}) on a succesful request`, async ()=>{
    
    const state = {
      totalPages: 20,
      lastPageFetched: 1,
    }
    axios.mockResolvedValue(axiosPageResponse)
    
    await actions[getNextPage]({ commit, state })
    
    expect(axios).toHaveBeenCalledTimes(1)
    
    expect(commit).toHaveBeenCalledTimes(3)
    
    expect(commit.mock.calls.findIndex((call)=> call[0] === SET_PAGES)).not.toBe(-1)
    
    expect(commit.mock.calls.findIndex((call)=> call[0] === SET_TOTAL_PAGES)).not.toBe(-1)
    
    expect(commit.mock.calls.findIndex((call)=> call[0] === SET_LAST_FETCHED_PAGE)).not.toBe(-1)
  })
  
  it('does not commit if the total number of pages is inferior to the value of the last page fetched', async ()=>{
    const state = {
      totalPages: 1,
      lastPageFetched: 2,
    }
    
    axios.mockResolvedValue(axiosPageResponse)
    await actions[getNextPage]({ commit, state })
    
    expect(commit).toHaveBeenCalledTimes(0)

    await actions[getNextPage]({ commit, state: { ...state, totalPages: 20 } })


    expect(commit).toHaveBeenCalledTimes(3)
  })
})


describe(getUser, ()=> {
  it('avoids making an axios request if an user object is provided', async()=>{
    await actions[getUser]({ commit }, { id: 1 })
    expect(axios).toHaveBeenCalledTimes(1)
    jest.clearAllMocks()
    
    await actions[getUser]({ commit }, { user: mockUser })
    expect(axios).toHaveBeenCalledTimes(0)
    jest.clearAllMocks()

    await actions[getUser]({ commit }, { id: 1, user: mockUser })
    expect(axios).toHaveBeenCalledTimes(0)
  })

  it(`when no user is provided it clears ${SET_DISPLAYED_USER} (null) then sets a new value`, async()=>{
    await actions[getUser]({ commit }, {  })
    expect(commit.mock.calls[0][0]).toBe(SET_DISPLAYED_USER)
    expect(commit.mock.calls[0][1]).toBe(null)
    expect(commit.mock.calls[1][0]).toBe(SET_DISPLAYED_USER)
    expect(commit.mock.calls[1][1]).not.toBe(null)
    
  })
})