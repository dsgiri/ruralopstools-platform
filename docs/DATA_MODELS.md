# Data Models & Schema

Currently, the app relies on client-side static data in `src/data.ts`.

## Tool Interface
```typescript
interface Tool {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType;
  color: string;
  bg: string;
  url: string;
  github?: string;
}
```

Future database schema (Cloud SQL/PostgreSQL) will follow here.