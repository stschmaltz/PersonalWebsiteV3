import { Container, Link, Text } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { List, ListItem } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';

import Layout from '../components/layout';

export const siteTitle = 'shaneschmaltz.com';

export default function Home() {
  return (
    <Layout>
      <Container pos="relative" mt={'16'} p={0} width="100%" maxW="inherit">
        <Flex flexDir={'column'} alignItems={'center'}>
          <Flex
            h="70vh"
            // maxH={'400px'}
            justifyContent={'center'}
            flexDir={'column'}
          >
            <Flex flexDir={'column'} alignItems={'center'}>
              <Heading>Shane Schmaltz</Heading>
              <Text pb={'12'}>Software Developer</Text>
            </Flex>
            <List textAlign={'center'}>
              <ListItem pb={'3'}>
                <Link href="/about">About Me</Link>
              </ListItem>
              <ListItem pb={'3'}>
                <Link href="/portfolio">Personal Portfolio</Link>
              </ListItem>
              <ListItem pb={'3'}>
                <Link href="/professional_experience">
                  Professional Experience
                </Link>
              </ListItem>
              <ListItem pb={'3'}>
                <Link href="/hobbies">What else do I do</Link>
              </ListItem>
              <ListItem pb={'3'}>
                <Link href="/blog">My Blog</Link>
              </ListItem>
            </List>
          </Flex>
        </Flex>
      </Container>
    </Layout>
  );
}
