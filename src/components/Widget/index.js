import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: 4px;
  overflow: hidden;
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  * {
    margin: 0;
  }
  h1 {
    font-size: 20px;
  }
  a {
    display: block;
    padding: 8px 10px;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.contrastText};
    transition: 400ms;
  }
  a:hover {
    letter-spacing: 2px;
    background-color: ${({ theme }) => `${theme.colors.secondary}66`};
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 24px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Topic = styled.a`
outline: 0;
text-decoration: none;
color: ${({ theme }) => theme.colors.contrastText};
background-color: ${({ theme }) => `${theme.colors.primary}99`};
padding: 10px 15px;
margin-bottom: 8px;
cursor: pointer;
border-radius: ${({ theme }) => theme.borderRadius};
transition: .3s;
display: block;

&:hover,
&:focus {
  opacity: 0.6;
  padding: 12px 15px 12px 30px;
}
`;

Widget.Feedback = styled.div`
  margin-top: 24px;
  padding: 10px 15px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: #a00d7c;
  h1 {
    text-align: center;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: solid 1px #fff;
  }
`;

export default Widget;
