
import {BsFillStarFill} from 'react-icons/bs'
import {BsShieldFillCheck} from 'react-icons/bs'
import {RiSendPlaneFill} from 'react-icons/ri'
import { people01 } from '../assets'
import { people02 } from '../assets'
import { people03 } from '../assets'
import { airbnb } from '../assets'
import { binance } from '../assets'
import { coinbase } from '../assets'
import { dropbox } from '../assets'
import {AiOutlineInstagram} from 'react-icons/ai'
import {CiFacebook} from 'react-icons/ci'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'


export const navLinks = 

    [
        {
            id: 'home',
            title: 'Home'
        },

        {
            id: 'about',
            title: 'About'
        },

        {
            id: 'token',
            title: 'Token'
        },

        {
            id: 'service',
            title: 'Service'
        }


    ]

export const stats = [
    {
        id: "stats-1",
        title: "User Active",
        value: "3800+"
    },

    {
        id: "stats-2",
        title: "Trusted by Company",
        value: "230+"
    },

    {
        id: "stats-3",
        title: "Transaction",
        value: "$230M+",
    }
]

export const features = [
    {
        id: "feature-1",
        icon: <BsFillStarFill/>,
        title: "Rewards",
        content: "The best credit cards offer some tantalizing combinations of promotions and prizes"
        
    },

    {
        id: "feature-2",
        icon: <BsShieldFillCheck/>,
        title: "100% Secured",
        content: "We take proactive steps make sure your information and transactions are secure."
        
    },

    {
        id: "feature-3",
        icon: <RiSendPlaneFill/>,
        title: "Balance Transfer",
        content: "A balance transfer credit card can save you a lot of money in interest charges."
        
    }
]

export const feedback = [

    {
      id: "feedback-1",
      content:
        "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
      name: "Lisa Dawe",
      title: "Digital entrepreneur",
      img: people01,
    },
    {
      id: "feedback-2",
      content:
        "Money makes your life easier. If you're lucky to have it, you're lucky.",
      name: "Eric Mangold",
      title: "Financial educator",
      img: people02,
    },
    {
      id: "feedback-3",
      content:
        "It is usually people in the money business, finance, and international trade that are really rich.",
      name: "Edward Patterson",
      title: "Financial manager",
      img: people03,
    },
  ]
  
export const clients = [

    {
      id: "client-1",
      logo: airbnb,
    },
    {
      id: "client-2",
      logo: binance,
    },
    {
      id: "client-3",
      logo: coinbase,
    },
    {
      id: "client-4",
      logo: dropbox,
    },
]


export const footerLinks = [
    {
      title: "Useful Links",
      links: [
        {
          name: "Content",
          link: "https://www.hoobank.com/content/",
        },
        {
          name: "How it Works",
          link: "https://www.hoobank.com/how-it-works/",
        },
        {
          name: "Create",
          link: "https://www.hoobank.com/create/",
        },
        {
          name: "Explore",
          link: "https://www.hoobank.com/explore/",
        },
        {
          name: "Terms & Services",
          link: "https://www.hoobank.com/terms-and-services/",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          name: "Help Center",
          link: "https://www.hoobank.com/help-center/",
        },
        {
          name: "Partners",
          link: "https://www.hoobank.com/partners/",
        },
        {
          name: "Suggestions",
          link: "https://www.hoobank.com/suggestions/",
        },
        {
          name: "Blog",
          link: "https://www.hoobank.com/blog/",
        },
        {
          name: "Newsletters",
          link: "https://www.hoobank.com/newsletters/",
        },
      ],
    },
    {
      title: "Partner",
      links: [
        {
          name: "Our Partner",
          link: "https://www.hoobank.com/our-partner/",
        },
        {
          name: "Become a Partner",
          link: "https://www.hoobank.com/become-a-partner/",
        },
      ],
    },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: <AiOutlineInstagram/>,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: <CiFacebook/>,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: <AiOutlineTwitter/>,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: <BsLinkedin/>,
    link: "https://www.linkedin.com/",
  },
];