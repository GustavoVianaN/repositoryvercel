import { Fade } from 'react-awesome-reveal';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;      // segundos
  duration?: number;   // milissegundos
};

export default function SectionFadeIn({ children, delay = 0, duration = 2000 }: Props) {
  return (
    <Fade
      direction="up"
      triggerOnce
      delay={delay * 1000}
      cascade={false}
      duration={duration}
    >
      {children}
    </Fade>
  );
}
