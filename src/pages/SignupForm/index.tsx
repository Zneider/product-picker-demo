import * as Tabs from "@radix-ui/react-tabs";

import { Header } from "../../components/Header";
import { decisionTree } from "./data";
import { Choices, ItemHeader } from "./atoms";

import { useEffect, useState } from "react";

export const SignupForm = () => {
  const [activeTab, setActiveTab] = useState<string | undefined>();
  const [decisions, setDecisions] = useState<string[]>([]);
  const [doSubmit, setSubmit] = useState(false);

  const submitHandler = () => {
    const form = document.createElement("form");
    form.setAttribute("hidden", "true");
    form.action = "/result";
    form.method = "GET";

    decisions.forEach((d: string) => {
      const [key, val] = d.split("=");
      const field = document.createElement("input");
      field.type = "text";
      field.name = key;
      field.value = val;
      form.appendChild(field);
    });

    document.body.appendChild(form);

    form.submit();
  };

  useEffect(() => {
    if (doSubmit) submitHandler();
  }, [doSubmit, submitHandler]);

  const proceedHandler = (currentStep: string) => (value: string) => {
    const idx = decisionTree.findIndex(
      (decision) => decision.name === currentStep
    );
    setDecisions((d) => [...d, `${currentStep}=${value}`]);
    if (decisionTree[idx].action === "NEXT_STEP") {
      setActiveTab(decisionTree[idx + 1].name);
    } else {
      setSubmit(true);
    }
  };

  const tabs = decisionTree.map((decision) => {
    const actionHandler = proceedHandler(decision.name);

    return {
      tabId: decision.name,
      tabContent: (
        <Tabs.Content
          className="TabContent flex flex-col items-center gap-y-[16px]"
          value={decision.name}
          key={decision.name}
        >
          <ItemHeader>{decision.text}</ItemHeader>
          <Choices action={actionHandler} decision={decision} />
        </Tabs.Content>
      ),
    };
  });

  return (
    <>
      <Header />
      <main className="pt-[72px] bg-[#F2F5F5] h-full">
        <section className="flex h-full w-full items-center justify-center">
          <div className="min-w-[664px] text-[#003732]">
            <Tabs.Root
              className="flex w-full overflow-hidden"
              defaultValue={tabs[0].tabId}
              value={activeTab}
            >
              {tabs.map((tab) => tab.tabContent)}
            </Tabs.Root>
          </div>
        </section>
      </main>
    </>
  );
};
