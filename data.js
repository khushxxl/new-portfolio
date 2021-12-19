import {
  DesktopComputerIcon,
  DeviceMobileIcon,
  PencilAltIcon,
  ServerIcon,
} from '@heroicons/react/solid'

export const projectData = [
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
    id: 1,
    name: 'Watch Now',
    description:
      'A web app which curates trending and movies of different genres in one place',
    tech: 'Nextjs + Reactjs + Tailwind CSS +  API integration ',
    image:
      'https://user-images.githubusercontent.com/73185436/144229495-5143e869-6b64-4374-ac21-30e09b1bf645.png',
    gitRepoLink: 'https://github.com/khushxxl',
    deployedLink:
      'https://movie-streaming-nextjs-vercel2-5lwtsbqo5-khushxxl.vercel.app/',
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
    icon: `${(<DesktopComputerIcon />)}`,
  },
  {
    id: 2,
    title: 'App Development',
    icon: `${(<DeviceMobileIcon />)}`,
  },
  {
    id: 3,
    title: 'Web & App Design',
    icon: `${(<PencilAltIcon />)}`,
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
