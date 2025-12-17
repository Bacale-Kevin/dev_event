export interface EventItem {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: EventItem[] = [
  {
    title: "Next.js Conf 2026",
    image: "/images/event1.png",
    slug: "nextjs-conf-2026",
    location: "San Francisco, CA, USA",
    date: "2026-03-10",
    time: "10:00 AM",
  },
  {
    title: "React Summit 2026",
    image: "/images/event2.png",
    slug: "react-summit-2026",
    location: "Amsterdam, Netherlands",
    date: "2026-04-22",
    time: "09:30 AM",
  },
  {
    title: "JSConf EU 2026",
    image: "/images/event3.png",
    slug: "jsconf-eu-2026",
    location: "Berlin, Germany",
    date: "2026-06-12",
    time: "10:00 AM",
  },
  {
    title: "PyCon US 2026",
    image: "/images/event4.png",
    slug: "pycon-us-2026",
    location: "Cleveland, OH, USA",
    date: "2026-05-04",
    time: "09:00 AM",
  },
  {
    title: "KubeCon + CloudNativeCon 2026",
    image: "/images/event5.png",
    slug: "kubecon-cloudnativecon-2026",
    location: "San Diego, CA, USA",
    date: "2026-08-11",
    time: "08:30 AM",
  },
  {
    title: "HackMIT 2026",
    image: "/images/event6.png",
    slug: "hackmit-2026",
    location: "Cambridge, MA, USA",
    date: "2026-11-14",
    time: "09:00 AM",
  }
];