module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    transform: 'jest-preset-angular/global-setup',
    transform: {
      '^.+\\.less$': 'jest-transform-stub',
    },
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|svg|less)$': '<rootDir>/__mocks__/fileMock.js',
      '@/(.*)': '<rootDir>/src/$1',
      '\\.css$': 'identity-obj-proxy',
      '^primeng/(.*)$': '<rootDir>/node_modules/primeng/$1',
    },
    transformIgnorePatterns: [
      'node_modules/(?!primeng)',
    ]    
  };