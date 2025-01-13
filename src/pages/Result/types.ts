export type ResultOption = "BOX" | "ONE" | "GO" | "ONE_BOX";

export type GetBestOptionProps = {
  home_charging: "yes" | "no";
  expected_main_charging_place: "home" | "away" | "both";
  charging_at_work: "yes" | "no";
  payment_options: "fixed" | "variable";
};
