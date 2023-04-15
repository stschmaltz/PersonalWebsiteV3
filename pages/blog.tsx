import { Container } from '@chakra-ui/react';

import Layout from '../components/layout';

export const siteTitle = 'shaneschmaltz.com';

export default function Blog() {
  return (
    <Layout>
      <Container pos="relative" mt={'16'} p={0} width="100%" maxW="inherit">
        Blog
      </Container>
    </Layout>
  );
}
