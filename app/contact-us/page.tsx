'use client'
export default function posts(){
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return(
        <div className="row justify-content-center my-5">
            <div className="col-lg-4 col-md-4 col-12 contact-us">
                <h2 className="text-center mb-4">Contact Us</h2>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </div>
        </div>
    )
}