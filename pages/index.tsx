import { Container } from '@chakra-ui/react';

import Layout from '../components/layout';

export const siteTitle = 'shaneschmaltz.com';

export default function Home() {
  return (
    <Layout showReturnToHome={false}>
      <Container pos="relative" mt={5} p={0} width="100%" maxW="inherit">
        Welcome to my website!
      </Container>
    </Layout>
  );
}
