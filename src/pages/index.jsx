import P from 'prop-types';
import Head from 'next/head';
import styled from 'styled-components';
import config from '../config/index';
import { mapData } from '../api/map-data';

const Heading = styled.h1`
  background: ${({ theme }) => theme.colors.secondaryColor};
`;

export default function Index({ data = null }) {
  return <Heading>Felipe</Heading>;
};

export const getStaticProps = async () =>{
  const raw = await fetch(config.url + config.defaultSlug);
  const json = await raw.json();
  const data = mapData(json)[0];
  return {
    props: {
      data,
    }
  };
};

Index.propTypes = {
  data: P.object,
};