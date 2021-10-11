import faker from 'faker';

const min = 50;
const max = 100;

function _getItems() {
  const length = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Array(length).fill(null)
    .map(() => {
      return {
        label: faker.fake("{{lorem.words}}"),
        url: faker.fake("{{internet.url}}"),
      }
    });
}

export default () => {
  
  return {
    title: 'Navigation',
    items: _getItems()
  };
}