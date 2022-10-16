import React from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';

export const links = [
  {
    id: 1,
    url: '#header',
    text: 'home',
  },
  {
    id: 3,
    url: '#works',
    text: 'works',
  },
  {
    id: 2,
    url: '#about',
    text: 'about',
  },
  {
    id: 4,
    url: '#contact',
    text: 'contact',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
];
// const sublinks = [
//   {
//     page: 'works',
//     links: [
//       { label: 'payment', icon: <FaCreditCard />, url: '/products' },
//       { label: 'terminal', icon: <FaCreditCard />, url: '/products' },
//       { label: 'connect', icon: <FaCreditCard />, url: '/products' },
//     ],
//   },
//   {
//     page: 'contact',
//     links: [
//       { label: 'plugins', icon: <FaBook />, url: '/products' },
//       { label: 'libraries', icon: <FaBook />, url: '/products' },
//       { label: 'help', icon: <FaBook />, url: '/products' },
//       { label: 'billing', icon: <FaBook />, url: '/products' },
//     ],
//   },
//   {
//     page: 'home',
//     links: [
//       { label: 'about', icon: <FaBriefcase />, url: '/products' },
//       { label: 'customers', icon: <FaBriefcase />, url: '/products' },
//     ],
//   },
// ];
// export default sublinks;
