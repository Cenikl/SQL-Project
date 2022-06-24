export default function About({ className }) {
    return (
        <div className={"container p-5 w-50 bg-light rounded mt-5 " + className}>
            <p className="display-5 mb-5">About</p>
            <p>Contact us at </p>
            <div className="w-100 d-flex justify-content-around">
                <div className="container f-b-50">
                    <Phone number="33 00 111 22" />
                    <Phone number="34 33 444 55" />
                    <Phone number="32 44 555 66" />
                </div>
                <div className="container d-flex align-items-end">
                    <i class="fa-solid fa-at"></i>
                    <span>tokytrans@gmail.com</span>
                </div>
            </div>
        </div>
    );
}



function Phone({ number }) {
    return (
        <div>
            <i class="fa-solid fa-phone"></i>
            <span>+261 {number}</span>
        </div>
    );
}