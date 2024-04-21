// we'll use Vite's "mode" in order to determine the server default URL
// localhost:3000 for development,
// EMPTY for production
const isProduction = import.meta.env.MODE === 'production';
export const fallbackUrl = isProduction ? '' : 'http://localhost:3000';

// we'll allow the user to override the server URL
export const serverUrl = import.meta.env.VITE_SERVER_URL ?? fallbackUrl;