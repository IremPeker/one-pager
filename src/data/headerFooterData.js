import faker from 'faker';

function _getItems(length) {
  return new Array(length).fill(null)
    .map(() => {
      return {
        label: faker.fake("{{lorem.words}}"),
        url: faker.fake("{{internet.url}}"),
      }
    });
}

export default () => {
  const min = 2;
  const max = 6;
  const colCount = 3;
  const length = Math.floor(Math.random() * (max - min + 1)) + min;
  
  return new Array(colCount).fill(null)
    .map(() => {
      return {
        title: faker.fake("{{lorem.word}}"),
        items: _getItems(length)
      }
    });
}