import faker from 'faker';

export const user = {
  _id: faker.random.uuid(),
  userId: faker.random.uuid(),
  username: faker.internet.userName(),
  password: faker.random.number(),
  status: faker.random.number({
    min: 0,
    max: 1,
  }),
  grade: faker.random.number({
    min: 1,
    max: 3,
  }),
};

export const userInfo = {
  _id: faker.random.uuid(),
  username: faker.name.findName(),
  role: 'admin',
  grade: '1',
};
