import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Friends - Melvin Jones Repol",
  description:
    "Here are some of my friends who deserve a shoutout for their amazing work and contributions to the community.",
  keywords: [
    "My Friends",
    "Melvin Jones Repol",
    "Samiun Nafis",
    "Bharat Singh",
    "Elisha Paul Okai",
    "Jay Patrick Cano",
    "Marvin Quillo Saik",
    "Aavesh Jilani",
    "Amos Ayomide",
    "Emmanuel Emejulu",
    "John Paul Caigas",
    "Abass Dev",
    "Jerome Edica",
  ],
  openGraph: {
    title: "My Friends - Melvin Jones Repol",
    description:
      "Here are some of my friends who deserve a shoutout for their amazing work and contributions to the community.",
    url: "https://www.melvinjonesrepol.com/my-friends",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "/images/melvinjonesrepol.png",
        width: 1200,
        height: 630,
        alt: "My Friends Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Friends - Melvin Jones Repol",
    description:
      "Here are some of my friends who deserve a shoutout for their amazing work and contributions to the community.",
    images: ["/images/melvinjonesrepol.png"],
    creator: "@mrepol742",
  },
};

const friends = [
  {
    name: "Samiun Nafis",
    icon: "https://avatars.githubusercontent.com/samiunnafis",
    description:
      "A talented Front-end Developer who is passionate about learning and mastering React. He is dedicated to continuously improving his skills and knowledge.",
    link: "https://samiunnafis.github.io",
    social: {
      github: "samiunnafis",
      linkedin: "samiunnafis",
    },
  },
  {
    name: "Bharat Singh",
    icon: "https://avatars.githubusercontent.com/imbharat420",
    description:
      "A experienced professional with expertise in front-end and back-end. He is passionate about using technology to solve real-world problems.",
    link: "https://imbharat420.github.io",
    social: {
      github: "imbharat420",
      linkedin: "imbharat420",
    },
  },
  {
    name: "Elisha Paul Okai",
    icon: "https://avatars.githubusercontent.com/Elitexv",
    description:
      "A Web Developer, Solidity developer, Web3 project/community manager, Business dev manager.",
    link: "https://elishasfolio.vercel.app/",
    social: {
      github: "Elitexv",
      linkedin: "elisha-okai-791b8223a",
    },
  },
  {
    name: "Jay Patrick Cano",
    icon: "https://avatars.githubusercontent.com/0x3ef8",
    description:
      'vision = () => "Turning dreams into executable code"; console.log(vision()); // Process is starting..',
    link: "https://jaypatrickcano.vercel.app/",
    social: {
      github: "0x3ef8",
      linkedin: "0x3ef8",
    },
  },
  {
    name: "Marvin Quillo Saik",
    icon: "https://avatars.githubusercontent.com/19vin70",
    description:
      "I embarked on my programming journey in 2022 when I chose IT as my course, and I quickly developed a deep passion for it. The world of programming fascinated me.",
    social: {
      github: "19vin70",
      linkedin: "marvin-saik-527349246",
    },
  },
  {
    name: "Aavesh Jilani",
    icon: "https://avatars.githubusercontent.com/aaveshdev",
    description: "The creator of the Dragon programming language",
    link: "https://aavesh.dragon-lang.org/",
    social: {
      github: "aaveshdev",
      linkedin: "aaveshjilani",
    },
  },
  {
    name: "Amos Ayomide",
    icon: "https://avatars.githubusercontent.com/amosayomide05",
    description: "Node.js/Python Developer | Automation & Scraping",
    link: "https://amosayomide05.github.io/",
    social: {
      github: "amosayomide05",
      linkedin: "amosayomide",
    },
  },
  {
    name: "Emmanuel Emejulu",
    icon: "https://avatars.githubusercontent.com/emejulucodes",
    description: "Node.js/Python Developer | Automation & Scraping",
    social: {
      github: "emejulucodes",
      linkedin: "emejulucodes",
    },
  },
  {
    name: "John Paul Caigas",
    icon: "https://avatars.githubusercontent.com/Mra1k3r0",
    description: "Contact: mra1k3r0@codesync.ph 📩",
    link: "https://linktr.ee/saikidesu.dev/",
    social: {
      github: "Mra1k3r0",
      linkedin: "john-paul-caigas-48948123a",
    },
  },
  {
    name: "Abass Dev",
    icon: "https://avatars.githubusercontent.com/abass-dev",
    description:
      "A passionate web and mobile app developer with over 6 years of experience in programming and the internet.",
    link: "https://abassdev.com/",
    social: {
      github: "abass-dev",
    },
  },
  {
    name: "Jerome Edica",
    icon: "https://avatars.githubusercontent.com/jdev000",
    description:
      "A passionate and driven Grade 12 student with a diverse skill set ranging from front-end and back-end development to cybersecurity and 3D design. Starting his tech journey at just 16, he continues to expand his expertise through hands-on projects like his self-built EPD Penta-Copter drone and national-level science fair participation.",
    social: {
      github: "jdev000",
    },
  },
];

export default function MyFriends() {
  return (
    <main className="p-8">
      <section>
        <h1 className="text-2xl font-semibold" data-aos="fade-right">
          My Friends
        </h1>
        <p className="text-gray-300" data-aos="fade-right" data-aos-delay="100">
          Here are some of my friends who deserve a shoutout for their amazing
          work and contributions to the community. Feel free to check out their
          profiles and support them!
        </p>
        <div className="mt-4">
          {friends.map((friend, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 mb-6 gap-2"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <Image
                src={friend.icon}
                alt={`${friend.name}'s icon`}
                width={80}
                height={80}
                className="border p-1 rounded-full"
              />
              <div>
                <h2 className="text-lg font-semibold">{friend.name}</h2>
                <p className="text-gray-300">{friend.description}</p>
                {friend.link && (
                  <Link
                    href={friend.link}
                    className="text-blue-500 hover:underline mt-1 inline-block"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {friend.link}
                  </Link>
                )}
                <div className="mt-2 flex space-x-2">
                  {friend.social.github && (
                    <Link
                      href={friend.social.github}
                      className="text-gray-300 hover:text-gray-300"
                    >
                      <Github className="inline" />
                    </Link>
                  )}
                  {friend.social.linkedin && (
                    <Link
                      href={friend.social.linkedin}
                      className="text-blue-500 hover:underline ml-2"
                    >
                      <Linkedin className="inline" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
