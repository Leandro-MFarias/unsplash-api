import { Action } from "../Action";
import { Drama } from "../Drama";
import { Comedy } from "../Comedy";
import { Animation } from "../Animation";
import { Romance } from "../Romance";
import { Horror } from "../Horror";

export function Genres() {
  return (
    <div className="space-y-10">
      <Action />
      <Drama />
      <Comedy />
      <Animation />
      <Romance />
      <Horror />
    </div>
  );
}
