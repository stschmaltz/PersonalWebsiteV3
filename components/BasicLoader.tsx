import { Flex, Spinner } from '@chakra-ui/react';
import { theme } from '../styles/theme';

export default function BasicLoader() {
  return (
    <Flex
      alignItems={'center'}
      justifyContent={'center'}
      width="100vw"
      height={'80vh'}
    >
      <Spinner
        color={theme.colors.brandPrimary['500']}
        colorScheme={'brandPrimary'}
        size={'xl'}
      />
    </Flex>
  );
}
