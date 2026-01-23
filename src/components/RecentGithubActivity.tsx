import { fetchGithubEvents } from "@/lib/github/publicEvents";
import {
  faCodeCommit,
  faCodeCompare,
  faCodeFork,
  faCodePullRequest,
  faComment,
  faEarthAsia,
  faExclamation,
  faHeart,
  faPlus,
  faStar,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default async function RecentGithubActivity() {
  const events = await fetchGithubEvents("mrepol742");

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
  function getEventDescription(event: any): string {
    const payload = event.payload;
    const actor = event.actor;

    switch (event.type) {
      case "PushEvent":
        return `Pushed #${payload.head.slice(0, 7)} `;
      case "PublicEvent":
        return `Public this repo`;
      case "WatchEvent":
        return `Starred this repo`;
      case "ForkEvent":
        return `Forked this repo`;
      case "CreateEvent":
        return payload.description;
      case "PullRequestEvent":
        return `${payload.action} #${payload.number}`;
      case "DeleteEvent":
        return `Deleted ${payload.ref.split("/")[2]} ${payload.ref_type}`;
      case "PullRequestReviewEvent":
        return `Requested a review on this repo`;
      default:
        return "";
    }
  }

  {
    /* eslint-disable @typescript-eslint/no-explicit-any */
  }
  function getEventUrl(event: any): string {
    const payload = event.payload;

    switch (event.type) {
      case "PullRequestReviewEvent":
        return payload.review.html_url;
      case "PullRequestEvent":
        return payload.pull_request.html_url;
      case "PullRequestReviewCommentEvent":
        return payload.comment.html_url;
      default:
        return `https://github.com/${event.repo?.name}`;
    }
  }

  function timeAgo(date: string) {
    const diff = Date.now() - new Date(date).getTime();

    const seconds = Math.floor(diff / 1000);
    if (seconds < 60) return "now";

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;

    const days = Math.floor(hours / 24);
    if (days === 1) return "a day ago";
    if (days < 365) return `${days} days ago`;

    const years = Math.floor(days / 365);
    return years === 1 ? "a year ago" : `${years} years ago`;
  }

  return (
    <ul className="space-y-2 max-h-96 overflow-y-auto">
      {/* eslint-disable @typescript-eslint/no-explicit-any */}
      {events &&
        events.map((event: any) => (
          <li
            key={event.id}
            className="last:border-b-0 last:pb-0 flex overflow-hidden"
          >
            <span className="font-medium text-gray-700">
              {getEventType(event.type)}
            </span>
            <div className="ml-2">
              <a
                className=" text-gray-700"
                href={getEventUrl(event)}
                target="_blank"
              >
                {getEventDescription(event)}
              </a>
              <div className="text-xs text-gray-600 break-words">
                {event.repo?.name || "unknown repo"}
              </div>
              <div className="text-xs text-gray-500">
                {timeAgo(event.created_at)}
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
}
