import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Quem seguir"
            elements={Array(3).fill(
              <FollowSuggestion name="pedro" nickname="@pedro" />
            )}
          />

          <List
            title="O que está acontecendo"
            elements={Array(3).fill(
              <News
                subtitle="Assuntos do momento no Brasil"
                content="Copa Libertadores da América"
              />
            )}
          />

          <List
            title="Entretenimento"
            elements={Array(3).fill(
              <News subtitle="Noite Anterior" content="Masterchef Brasil" />
            )}
          />

          <List
            title="Música"
            elements={Array(3).fill(
              <News subtitle="Eminem" content="Beautiful" />
            )}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
