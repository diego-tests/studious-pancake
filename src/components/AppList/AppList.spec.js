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
afterEach(()=>{
  jest.clearAllMocks()
})

describe('AppList.vue', () => {

  it('calls getNextPage action if list is empty', () => {
    mount(AppList, { 
      store, 
      localVue,
      stubs: ['ListItem'],
      computed: {
        apiList: ()=> [mockUser],
        isMorePagesAvailabe: ()=> true
      },
    })

    expect(actions[getNextPage]).not.toBeCalled()
    
    mount(AppList, { 
      store, 
      localVue,
      computed: {
        apiList: ()=> null,
        isMorePagesAvailabe: ()=> true
      },
    })

    expect(actions[getNextPage]).toBeCalled()
  }) 
  it('calls getNextPage action if "load more users" button is clicked', () => {
    const applist = mount(AppList, { 
      store, 
      localVue,
      stubs: ['ListItem'],
      computed: {
        apiList: ()=> [mockUser],
        isMorePagesAvailabe: ()=> true
      },
    })

    const button = applist.find('[data-testid=button]')
    
    expect(actions[getNextPage]).not.toBeCalled()
    button.trigger('click')
    

    expect(actions[getNextPage]).toBeCalled()
  }) 
  
})