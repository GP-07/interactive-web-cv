import { cv } from "@/data/cv";
import { languageNames, sectionOrder } from "@/data/sections";
import { workspaceName } from "@/lib/workspace";
import { ActiveSectionProvider } from "@/components/editor/ActiveSection/ActiveSectionContext";
import { Breadcrumb } from "@/components/editor/Breadcrumb/Breadcrumb";
import { EditorWindow } from "@/components/editor/EditorWindow/EditorWindow";
import { ScrollArea } from "@/components/editor/ScrollArea/ScrollArea";
import { StatusBar } from "@/components/editor/StatusBar/StatusBar";
import { About } from "@/components/sections/About/About";
import { Experience } from "@/components/sections/Experience/Experience";
import { Skills } from "@/components/sections/Skills/Skills";
import { Education } from "@/components/sections/Education/Education";
import { Contact } from "@/components/sections/Contact/Contact";

export default function Home() {
  const workspace = workspaceName(cv.name);

  return (
    <ActiveSectionProvider sectionIds={sectionOrder.map((s) => s.id)}>
      <EditorWindow
        breadcrumb={<Breadcrumb root={workspace} items={sectionOrder} />}
        statusBar={
          <StatusBar
            availability={cv.availability}
            languages={sectionOrder.map((s) => languageNames[s.language])}
          />
        }
      >
        <ScrollArea>
          <About />
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </ScrollArea>
      </EditorWindow>
    </ActiveSectionProvider>
  );
}
