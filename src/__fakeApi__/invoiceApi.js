import { subHours, subDays } from 'date-fns';

const now = new Date();

class InvoiceApi {
  getInvoices() {
    const invoices = [
      {
        id: '5ecb868d0f437390ef3ac62c',
        currency: '$',
        customer: {
          email: 'matheus@teste.com.br',
          name: 'Matheus Bavaresco'
        },
        issueDate: subHours(now, 1).getTime(),
        status: 'paid',
        totalAmount: 55.50
      },
      {
        id: '5ecb868ada8deedee0638502',
        currency: '$',
        customer: {
          email: 'teste@teste.com.br',
          name: 'Teste 1'
        },
        issueDate: subDays(subHours(now, 5), 2).getTime(),
        status: 'pending',
        totalAmount: 253.76
      },
      {
        id: '5ecb868700aba84d0f1c0e48',
        currency: '$',
        customer: {
          email: 'teste@teste.com.br',
          name: 'Teste 1'
        },
        issueDate: subDays(subHours(now, 4), 6).getTime(),
        status: 'canceled',
        totalAmount: 781.50
      },
    ];

    return Promise.resolve(invoices);
  }

  getInvoice() {
    const invoice = {
      id: '5ecb86785312dcc69b5799ad',
      currency: '$',
      customer: {
        address: '271 Richmond Rd, Grey Lynn, Auckland 1022, New Zealand',
        company: 'Countdown Grey Lynn',
        email: 'contact@anahenisky.io',
        name: 'Ana Henisky',
        taxId: '6934656584231'
      },
      dueDate: now.getTime(),
      issueDate: subHours(now, 1).getTime(),
      items: [
        {
          id: '5ecb8694db1760a701dfbf74',
          currency: '$',
          description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
          unitAmount: 55.50
        }
      ],
      number: 'DEV-9483',
      status: 'paid',
      subtotalAmount: 50.00,
      taxAmount: 5.50,
      totalAmount: 55.50
    };

    return Promise.resolve(invoice);
  }
}

export const invoiceApi = new InvoiceApi();
