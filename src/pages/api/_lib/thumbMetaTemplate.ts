interface thumbMetaTemplateProps {
  level: string;
  challengesCompleted: string;
  totalExperience: string;
}

export default function getMetaTemplate(props: thumbMetaTemplateProps) {
  const thumbnailUrl = `${process.env.PUBLIC_NEXTAUTH_URL}/api/thumbnail.png?level=${props.level}&totalExperience=${props.totalExperience}&challengesCompleted=${props.challengesCompleted}&isImage=true`
  
  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <title>Level Up! | Move.it</title>

        <meta property="og:site_name" content="Move.it" />

        <meta property="og:title" content="Move.it" />
        <meta name="og:description" content="Avancei mais um level no move.it!!!">

        <meta property="og:image" content=${thumbnailUrl} />
        <meta property="og:image:type" content="image/png" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Move.it" />
        <meta name="twitter:description" content="Avancei mais um level no move.it!!!">
        <meta name="twitter:image" content="${thumbnailUrl}">

        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #0e0e0e
          }
        </style>
      </head>
      <body>
        <img src=${thumbnailUrl} alt="Thumbnail" />
      </body>
    </html>
  `;
}