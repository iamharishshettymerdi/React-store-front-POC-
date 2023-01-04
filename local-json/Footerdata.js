import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PinterestIcon from '@material-ui/icons/Pinterest';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import EditAttributesIcon from '@material-ui/icons/EditAttributes';


export const listData = [
  {
    list_id: 2,
    name: "Privacy Policy",
    url: "/privacy-policy",
    iconComponent: '',
  },
  {
    list_id: 3,
    name: "Terms of Use",
    url: "/terms-of-use",
    iconComponent: '',
  },
  {
    list_id: 4,
    name: "Accessibility",
    url: "/beauty/accessibility",
    iconComponent: '',
  },
  {
    list_id: 5,
    name: "Sitemap",
    url: "/sitemap",
    iconComponent: '',
  },
  {
    list_id: 6,
    name: "Your Privacy Choices",
    url: "/",
    iconComponent: <EditAttributesIcon/>
  },
];
  
export const icons = [
    {
      list_id: 1,
      name: "Instagram",
      url: "www.instagram.com",
      iconComponent: <InstagramIcon/>,
    },
    {
      list_id: 2,
      name: "Facebook",
      url: "www.facebook.com",
      iconComponent: <FacebookIcon/>,
    },
    {
      list_id: 3,
      name: "Twitter",
      url: "www.twitter.com",
      iconComponent: <TwitterIcon/>,
    },
    {
      list_id: 4,
      name: "Youtube",
      url: "www.youtube.com",
      iconComponent: <YouTubeIcon/>,
    },
    {
      list_id: 5,
      name: "Pinterest",
      url: "www.pinterest.com",
      iconComponent: <PinterestIcon/>,
    },
    {
      list_id: 6,
      name: "TikTok",
      url: "www/tiktok.com",
      iconComponent: <AudiotrackIcon/>,
    },
    {
      list_id: 7,
      name: "Apple Playstore",
      url:'',
      image_url: "https://www.sephora.com/img/ufe/badge-app-store.svg",
      iconComponent: '',
    },
    {
      list_id: 8,
      name: "Google Playstore",
      url: '',
      image_url: "https://www.sephora.com/img/ufe/badge-google-play.svg",
      iconComponent: '',
    },
];
// export const Headerdata = [
//   {
//     icon: 'https://www.sephora.com/img/ufe/icons/find-store.svg',
//     title: 'Find a Store',
//     description: 'Choose your store',
//     url:'/happening/stores/sephora-near-me'
//   },
//   {
//     icon:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ6vLw1SAN1nKIiHws_NRtCWwm6pQ0MrHt4g&usqp=CAU',
//     title: 'Live Beauty App',
//     description: 'Available',
//     url:''
//   },
//   {
//     icon: 'https://www.sephora.com/img/ufe/icons/app.svg',
//     title: 'Get the App',
//     description: 'Text "APP" to 36681',
//     url:'/beauty/app'
//   },
//   {
//     icon: 'https://www.sephora.com/img/ufe/icons/sms-ko.svg',
//     title: 'Get Sephora Text Alerts',
//     description: 'Sign Up',
//     url:'/beauty/text-alerts'
//   },
//   {
//     icon: 'https://www.sephora.com/img/ufe/icons/cc-outline-ko.svg',
//     title: 'Sephora Credit Card Program',
//     description: 'Want 25% off your Sephora Purchase?Details ',
//     url:'/creditcards'
//   },
// ]
// export const bodyData = [
//   {
//     title: 'About Sephora',
//     items: [
//       'About Sephora',
//       'Newsroom',
//       'Careers',
//       'Sephora Values',
//       'Supply Chain Transparency',
//       'Affilates',
//       'Sephora Events',
//       'Gift Cards',
//       'Sephora Global Sites',
//       'Diversity,Equity & inclusion',
//       'Checkout on Instagram',
//       'Sephora Accelerate',
//       'Report a Vulnerability',
//     ],
//   },
//   {
//     title: 'My sephora',
//     items: [
//       'Beauty Insider',
//       'Sephora Credit Card',
//       'Community Profile',
//       'Order Status',
//       'Purchase History',
//       'Account Settings',
//       'Beauty Adivsor Recommendations',
//       'Beauty Offers',
//       'Quizzes & Buying Guides',
//       'Rewards Bazzar',
//       'Loves',
//       'Book a Reservation',
//     ],
//   },
//   {
//     title: 'Help',
//     items: [
//       'Customer Service',
//       'Returns & Exchanges',
//       'Delivery and Pickup Options',
//       'Shipping',
//       'Billing',
//       'International Shipments',
//       'Beauty Services FAQ',
//       'Sephora at  Kohls',
//       'Sephora Inside JCPenny',
//       'Store Locations',
//       'Online Ordering',
//       'Klarna & Afterpay',
//       'Accessilbilty',
//     ],
//   },
// ]
export const swtichData = 
  {
    title: 'Religion & Langauge',
    items: [
      {
        flag: 'https://www.sephora.com/img/ufe/flags/us.svg',
        title: 'United States - English',
        country:'US',
      },
      { flag: 'https://www.sephora.com/img/ufe/flags/ca.svg', title: 'Canada - English',country:"CADENG" },
      {
        flag: 'https://www.sephora.com/img/ufe/flags/ca.svg',
        title: 'Canada - Français',
        country:"CADFRA",
      },
    ],
  }
