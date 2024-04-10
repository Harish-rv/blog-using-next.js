'use client'
export default function about_us(){
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return(
        <div className="row justify-content-center my-5">
            <div className="col-lg-4 col-md-4 col-12 contact-us">
                <h2 className="text-center mb-4">About Us</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    )
}