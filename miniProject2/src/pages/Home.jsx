import Filters from "../components/Filters";
import { useUserContext } from "../context/userContext";

export default function Home() {

    const { logedUser } = useUserContext();
    console.log(logedUser);
    
    return (
        <>
        <div className="homeFilter">
            <h3>Filter</h3>
            <Filters/>
        </div>
        </>
    )
}