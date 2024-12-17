import {
  BackgroundCard,
  ButtonToListTopic,
  ListTopics,
} from "@/components/home-page";
import Intro from "@/components/home-page/into";
import { Icons } from "@/components/ui/icons";
import Section from "@/components/ui/section";

export default function Home() {
  return (
    <Section className="relative h-screen w-full grid p-0 pb-0 gap-0 sm:p-0 overflow-x-hidden">
      <div className="h-screen flex items-center justify-center">
        <div className="relative inset-0 z-10 flex items-center justify-center flex-col gap-3">
          <Intro />
          <ButtonToListTopic />
        </div>
        <div className="absolute inset-0 bg-[#f6f7f2] overflow-hidden">
          <BackgroundCard />
        </div>
      </div>
      <div className="w-full px-5 min-h-screen relative" id="topic-list">
        <p className="font-semibold text-3xl text-center my-7">
          List of topics that will be covered in this workshop:
        </p>
        <ListTopics />
        <Icons.listTopics1 />
        {/*  <Icons.listTopics2 /> */}
      </div>
    </Section>
  );
}
