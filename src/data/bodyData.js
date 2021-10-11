import faker from 'faker';

export default () => {
  const min = 30;
  const max = 60;
  const length = Math.floor(Math.random() * (max - min + 1)) + min;
  const items = new Array(length).fill(null)
    .map(() => {
      return [
        {
          label: "Name",
          value: faker.fake("{{name.firstName}}")
        },
        {
          label: "Last Name",
          value: faker.fake("{{name.lastName}}")
        },
        {
          label: "Function",
          value: faker.fake("{{name.jobTitle}}")
        },
        {
          label: "Description",
          value: faker.fake("{{lorem.paragraph}}")
        }
      ];
    });
  
  return {
    title: 'List of users',
    items
  };
}