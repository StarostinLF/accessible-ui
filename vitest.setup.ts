import { expect } from 'vitest';
import * as matchers from 'vitest-axe/matchers';
import 'vitest-axe/extend-expect';
import '@testing-library/jest-dom/vitest';

expect.extend(matchers);
