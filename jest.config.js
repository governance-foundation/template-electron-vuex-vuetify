module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{vue,ts,js}",
    "!**/node_modules/**",
    "!<rootDir>/dist_electron/**",
    "!<rootDir>/src/plugins/**",
    "!<rootDir>/tests/unit/**"
  ],
  coverageReporters: ["json", "lcov", "text-summary"],
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel"
};
