const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
  return `Olá ${Object.values(order)[3].delivery.deliveryPerson},
  entrega para: ${Object.values(order)[0]}, 
  Telefone: ${Object.values(order)[1]},
  ${Object.values(order)[2].street}, 
  Nº: ${Object.values(order)[2].number},
  AP: ${Object.values(order)[2].apartment}.`
  }
  console.log(customerInfo(order))
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    Object.values(order)[3].delivery.deliveryPerson = "Luiz Silva";
    Object.values(order)[4].total = "50";
    return `Olá ${Object.values(order)[3].delivery.deliveryPerson},
    o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero
    é de ${Object.values(order)[4].total}. `
  }
  console.log(orderModifier(order));