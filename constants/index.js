import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export const links = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Resume', path: '/resume' },
  { name: 'Work', path: '/work' },
  { name: 'Contact', path: '/contact' },
];

export const socials = [
  {
    name: 'Github',
    icon: <FaGithub />,
    path: '',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    path: '',
  },
  {
    name: 'Email',
    icon: <FaEnvelope />,
    path: '',
  },
  {
    name: 'Twitter',
    icon: <FaTwitter />,
    path: '',
  },
];

export const stats = [
  { name: 'Years Experience', value: 5 },
  { name: 'Clients', value: 5 },
  { name: 'Experience', value: 3 },
  { name: 'Awards', value: 2 },
];
