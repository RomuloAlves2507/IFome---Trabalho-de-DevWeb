'use strict';

/**
 * Read the documentation (https://strapi.io/developer-docs/latest/concepts/models/model.html#lifecycles)
 * to implement the lifecycle functions
 */

module.exports = {
  // Este hook é executado ANTES que um novo pedido seja criado no banco de dados.
  async beforeCreate(event) {
    const { data, where, select, populate } = event.params;

    // 1. Verificar se o pedido tem um usuário e um total
    // O campo 'usuario' é uma relação, então 'data.usuario' será o ID do usuário.
    // O 'total' deve ser enviado pelo frontend no corpo da requisição POST para /api/pedidos.
    if (data.usuario && data.total !== undefined && data.total > 0) {
      // 2. Buscar os dados do usuário para verificar o saldo atual
      const user = await strapi.entityService.findOne('plugin::users-permissions.user', data.usuario);

      // 3. Verificar se o usuário existe e se tem saldo suficiente
      if (!user) {
        throw new Error('Usuário associado ao pedido não encontrado.');
      }

      if (user.saldo === undefined || user.saldo < data.total) {
        // Lançar um erro para impedir a criação do pedido
        throw new Error('Saldo insuficiente para completar o pedido.');
        // Ou, se preferir um comportamento diferente (ex: mudar status para "aguardando pagamento"),
        // você ajustaria a lógica aqui. Mas para débito direto, o erro é mais claro.
      }

      // 4. Se o saldo for suficiente, realizar o débito
      const novoSaldo = user.saldo - data.total;

      // Atualizar o saldo do usuário no banco de dados
      await strapi.entityService.update('plugin::users-permissions.user', data.usuario, {
        data: { saldo: novoSaldo },
      });

      console.log(`[Lifecycle Hook] Saldo do usuário ${user.username} (ID: ${user.id}) debitado em ${data.total}. Novo saldo: ${novoSaldo}`);

    } else {
      // Caso 'usuario' ou 'total' não estejam presentes na criação do pedido
      console.warn('[Lifecycle Hook] Tentativa de criação de pedido sem usuário ou total válido.');
      // Você pode escolher lançar um erro aqui também, dependendo da sua validação de input.
    }
  },
  // Você pode adicionar outros hooks como afterCreate, beforeUpdate, etc. se precisar de mais lógica.
};