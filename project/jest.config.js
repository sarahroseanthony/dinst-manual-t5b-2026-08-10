/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: [
    '<rootDir>/src/__tests__/**/*.test.tsx',
    '<rootDir>/src/__tests__/**/*.test.ts',
    '**/*.test.ts',
  ],
  setupFilesAfterFramework: ['./jest.setup.js'],
};

module.exports = config;
