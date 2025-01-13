import classNames from "classnames";
import { Logo } from "./icons/Logo";
import { Bulb } from "./icons/Bulb";
import { Link } from "react-router";

type Props = {
  theme?: "light" | "dark";
};

export const Header = ({ theme = "dark" }: Props) => {
  return (
    <header className="w-full px-[48px] py-[24px] fixed bg-transparent h-[72px]">
      <div
        className={classNames(
          "w-full h-full flex items-center  text-[12px]",
          theme === "dark" ? "text-[#003732]" : "text-white"
        )}
      >
        <ul className="list-none flex gap-x-2 w-1/3">
          <li>Privatkørsel</li>
          <li>Erhverv</li>
          <li>Boligforeninger</li>
        </ul>
        <span className="w-1/3 flex justify-center">
          <Link to="/">
            <Logo
              className={classNames(
                theme === "dark" && "[&_path]:fill-[#003732]"
              )}
            />
          </Link>
        </span>

        <span className="w-1/3 flex justify-end gap-x-1 items-center">
          <Bulb
            className={classNames(
              theme === "dark" &&
                "[&_path]:stroke-[#003732] [&_path:nth-child(3)]:fill-[#003732]"
            )}
          />
          Spørgsmål og svar
        </span>
      </div>
    </header>
  );
};
