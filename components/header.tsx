import Link from "next/link"

export default function header(){
    return(
        <header className="header-section">
            <div className="row">
                <div className="col-lg-8 col-md-4 h-left">
                    <h2 className="text-start "><Link className="text-white" href='/'>Tech India</Link></h2>
                </div>
                <div className="col-lg-4 col-md-4 h-right">
                    <ul className="d-flex m-2 fs-5 float-end">
                        <li className="ml-5">
                            <Link className="text-decoration-none text-white" rel="stylesheet" href="/">Home</Link>
                        </li>
                        <li className="ml-5">
                            <Link className="text-decoration-none text-white" rel="stylesheet" href="/contact-us">Contact-Us</Link>
                        </li>
                        <li className="ml-5">
                            <Link className="text-decoration-none text-white" rel="stylesheet" href="/about-us">About-Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}