import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "Content";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job! " },
  ];
}

export default function Home() {
  return (
    <main className="bg-gray-900">
      <Navbar />
      <section className="main-section">
        <div className="page-heading">
          <h1>Track your Application & Resume Ratings</h1>
          <h2>Review your submissions and check AI-Powered feedback.</h2>
        </div>
      {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resumes) => (
            <ResumeCard key={resumes.id} resume={resumes} />
          ))}
        </div>
      )}
      </section>
      
    </main>
  );
}
