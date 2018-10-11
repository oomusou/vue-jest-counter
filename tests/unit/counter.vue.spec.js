import { mount, shallowMount } from '@vue/test-utils';
import Counter from '@/components/counter.vue';

describe('counter.vue', () => {
  it('should be 0 when count is initialized', () => {
    // Arrange
    const wrapper = mount(Counter);

    // Assert
    expect(wrapper.vm.count).toBe(0);
  });

  it('should increment count when increment() is called', () => {
    // Arrange
    const wrapper = mount(Counter);

    // Act
    wrapper.vm.increment();

    // Assert
    expect(wrapper.vm.count).toBe(1);
  });

  it('should increment the count when button is clicked', () => {
    // Arrange
    const wrapper = shallowMount(Counter);
    const button = wrapper.find('button');

    // Act
    button.trigger('click');

    // Assert
    expect(wrapper.vm.count).toBe(1);
  });
});
