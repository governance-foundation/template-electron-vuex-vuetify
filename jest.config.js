module.exports = {
  moduleFileExtensions: ["js", "json", "ts", "vue"],
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{vue,ts,js}",
    "!**/node_modules/**",
    "!<rootDir>/dist_electron/**",
    "!<rootDir>/src/plugins/**",
    "!<rootDir>/tests/unit/**"
  ],
  coverageReporters: ["json", "text", "cobertura"],
  snapshotSerializers: ["jest-serializer-vue"],
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel"
};
