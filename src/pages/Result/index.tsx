import { Link, useSearchParams } from "react-router";

import { GetBestOptionProps, ResultOption } from "./types";
import { ResultOne } from "../../components/icons/ResultOne";
import { ResultBox } from "../../components/icons/ResultBox";
import { ResultGo } from "../../components/icons/ResultGo";
import { ResultOneBox } from "../../components/icons/ResultOneBox";

const RESULT_MAP = {
  BOX: {
    icon: <ResultBox />,
    headerText: "Clever Box",
    text: "Vælg Clever Box, hvis du vil eje ladeboksen og betale for det, du lader.",
  },
  ONE: {
    icon: <ResultOne />,
    headerText: "Clever One",
    text: "Lad frit på Danmarks største ladenetværk.",
  },
  GO: {
    icon: <ResultGo />,
    headerText: "Clever Go",
    text: "Betal for det du lader.",
  },
  ONE_BOX: {
    icon: <ResultOneBox />,
    headerText: "Clever One med ladeboks",
    text: "Start dagen med fuld energi fra Clever-ladeboksen hjemme, og lad frit på Danmarks største ladenetværk.",
  },
};

const getBestOption = ({
  home_charging,
  // expected_main_charging_place, // Not really used her
  // charging_at_work, // Not really used her
  payment_options,
}: GetBestOptionProps): ResultOption => {
  if (payment_options === "fixed") {
    return home_charging === "yes" ? "ONE_BOX" : "ONE";
  } else {
    return home_charging === "yes" ? "BOX" : "GO";
  }
};

export const Result = () => {
  const [searchParams] = useSearchParams();
  const lookupProps: { [key: string]: string } = {};
  for (const [key, value] of searchParams.entries()) {
    lookupProps[key] = value;
  }

  const result = getBestOption(lookupProps as unknown as GetBestOptionProps);
  const { icon, headerText, text } = RESULT_MAP[result];

  return (
    <main className="pt-[72px] bg-[#F2F5F5] h-full">
      <section className="flex h-full w-full items-center justify-center flex flex-col">
        <div className="w-[560px] text-[#003732] p-[24px] flex flex-col bg-white items-center gap-y-[12px]">
          {icon}
          <h1 className="font-semibold text-[16px]">Vi vil anbefale</h1>
          <h2 className="font-extralight text-[36px]">{headerText}</h2>
          <div className="text-[16px] text-center flex">{text}</div>
        </div>
        <footer className="bg-white w-[560px] flex flex-col items-center justify-center p-[24px] text-[16px]">
          <button
            className="w-full px-[32px] py-[8px] bg-[#003732] text-white"
            onClick={() => {
              console.log("navigate to product");
            }}
          >
            Se {headerText}
          </button>
          <Link className="text-[#003237] pt-2" to={"/"}>
            Prøv på ny
          </Link>
        </footer>
      </section>
    </main>
  );
};
