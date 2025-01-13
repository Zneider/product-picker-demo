import { ChargeAtHome } from "../../components/icons/ChargeAtHome";
import { ChargeAtWork } from "../../components/icons/ChargeAtWork";
import { ChargeAwayAndHome } from "../../components/icons/ChargeAwayAndHome";
import { ChargeAwayFromHome } from "../../components/icons/ChargeAwayFromHome";
import { FixedPayment } from "../../components/icons/FixedPayment";
import { ParkAtWork } from "../../components/icons/ParkAtWork";
import { VariablePayment } from "../../components/icons/VariablePayment";
import { DecisionTree } from "./types";

export const decisionTree: DecisionTree = [
  {
    name: "home_charging",
    action: "NEXT_STEP",
    text: "Har du mulighed for at få en ladeboks derhjemme?",
    options: [
      {
        value: "yes",
        label: "Ja, det har jeg",
        vignet: <ChargeAtHome />,
        id: "CHARGING_AT_HOME",
      },
      {
        value: "no",
        label: "Nej, det har jeg ikke",
        vignet: <ChargeAwayFromHome />,
        id: "CHARGING_AWAY",
      },
    ],
  },
  {
    name: "expected_main_charging_place",
    action: "NEXT_STEP",
    text: "Hvor forventer du at lade mest?",
    options: [
      {
        value: "at_home",
        label: "Primært hjemme",
        vignet: <ChargeAtHome />,
        id: "EXPECTED_AT_HOME",
      },
      {
        value: "away",
        label: "Mest på farten",
        vignet: <ChargeAwayFromHome />,
        id: "EXPECTED_AWAY",
      },
      {
        value: "both",
        label: "Både ude og hjemme",
        vignet: <ChargeAwayAndHome />,
        id: "EXPECTED_BOTH",
      },
    ],
  },
  {
    name: "charging_at_work",
    action: "NEXT_STEP",
    text: "Har du mulighed for at lade på dit arbejde?",
    options: [
      {
        value: "yes",
        label: "Ja",
        vignet: <ChargeAtWork />,
        id: "CHARGING_AT_WORK",
      },
      {
        value: "no",
        label: "Nej",
        vignet: <ParkAtWork />,
        id: "PARKING_AT_WORK",
      },
    ],
  },
  {
    name: "payment_options",
    action: "SUBMIT",
    text: "Hvordan ønsker du at betale?",
    options: [
      {
        value: "fixed",
        label: "Fast beløb",
        vignet: <FixedPayment />,
        id: "FIXED_PAYMENT",
      },
      {
        value: "variable",
        label: "Forbrugsafregnet",
        vignet: <VariablePayment />,
        id: "VARIABLE_PAYMENT",
      },
    ],
  },
];
