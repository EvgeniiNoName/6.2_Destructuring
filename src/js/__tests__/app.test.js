import specialAttackInfo from '../app'

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    }, 
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...'
      // <- обратите внимание, описание "засекречено"
    }
  ]	
}

test("Тест №1: Возвращение извлечённого массива из объектов с четыремя полями.", () => {
  expect(specialAttackInfo(character)).toEqual(
    [
      {
        id: 8,
        name: 'Двойной выстрел',
        description: 'Двойной выстрел наносит двойной урон',
        icon: 'http://...'
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        description: 'Описание недоступно',
        icon: 'http://...'
      }
    ]
  )
})










// const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}

// test("Тест №1: Возвращение отсортированного списка по убыванию", () => {
//   let res = orderByProps(obj, ["name", "level"])
//   expect(res).toEqual([
//     {key: "name", value: "мечник"}, // порядок взят из массива с ключами
//     {key: "level", value: 2}, // порядок взят из массива с ключами
//     {key: "attack", value: 80}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
//     {key: "defence", value: 40}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
//     {key: "health", value: 10} // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
//   ])
// })

// test("Тест №2: Ключ lastName не найдет", () => {
//   expect(() => orderByProps(obj, ["lastName"])).toThrow('Не найдено lastName');
// });
