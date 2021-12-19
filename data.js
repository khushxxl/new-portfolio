import {
  DesktopComputerIcon,
  DeviceMobileIcon,
  PencilAltIcon,
  ServerIcon,
} from '@heroicons/react/outline'

export const projectData = [
  {
    id: 1,
    name: 'Full Stack Web3 Chat dApp ',
    description:
      'A full stack web3 chat app built using moralis and is fully functional ',
    tech: 'Nextjs + Reactjs + Tailwind CSS +  API integration ',
    image:
      'https://user-images.githubusercontent.com/73185436/146677285-144517a6-7926-425f-9a03-028df194b7b5.png',
    gitRepoLink: 'https://github.com/khushxxl/web3-chat-moralis',
    deployedLink: 'https://web3-chat-moralis.vercel.app/',
  },
  {
    id: 4,
    name: 'Full Stack E-Commerce mobile application ',
    description:
      'A mobile app which allows users to order stuff online and sellers can view it through an admin panel (iOS & Android) ',
    tech: 'This web app has been built with Next.js and Tailwind CSS',
    image:
      'https://user-images.githubusercontent.com/73185436/144180437-3f95d3ab-c9c1-4ee9-a315-7fc2196fd493.png',
    gitRepoLink: 'https://github.com/khushxxl/rn-ecom-app',
    deployedLink: 'https://github.com/khushxxl/rn-ecom-app',
  },
  {
    id: 2,
    name: 'Full Stack Instagram Clone',
    description:
      'Full stack instagram clone with features like image uploading and full proof authentication! (Web) ',
    tech:
      'Nextjs , Reactjs , Recoiljs , Firebase Auth , Firebase Firestore , Tailwind CSS ',
    image:
      'https://user-images.githubusercontent.com/73185436/144228318-61767ba7-2cab-4b96-8f22-69efa5344e6d.png',
    gitRepoLink: 'https://github.com/khushxxl/instagram-nextjs',
    deployedLink: 'https://instagram-nextjs-khushxxl.vercel.app/',
  },

  {
    id: '3',
    name: 'Quote Up',
    description:
      'This mobile application shows beautiful new quotes to influence and enrich people in right direction! (iOS & Android)',
    tech: 'React , React Native , API integration , Light & Dark mode support ',
    image:
      'https://user-images.githubusercontent.com/73185436/144181436-8b2e44d5-7b34-4419-9561-982260d3d8d4.png',
    gitRepoLink: 'https://github.com/khushxxl/quote-up',
    deployedLink: 'https://github.com/khushxxl/quote-up',
  },
]

export const businessData = [
  {
    id: 1,
    title: 'Web Development',
    icon: <DesktopComputerIcon className="h-5 w-5" />,
  },
  {
    id: 2,
    title: 'App Development',
    icon: <DeviceMobileIcon className="h-5 w-5" />,
  },
  {
    id: 3,
    title: 'Web & App Design',
    icon: <PencilAltIcon className="h-5 w-5" />,
  },
  //   {
  //     id: 4,
  //     title: 'Web Hosting',
  //     icon: `${(<ServerIcon />)}`,
  //   },
  //   {
  //     id: 5,
  //     image: require('./images/writing.png'),
  //     title: 'Content Wrting',
  //   },
  //   {
  //     id: 8,
  //     title: 'Maintenance',
  //     image: require('./images/settings-2.png'),
  //   },
]

export const workDone = [
  {
    name: 'BETA TESTERS',
    about: 'A agency as a startup helping people by providing various services',
    role: 'Lead Mobile Developer',
  },
  {
    name: 'BARB',
    about:
      'A startup building a mobile app for people to book saloon appointments across India.',
    role: 'Lead Web Developer',
  },
  {
    name: 'AFEN Marketplace',
    about:
      'A startup build NFT market place using WEB 3 , Solidity and Reactjs',
    role: 'Web Developer',
  },
]
