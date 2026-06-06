import { Invoice } from "../models/invoice-model";

export const invoiceData: Invoice = {
    id: 1,
    name: 'Componentes de Pc',
    client: {
        name: 'Juan',
        lastName: 'García',
        address: {
            country: 'España',
            city: 'Madrid',
            street: 'Calle Mayor',
            number: 10
        }
    },
    company: {
        name: 'Tech Solutions',
        fiscalNumber: 12345678
    },
    items: [
        {
            id: 1,
            product: 'Procesador',
            price: 100,
            quantity: 2
        },
        {
            id: 2,
            product: 'Memoria RAM',
            price: 50,
            quantity: 4
        },
        {
            id: 3,
            product: 'Disco Duro',
            price: 80,
            quantity: 1
        }
    ]
};