import { mount } from '@vue/test-utils'
import Folder from '@/views/registro.vue'

describe('Folder.vue', () => {
  it('renders folder view', () => {
    const mockRoute = {
      params: {
        id: 'Outbox'
      }
    }
    const wrapper = mount(Folder, {
      global: {
        mocks: {
          $route: mockRoute
        }
      }
    })
    expect(wrapper.text()).toMatch('')
  })
})
