import Document, { Html, Head, Main, NextScript } from 'next/document';

const title = "Move.it"
const description = "O move.it é um app que une a técnica de Pomodoro com a realização de exercícios físicos para quem passa muito tempo na frente do computador."
const thumbnailUrl = `${process.env.PUBLIC_NEXTAUTH_URL}/moveit.png`

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link 
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
            rel="stylesheet" 
          />

          <meta name="description" content={description} />

          <meta property="og:site_name" content="Move.it" />

          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />

          <meta property="og:image" content={thumbnailUrl} />
          <meta property="og:image:type" content="image/png" />

          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={thumbnailUrl} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}