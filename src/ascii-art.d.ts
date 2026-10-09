import { JSX } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ascii-art': JSX.IntrinsicElements['div'] & {
        piece?: string;
      };
    }
  }
}
