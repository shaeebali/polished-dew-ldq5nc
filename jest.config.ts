/** @type {import('ts-jest/dist/types').InitialOptionsTSJest} */

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
   '^.+\\.ts?$': 'ts-jest',
   '^.+\\.tsx?$': 'ts-jest',
   '^.+\\.js?$': 'babel-jest',
   '^.+\\.jsx?$': 'babel-jest',
  //  '^.+\\.scss$': 'jest-scss-transform'
  }
 }
