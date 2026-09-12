import { Card, PageTemplate } from "@/components/page-template";
import { GitHubIcon } from "@/components/icons";

export const metadata = {
  title: "Projects",
};

const projects = [
  {
    title: "Automatic UAV Hangar",
    meta: "Python",
    github: "https://github.com/imacarootXD/UAV-hangar",
    body: "Worked with a raspberry pi to create a detection and proximity system for a model automatic UAV hangar. Applied the Bluez library and controlled stepper motors to open and close the hangar doors. Used a camera to detect the UAV and a proximity sensor to determine when it was close enough to open the doors automatically.",
  },
  {
    title: "Tutor connect platform",
    meta: "Fullstack",
    github: "https://github.com/imacaroot-org/main",
    body: "Played a prominent role in a team project, contributing to both frontend and backend development. Implemented features using React and Node.js, ensuring seamless integration and optimal performance to connect tutors to tutees especially for new tutors.",
  },
  {
    title: "2D Flashcard TD Game",
    meta: "Coursework",
    github: "https://github.com/imacarootXD/final-nea",
    body: "Created a solution to a problem where educational content is gamified to improve engagement and learning outcomes. Used C# within Godot to create a 2D tower defence game where players answer flashcards to defeat enemies and progress through levels. Implemented a scoring system and various game mechanics to enhance the learning experience.",
    
  },
  {
    title: "Personal Website",
    meta: "Next.js",
    github: "https://github.com/imacarootXD/PersonalWebsite",
    body: "A website designed to showcase my work and skills, with a focus on clean interfaces and thoughtful design (This website).",
  },
];

export default function ProjectsPage() {
  return (
    <PageTemplate
      eyebrow="Work"
      title="Selected projects"
      description="A carefully curated selection of my work, to showcase some of my skills and experience.
      These tend to be my most complex projects, and should dmemonstrate my immediate skills."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            meta={project.meta}
            action={
              project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-[var(--line)] text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-fg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                >
                  <GitHubIcon className="size-4" />
                </a>
              ) : null
            }
          >
            <p>{project.body}</p>
          </Card>
        ))}
      </div>
    </PageTemplate>
  );
}
