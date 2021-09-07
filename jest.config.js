export default {
  testEnvironment: 'node',
  transform: {
    '.(js|jsx)': 'babel-jest',
    '.(ts|tsx)': 'ts-jest',
  },
  rootDir: 'src/tests',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
};
