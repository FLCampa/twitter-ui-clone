import React from 'react';

import { Container } from './styles';

interface Props {
  subtitle: string;
  content: string;
}

const News: React.FC<Props> = ({ subtitle, content }) => {
  return (
    <Container>
      <span>{subtitle}</span>
      <strong> {content}</strong>
    </Container>
  );
};

export default News;
