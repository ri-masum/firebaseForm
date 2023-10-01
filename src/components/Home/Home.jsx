import { useContext } from "react";
import  { AuthContext } from "../../AuthProvider/AuthProvider";


const Home = () => {
    const authUse=useContext(AuthContext);

    console.log(authUse);
    return (
        <div>
            <ul>
                <li>items</li><br />
                <li>items</li><br />
                <li>items</li><br />
                <li>items</li><br />
                <li>items</li><br />
            </ul>
        </div>
    );
};

export default Home;