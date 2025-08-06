import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumize | Smart Resume Analysis" },
    {
      name: "description",
      content: "Optimize your resume with AI-powered analysis and insights",
    },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url(`/images/bg-home.svg`)] bg-cover">
      <Navbar />

      <section className="main-section">
        <div className="page-heading">
          <h1>Track Your Applications and Resume Ratings</h1>
          <h2>Review your submissions and check AI-powered feedback</h2>
        </div>
      </section>

      {}
    </main>
  );
}
