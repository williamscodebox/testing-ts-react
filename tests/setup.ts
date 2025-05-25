// vitest.setup.ts
import "@testing-library/jest-dom"; // For better assertions
import { server } from "./components/mocks/server.ts";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
