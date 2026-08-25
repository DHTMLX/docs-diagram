const path = require('path');

module.exports = (context, options) => {
  const { siteDir } = context;
  const {
    onBraceNotationMatch,
    onAtNotationMatch,
    onAtNotationFunctionMatch,
    onEmptyLinkMatch,
    onAfterDataTransformation
  } = options;

  return {
    name: 'dhx-md-data-transformer-plugin',
    configureWebpack() {
      return {
        module: {
          rules: [
            {
              include: [
                path.resolve(siteDir, 'docs'),
                // Translated docs live under i18n/<locale>/docusaurus-plugin-content-docs/current/
                // and must go through the same notation transformer as the English docs.
                /[/\\]i18n[/\\][^/\\]+[/\\]docusaurus-plugin-content-docs[/\\]current[/\\]/,
              ],
              test: /(\.mdx?)$/,
              use: [
                {
                  loader: 'dhx-md-data-transformer-loader',
                  options: {
                    onBraceNotationMatch,
                    onAtNotationMatch,
                    onAtNotationFunctionMatch,
                    onEmptyLinkMatch,
                    onAfterDataTransformation,
                  }
                }
              ]
            }
          ],
        },
        resolveLoader: {
          modules: ['node_modules', path.resolve(siteDir, 'loaders')]
        }
      };
    }
  };
};
