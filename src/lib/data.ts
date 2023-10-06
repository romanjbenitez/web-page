import { BiLogoGmail, BiLogoUpwork } from 'react-icons/bi'
import { SiLeetcode, SiGithub, SiCodewars} from 'react-icons/si'

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About me',
    hash: '#about',
  },
  {
    name: 'My services',
    hash: '#services',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const socialMedias = [
  {
    id: 1,
    name: 'Upwork',
    link: 'https://www.upwork.com/freelancers/~0156f3b0bc5f77995f?viewMode=1',
    icon: BiLogoUpwork,
    color: '#6fda44',
    clipboardCopy: 'https://www.upwork.com/freelancers/~0156f3b0bc5f77995f?viewMode=1',
  },
  {
    id: 4,
    name: 'Github',
    link: 'https://github.com/romanjbenitez',
    icon: SiGithub,
    color: '#ffffff',
    clipboardCopy: 'https://github.com/romanjbenitez',
  },
  {
    id: 2,
    name: 'LeetCode',
    link: 'https://leetcode.com/Romanbenitez/',
    icon: SiLeetcode,
    color: '#fea016',
    clipboardCopy: 'https://leetcode.com/Romanbenitez/',
  },
  {
    id: 3,
    name: 'Gmail',
    link: 'mailto:roman200217@gmail.com',
    icon: BiLogoGmail,
    color: '#EA4335',
    clipboardCopy: 'roman200217@gmail.com',
  },
  {
    id: 5,
    name: 'CodeWars',
    link: 'https://www.codewars.com/users/romanjbenitez',
    icon: SiCodewars,
    color: '#B1361F',
    clipboardCopy: 'https://www.codewars.com/users/romanjbenitez',
  },

] as const

export const services = [
  {
    id: 2,
    name: 'Landing Page Development',
    image: '/images/icons/icon-6.png',
    desc: "Design and create attractive, high-converting web pages that capture visitors' attention and turn them into customers. Boost your online presence with professional and high-performing landing pages.",
  },
  {
    id: 3,
    name: 'Web Scraping',
    image: '/images/icons/icon-5.png',
    desc: 'I extract valuable data from websites automatically, providing you with crucial information for your business. From gathering product listings to collecting competitor data.',
  },
  {
    id: 4,
    name: 'Web App Development',
    image: '/images/icons/icon-1.png',
    desc: "Custom web application development tailored to meet your specific needs. From interactive platforms to content management systems, I'll build the perfect solution for you.",
  },
  {
    id: 5,
    name: 'SEO Improvement',
    image: '/images/icons/icon-4.png',
    desc: ' I optimize your website for search engines, increasing its visibility on Google and other search platforms. Improve your rankings, boost organic traffic, and expand your online reach.',
  },
  {
    id: 6,
    name: 'Figma Web Conversion',
    image: '/images/icons/icon-2.png',
    desc: ' I transform your Figma designs into fully functional and visually perfect web pages. Every detail will be faithfully replicated in the online version of your project.',
  },
  {
    id: 1,
    name: 'Ecomerse Development',
    image: '/images/icons/icon-3.png',
    desc: "Design and build efficient and attractive online stores. From setting up shopping carts to managing products, I'll help you effectively sell your products online.",
  },
] as const

export const canvasImages = [
  'html',
  'javascript',
  'css',
  'sequelize',
  'java',
  'django',
  'docker',
  'nest',
  'python',
  'react',
  'typescript',
  'nodejs',
  'tailwindcss',
  'redux-action',
  'vscode',
  'git',
  'vite',
].map((icon) => {
  const baseURL = 'https://images.weserv.nl'
  return `${baseURL}/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2F${icon}.svg&w=50&h=50`
})
