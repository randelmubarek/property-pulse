'use Client';
import { ClipLoader } from "react-spinners";
const override = {display : "block", margin: "100px auto",};
const Loading = () => {

    return ( <ClipLoader color="#2563eb" size={150} cssOverride={override}/> );
}
 
export default Loading;