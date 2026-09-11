import { Card, PageTemplate } from "@/components/page-template";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <PageTemplate
      eyebrow="About"
      title="A short introduction"
      description="A bit about me"
    >
      <div className="grid gap-4">
        <Card title="Background">
          <p>
            Since I was a kid, I have always been fascinated by how what we see in the screen works and how it can affect us.
            I remember tearing down an old box TV to see how it worked and how it could produce film. 
            Since then I have always enjoyed tinkering with electronics and software from building my own computer to looking at a simplistic visual novel game engine - RenPy.
            However I try to maintain a balanced life and have consistently played sports or been active. I used to play hockey and was on my school team
            and now I run and go to the gym multiple times a week. I also enjoy poetry and the intricacies of language. I'm aiming to learn both behasa melayu and mandarin up to conversational standard in the next 5-10 years.
            My dream is to bring what we can see and create on the screen into the real world through robotics and AI. Whether this be to let people experience this dream through VR or to just have a helping hand in day to day tasks with the help of technology.

          </p>
        </Card>
        <Card title="Details" meta={siteConfig.location}>
          <p>
            <b>Skills :</b> 
            Languages - Python, C#, JavaScript 
            Frameworks and Tools - Git, Godot, React 
            Cloud and Backend - FIrebase, Cloud, Node.Js 
            Hardware and Networking - Raspberry Pi, GPIO, TCP/IP, SSL, BlueZ
            External skills - Communication, Teamwork, Time management, Poetry, Problem solving
          </p>
        </Card>
      </div>
    </PageTemplate>
  );
}
