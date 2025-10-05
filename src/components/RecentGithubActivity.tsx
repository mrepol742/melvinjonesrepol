import { fetchGithubEvents } from "@/lib/github/publicEvents";
import {
  faCodeCommit,
  faCodeCompare,
  faCodeFork,
  faCodePullRequest,
  faComment,
  faEarthAsia,
  faExclamation,
  faEye,
  faHeart,
  faPlus,
  faStar,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default async function RecentGithubActivity() {
  const username = "mrepol742";
  const events = await fetchGithubEvents(username);

  function getEventType(event: string) {
    switch (event) {
      // Common
      case "PushEvent":
        return (
          <FontAwesomeIcon
            icon={faCodeCommit}
            aria-label="One or more commits pushed to a branch or tag"
            title="Push"
          />
        );
      case "WatchEvent":
        return (
          <FontAwesomeIcon
            icon={faStar}
            aria-label="A user starred the repository."
            title="Star"
          />
        );
      case "PullRequestReviewEvent":
        return (
          <FontAwesomeIcon
            icon={faCodeCompare}
            aria-label="A user review a Pull Request."
            title="Pull Request Review"
          />
        );
      case "PullRequestEvent":
        return (
          <FontAwesomeIcon
            icon={faCodePullRequest}
            aria-label="A user send a Pull Request to a repository."
            title="Pull Request"
          />
        );
      case "ForkEvent":
        return (
          <FontAwesomeIcon
            icon={faCodeFork}
            aria-label="A user forks a repository."
            title="Fork"
          />
        );
      case "IssuesEvent":
        return (
          <FontAwesomeIcon
            icon={faExclamation}
            aria-label="Creating, editing, closing, reopening, labeling, etc. for issues."
            title="Issues"
          />
        );
      case "PullRequestReviewCommentEvent":
      case "IssueCommentEvent":
        return (
          <FontAwesomeIcon
            icon={faComment}
            aria-label="When a comment is made on an issue or pull request."
            title="Issue Comment"
          />
        );

      // occationally
      case "PublicEvent":
        return (
          <FontAwesomeIcon
            icon={faEarthAsia}
            aria-label="Repository changed from private to public."
            title="Public"
          />
        );
      case "DeleteEvent":
        return (
          <FontAwesomeIcon
            icon={faTrash}
            aria-label="Deleting a branch or tag."
            title="Delete"
          />
        );
      case "CreateEvent":
        return (
          <FontAwesomeIcon
            icon={faPlus}
            aria-label="Creating a branch, tag, or repository."
            title="Create"
          />
        );

      // rare
      case "ReleaseEvent":
        return (
          <FontAwesomeIcon
            icon={faEarthAsia}
            aria-label="When a release is published, edited, etc."
            title="Release"
          />
        );
      case "CommitCommentEvent":
        return (
          <FontAwesomeIcon
            icon={faComment}
            aria-label="When a comment is made on a commit."
            title="Commit Comment"
          />
        );

      // thank you so much!
      case "SponsorshipEvent":
        return (
          <FontAwesomeIcon
            icon={faHeart}
            aria-label="When someone sponsors another user/project."
            title="Sponsorship"
          />
        );

      default:
        return <span>{event}</span>;
    }
  }

  {
    /* eslint-disable @typescript-eslint/no-explicit-any */
  }
  function getEventDescription(event: any) {
    switch (event.type) {
      case "PublicEvent":
        return `${username} changed this repository from private to public.`;
      case "WatchEvent":
        return `${username} has starred this repository.`;
      case "ForkEvent":
        return `${username} has forked this repository.`;
      case "CreateEvent":
        return event.payload.description;
      case "PullRequestEvent":
        const anyThingReleatedToPR = event.payload.pull_request;
        return `${anyThingReleatedToPR.user.login} (${anyThingReleatedToPR.state}): ${anyThingReleatedToPR.title}`;
      case "DeleteEvent":
        return `deleted ${event.payload.ref} ${event.payload.ref_type}`;
      case "PullRequestReviewEvent":
        return `${username} has requested a review of this repository.`;
      case "PullRequestReviewCommentEvent":
        return `${event.payload.comment.user.login}: ${event.payload.comment.body}`;
      default:
        return "";
    }
  }

  {
    /* eslint-disable @typescript-eslint/no-explicit-any */
  }
  function getEventUrl(event: any) {
    switch (event.type) {
      case "PullRequestReviewEvent":
        return event.payload.review.html_url;
      case "PullRequestEvent":
        return event.payload.pull_request.html_url;
      case "PullRequestReviewCommentEvent":
        return event.payload.comment.html_url;
      default:
        return `https://github.com/${event.repo?.name}`;
    }
  }

  return (
    <ul className="space-y-2 max-h-96 overflow-y-auto">
      {/* eslint-disable @typescript-eslint/no-explicit-any */}
      {events.map((event: any) => (
        <li
          key={event.id}
          className="border-b border-gray-200 pb-2 last:border-b-0 last:pb-0 flex overflow-hidden"
        >
          <span className="font-medium text-gray-800">
            {getEventType(event.type)}
          </span>
          <div className="ml-2">
            <Link
              className=" text-gray-600"
              href={getEventUrl(event)}
              target="_blank"
            >
              {event.repo?.name || "unknown repo"}
            </Link>
            <div className="text-xs text-gray-500 break-words">
              {event.payload?.commits?.[0]?.message ||
                getEventDescription(event)}
            </div>
            <div className="text-xs text-gray-500">
              {new Date(event.created_at).toLocaleString()}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
