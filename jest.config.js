module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    rootDir: 'src',
    transform: {
        '^.+\\.(t|j)sx?$': 'ts-jest'
    },
    transformIgnorePatterns: [
        'node_modules/(?!(react-formatted-number-input)/)'
    ],
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.test.json'
        }
    }
};