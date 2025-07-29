import Projects from "./projects.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Melvin Jones Repol",
  description: "Here are some of my projects that I have worked on.",
};

export default function ProjectsPage() {
  return <Projects />;
}
