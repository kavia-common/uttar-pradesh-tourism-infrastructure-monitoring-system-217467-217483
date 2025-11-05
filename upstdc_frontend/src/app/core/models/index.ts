/**
 * PUBLIC_INTERFACE
 * Shared API model placeholders; extend with backend OpenAPI types later.
 */
export interface Project {
  id: string;
  name: string;
  budget: number;
  status: 'PLANNING' | 'IN_PROGRESS' | 'COMPLETED';
  lat?: number;
  lng?: number;
}
