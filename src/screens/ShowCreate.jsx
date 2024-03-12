import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createShow } from "../services/shows.js"

function ShowCreate() {
    const [show, setShow] = useState({
        title: "",
        runTime: "",
        theater: "",
        theaterAddress: "",
        directedBy: [],
        bookBy: [],
        musicBy: [],
        openDate: "",
        isClosing: false,
        closeDate: "",
        intermission: false,
        isMusical: false,
        buyTickets: "",
        officialSite: "",
        posterImage: "" 
    })

    let navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()

        await createShow(show)
        navigate("/shows")
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        setShow((prevShow) => ({
            ...prevShow,
            [name]: value
        }))
    }

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target 

        setShow((prevShow) => ({
            ...prevShow,
            [name]: checked
        }))
    }

    return (
        <div>
            <h1>Add a show</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Show's Name"
                    name="title"
                    value={show.title}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    placeholder="Runtime"
                    name="runTime"
                    value={show.runTime}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="theater"
                    name="theater"
                    value={show.theater}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="theater address"
                    name="theaterAddress"
                    value={show.theaterAddress}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="director"
                    name="directedBy"
                    value={show.directedBy}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="author"
                    name="bookBy"
                    value={show.bookBy}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="composer"
                    name="musicBy"
                    value={show.musicBy}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="book by"
                    name="openDate"
                    value={show.openDate}
                    onChange={handleChange}
                />
                <div>
                    <label htmlFor="closing-box">
                        Is Closing?
                        <input
                            id="closing-box"
                            type="checkbox"
                            name="isClosing"
                            checked={show.isClosing}
                            onChange={handleCheckboxChange}
                        />
                    </label>
                </div>
                <input
                    type="text"
                    placeholder="closing date"
                    name="closeDate"
                    value={show.closeDate}
                    onChange={handleChange}
                />
                <div>
                    <label htmlFor="intermission-box">
                        Intermission?
                        <input
                            id="intermission-box"
                            type="checkbox"
                            name="intermission"
                            checked={show.intermission}
                            onChange={handleCheckboxChange}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="musical-box">
                        Musical?
                        <input
                            id="musical-box"
                            type="checkbox"
                            name="isMusical"
                            checked={show.isMusical}
                            onChange={handleCheckboxChange}
                        />
                    </label>
                </div>
                <input
                    type="text"
                    placeholder="buy tickets"
                    name="buyTickets"
                    value={show.buyTickets}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="official site"
                    name="officialSite"
                    value={show.officialSite}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="poster image"
                    name="posterImage"
                    value={show.posterImage}
                    onChange={handleChange}
                />
            <button type="submit">Create Greatness</button>
            </form>
        </div>
    )
}

export default ShowCreate