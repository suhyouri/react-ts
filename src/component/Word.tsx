import { useState } from "react";

interface IProps { 
    word: Iword;
}

export interface Iword {
    day: string;
    eng: string;
    kor: string;
    isDone: boolean;
    id: number;
}

export default function Word({ word : w }: IProps) { 
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow() {
        setIsShow(!isShow);
    }

    function toggleDone() {
        // setIsDone(!isDone);
        fetch(`http://localhost:3001/words/${word.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...word,
                isDone: !isDone,
            }),
        }).then(res => {
            if (res.ok) {
                setIsDone(!isDone);
            }
        });
    }

    function del() {
        if (window.confirm("are you sure?")) {
            fetch(`http://localhost:3001/words/${word.id}`, {
                method: 'DELETE'
            }).then(res => {
                setWord({
                    ...word,
                    id: 0,
                });
            });
        }
    }

    if (word.id === 0) {
        return null;
    } 

    return (
      <tr className={isDone ? "off" : ""}>
        <td>
            <input type="checkbox" checked={isDone} onChange={toggleDone}/>
        </td>
        <td>{word.eng}</td>
        <td>{isShow && word.kor}</td>
        <td>
          <button onClick={toggleShow}>
            {isShow ? "Hide" : "See"} Meaning
          </button>
            <button onClick={del} className="btn_del">Delete</button>
        </td>
      </tr>
    );
}