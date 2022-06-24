export default function Reserve({ close }) {
    return (
        <>
            <div className="h-m"></div>
            <div className="container bg-light pr pt-3 mb-5">
                <p className="display-6 w-100 text-center">Reservation</p>
                <div className="d-flex justify-content-around">
                    <Content title="Type">Premium</Content>
                    <Content title="Rate">50.000Ar</Content>
                    <Content title="Vehicle">5031 WWT</Content>
                    <Content title="Departure Time">5031 WWT</Content>
                    <Content title="Free Place">1, 2, 3, 4, 10</Content>
                </div>
                <div className="container">
                    <input type="text" className="form-control w-50" placeholder="card number" />
                    <button className="m-5 btn btn-dark">Reserve</button>
                </div>
                <i class="fa-solid fa-xmark close" onClick={() => close(0)}></i>
            </div>
            <div className="h-m"></div>
        </>
    );
}

function Content({ children, title }) {
    return (
        <div>
            <p className="fs-5">{title}</p>
            <div>
                <p className="fs-6">{children}</p>

            </div>
        </div>
    );
}