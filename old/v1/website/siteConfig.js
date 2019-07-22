/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {

  // If you have users set above, you add it here:
  users,

	// Title and tagline for website
  title: 'burrrata', // Title for your website.
	//tagline: 'Yet another anonymous piece of cheese on the internet',
	tagline: 'aka Logan Mnogolits',

  ////////////////////////
	//
	// FOR LOCAL DEVELOPMENT 
  url: 'https://your-docusaurus-test-site.com', 
  baseUrl: '/', 
	//
	// FOR PUBLISHING TO GH-PAGES 
  //url: 'https://burrrata.github.io',
  //baseUrl: '/website/',
	//
	// FOR PUBLISHING TO BURRRATA.CH
	//url: 'burrrata.ch',
	//baseUrl: '/',
	//
	// NOTES
  // For github.io type URLs, you would set the url and baseUrl like:
  //url: 'https://facebook.github.io', // Your website URL
  //baseUrl: '/test-site/', // Base URL for your project 
	////////////////////////////

  // Used for publishing and more
  projectName: 'burrrata.ch',
  organizationName: 'burrrata',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'doc1', label: 'Projects'},
    {page: 'help', label: 'Contact'},
    {blog: true, label: 'Blog'},
  ],

  /* path to images for header/footer */
  headerIcon: 'img/favicon.ico',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
		primaryColor: '#FFC72C',
    secondaryColor: '#DA291C',
		//secondaryColor: '#5a3f19',
  },

  /* Custom fonts for website */
	/*
  fonts: {
    myFont: [
      "Cereal",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
	*/

	// Set this to true if you want to be able to expand/collapse the links and subcategories in the sidebar.
	docsSideNavCollapsible: true,

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} burrrata`,

  // Highlight.js theme to use for syntax highlighting in code blocks.
  highlight: {
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
	
};

module.exports = siteConfig;
