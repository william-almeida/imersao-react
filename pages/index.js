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

export const QuizContainer = styled.div`
width: 100%;
max-width: 350px;
padding-top: 45px;
margin: auto 10%;
@media sreen and (max-width: 500px) {
margin: auto;
padding: 15px;
}
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Lil Peep Quiz</title>

      </Head>
      <QuizContainer>
        <QuizLogo />

        {/* Widget top */}

        <Widget>
          <Widget.Header>
            <h1>Lil Peep</h1>
          </Widget.Header>

          <Widget.Content>
            <form onSubmit={function (eventInfo) {
              router.push(`/quiz/name=${name}`);
              eventInfo.preventDefault();
              // router
            }}
            >
              <input
                onChange={function (eventInfo){
                  // name = 
                  setName(eventInfo.target.value);
                }}
                placeholder="Insira o seu nome" />
              <button type="submit" disabled={name.length === 0}>
                Jogar&nbsp;
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        {/* Widget bottom */}

        <Widget>
          <Widget.Content>
            <h1>Lil Peep</h1>
            <p>lorem imp askjdhkb o  po sjd jashd </p>
          </Widget.Content>
        </Widget>

        {/* Footer */}

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/william-almeida/imersao-react" />
    </QuizBackground>
  );
}
