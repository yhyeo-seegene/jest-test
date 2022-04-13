// Scoping
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

const isValidCityFoodPair = (city, food) => {
  return dbData.findIndex((rslt, index)=>{
    return rslt.city === city && rslt.food === rslt.food;
  }) >= 0 ? true : false;
};

// Applies to all tests in this file
beforeEach(() => {
  console.log('beforeEach----------------------->');
  return initializeCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});

describe('matching cities to foods', () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    console.log('describe beforeEach----------------------->');
    return initializeFoodDatabase();
  });

  test('Vienna <3 veal', () => {
    expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
  });

  test('San Juan <3 plantains', () => {
    expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
  });
});