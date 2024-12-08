import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Nitin Malviya",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer | Turning Imagination into Reality.Passionate software engineer dedicated to transforming ideas into impactful applications.",
  summary:
    "I started my coding journey with Madhya Pradesh Industrial Foundation (MPIF) as a software trainee, completing a one-year training program. Now, I am working in the corporate world as a full-stack developer, leveraging my skills to create dynamic and robust applications.",
  avatarUrl:
    "https://i.postimg.cc/D0nsq1vw/Whats-App-Image-2024-08-04-at-20-32-01-4c52aca3.jpg",
  skills: [
    "React",
    "Next.js",
    "Node.js",
    "Mysql",
    "Docker",
    "Java",
    "MongoDB",
    "Stripe",
    "Socket io",
    "Java Script",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "nitinmalviya172@gmail.com",
    tel: "+916261014296",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Nitinmalviy",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nitin-malviya-326543204/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/nitin_G_",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/channel/UChdgEXzkfzxSjHTpFUwnh0w",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "InfoBeans Foundation",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Software Development & Design Trainee",
      logoUrl:
        "data:image/png;base64,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",
      start: "Aprail 2023",
      end: "June 2024",
      description:
        "I started my coding journey with Madhya Pradesh Industrial Foundation (MPIF) as a software trainee, completing a one-year training program. Now, I am working in the corporate world as a full-stack developer, leveraging my skills to create dynamic and robust applications.",
    },
    {
      company: "Infograins Software Solutions",
      badges: [],
      href: "https://mir-s3-cdn-cf.behance.net/user/230/4594ba15354117.576bace88c39c.png",
      location: "Remote",
      title: "Software Engineer",
      logoUrl:
        "https://mir-s3-cdn-cf.behance.net/user/230/4594ba15354117.576bace88c39c.png",
      start: "june 2024",
      end: "Present",
      description:
        "Implemented a Frontend and design and backend logic's and handle deployment on Aws and VPS also working on Docker and Kubernetes and Harness.",
    },
  ],
  education: [
    {
      school: "R.G.P.V University Bhopal (M.P)",
      href: "",
      degree: "Master Of Computer Application (M.C.A)",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz0fAtJc1iLSF8lpJ24MOkoa2dWcobB2as1-odhPpOi6LNggMVH9NTTFWzfXWrd6ebDVE&usqp=CAU",
      start: "2024",
      end: "Present",
    },
    {
      school: "Devi Ahilya University Indore (M.P)",
      href: "",
      degree: "Bachelor's Of Computer Application (B.C.A)",
      logoUrl:
        "data:image/jpeg;base64,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",
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "",
      href: "",
      dates: "",
      active: true,
      description: "",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
