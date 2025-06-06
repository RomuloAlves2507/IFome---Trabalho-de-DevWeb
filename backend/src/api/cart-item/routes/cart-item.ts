export default {
  routes: [
    {
      method: 'GET',
      path: '/cart-items',
      handler: 'cart-item.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/cart-items/:id',
      handler: 'cart-item.findOne',
      config: {
        policies: [],
      },
    },
    {
      method: 'POST',
      path: '/cart-items',
      handler: 'cart-item.create',
      config: {
        policies: [],
      },
    },
    {
      method: 'PUT',
      path: '/cart-items/:id',
      handler: 'cart-item.update',
      config: {
        policies: [],
      },
    },
    {
      method: 'DELETE',
      path: '/cart-items/:id',
      handler: 'cart-item.delete',
      config: {
        policies: [],
      },
    },
  ],
};
