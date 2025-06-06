export default {
  routes: [
    {
      method: 'GET',
      path: '/pedidos',
      handler: 'pedido.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/pedidos/:id',
      handler: 'pedido.findOne',
      config: {
        policies: [],
      },
    },
    {
      method: 'POST',
      path: '/pedidos',
      handler: 'pedido.create',
      config: {
        policies: [],
      },
    },
    {
      method: 'PUT',
      path: '/pedidos/:id',
      handler: 'pedido.update',
      config: {
        policies: [],
      },
    },
    {
      method: 'DELETE',
      path: '/pedidos/:id',
      handler: 'pedido.delete',
      config: {
        policies: [],
      },
    },
  ],
};
