const Potion = require('../lib/Potion');

jest.mock('../lib/Potion');

console.log(new Potion);

const Player = require('../lib/Player');
const { createTestScheduler } = require('@jest/core');

test('creates a health potion object', () => {
  const potion = new Potion('health');

  expect(potion.name).toBe('health');
  expect(potion.value).toEqual(expect.any(Number));
});

test('creates a player object', () =>{
  const player = new Player('Dave');
  
  expect(player.name).toBe('Dave');
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strength).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));
  expect(player.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );
  this.inventory = [new Potion('health'), new Potion()]; 
  
});

test("get player's stats as an object", () => {
  const player = new Player('Dave');

  expect(player.getStats()).toHAveProperty('potions')
  expect(player.getStats()).toHAveProperty('health')
  expect(player.getStats()).toHAveProperty('strength')
  expect(player.getStats()).toHAveProperty('agility')  
});

test('gets inventory from player or returns false', () =>{
  const player = 'Dave';

  expect(player.getInventory()).toEqual(expect.any(Array));

  player.inventory= [];

  expect(player.getInventory()).toEqual(false);
});

createTestScheduler()