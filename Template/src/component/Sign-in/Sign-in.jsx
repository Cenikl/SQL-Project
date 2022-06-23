export default function SignIn({ close }) {
    return (
        <div className="entry-anim container bg-light p-5 rounded w-50 mt-5 pr">
            <h1 className="display-4 ">Sign In</h1>
            <div className="container d-flex justify-content-around">
                <input type="text" placeholder="Firstname" className="w-50 m-2 form-control" />
                <input type="text" placeholder="Lastname" className="w-50 m-2 form-control" />
            </div>
            <div className="container d-flex justify-content-around">
                <input type="text" placeholder="Cin" className="w-50 m-2 form-control" />
                <div className="input-group w-50 m-2">
                    <span class="input-group-text" id="basic-addon1">+261</span>
                    <input type="text" class="form-control" placeholder="Contact" />
                </div>
            </div>
            <div className="container d-flex justify-content-start m-2">
                <button className="btn-dark btn mp-0">Sign in</button>
            </div>
            <i class="fa-solid fa-xmark close" onClick={() => close(0)}></i>
        </div>
    );
}