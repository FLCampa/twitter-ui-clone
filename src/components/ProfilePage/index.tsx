import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Felipe</h1>
        <h2>@felipe</h2>

        <p>Descrição do perfil</p>

        <ul>
          <li>
            <LocationIcon />
            São Carlos - SP, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 21 de setembro de 1999
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>99</strong>
          </span>
          <span>
            <strong>200 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
