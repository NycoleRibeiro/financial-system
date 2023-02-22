export type Item = {
    date: Date;
    category: string;
    title: string;
    value: number;
}

export const items: Item[] = [
    { date: new Date(2023, 1, 15), category: 'food', title: 'McDonalds', value: 32.12 },
    { date: new Date(2023, 2, 15), category: 'food', title: 'Burguer King', value: 28 },
    { date: new Date(2023, 1, 16), category: 'rent', title: 'Aluguel Apt', value: 2300 },
    { date: new Date(2023, 1, 17), category: 'salary', title: 'Salário Empresa', value: 4500 },
];