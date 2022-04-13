import { LinksFunction } from "@remix-run/node"
import styleUrl from "~/styles/index.css"

export const links: LinksFunction = () => {
    return [{rel: "stylesheet", href: styleUrl}]
}
function index() {
    return (
      <div>Hello index route</div>
    )
  }
  
export default index