export default function FilterVoyage({ className }) {
    return (
        <div className={"bg-light container " + className}>
            <div className="container">
                <select name="m-2 Depature" id="dep1"></select>
                <select name="m-2 Arrival" id="ari1"></select>
                <div className="d-flex">
                    <input type="text" className="w-25 m-2 form-control" />
                    <input type="date" className="w-25 m-2 form-control" />
                </div>
                <button className="btn btn-primary">Filter</button>
            </div>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Vehicle number</td>
                            <td>Number of free places</td>
                            <td>Kind of trip</td>
                            <td>Rate</td>
                            <td>Departure time</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <p>Where the available trips should display</p>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}