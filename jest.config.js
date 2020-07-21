module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{vue,ts,js}",
    "!**/node_modules/**",
    "!<rootDir>/dist/**",
    "!<rootDir>/src/plugins/**",
    "!<rootDir>/tests/unit/**"
  ],
  testTimeout: 300000,
  coverageReporters: ["json", "lcov", "text-summary"],
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel"
};
