import { useState } from "react"

export default function Team() {
    const [count, setCount] = useState(11);

    function addMember() {
        const newCount = count + 1;
        setCount(newCount)
    }
    function removeMember() {
        setCount(count - 1)
    }

    const teamStyle = {
        border: '3px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '12px'
    }

    return (
        <div style={teamStyle}>
            <h3>Player: {count}</h3>
            <button onClick={addMember}>Add</button>
            <button onClick={removeMember}>Remove</button>
        </div>
    )
}