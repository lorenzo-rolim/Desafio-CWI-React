import { handlers } from './MockHendlers';
import { setupServer } from 'msw/node';

export const server = setupServer(...handlers);
