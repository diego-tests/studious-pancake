import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import AppList from './AppList.vue'
import { mockActions, mockUser } from '../../helpers/test-helpers/testMocks'
import { getNextPage } from '../../store/api/actions'


const localVue = createLocalVue()
let store, actions;

localVue.use(Vuex)

beforeAll(()=>{
  actions = { ...mockActions }
  store = new Vuex.Store({ actions })
})

describe('AppList.vue', () => {

  it('calls getNextPage action if list is empty', () => {
    mount(AppList, { 
      store, 
      localVue,
      stubs: ['ListItem'],
      computed: {
        apiList: ()=> [mockUser],
      },
    })

    expect(actions[getNextPage]).not.toBeCalled()
    
    mount(AppList, { 
      store, 
      localVue,
      computed: {
        apiList: ()=> null,
      },
    })

    expect(actions[getNextPage]).toBeCalled()
  }) 
  
})