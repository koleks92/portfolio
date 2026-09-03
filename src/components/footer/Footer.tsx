import Page from "../UI/Page";
import CloudCombined from "../clouds/CloudCombined";
import Gallery from "../gallery/Gallery";

export default function Footer() {
  return (
    <Page>
      <div className="flex h-screen flex-col justify-between align-center overflow-hidden bg-dark-mid text-text-muted pt-20">
        <CloudCombined />
        <h4 className="w-3/4 self-center text-center">
          This <strong>site</strong> (and honestly, every project I've ever
          shipped) wouldn't exist without my <strong>family</strong> for the
          endless support, my <strong>Sana</strong> for putting up with "just
          one more screen", <strong>Google</strong> for having the answer to
          everything, <strong>Stack Overflow</strong> for having the answer to
          everything else, <strong>MDN</strong> for actually explaining how
          things work, <strong>CS50</strong> for teaching me how to think like
          this in the first place, <strong>freeCodeCamp</strong> for the endless
          free lessons, and yeah — <strong>Claude AI</strong> too, for the
          rubber-duck sessions.
        </h4>
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
