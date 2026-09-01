import Page from "../UI/Page";
import CloudCombined from "../clouds/CloudCombined";
import Gallery from "../gallery/Gallery";

export default function Footer() {
  return (
    <Page>
      <div className="flex h-screen flex-col justify-between align-center overflow-hidden bg-dark-mid text-text-muted pt-20">
        <CloudCombined />
        <div className="w-full m-2 flex-col items-center">
          <h2 className="text-3xl font-bold text-center mt-6 mb-6 text-text-primary ">
            Technologies & Tools
          </h2>
          <Gallery />
        </div>
      </div>
    </Page>
  );
}
