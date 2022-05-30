import useFetch from '../hooks/useFetch';  
import { useNavigate } from "react-router";  


export default function CreateDay() {
    const days = useFetch(`http://localhost:3001/days`);
    const navigate = useNavigate();

    function addDay() {
        fetch(`http://localhost:3001/days`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
              day: days.length + 1
          }),
        }).then((res) => {
          if (res.ok) {
            alert("done!");
            navigate(`/`);
          }
        });
    }

    return (
        <div>
            <h3>Current days: {days.length}day</h3>
            <button>Add Day</button>
        </div>
    )
 }