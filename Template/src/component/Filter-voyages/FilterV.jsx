export default function FilterVoyage({ close }) {
    const villes = ['Antananarivo', 'Fianarantsoa', 'Toliara', 'Antsirabe', 'Mahajanga'];
    return (
        <div className="entry-anim bg-light pr mt-5 p-5 rounded container ">
            <h1 className="display-6">Where would you like to go?</h1>
            <hr />
            <div className="d-flex justify-content-around align-items-end">
                <Selection
                    villes={villes}
                    label="Departure"
                    classNameContainer="w-25"
                    classNameSelect="form-select" />
                <Selection
                    villes={villes}
                    label="Arrival"
                    classNameContainer="w-25"
                    classNameSelect="form-select" />
                <div className="w-25">
                    <label htmlFor="date" className="form-label">Departure date</label>
                    <input type="date" className="form-control" id="date" />
                </div>
                <button className="btn btn-dark">Filter</button>
            </div>
            <hr />

            <div className="container">
                Where a table of result should display
            </div>
            <i class="fa-solid fa-xmark close" onClick={() => close(0)}></i>
        </div>
    );
}


function Selection({ villes, classNameSelect, classNameContainer, label }) {
    return (
        <div className={classNameContainer}>
            <label htmlFor={label} className="form-label">{label}</label>
            <select id={label} className={classNameSelect}>
                {
                    villes.map((e, k) => <option key={e + " " + k}>{e}</option>)
                }
            </select>
        </div>
    );
}


function Tables() {
    return (
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

                </tr>
            </tbody>
        </table>
    );
}