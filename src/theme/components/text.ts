import type { StyleConfig } from '@chakra-ui/react';
import { primaryColor } from '../../utils/constant';

export const textStyles: Record<string, Record<string, StyleConfig>> = {
  components: {
    Text: {
      baseStyle: {
        color: primaryColor,
        fontSize: 14,
        p: 0,
      },
    },
  },
};
