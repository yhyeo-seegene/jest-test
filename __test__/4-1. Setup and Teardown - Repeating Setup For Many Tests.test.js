// Repeating Setup For Many Tests
let dbData;

const initializeCityDatabase = () => {
  dbData = [
    {city : 'Vienna'},
    {city : 'San Juan'},
    {city : 'Seoul'},
  ];
};

const initializeFoodDatabase = () => {
  dbData = [
    {city : 'Vienna', food: 'Wiener Schnitzel'},
    {city : 'San Juan', food: 'Mofongo'},
    {city : 'Seoul', food: 'Kimchi'},
  ];
};

const clearCityDatabase = () => {
  dbData = null;
};

const isCity = (city) => {
  return dbData.findIndex((rslt, index)=>{
    return rslt.city === city;
  }) >= 0 ? true : false;
};

// If you have some work you need to do repeatedly for many tests, you can use beforeEach and afterEach.
beforeEach(() => {
  console.log('----------------------->');
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});