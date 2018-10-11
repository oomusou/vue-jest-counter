import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/counter.vue';

describe('counter.vue', () => {
  let wrapper;

  beforeEach(() => {
    // Arrange
    wrapper = shallowMount(Counter, {
      propsData: {
        startCount: 2,
      },
    });
  });

  it('should be 2 when count is initialized', () => {
    // Assert
    expect(wrapper.vm.count).toBe(2);
  });

  it('should emit latestCount event event when increment() is called', () => {
    // Act
    wrapper.vm.increment();

    // Assert
    expect(wrapper.emitted().latestCount).toBeTruthy();
  });

  it('should receive 3 with event when button is clicked', () => {
    // Arrange
    const button = wrapper.find('button');

    // Act
    button.trigger('click');

    // Assert
    expect(wrapper.emitted().latestCount[0]).toEqual([3]);
  });
});
