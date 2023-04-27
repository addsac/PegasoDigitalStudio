import Script from "next/script";

export default function Head() {
  return (
    <>
      <title> Studio digitale di design e sviluppo a Cittadella | Pegaso Digital Studio </title>
      <meta name="description" content="Pegaso Digital Studio è una web e marketing agency a Cittadella (PD), siamo specializzati in siti web, ecommerce, branding, loghi, social e digital marketing." />
      <meta charSet="UTF-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />

      {/* Clarity */}
      <Script id="clarity" strategy="lazyOnload" dangerouslySetInnerHTML={{ __html: `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "gugoq3zeit");
      `}} />

      {/* Google analitycs */}
      <Script id="analitycs" strategy="lazyOnload" dangerouslySetInnerHTML={{ __html: `
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-F0EF7ZBFTH"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-F0EF7ZBFTH');
        </script>
      `}} />
    </>
  )
}
