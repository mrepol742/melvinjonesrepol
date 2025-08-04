"use client";

import { useEffect, useState } from "react";

interface DisqusCommentsProps {
  slug: string;
  title: string;
}

export default function DisqusComments({
  slug,
  title,
}: DisqusCommentsProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [DiscussionEmbed, setDiscussionEmbed] = useState<any>(null);

  useEffect(() => {
    import("disqus-react").then((mod) => {
      setDiscussionEmbed(() => mod.DiscussionEmbed);
    });
  }, []);

  if (!DiscussionEmbed) return null;

  const disqusShortname = "melvinjonesrepol";
  const disqusConfig = {
    url: `https://www.melvinjonesrepol.com/projects/${slug}`,
    identifier: slug,
    title: title,
  };

  return <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />;
}
