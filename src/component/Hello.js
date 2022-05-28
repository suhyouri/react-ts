import { useState } from "react";
import UserName from "./UserName";

export default function Hello({ age }) {
    const [name, setName] = useState("mike");
    const msg = age > 19 ? "adult" : "under";

    function changeName() {
        setName(name === "Mike" ? "Jane" : "Mike");
    }
    return (
      <div>
            <h2 id="name">
                {name}({age}) : {msg}
            </h2>
            <UserName name={name}/>
            <button onClick={changeName}>Change</button>
      </div>
    );
} 