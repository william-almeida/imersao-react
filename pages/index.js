// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

const QuizContainer = styled.div`
width: 100%;
max-width: 350px;
padding-top: 45px;
margin: auto 5%;
@media sreen and (max-width: 500px) {
margin: auto;
padding: 15px;
}
`;

export default function Home() {
  const router = useRouter();
  // content - function
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>{db.title}</title>
      </Head>
      <QuizContainer>
        <QuizLogo />

        {/* Widget top */}

        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>

          <Widget.Content>
            {/* eslint-disable-next-line func-names */}
            <form onSubmit={function (eventInfo) {
              router.push(`/quiz?name=${name}`);
              eventInfo.preventDefault();
            }}
            >
              <Input
                name="userName"
                onChange={(eventInfo) => {
                  setName(eventInfo.target.value);
                }}
                placeholder="Insira o seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                Jogar
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        {/* Widget bottom */}

        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>
            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,
              sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
            </p>
          </Widget.Content>
        </Widget>

        {/* Footer */}

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/william-almeida/imersao-react" />
    </QuizBackground>
  );
}
