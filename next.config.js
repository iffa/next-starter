// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextTranslate = require('next-translate');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextTranslate());
