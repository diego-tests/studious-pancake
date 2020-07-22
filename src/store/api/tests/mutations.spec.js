import { SET_PAGES, SET_TOTAL_PAGES, SET_LAST_FETCHED_PAGE, mutations, SET_DISPLAYED_USER } from '../mutations'

describe(SET_PAGES, ()=>{
  it('expands the old state array by adding the content of the new array at the end', ()=>{
    const state = { pages: [] }
    const newData1 = [1, 2]

    mutations[SET_PAGES](state, newData1)
    expect(state.pages[0]).toBe(newData1[0])
    expect(state.pages[1]).toBe(newData1[1])
    
    const newData2 = [4, 5]
    mutations[SET_PAGES](state, newData2)
    
    expect(state.pages[0]).toBe(newData1[0])
    expect(state.pages[1]).toBe(newData1[1])
    expect(state.pages[2]).toBe(newData2[0])
    expect(state.pages[3]).toBe(newData2[1])
  })
})

describe(SET_TOTAL_PAGES, ()=>{
  it('sets the value of totalPages with the received value', ()=>{
    const state = { totalPages: 1 }
    const newData1 = 'a'

    mutations[SET_TOTAL_PAGES](state, newData1)
    expect(state.totalPages).toBe(newData1)
    
    const newData2 = 2
    mutations[SET_TOTAL_PAGES](state, newData2)
    expect(state.totalPages).toBe(newData2)
    
  })
})

describe(SET_DISPLAYED_USER, ()=>{
  it('sets the value of displayedUser with the received value', ()=>{
    const state = { displayedUser: 1 }
    const newData1 = 'a'

    mutations[SET_DISPLAYED_USER](state, newData1)
    expect(state.displayedUser).toBe(newData1)
    
    const newData2 = 2
    mutations[SET_DISPLAYED_USER](state, newData2)
    expect(state.displayedUser).toBe(newData2)
    
  })
})