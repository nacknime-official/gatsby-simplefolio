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
  subtitle: "and I'm the Backend Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'for_site.svg',
  paragraphOne:
    "I'm the backend developer from Ukraine. I use Golang and Python as the main programming languages.",
  paragraphTwo: "I worked at INC4 - blockchain technology development company on AirDAO Bridge project. But now I'm open to work, so feel free to contact me :)",
  paragraphThree:
    "I use Arch btw. neovim, sway (wayland), thinkpad and stuff like that.",
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
    url: 'https://gdz_ukraine_bot.t.me',
    repo: 'https://github.com/nacknime-official/gdz_ukraine', // if no repo, the button will not show up
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
      url: 'https://nacknime.t.me',
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
      url: 'https://www.linkedin.com/in/nacknime/',
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
