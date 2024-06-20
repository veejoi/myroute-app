import { useParams } from "react-router-dom";

function Mylist() {
    const {id} = useParams()

    // return(
    //     <div>
    //         <h1>MyList Page</h1>
    //     </div>
    // );

    return(
        <div>
           {/* { {id}=='undefined' && <h1>MyList Page with out id</h1> */}
           { {id}!=null &&   <h1>MyList Page {id} </h1>} 
           {/* {id} === 0 ? <h1>MyList Page with out id</h1> : <h1>MyList Page {id} </h1> */}
        </div>
    );
}

export default Mylist;