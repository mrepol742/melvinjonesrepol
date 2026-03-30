import { fetchGithubEvents } from "@/lib/github/event";
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
            title="Push"
          />
        );
      case "WatchEvent":
        return (
          <FontAwesomeIcon
            icon={faStar}
            title="Star"
          />
        );
      case "PullRequestReviewEvent":
        return (
          <FontAwesomeIcon
            icon={faCodeCompare}
            title="Pull Request Review"
          />
        );
      case "PullRequestEvent":
        return (
          <FontAwesomeIcon
            icon={faCodePullRequest}
            title="Pull Request"
          />
        );
      case "ForkEvent":
        return (
          <FontAwesomeIcon
            icon={faCodeFork}
            title="Fork"
          />
        );
      case "IssuesEvent":
        return (
          <FontAwesomeIcon
            icon={faExclamation}
            title="Issues"
          />
        );
      case "PullRequestReviewCommentEvent":
      case "IssueCommentEvent":
        return (
          <FontAwesomeIcon
            icon={faComment}
            title="Issue Comment"
          />
        );

      // occationally
      case "PublicEvent":
        return (
          <FontAwesomeIcon
          icon={faEarthAsia}
            title="Public"
          />
        );
      case "DeleteEvent":
        return (
          <FontAwesomeIcon
            icon={faTrash}
            title="Delete"
          />
        );
      case "CreateEvent":
        return (
          <FontAwesomeIcon
            icon={faPlus}
            title="Create"
          />
        );

      // rare
      case "ReleaseEvent":
        return (
          <FontAwesomeIcon
            icon={faEarthAsia}
            title="Release"
          />
        );
      case "CommitCommentEvent":
        return (
          <FontAwesomeIcon
            icon={faComment}
            title="Commit Comment"
          />
        );

      // thank you so much!
      case "SponsorshipEvent":
        return (
          <FontAwesomeIcon
            icon={faHeart}
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
        return `Made a commit #${payload.head.slice(0, 7)} `;
      case "PublicEvent":
        return `Marked this repo as public`;
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
