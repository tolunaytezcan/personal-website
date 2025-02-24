import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

export const links = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Resume', path: '/resume' },
  { name: 'Work', path: '/work' }
];

export const socials = [
  {
    name: 'Github',
    icon: <FaGithub />,
    path: 'https://github.com/tolunaytezcan',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/tolunaytezcan/',
  },
  {
    name: 'Email',
    icon: <FaEnvelope />,
    path: '/contact',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    path: 'https://www.instagram.com/tolunaytezcan_/',
  },
];

export const stats = [
  {
    name: 'Years Experience',
    value: 5,
    suffix: '+'
  },
  {
    name: 'Users serving projects',
    value: 50,
    suffix: 'M+'
  },
  {
    name: 'Performance & Accessibility',
    value: 100,
    suffix: '%'
  },
];
