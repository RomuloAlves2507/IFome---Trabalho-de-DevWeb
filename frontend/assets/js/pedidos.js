document.addEventListener("DOMContentLoaded", () => {
  const pedidos = [
    {
      cliente: "João Silva",
      itens: "Marmita de Frango, Suco de Laranja",
      valor: "R$ 25,00",
      pagamento: "PIX",
      status: "Pendente"
    },
    {
      cliente: "Maria Souza",
      itens: "Marmita Vegana, Água Mineral",
      valor: "R$ 22,00",
      pagamento: "Dinheiro",
      status: "Entregue"
    },
    {
      cliente: "Carlos Lima",
      itens: "Marmita de Carne, Coca Zero",
      valor: "R$ 28,00",
      pagamento: "Cartão",
      status: "Pendente"
    }
  ];

  const tbody = document.getElementById("pedidos");
  tbody.innerHTML = "";

  pedidos.forEach(pedido => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${pedido.cliente}</td>
      <td>${pedido.itens}</td>
      <td>${pedido.valor}</td>
      <td>${pedido.pagamento}</td>
      <td><span class="badge bg-${pedido.status === "Entregue" ? "success" : "warning"} text-dark">${pedido.status}</span></td>
      <td>
        <button class="btn btn-sm btn-entregar me-1">Entregar</button>
        <button class="btn btn-sm btn-cancelar">Cancelar</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
});
