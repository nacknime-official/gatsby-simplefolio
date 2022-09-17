import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Maksym Honcharenko | Developer', // e.g: 'Name | Developer'
  lang: 'ru, ua, us', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Maksym',
  subtitle: "and I'm the Python Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'for_site.svg',
  paragraphOne:
    "I'm the backend developer from Ukraine. I use Python as the main programming language. I like it for its simplicity and the possibilities that Python libraries can give you.",
  paragraphTwo: 'For today I mainly write Telegram bots for various purposes.',
  paragraphThree:
    "Maybe, you'll be interested, I don't know, but.. I use Linux as the main OS on my laptop (Thinkpad T480s)(i don't know why I wrote this, but I think customer should know as much about the programmer as possible, including his/her hardware). And I think that programmers, which use Linux(next - LP), are better than Windows programmers(next - WP) because WP don't know about the \"Philosophy of Unix\" that says \"Do one thing and Do it well\"(DOTADIW), therefore the LP's code will be more logical, separate and customizable.",
  resume: '1', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'gdz_ukraine_bot.jpg',
    title: 'GDZ Ukraine Bot',
    info: "That's a Telegram bot that shows you a solution for your school homework",
    info2:
      'Written in AIOgram, GINO, HTTPx. It grabs all data from APIs (currently from the only one, but I wanna extend the list of the APIs)',
    url: 'https://t.me/gdz_ukraine_bot',
    repo: 'https://github.com/nacknime-official/gdz_ukraine', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'olx_scraper.jpg',
    title: 'OLX Scraper',
    info: 'A scraper, written in Scrapy library',
    info2:
      'It grabs Title Ad, Seller Name, Description of good/service, Product/service ID, Location, Phone number, Price, Time of publication, Link, Number of views',
    url: 'https://youtu.be/oK8DB3arvaM',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'nacknime.official@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'telegram',
      url: 'https://t.me/nacknime',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/nacknime-official',
    },
    {
      id: nanoid(),
      name: 'freelancehunt',
      url: 'https://freelancehunt.com/freelancer/nacknime.html',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/maksym-honcharenko-78aa401b2/',
    },
    {
      id: nanoid(),
      name: 'spotify',
      url: 'https://open.spotify.com/user/9lg0tybiomslsbkm5b6ge3vp8',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
