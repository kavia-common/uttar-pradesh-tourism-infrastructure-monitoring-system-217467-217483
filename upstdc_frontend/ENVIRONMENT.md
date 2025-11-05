# Frontend Environment Configuration

- The frontend uses environment files at src/environments/environment.ts and environment.prod.ts.
- API base URL is set via `apiBaseUrl`. Default:
  - Dev: http://localhost:8080/api
  - Prod: https://backend.example.com/api
- For runtime configuration without rebuilding, you can inject a global window variable:
  Add a script before the app root which defines:
  <script>
    window.__env = { API_BASE_URL: 'https://your-backend/api' };
  </script>

Ensure the backend routes follow /auth/login and /auth/me for authentication compatibility.

Maps: Leaflet loads dynamically on the client. A CDN CSS is included in index.html. We also add an optional Leaflet JS script at the end of body as a fallback to avoid bundling issues during SSR builds. If you prefer pure NPM module usage, keep the dependency installed and you may remove the CDN script.
