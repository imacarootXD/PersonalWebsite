import { Card, PageTemplate } from "@/components/page-template";

export const metadata = {
  title: "Hobbies",
};

export default function HobbiesPage() {
  return (
    <PageTemplate
      eyebrow="Outside of work"
      title="Hobbies"
      description="A few things I enjoy when I am away from the keyboard."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Card title="Coding">
          <p>
            Everyday I try to improve my coding skills using websites like exercism.io and leetcode.com. I also enjoy creating small passion projects or code for competitions
          </p>
        </Card>
        <Card title="Running">
          <p>
            A recent hobby of mine is running which both helps relieve stress and pent up emotions as well as keeping me fit and healthy.
          </p>
        </Card>
          <Card title="Poetry">
            <p>
              I also enjoy writing and reading poetry, finding beauty in the intricacies of language and expression. In a way it is almost a more elegant way to code and draws similarities. Each line has meaing and purpose and contributes to the full picture
            </p>
        </Card>
        <Card title="Piano">
          <p>
            I also enjoy playing the piano occasionally to any songs I may like however I am no longer grading at the moment
          </p>
        </Card>
        <Card title="Gaming">
          <p>
            I also enjoy playing games on my Computer such as Cyberpunk 2077 and Bioshock. They truly are immersive and show you the possiblities of coding and creating.  
          </p>
        </Card>
      </div>
    </PageTemplate>
  );
}
