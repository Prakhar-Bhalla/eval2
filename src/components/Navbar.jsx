import { Link } from "react-router-dom"

export const Navbar = () => {
    return <div>
        <Link style={{margin : "0 5px"}} to="/">HomePage</Link>
        <Link style={{margin : "0 5px"}} to="/applicantlogin">Applicant Login</Link>
        <Link style={{margin : "0 5px"}} to="/employerlogin">Employer Login</Link>
        <Link style={{margin : "0 5px"}} to="/jobposting">Post Jobs</Link>
        <Link style={{margin : "0 5px"}} to="/jobs">Apply</Link>
    </div>
}