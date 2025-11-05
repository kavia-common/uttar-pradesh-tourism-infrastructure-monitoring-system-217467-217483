function getRuntimeApiBase(): string | null {
  try {
    // eslint-disable-next-line no-undef
    const w: any = typeof window !== 'undefined' ? window : null;
    return w && w.__env && w.__env.API_BASE_URL ? String(w.__env.API_BASE_URL) : null;
  } catch {
    return null;
  }
}

export const environment = {
  production: true,
  apiBaseUrl: getRuntimeApiBase() || 'https://backend.example.com/api',
  appTheme: {
    primary: '#3b82f6',
    secondary: '#64748b',
    success: '#06b6d4',
    error: '#EF4444',
    background: '#ffffff',
    text: '#0f172a'
  }
};
