import { subDays, subHours } from 'date-fns';

const now = new Date();

class ProductsApi {
  getProducts() {
    const products = [
      {
        id: '5ece2c077e39da27658aa8a9',
        attributes: ['Cotton'],
        category: 'dress',
        currency: '$',
        createdAt: subDays(now, 1).getTime(),
        inventoryType: 'in_stock',
        isAvailable: true,
        isShippable: false,
        name: '2º Via Certidão de Nascimento',
        price: 23.99,
        quantity: '∞',
        updatedAt: subHours(now, 6).getTime(),
        variants: 2
      },
      {
        id: '5ece2c077e39da27658aa8a9',
        attributes: ['Cotton'],
        category: 'dress',
        currency: '$',
        createdAt: subDays(now, 1).getTime(),
        inventoryType: 'in_stock',
        isAvailable: true,
        isShippable: false,
        name: '2º Via da Certidão de Casamento',
        price: 23.99,
        quantity: '∞',
        updatedAt: subHours(now, 6).getTime(),
        variants: 2
      },
      {
        id: '5ece2c077e39da27658aa8a9',
        attributes: ['Cotton'],
        category: 'dress',
        currency: '$',
        createdAt: subDays(now, 1).getTime(),
        inventoryType: 'in_stock',
        isAvailable: true,
        isShippable: false,
        name: '2º Via da Certidão de Óbito',
        price: 23.99,
        quantity: '∞',
        updatedAt: subHours(now, 6).getTime(),
        variants: 2
      },
      {
        id: '5ece2c077e39da27658aa8a9',
        attributes: ['Cotton'],
        category: 'dress',
        currency: '$',
        createdAt: subDays(now, 1).getTime(),
        inventoryType: 'in_stock',
        isAvailable: true,
        isShippable: false,
        name: 'Certidão em Inteiro Teor de Nascimento',
        price: 23.99,
        quantity: '∞',
        updatedAt: subHours(now, 6).getTime(),
        variants: 2
      },
      {
        id: '5ece2c077e39da27658aa8a9',
        attributes: ['Cotton'],
        category: 'dress',
        currency: '$',
        createdAt: subDays(now, 1).getTime(),
        inventoryType: 'in_stock',
        isAvailable: true,
        isShippable: false,
        name: 'Certidão em Inteiro Teor de Casamento',
        price: 23.99,
        quantity: '∞',
        updatedAt: subHours(now, 6).getTime(),
        variants: 2
      },
      {
        id: '5ece2c077e39da27658aa8a9',
        attributes: ['Cotton'],
        category: 'dress',
        currency: '$',
        createdAt: subDays(now, 1).getTime(),
        inventoryType: 'in_stock',
        isAvailable: true,
        isShippable: false,
        name: 'Certidão de Inteiro Teor de Óbito',
        price: 23.99,
        quantity: '∞',
        updatedAt: subHours(now, 6).getTime(),
        variants: 2
      },
      {
        id: '5ece2c077e39da27658aa8a9',
        attributes: ['Cotton'],
        category: 'dress',
        currency: '$',
        createdAt: subDays(now, 1).getTime(),
        inventoryType: 'in_stock',
        isAvailable: true,
        isShippable: false,
        name: 'Certidão de Protesto',
        price: 23.99,
        quantity: '∞',
        updatedAt: subHours(now, 6).getTime(),
      },
      {
        id: '5ece2c0d16f70bff2cf86cd8',
        attributes: ['Variety of styles'],
        category: 'dress',
        currency: '$',
        createdAt: subDays(now, 3).getTime(),
        inventoryType: 'out_of_stock',
        isAvailable: false,
        isShippable: true,
        name: 'Certidão de Imóvel',
        price: 240.85,
        quantity: '∞',
        updatedAt: subDays(subHours(now, 8), 2).getTime(),
        variants: 1
      },
      {
        id: '5ece2c123fad30cbbff8d060',
        attributes: ['Variety of styles'],
        category: 'jewelry',
        currency: '$',
        createdAt: subDays(now, 6).getTime(),
        image: null,
        inventoryType: 'in_stock',
        isAvailable: true,
        isShippable: false,
        name: 'Busca de Registro Cívil',
        price: 155.00,
        quantity: '∞',
        updatedAt: subDays(subHours(now, 2), 1).getTime(),
        variants: 5
      },
      {
        id: '5ece2c1be7996d1549d94e34',
        attributes: ['Polyester and Spandex'],
        category: 'blouse',
        currency: '$',
        createdAt: subDays(now, 12).getTime(),
        inventoryType: 'limited',
        isAvailable: false,
        isShippable: true,
        name: 'Certidão de Escritura e União Estável',
        price: 17.99,
        quantity: '∞',
        updatedAt: subDays(subHours(now, 7), 1).getTime(),
        variants: 1
      }
    ];

    return Promise.resolve(products);
  }
}

export const productApi = new ProductsApi();
