import { Layout, Spinner } from '@ui-kitten/components';

export function Loading() {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Spinner size="giant" />
    </Layout>
  );
}
