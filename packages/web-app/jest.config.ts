export default {
    transform: {
      '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '<rootDir>/dist/'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'], // or setupTests.js if you're using JS
  };