// One-Time Setup
let dbData;

const initializeCityDatabase = () => {
  dbData = ['Vienna', 'San Juan', 'Seoul'];
};

const clearCityDatabase = () => {
  dbData = null;
};

const isCity = (data) => {
  return dbData.findIndex((rslt, index)=>{
    return rslt === data;
  }) >= 0 ? true : false;
};

// In some cases, you only need to do setup once, at the beginning of a file. This can be especially bothersome when the setup is asynchronous, so you can't do it inline. Jest provides beforeAll and afterAll to handle this situation.
beforeAll(() => {
  console.log('----------------------->');
  return initializeCityDatabase();
});

afterAll(() => {
  return clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});