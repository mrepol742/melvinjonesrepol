import Button from "@/components/Button";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Legal() {
  return (
    <main className="my-18 p-3 md:p-8">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="md:w-1/2">
            <h1 className="text-3xl font-semibold">
              Explore our Legal Documents
            </h1>
            <p className="mt-4 leading-relaxed">
              Transparency and trust are important to us. Review our policies
              and legal documents to understand how we operate and protect your
              data.
            </p>
          </div>

          <div className="md:w-1/2">
            <Link href="/legal/privacy-policy" className="block">
              <Button className="bg-indigo-400 before:bg-indigo-600 after:bg-indigo-600">
                <FontAwesomeIcon icon={faShieldAlt} className="mr-2" />
                Privacy Policy
              </Button>
            </Link>

            <Link href="/legal/terms-of-service" className="block">
              <Button className="bg-indigo-400 before:bg-indigo-600 after:bg-indigo-600">
                <FontAwesomeIcon icon={faShieldAlt} className="mr-2" />
                Terms of Service
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
