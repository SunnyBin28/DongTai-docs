/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '洞态文档',
  scripts: [
    {src: '/installGio.js',  async: true}
  ],
  tagline: '了解洞态产品轻松上手的指南手册',
  url: 'https://docs.dongtai.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'HXSecurity', // Usually your GitHub org/user name.
  projectName: 'DongTai-docs-docusaurus', // Usually your repo name.
  // trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [require('mdx-mermaid')],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: function ({ locale, docPath }) {
            return `https://github.com/HXSecurity/DongTai-docs-docusaurus/edit/main/docs/${docPath}`;
          },
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          includeCurrentVersion: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],


  i18n: 
  {
    defaultLocale: 'zh',
    locales: ['zh'],
  },


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({    
      algolia: {
        appId: 'VC3Q2ASVJO',
        apiKey: 'a67127d82bb304e28b333b67884bc9d7',
        indexName: 'dongtai',
        contextualSearch: true,
      },      
      navbar: {
        title: '洞态',
        logo: {
          alt: 'DongTai Logo',
          src: 'img/dongtai-logo.svg',
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'introduction',
            label: '文档',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'api',
            label: 'API',
          }, 
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'development',
            label: '开发者文档',
          },           
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'changelog',
            label: '更新日志',
          },                
          // Please keep GitHub link to the right for consistency.
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },        
          {
            type: 'localeDropdown',
            position: 'right',            
          },
          {
            href: 'https://github.com/HXSecurity/DongTai',
            className: "header-github-link",            
            position: 'right',
          },        
        ],
      },
      footer: {
        style: 'dark',  
        logo: {
          alt: 'Facebook Open Source Logo',
          href: 'https://opensource.facebook.com',
        },
        // Please do not remove the credits, help to publicize Docusaurus :)
        copyright: `Copyright © ${new Date().getFullYear()} HXSecurity-DongTai. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
