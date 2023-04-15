import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import { ReactNode } from 'react';

export const siteTitle = 'shaneschmaltz.com';

export default function Layout(input: { children: ReactNode | undefined }) {
  const { children } = input;

  return (
    <Container maxW={'40rem'} pos={'relative'}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Hi, I'm Shane Schmaltz. This is my personal website, thanks for visiting!"
        />
        <meta name="robots" content="all" />
        <meta
          property="og:image"
          content={`https://shaneschmaltz.com/images/profile.png`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Box mt={10}>{children}</Box>
    </Container>
  );
}
