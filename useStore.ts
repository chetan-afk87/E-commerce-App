import create from 'zustand';

const useStore = create(set => ({
  cartList: [],
  quantity: 0,
  addToCart: product =>
    set(state => {
      const isPresent = state.cartList.find(item => item.name === product.name);
      if (isPresent) {
        isPresent.quantity++;
        return {cartList: state.cartList, quantity: state.quantity + 1};
      } else {
        product.quantity = 1;
        return {
          cartList: [...state.cartList, product],
          quantity: state.quantity + 1,
        };
      }
    }),
}));

export default useStore;
