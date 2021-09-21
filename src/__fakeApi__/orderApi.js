import { subMinutes, subSeconds } from 'date-fns';

const now = new Date();

class OrderApi {
  getOrders() {
    const orders = [
      {
        id: '5ecb8a6d9f53bfae09e16115',
        createdAt: subMinutes(subSeconds(now, 23), 32).getTime(),
        currency: '$',
        customer: {
          email: 'carson.darrin@devias.io',
          name: 'SECRETARIA DA VARA ÚNICA'
        },
        number: '04.034.872/0001-21',
        paymentMethod: 'Av. Governador Edmundo Pinto, 581',
        status: 'pending',
        totalAmount: '69945-000'
      },
    ];

    return Promise.resolve(orders);
  }

  getOrder() {
    const order = {
      id: '278505',
      coupon: null,
      createdAt: now.getTime(),
      currency: '$',
      customer: {
        address1: 'Av. Governador Edmundo Pinto, 581',
        city: 'Acrelândia',
        country: 'BRASIL',
        email: 'vaciv1ac@tjac.jus.br',
        name: 'SECRETARIA DA VARA ÚNICA'
      },
      items: [
        {
          id: '5ecb8abbdd6dfb1f9d6bf98b',
          billingCycle: 'monthly',
          currency: '$',
          name: 'Project Points',
          quantity: 25,
          unitAmount: 50.25
        },
        {
          id: '5ecb8ac10f116d04bed990eb',
          billingCycle: 'monthly',
          currency: '$',
          name: 'Freelancer Subscription',
          quantity: 1,
          unitAmount: 5.00
        }
      ],
      number: '(68) 3235-1395',
      paymentMethod: 'CreditCard',
      status: 'pending',
      totalAmount: 500.00
    };

    return Promise.resolve(order);
  }
}

export const orderApi = new OrderApi();
