import Page from "../UI/Page";
import CloudCombined from "./CloudCombined";
import CloudWithRain from "./CloudWithRain";
import CloudWithSun from "./CloudWithSun";

export default function Footer() {
  return (
    <Page>
      <div className="flex h-screen flex-col overflow-hidden bg-dark-mid text-text-muted">
        <div className="flex flex-col">
          {/* <CloudWithSun />
          <CloudWithRain /> */}
          <CloudCombined />
        </div>
      </div>
    </Page>
  );
}
