import Image from "next/image";
import { Paragraph, Title } from "@/components/typography/typography";

export default function Home() {
  return (
    <>
      <div
        id="introduction"
        className="flex items-center justify-between p-4 gap-8"
      >
        <div>
          <Image
            src="/marios-toparopoulos.png"
            alt="Marios Toparopoulos"
            width={100}
            height={20}
            priority
          />
        </div>
        <div>
          <Title>Hi!</Title>
          <article>
            <Paragraph>
              I am Marios Toparopoulos, a Software Engineer with a passion for
              System Designs and a strong background in software development.
            </Paragraph>
            <Paragraph>
              I have a proven track record of delivering high-quality software
              solutions and a deep understanding of{" "}
              <strong>Front End Engineering</strong>.
            </Paragraph>
            <Paragraph>
              I am excited to share my work and insights in this field.
            </Paragraph>
          </article>
        </div>
      </div>
      <div></div>
    </>
  );
}
