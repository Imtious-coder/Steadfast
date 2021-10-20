import React, { useState } from 'react';

const Test = () => {

    const [lol, setLol] = useState({
        title: "",
        name: "",
        select: "",
    })

    const handleChange = (e) => {
        const testing = e.target.value;
        setLol({
            ...lol,
            title: testing,
        })
    }
    const handleChangee = (e) => {
        const testing = e.target.value;
        setLol({
            ...lol,
            name: testing,
        })
    }
    const handleChangeee = (e) => {
        const testing = e.target.value;
        setLol({
            ...lol,
            select: testing,
        })
    }

    console.log(lol);
    return (
        <>
            <form>
                <input type="text" placeholder="Name" value={lol.title} onChange={handleChange} />
                <input type="text" placeholder="Name" value={lol.name} onChange={handleChangee} />
                <select value={lol.select} onChange={handleChangeee}>
                    <option value="react">React</option>
                    <option>Node</option>
                    <option>Node</option>
                    <option>Node</option>
                    <option>Node</option>
                    <option>Node</option>
                </select>
                <p>{lol.title}</p>
                <p>{lol.name}</p>
                <p>{lol.select}</p>
            </form>
        </>
    );
};

export default Test;