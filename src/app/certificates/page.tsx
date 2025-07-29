import Certificates from "./certificates.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificates - Melvin Jones Repol",
  description:
    "Here are some of the certificates I have earned through various courses and programs.",
};

export default function CertificatesPage() {
  return <Certificates />;
}
