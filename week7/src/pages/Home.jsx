import {Link} from "react-router";
export default function Home() {

    return (
    <>
        <h1> Ini halaman Home</h1>
        <Link to="/About"> redirect ke halaman About</Link>
    </>
    )
}