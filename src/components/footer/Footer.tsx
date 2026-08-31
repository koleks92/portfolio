import Page from "../UI/Page"
import Cloud from "./Clouds"


export default function Footer() {
    return (
        <Page>
            <div
                className="flex h-screen flex-col overflow-hidden bg-dark-mid text-text-muted" >
                    <Cloud />
            </div>
        </Page >
    )
}