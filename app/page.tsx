import Link from "next/link";

export default function Home() {
  return (
    <div id="homepage">
      <h1>Event Management Webpage</h1>

      <Link href="/events">
        <button id="eventsbtn">
          Go to events list
        </button>
      </Link>
    </div>
  );
}
