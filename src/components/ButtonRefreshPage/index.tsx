import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

interface Props {
  children: React.ReactNode;
}

const ButtonRefreshPage: React.FC<Props> = ({ children }: Props) => {
  const history = useHistory();

  function handleRefreshPage() {
    history.go(0);
  }

  return (
    <Container onClick={handleRefreshPage}>{children}</Container>
  );
};

export default ButtonRefreshPage;
