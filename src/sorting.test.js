import orderByProps from './sorting.js';

test('Сортировка по заданному порядку, далее по алфовиту', () => {
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  const received = orderByProps({
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  }, ['name', 'level']);

  expected(received).toEqual(expected);
});
