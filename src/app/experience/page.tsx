import { Card, PageTemplate } from "@/components/page-template";

export const metadata = {
  title: "Experience",
};

const roles = [
  {
    title: "Benham and Reeves Work Experience",
    meta: "2024",
    body: "Worked with a member of the accounts department to create a password management system which was later taken by IT and further developed to be deployed company wide",
  },
  {
    title: "WBGS",
    meta: "2019 — 2026",
    body: "Engineering Society - Lead the engineering society at my school, where I taught younger students advanced physics with practical demonstrations \n Co-Lead computer science society where I taught younger students up to advanced programming concepts \n Industrial Cadets - was a chosen candidate for the industrial cadets program where I worked with a team to design and create an automatic UAV hangar using two raspberry pi's earning us the industrial cadet gold award ",
  },
];

export default function ExperiencePage() {
  return (
    <PageTemplate
      eyebrow="Path"
      title="Experience"
      description="A chronological template. Dates sit in the card meta so the list stays easy to scan."
    >
      <div className="grid gap-4">
        {roles.map((role) => (
          <Card key={role.title} title={role.title} meta={role.meta}>
            <p>{role.body}</p>
          </Card>
        ))}
      </div>
    </PageTemplate>
  );
}
