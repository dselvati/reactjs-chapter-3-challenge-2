import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
          <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=ig-chapter-3-challenge-1-ds"></script>
        </Head>

        <body>
          <Main />
          <NextScript /> {/*Onde roda os arquivos JS*/}
        </body>
      </Html>
    )
  }
}
