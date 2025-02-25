const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'PolitCubes Wiki',
  tagline: 'PolitCubes - официальная документация',
  url: 'https://wiki.politcubes.ru',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'PolitCubes',
  projectName: 'wiki',
  themeConfig: {
    navbar: {
      title: 'PolitCubes Wiki',
      logo: {
        alt: 'PolitCubes Logo',
        src: 'logo.svg',
        srcDark: 'logo_dark.svg'
      },
      items: [
        {
          href: 'https://github.com/PolitCubes/wiki',
          label: 'GitHub',
          position: 'right',
        },
		{to: '/', label: 'Документация', position: 'left'},
		{to: '/blog', label: 'Блог', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'PolitCubes Logo',
        src: 'logo_dark.svg',
      },

      links: [
        {
          title: 'Основное',
          items: [
            {
              label: 'Правила проекта',
              href: '/general/rules',
            },
            {
              label: 'Регистрация',
              href: '/general/registration',
            },
            {
              label: 'FAQ',
              href: '/general/faq',
            },
          ],
        },
        {
          title: 'Сообщество',
          items: [
            {
              label: 'VK',
              href: 'https://vk.com/politcubes',
            },
            {
              label: 'Сайт',
              href: 'https://politcubes.ru',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/upFFUFMrWC',
            },
            {
              label: 'Служба поддержки',
              href: 'mailto:support@politcubes.ru',
            },
          ],
        },
        {
          title: 'Аккаунт',
          items: [
            {
              label: 'Личный кабинет',
              href: 'https://politcubes.ru/auth',
            },
            {
              label: 'Забыли пароль?',
              href: 'https://politcubes.ru/restore',
            },
            {
              label: 'Регистрация',
              href: 'https://politcubes.ru/actions',
            },
          ],
        },
        {
          title: 'Другое',
          items: [
            {
              label: 'MCTOP',
              href: 'https://mctop.su/servers/5527',
            },
            {
              label: 'Онлайн карта',
              href: 'https://politcubes.ru/map',
            },
          ],
        },
      ],
      copyright: `© 2019-${new Date().getFullYear()} Команда PolitCubes`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  i18n: {
    defaultLocale: "ru",
    locales: ["ru"]
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/PolitCubes/wiki/blob/main/',
        },
		blog: {
          showReadingTime: false,
          editUrl:
            'https://github.com/PolitCubes/wiki/blob/main/',
        },
      },
    ],
  ],
};
