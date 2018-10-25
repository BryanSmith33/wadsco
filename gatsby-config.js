module.exports = {
  siteMetadata: {
    title: 'Wadsworth Construction',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Wadsworth Construction',
        short_name: 'Wadsco',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#111',
        display: 'minimal-ui',
        icon: 'src/images/wadsco.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lato:300,400', 'Alfa Slab One'],
        },
      },
    },
  ],
}
