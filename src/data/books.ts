export interface Review {
  source: string;
  date?: string;
  quote: string;
  starred?: boolean;
}

export interface Book {
  title: string;
  slug: string;
  series: string;
  seriesSlug: string;
  seriesNumber: number;
  pubDate: string;
  publisher: string;
  ageRange: string;
  gradeRange: string;
  isbn: string;
  lexile?: string;
  atos?: string;
  coverImage: string;
  tagline: string;
  shortSynopsis: string;
  longSynopsis: string;
  reviews: Review[];
  awards: string[];
  contentNotes?: string; // for parents
}

export const books: Book[] = [
  {
    title: 'Dark Life',
    slug: 'dark-life',
    series: 'Dark Life',
    seriesSlug: 'dark-life-series',
    seriesNumber: 1,
    pubDate: 'May 1, 2010',
    publisher: 'Scholastic Press',
    ageRange: '9–12',
    gradeRange: 'Grades 5–7',
    isbn: '978-0545178143',
    lexile: '690L',
    atos: '4.8',
    coverImage: '/images/books/DarkLife.jpg',
    tagline: '"Go West, young man"? Try "Go Deep."',
    shortSynopsis:
      'In a future where rising seas have flooded the coasts, 15-year-old Ty has grown up farming the ocean floor — the only boy born and raised in the subsea settlements. When Topsider orphan Gemma arrives searching for her brother, the two uncover a dangerous secret about the Seablite Gang and the mysterious "dark gifts" that underwater life gives to its children.',
    longSynopsis:
      'Ty has spent his whole life on the ocean floor. While Topsiders struggle for space on overcrowded land, Ty and his family farm the underwater frontier in government-subsidized subsea homesteads — living proof that humanity can adapt to a flooded Earth. But when Topsider orphan Gemma arrives in the territory looking for her missing brother, she and Ty stumble onto something far bigger than a runaway kid: the Seablite Gang, a crew of outlaws who will do anything to drive the subsea settlers out. And the deeper Ty digs, the more dangerous the secret becomes — because the ocean may have given him and the other subsea-born children abilities that Topsiders would fear, hunt, and exploit.',
    reviews: [
      {
        source: 'Publishers Weekly',
        date: 'April 5, 2010',
        quote:
          "It's not 'Go West, young man,' but 'Go Deep,' in this action-packed aquatic adventure by newcomer Falls. Though the science and future history are only lightly explored, there's no denying the nifty premise, solid characterization, and tense moments that contribute to a cinematic reading experience. Falls's undersea world warrants further exploration.",
      },
      {
        source: 'Kirkus Reviews',
        date: 'April 1, 2010',
        quote:
          'A Western, that is, with plankton instead of cows, harpoons instead of six-shooters and submarines instead of covered wagons. Ty lives below the ocean, in a future in which water levels have risen and Topsiders live cramped together in unbearable conditions. A thrilling conversion of the classics to one of our newer frontiers.',
      },
      {
        source: 'School Library Journal',
        date: 'Grades 6–10',
        quote:
          'Falls has created a riveting adventure story that action fans and reluctant readers will enjoy for its fast pace. Teens will like the budding romance between Ty and Gemma and the marvelous, imaginative depictions of life on the ocean floor. Readers will cheer Ty on in his pursuit of the pirates and clamor for more tales of undersea life.',
      },
      {
        source: 'Booklist',
        date: 'Grades 6–9',
        quote:
          'The exotic setting and well-conceived details about undersea living, along with likable characters and a minor surprise at the end, will keep readers turning the pages.',
      },
    ],
    awards: [
      '2011 Friends of American Writers Juvenile Literary Award — Winner',
      'Bank Street Best Books of the Year',
      'Junior Library Guild Selection',
      "Al Roker's Book Club for Kids — TODAY Show Pick (July 2010)",
      'SSYRA Nominee (FL)',
      'Dorothy Canfield Fisher Award Nominee (VT)',
      'Maud Hart Lovelace Award Nominee (MN)',
      'Mark Twain Award Nominee (MO)',
      'Rebecca Caudill Award Nominee (IL)',
      'Golden Sower Award Nominee (NE)',
      'South Carolina Children\'s Book Award Nominee',
      "Georgia Children's Book Award Nominee",
      "Germany's Ulmer Unke Nominee",
      'Disney film option — Robert Zemeckis directing (ImageMovers / The Gotham Group)',
    ],
    contentNotes:
      'Action-adventure danger, kidnapping, underwater peril, and mild suspense. No sexual content or strong language.',
  },
  {
    title: 'Rip Tide',
    slug: 'rip-tide',
    series: 'Dark Life',
    seriesSlug: 'dark-life-series',
    seriesNumber: 2,
    pubDate: 'August 1, 2011',
    publisher: 'Scholastic Press',
    ageRange: '9–12',
    gradeRange: 'Grades 5–7',
    isbn: '978-0545178433',
    lexile: '780L',
    coverImage: '/images/books/RipTideLogo.jpg',
    tagline: 'The fight for the frontier isn\'t over.',
    shortSynopsis:
      'Ty and Gemma return to a subsea territory under siege. When settlers are found chained to a sunken submarine, Ty must confront new threats — and harder truths about his dark gift — before the ocean floor becomes uninhabitable for everyone.',
    longSynopsis:
      'Life on the ocean floor was never easy, but now someone is chaining sub-township residents to a sunken sub and leaving them to drown — and the suspects reach closer to home than Ty ever expected. With Gemma back Topside and the subsea territory fracturing under pressure, Ty must dig into the conspiracy even as it threatens to expose exactly what the dark-gifted children are. The sequel expands the world of the flooded frontier while raising the personal stakes for both Ty and the settlers who depend on him.',
    reviews: [
      {
        source: 'Publishers Weekly',
        date: 'June 2011',
        quote:
          "There's no shortage of action, intrigue, or daring exploits in this aquatic thriller. Atmospheric and tense, built around an expertly used postapocalyptic–meets–Wild West setting, this story's a whole lot of fun and won't disappoint fans of the first book.",
      },
      {
        source: 'School Library Journal',
        date: 'Grades 6–10',
        quote:
          'Readers will immerse themselves in this burgeoning new world that leaves the door open for more adventures. Falls illuminates the many-layered social-class structure and the setting. Readers will empathize with the subsea pioneers and relate to characters whose sometimes-misguided decisions to protect the peace feel entirely human.',
      },
      {
        source: 'KidsReads.com',
        quote:
          'Well written and well paced, and the simplicity of its language betrays the complexity of its ideas. While the futuristic bits are fun and clever, the real power here is in the way Falls examines corruption of authority, oppression of the masses, and issues such as prejudice, poverty and stereotyping. Not only is this an entertaining adventure and a worthy sequel, it is a thought-provoking tale about power, determination, family and friendship.',
      },
    ],
    awards: [
      'Junior Library Guild Selection',
    ],
    contentNotes:
      'Action-adventure danger, drowning peril, family separation, and some frightening scenes. No sexual content or strong language.',
  },
  {
    title: 'Inhuman',
    slug: 'inhuman',
    series: 'Inhuman',
    seriesSlug: 'inhuman-series',
    seriesNumber: 1,
    pubDate: 'September 24, 2013',
    publisher: 'Scholastic Press',
    ageRange: '13+',
    gradeRange: 'Grades 6–12',
    isbn: '978-0545370998',
    atos: '5.0',
    coverImage: '/images/books/Inhuman.jpg',
    tagline: 'Cross the wall. Break every rule.',
    shortSynopsis:
      'Years after the Ferae Naturae virus turned millions into half-human "manimals," Lane McEvoy is forced across the Titan wall into the Feral Zone — a quarantine wilderness where the infected roam. To save her father, she\'ll have to survive a world where the line between human and animal no longer exists.',
    longSynopsis:
      "The Ferae Naturae virus swept through civilization like wildfire, splicing human DNA with animal DNA and turning millions into terrifying hybrids called manimals. To protect the uninfected, the government erected the Titan wall, sealing the Feral Zone and everyone in it away from humanity. Lane McEvoy knows she'll never cross that wall — until she has to. When her father is taken into the Zone, Lane goes in after him, discovering a world more complex, more beautiful, and more dangerous than any quarantine map suggests. A world where the infected are not monsters. And where the virus hasn't finished choosing its next host.",
    reviews: [
      {
        source: 'Kirkus Reviews',
        date: 'August 14, 2013',
        starred: true,
        quote:
          "Falls' first novel for teens is the nail-biting start of a new trilogy. Lane is an appealing and credible protagonist; her progression from obsessive cleanliness to fearless engagement with the infected is subtle and believable. Readers will find themselves drawn into Lane's story through the author's consistent worldbuilding and striking turns of phrase. Sure to satisfy fans of the dystopian-romance genre and to gather new ones along the way.",
      },
      {
        source: 'Publishers Weekly',
        date: 'August 19, 2013',
        quote:
          "Falls presents Lane as a competent, admirable heroine who more than holds her own. The setting holds great promise, and its dangers are quite entertaining: from the dreaded chimpacabra and piranha-bats to people infected by lion, tiger, or fox DNA, there's lovely and bizarre imagery involved. A solid start.",
      },
      {
        source: 'School Library Journal',
        date: 'November 1, 2013',
        quote:
          'This first installation is well imagined, set in an original world whose convincing history, politics, and social norms come out naturally as the story unfolds. The animal hybrids are sometimes intriguing and sometimes terrifying but are always compelling. Lane, Everson, and Rafe are believable, and new facets of their personalities are revealed over their journey. A perfectly plotted, deliciously suspenseful journey through a lush, intriguing society in which nothing is quite as it seems. —Gretchen Kolderup, New York Public Library',
      },
      {
        source: 'VOYA Magazine',
        quote:
          "The inhuman world that author Falls has shaped is both disturbing and fascinating. Falls's creatures are frighteningly beautiful as are the traits that distinguish them from human and animal, a very small distinction at times. This is recommended for readers looking for a thrilling, page-turning read. —Tanya Paglia",
      },
      {
        source: 'Andrea Cremer, author of Nightshade',
        quote: 'Sexy, suspenseful, and utterly original.',
      },
    ],
    awards: [
      'Kirkus Reviews Starred Review',
      'Tome Society It List 2014–15',
      'Truman Award Nominee (MO)',
      'Great Lakes Great Reads Nominee',
    ],
    contentNotes:
      'Kissing, mild profanity, hybrid-creature body horror, quarantine themes, and moderate combat violence. Clean YA overall.',
  },
  {
    title: 'Undaunted',
    slug: 'undaunted',
    series: 'Inhuman',
    seriesSlug: 'inhuman-series',
    seriesNumber: 2,
    pubDate: 'March 26, 2019',
    publisher: 'Scholastic Press',
    ageRange: '13+',
    gradeRange: 'Grades 6–12',
    isbn: '978-0545371025',
    coverImage: '/images/books/Undauntedlogo.jpg',
    tagline: 'The fast-paced conclusion to the Inhuman duology.',
    shortSynopsis:
      "Six months after the events of Inhuman, Lane's fight to bridge the world inside the wall and the world outside it isn't over — it's only gotten more dangerous. The thrilling conclusion to the Inhuman duology.",
    longSynopsis:
      "Six months have passed since Lane McEvoy crossed the Titan wall and changed everything she thought she knew about the Feral Zone — and about herself. But the fragile peace she helped forge is unraveling fast. Old enemies are regrouping, new factions are rising, and the line Lane walked between the infected and the uninfected is about to be erased in the worst possible way. In this fast-paced, heart-pounding conclusion, Lane must fight not just to survive but to decide what kind of world she's willing to build — and who she's willing to become to build it.",
    reviews: [
      {
        source: 'Kirkus Reviews',
        date: 'January 15, 2019',
        quote:
          "There's a lot going on in terms of events and character development but Falls makes it work. The action unfolds evenly and swiftly: Rafe's and Everson's respective histories are revealed, and narrator/protagonist Lane remains strong and steady even as she struggles with the PTSD resulting from her previous time in the zone. A conclusion worth waiting for. (Dystopian adventure. 12–18)",
      },
    ],
    awards: [],
    contentNotes:
      'Kissing, mild profanity, tense survival scenes, and moderate combat violence. Clean YA overall.',
  },
];

export const series = [
  {
    name: 'Dark Life',
    slug: 'dark-life-series',
    path: '/series/dark-life',
    ageRange: 'Ages 9–12 / Grades 5–7',
    genre: 'Middle Grade Sci-Fi Adventure',
    tagline: 'A subsea Western set on the flooded frontier of tomorrow.',
    description:
      "In a future Earth half-drowned by rising seas, the last frontier isn't West — it's Down. Follow 15-year-old Ty as he navigates the ocean-floor settlements he grew up in, the Topsider world he barely knows, and the dangerous secret of what life underwater has made him.",
    coverImage: '/images/books/DarkLife.jpg',
    books: ['dark-life', 'rip-tide'],
  },
  {
    name: 'Inhuman',
    slug: 'inhuman-series',
    path: '/series/inhuman',
    ageRange: 'Ages 13+ / Grades 6–12',
    genre: 'YA Dystopian Romance',
    tagline: 'Cross the wall. Break every rule.',
    description:
      'The Ferae Naturae virus turned millions into half-human manimals and split civilization in two. Lane McEvoy was safe on the human side — until she wasn\'t. A two-book YA duology blending dystopia, biology, and romance across a world where the boundary between human and animal is gone.',
    coverImage: '/images/books/Inhuman.jpg',
    books: ['inhuman', 'undaunted'],
  },
];

export const retailers = [
  { name: 'Bookshop.org',    urlTemplate: 'https://bookshop.org/search?keywords={isbn}' },
  { name: 'Amazon',          urlTemplate: 'https://www.amazon.com/s?k={isbn}' },
  { name: 'Barnes & Noble',  urlTemplate: 'https://www.barnesandnoble.com/s/{isbn}' },
  { name: 'Apple Books',     urlTemplate: 'https://books.apple.com/search?term={isbn}' },
  { name: 'Kobo',            urlTemplate: 'https://www.kobo.com/us/en/search?query={isbn}' },
  { name: 'Libro.fm',        urlTemplate: 'https://libro.fm/search?utf8=%E2%9C%93&search%5Bquery%5D={isbn}' },
  { name: 'Libby / OverDrive', urlTemplate: 'https://libbyapp.com/search/all/search/query-{title}/' },
  { name: 'The Book Stall (Evanston)', urlTemplate: 'https://www.thebookstall.com/search/site/{isbn}' },
];
