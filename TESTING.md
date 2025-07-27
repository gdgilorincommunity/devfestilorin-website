# Test Configuration Options Usage

## jest.config.mjs
```bash
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

const customJestConfig = {
  // All test files will run in a JSDOM environment, simulating a browser.
  testEnvironment: 'jsdom',

  // Files to run before each test file, after the test environment is set up.
  // This is where you typically import @testing-library/jest-dom for custom matchers.
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // Files to run before the test environment is set up.
  // Useful for polyfills or global mocks that need to be available very early.
  setupFiles: ['<rootDir>/test.setup.ts'],

  // Maps module paths to mock files.
  // This is crucial for handling static assets (images, fonts) that Jest can't process directly.
  // It also helps with path aliases like "@/" to resolve modules from your 'src' directory.
  moduleNameMapper: {
    // Mock image, font, etc. files.
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg|webp)$':
      '<rootDir>/test/__mocks__/fileMock.js',
    // Resolve paths starting with @/ to the src directory.
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  // Stop running tests after the first test failure. Useful for debugging.
  bail: true,

  // A name that is displayed in the test results.
  displayName: 'DevfestIlorin',

  // Plugins for Jest's watch mode, improving the interactive experience.
  watchPlugins: [
    'jest-watch-typeahead/filename', // Filters tests by filename
    'jest-watch-typeahead/testname', // Filters tests by test name
  ],

  // Optional: If you have specific test file patterns, you can define them here.
  // testMatch: ["<rootDir>/src/**/*.test.{js,jsx,ts,tsx}"],

  // Optional: Configure Jest to collect coverage.
  // collectCoverage: true,
  // collectCoverageFrom: [
  //   "src/**/*.{js,jsx,ts,tsx}",
  //   "!src/**/*.d.ts",
  //   "!src/app/**", // Exclude Next.js specific app directory files if not unit testing them
  //   "!src/lib/**", // Exclude utility files if not unit testing them
  // ],
}

export default createJestConfig(customJestConfig)
```

## test.setup.ts

This file can be used for global polyfills or mocks that need to be available before the JSDOM environment is fully initialized.
> For example, if you need to polyfill a browser API not present in JSDOM by default.

Example: Mocking `fetch` globally if you don't want to use a specific library like `msw`
```bash
global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ data: 'mocked data' }),
    })
);
```

Or, if you need to mock specific browser APIs not fully supported by JSDOM:
```bash
Object.defineProperty(window, 'matchMedia', {
    writable: true,
   value: jest.fn().mockImplementation(query => ({
     matches: false,
     media: query,
     onchange: null,
     addListener: jest.fn(), //Deprecated
     removeListener: jest.fn(),  //Deprecated
     addEventListener: jest.fn(),
     removeEventListener: jest.fn(),
     dispatchEvent: jest.fn(),
   })),
 });
```

## jest.setup.ts

This imports the custom matchers from @testing-library/jest-dom, which provide more semantic ways to assert on the DOM.

```bash
import '@testing-library/jest-dom'
```

You can add other global setup here, for example:
```bash 
jest.mock('next/navigation', () => ({
   useRouter: () => ({
     route: '/',
     pathname: '',
     query: {},
     asPath: '',
     push: jest.fn(),
     events: {
       on: jest.fn(),
       off: jest.fn(),
     },
     beforePopState: jest.fn(() => true),
     prefetch: jest.fn(),
   }),
 }));
```
