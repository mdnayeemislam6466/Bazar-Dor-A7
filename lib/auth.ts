import { betterAuth } from 'better-auth';
import Database from 'better-sqlite3';

const database = new Database(process.env.BETTER_AUTH_DB_PATH || 'bazardor.sqlite');
const trustedOrigins = new Set<string>([
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'http://localhost:3002',
  ...(process.env.BETTER_AUTH_URL ? [process.env.BETTER_AUTH_URL] : []),
  ...(process.env.NEXT_PUBLIC_APP_URL ? [process.env.NEXT_PUBLIC_APP_URL] : []),
  ...(process.env.BETTER_AUTH_TRUSTED_ORIGINS || '')
    .split(',')
    .map(v => v.trim())
    .filter(Boolean),
]);
const socialProviders: { google?: {clientId:string;clientSecret:string}; github?: {clientId:string;clientSecret:string} } = {};
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  socialProviders.google = { clientId: process.env.GOOGLE_CLIENT_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET };
}
if (process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET) {
  socialProviders.github = { clientId: process.env.GITHUB_CLIENT_ID, clientSecret: process.env.GITHUB_CLIENT_SECRET };
}

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  database,
  baseURL: process.env.BETTER_AUTH_URL || 'http://localhost:3000',
  trustedOrigins: [...trustedOrigins],
  emailAndPassword: { enabled: true, minPasswordLength: 8 },
  socialProviders,
});
