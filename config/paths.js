import { resolve } from 'path';


/* Main directories */
export const ROOT_DIR = resolve(__dirname, '..');
export const CLIENT_DIR = resolve(ROOT_DIR, 'client');
export const SERVER_DIR = resolve(ROOT_DIR, 'server');
export const ASSETS_DIR = resolve(ROOT_DIR, 'assets');

/* Config files */
export const ESLINT_FILE = resolve(ROOT_DIR, '.eslintrc');

/* File paths */
export const ENTRY_POINT = resolve(CLIENT_DIR, 'entry.js');
export const INDEX_FILE = resolve(ROOT_DIR, 'index.html');
export const PUBLIC_PATH = '/assets';
