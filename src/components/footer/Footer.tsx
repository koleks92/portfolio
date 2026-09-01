import Page from "../UI/Page";
import CloudCombined from "./CloudCombined";

export default function Footer() {
  return (
    <Page>
      <div className="flex h-screen flex-col overflow-hidden bg-dark-mid text-text-muted">
        <div className="flex flex-col">
          <CloudCombined />
        </div>
      </div>
    </Page>
  );
}
