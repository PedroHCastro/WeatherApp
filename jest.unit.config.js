module.exports = {
  preset: 'react-native',
  displayName: 'unit',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
    },
  },
  roots: ['<rootDir>/src/', '<rootDir>/tests'],
  projects: [
    '<rootDir>/jest.config.js',
    '<rootDir>/jest.integration.config.js',
  ],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  testMatch: ['<rootDir>/tests/**/?(*.)+(spec|test).[jt]s?(x)'],
  testEnvironment: 'node',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
    url: 'https://jestjs.io',
  },
  testTimeout: 15000,
  testPathIgnorePatterns: ['/node_modules', '/android', '/ios'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-reanimated|@react-native|@react-navigation|react-native-permissions)/)',
  ],
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'svg'],
  moduleNameMapper: {
    '^react-native-dotenv(.*)$': '<rootDir>/.env',
  },
};
