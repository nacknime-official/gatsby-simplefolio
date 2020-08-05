import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Maksym Goncharenko | Developer', // e.g: 'Name | Developer'
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
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'gdz_ukraine_bot.jpg',
    title: 'GDZ Ukraine Bot',
    info: "That's a telegram bot which show you a solution for your school homework",
    info2:
      'Written in AIOgram, GINO, HTTPx. It grabs all data from APIs (currently from the only one, but I wanna extend the list of the APIs)',
    url: 'https://t.me/gdz_ukraine_bot',
    repo: 'https://github.com/nacknime-official/gdz_ukraine', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
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
  email: 'lenovo.maks@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'telegram',
      url: 'https://t.me/nacknime',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/nacknime-official',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
