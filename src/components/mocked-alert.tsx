import { Ban } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function MockDataAlert({ content }: { content: string }) {
  return (
    <Alert variant="destructive">
      <Ban />
      <AlertTitle>Right now this page is using mocked data</AlertTitle>
      <AlertDescription>
        The {content} in this page are not real.
      </AlertDescription>
    </Alert>
  );
}
