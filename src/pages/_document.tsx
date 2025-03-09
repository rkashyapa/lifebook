import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en" className="h-full">
      <Head />
      <body className="font-sans antialiased h-full bg-gray-50">
        <Main />
        <NextScript />
        {/* This script removes browser extension attributes that cause hydration mismatches */}
        <Script
          id="remove-extension-attributes"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const observer = new MutationObserver((mutations) => {
                    mutations.forEach((mutation) => {
                      if (mutation.type === 'attributes' && mutation.attributeName === 'cz-shortcut-listen') {
                        const element = mutation.target;
                        element.removeAttribute('cz-shortcut-listen');
                      }
                    });
                  });
                  
                  observer.observe(document.body, {
                    attributes: true,
                    subtree: true,
                    attributeFilter: ['cz-shortcut-listen']
                  });
                } catch (e) {
                  console.error('Error in hydration fix script:', e);
                }
              })();
            `,
          }}
        />
      </body>
    </Html>
  );
} 