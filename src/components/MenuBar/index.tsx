import React from 'react';

import Button from '../Button';

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  TagIcon,
  BellIcon,
  EmailIcon,
  BookmarkIcon,
  SubjectIcon,
  ProfileIcon,
  MoreIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <TagIcon />
          <span>Explorar</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <BookmarkIcon />
          <span>Itens salvos</span>
        </MenuButton>

        <MenuButton>
          <SubjectIcon />
          <span>Listas</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <MenuButton>
          <MoreIcon />
          <span>Mais</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>

      <Botside>
        <div>
          <Avatar />

          <ProfileData>
            <strong>Felipe</strong>
            <span>@felipe</span>
          </ProfileData>
        </div>

        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
