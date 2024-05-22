import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10 md:p-[100px] md:container md:max-w-[900px] md:mx-auto space-y-10">
      <div>
        <Image src="/images/profile-pic.webp" alt="Ais" width={100} height={100} className="rounded-full" />
      </div>

      <h1 className="font-semibold text-3xl">Hey there. I&apos;m Ais - a founder/software engineer running an AI product company while also making productivity products for creative people.</h1>
    
      <div className="space-y-3 text-md">
        <div>Based in Jakarta, Indonesia. Born in Saudi Arabia.</div>
        <div>More than 14 years of experience in software engineering.</div>
        <div>Currently, having fun as a founding member at <Link href="https://calvinballtech.com" className="underline" target="_blank">CalvinBall Technologies</Link>, an AI-based product company in a mission to democratize technology for all humans, ensuring the universes we touch are better every day.</div>
        <div>Co-Founder of <Link href="https://monolog.id" className="underline" target="_blank">Monolog</Link>, a software house based in Jakarta.</div>
        <div>Part-time digital nomad, guitarist, gamer, football/soccer player, and a BMW-enthusiast.</div>
        <div>Always in love building startups.</div>
        <div className="pt-10 space-y-3">
          <div>You can find me on <Link href="https://www.linkedin.com/in/farisf/" className="underline" target="_blank">LinkedIn</Link>.</div>
          <div>In Jakarta? Let&apos;s <Link href="mailto:faris@monolog.id" className="underline" target="_blank">grab a coffee</Link>.</div>
        </div>
      </div>
    </div>
  );
}
