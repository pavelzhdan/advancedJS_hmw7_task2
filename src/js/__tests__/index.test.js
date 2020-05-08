/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import Bowman, { Character } from '../../index';


test('level up', () => {
  let archie = new Bowman('archie');
  archie.levelUp();
  const etalon = {
    name: 'archie',
    health: 100,
    level: 2,
    class: 'Bowman',
    attack: 30,
    defence: 30,
  };
  expect(archie).toEqual(etalon);
});

test('no level up', () => {
  let archie = new Bowman('archie');
  archie.health = 0;
  expect(archie.levelUp()).toEqual(Error('Нельзя повысить левел умершего'));
});
