import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import SchoolIcon from "@mui/icons-material/School";



export async function fetchSectionList(setSections, setLoading, setSelected) {
  try {
    const result = await fetch(process.env.REACT_APP_API + "/portfolio/get");
    const sections = await result.json();
    setLoading(false);
    setSections(sections);
    setSelected(sections[0])
  } catch (error) {
   // console.error(error);
  }
}

export async function fetchProjectsBySection(section, setData, setLoading) {
  try {
    const result = await fetch(process.env.REACT_APP_API + "/portfolio/get?section=" + section);
    const projects = await result.json();
    setData(projects);
    setLoading(false);
  } catch (error) {
   // console.error(error);
  }
}

export const siteModes = [
  "Home",
  "Programming",
  "Negotiation",
  "Entrepreneurship",
  "Public speaking",
];

export const projectsList = [
  {
    id: 0,
    sectionTitle: "featured",
    items: [
      {
        id: 1,
        title: "Ecommerce app",
        img: "http://mateibucur.me/images/baby-things.png",
      },
      {
        id: 2,
        title: "Book list app",
        img: "http://mateibucur.me/images/book-list.PNG",
      },
    ],
  },
  {
    id: 1,
    sectionTitle: "featured",
    items: [
      {
        id: 1,
        title: "Ecommerce app",
        img: "http://mateibucur.me/images/baby-things.png",
      },
    ],
  },
  {
    id: 2,
    sectionTitle: "featured",
    items: [
      {
        id: 2,
        title: "Book list app",
        img: "http://mateibucur.me/images/book-list.PNG",
      },
    ],
  },
];

export const sectionsList = ["Featured", "Featured2", "Featured3"];

export const worksList = [
  {
    id: 1,
    icon: "./assets/globe.png",
    title: "Title",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi repellat eos similique inventore quod est id odit, saepe impedit, dignissimos dolore architecto!",
    img: "http://mateibucur.me/images/documentation-page.png",
  },
  {
    id: 2,
    icon: "./assets/mobile.png",
    title: "Title1",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi repellat eos similique inventore quod est id odit, saepe impedit, dignissimos dolore architecto!",
    img: "http://mateibucur.me/images/tribute-page.png",
  },
  {
    id: 3,
    icon: "./assets/writing.png",
    title: "Title2",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi repellat eos similique inventore quod est id odit, saepe impedit, dignissimos dolore architecto!",
    img: "http://mateibucur.me/images/survey.png",
  },
];

export const testimonialsList = [
  {
    id: 1,
    name: "Gil Bates",
    title: "CEO",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9gqFKRn28xKHD1CAbEevdzsLmsv5yQkGnQ&usqp=CAU",
    icon: "assets/writing.png",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. id reiciendis vero at temporibus accusantium non veniam sequi.",
    featured: true,
  },
  {
    id: 1,
    name: "Melon Husk",
    title: "CEO",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/330px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
    icon: "assets/globe.png",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. id reiciendis vero at temporibus accusantium non veniam sequi.",
    featured: false,
  },
];

export const person = {
  name: "Matei Bucur",
  status: "Student",
  attributes: ["Web Developer", "Entrepreneur", "Negotiator"],
  linkedIn: "",
  githubLink: "https://github.com/mateib47",
  wordCloud: [
    {
      text: "Negotiation",
      value: 64,
    },
    {
      text: "Honours",
      value: 31,
    },
    {
      text: "Climbing",
      value: 46,
    },
    {
      text: "Running",
      value: 37,
    },
    {
      text: "Programming",
      value: 50,
    },
    {
      text: "Cycling",
      value: 14,
    },
    {
      text: "Public Speaking",
      value: 29,
    },
    {
      text: "Self-development",
      value: 79,
    },
  ],
  description: `My name is Matei Bucur and I am in my first year of studying
  Technical Computer Science at University of Twente. The numerous
  activities I have done revolving around computer science provided me
  with enough reasons for working in this field of science. I chose to
  join this university and I am sure this computer science
  programme is going to help me get relevant teaching that will
  develop necessary competencies to become a successful programmer and
  discover what branch of this discipline fits best for me. 
  Also, I
  joined the Honours programme, an extracurricular broadening
  programme which ambitious and motivated students are challenged to
  enrich their knowledge. Now, for me it is important to continue
  doing more than needed. I know that going the extra mile and
  ensuring that I am out of my comfort zone is the only way to get
  better. That is why I started working on different programming side
  projects and contributing to open-source ones. I am currently
  improving my web-development knowledge. Finally, my aim is to become
  a high-performance person that is capable of handling large amounts
  of work because my life’s goal is to have a great positive impact on
  society and the world.`,
  boldedWords: ["University of Twente", "Honours", "web-development"],
};

export const experience = [
  {
    title: "Clik",
    description:"Fullstack React Native developer",
    date: "2022 - present",
    color: "text.primary",
    iconComponent: <DeveloperModeIcon />,
  },
  {
    title: "University of Twente",
    description:"Bsc Technical Computer Science",
    date: "2020 - 2023",
    color: "text.primary",
    iconComponent: <SchoolIcon />,
  },
  {
    title: "'Tudor Vianu' National collage of computer science",
    description:"Mathematics and intensive informatics",
    date: "2016 - 2020",
    color: "text.primary",
    iconComponent: <SchoolIcon />,
  },
]
{/* <TimelineItem>
   
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            2020 - 2023
          </TimelineOppositeContent>
          <TimelineSeparator sx={{flex:'inherit'}}>
            <TimelineConnector />
            <TimelineDot>
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              University of Twente
            </Typography>
            <Typography>Bsc Technical Computer Science</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            2016 - 2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              "Tudor Vianu" National collage of computer science
            </Typography>
            <Typography>Mathematics and intensive informatics</Typography>
          </TimelineContent>
        </TimelineItem> */}