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
        return `${actor.login} pushed to ${payload.ref.split("/")[2]} #${payload.head.slice(0, 7)} `;
      case "PublicEvent":
        return `This repo is now public`;
      case "WatchEvent":
        return `Starred this repo`;
      case "ForkEvent":
        return `Forked this repo`;
      case "CreateEvent":
        return payload.description;
      case "PullRequestEvent":
        return `${actor.login} ${payload.action} #${payload.number}`;
      case "DeleteEvent":
        return `Deleted ${payload.ref.split("/")[2]} ${payload.ref_type}`;
      case "PullRequestReviewEvent":
        return `${actor.login} has requested a review of this repo`;
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

  return (
    <ul className="space-y-2 max-h-96 overflow-y-auto">
      {/* eslint-disable @typescript-eslint/no-explicit-any */}
      {events &&
        events.map((event: any) => (
          <li
            key={event.id}
            className="border-b border-gray-700 pb-2 last:border-b-0 last:pb-0 flex overflow-hidden"
          >
            <span className="font-medium text-white">
              {getEventType(event.type)}
            </span>
            <div className="ml-2">
              <a
                className=" text-white"
                href={getEventUrl(event)}
                target="_blank"
              >
                {getEventDescription(event)}
              </a>
              <div className="text-xs text-white/50 break-words">
                {event.repo?.name || "unknown repo"}
              </div>
              <div className="text-xs text-white/50">
                {new Date(event.created_at).toLocaleString()}
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
}
