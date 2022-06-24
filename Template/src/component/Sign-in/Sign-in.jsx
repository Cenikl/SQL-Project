import { useState } from "react";

export default function SignIn({ close }) {
    const [information, setInformation] = useState({
        "firstname": "",
        "lastname": "",
        "cin": "",
        "contact": "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "cin" || name === "contact") {
            if (isNaN(value) || (name === "contact" && value.length > 10)) {
                value = information[name];
            }
        }
        setInformation((prevState) => {
            return { ...prevState, [name]: value }
        })
    }

    return (
        <div className="entry-anim container bg-light p-5 rounded w-50 mt-5 pr">
            <h1 className="display-4 ">Sign In</h1>
            <div className="container d-flex justify-content-around">
                <InputTxt label="Firstname" val={information} className="m-2" onChange={handleChange} />
                <InputTxt label="Lastname" val={information} className="m-2" onChange={handleChange} />
            </div>
            <div className="container d-flex justify-content-around">
                <InputTxt label="Cin" className="m-2" val={information} onChange={handleChange} />
                <div className="input-group w-50 m-2">
                    <span class="input-group-text" name="number" id="basic-addon1">+261</span>
                    <InputTxt label="Contact" val={information} onChange={handleChange} />
                </div>
            </div>
            <div className="container d-flex justify-content-start m-2">
                <button className="btn-dark btn mp-0">Sign in</button>
            </div>
            <i class="fa-solid fa-xmark close" onClick={() => close(0)}></i>
        </div>
    );
}


function InputTxt({ label, onChange, val, className }) {
    return (
        <input
            type="text"
            placeholder={label}
            name={label.toLowerCase()}
            onChange={onChange}
            value={val[label.toLowerCase()]}
            className={"w-50 form-control " + className}
        />
    );
}