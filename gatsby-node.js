/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions: { createPage } }) => {
  const pages = ['svs', 'hourly'];
  console.log('create', pages)
  pages.forEach(p => createPage({
    path: `/${p}`,
    component: require.resolve(`./src/pages/${p}.js`),
  }));



}