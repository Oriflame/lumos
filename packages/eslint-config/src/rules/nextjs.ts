import type eslint from 'eslint';

const config: eslint.Linter.Config['rules'] = {
  '@next/next/google-font-display': 'off', // enforce optional or swap font-display behavior with Google Fonts
  '@next/next/google-font-preconnect': 'off', // enforce preconnect usage with Google Fonts
  '@next/next/inline-script-id': 'error', // enforce id attribute on next/script components with inline content
  '@next/next/link-passhref': 'warn', // enforce passHref prop usage with custom Link components
  '@next/next/next-script-for-ga': 'error', // use the Script component to defer loading of the script until necessary
  '@next/next/no-css-tags': 'off', // prevent manual stylesheet tags
  '@next/next/no-document-import-in-page': 'error', // disallow importing next/document outside of pages/document.js
  '@next/next/no-head-import-in-document': 'error', // disallow importing next/head in pages/document.js
  '@next/next/no-html-link-for-pages': 'error', // prohibit HTML anchor links to pages without a Link component
  '@next/next/no-img-element': 'off', // prohibit usage of HTML <img> element
  '@next/next/no-page-custom-font': 'off', // prevent page-only custom fonts
  '@next/next/no-sync-scripts': 'warn', // forbid synchronous scripts
  '@next/next/no-title-in-document-head': 'error', // disallow using <title> with Head from next/document
  '@next/next/no-typos': 'warn', // ensure no typos were made declaring Next.js's data fetching function
  '@next/next/no-unwanted-polyfillio': 'off', // prevent duplicate polyfills from Polyfill.io
};

export default config;
