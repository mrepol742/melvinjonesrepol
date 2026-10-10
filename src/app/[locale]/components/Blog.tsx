import Card from "@/components/ui/Card";
import Slider from "@/components/ui/Slider";
import { fetchBlog } from "@/lib/blog";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getTimeAgo } from "@mrepol742/next-kit/util";
import Link from "next/link";

export default async function Blog() {
  const blogs = await fetchBlog();

  return (
    <>
      <Slider>
        {blogs.map((blog, idx) => (
          <Link
            key={idx}
            href={blog.link}
            className="block w-[90vw] shrink-0 snap-start md:w-96"
          >
            <Card className="group h-full">
              <h2 className="font-bold line-clamp-2">{blog.title}</h2>
              <p className="mb-2 text-sm">
                {getTimeAgo(
                  Math.floor(new Date(blog.pubDate).getTime() / 1000),
                )}
              </p>

              <p className="mb-4 line-clamp-4">{blog.description}</p>

              <div className="flex justify-end items-center gap-4">
                {blog.link && (
                  <button
                    title="View Blog Post"
                    className="inline-flex items-center text-white bg-orange-600 hover:bg-orange-700 font-medium text-sm px-4 py-2 rounded-md transition-all"
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                )}
              </div>
            </Card>
          </Link>
        ))}
      </Slider>
    </>
  );
}
