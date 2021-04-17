import React, {useState} from 'react';

const Contact = () => {

    const [contact, setcontact] = useState("Submit");

    const submit=()=>{
        setcontact();
    }
    return (
        <>
        <section id="header" className="d-flex align-items-center">
         <div className="container-fluid ">
            <div className='row'>
            <div className="col-10 mx-auto">
           
         
        <div className="container-xl">
	    <div className="row">
		<div className="col-md-8 mx-auto">
			<div className="contact-form">
				<h1>Contact Us</h1>
				<p className="hint-text">We'd love to hear from you, please drop us a line if you've any query.</p>
				
                <form action="/examples/actions/confirmation.php" method="post">
					<div className="row">
					<div className="col-sm-6">
					<div className="form-group">
							<label for="inputFirstName">First Name</label>
							<input type="text" className="form-control" id="inputFirstName" required autoComplete="off"/>
					</div>
					</div>
						
                    <div className="col-sm-6">
					<div className="form-group">
							<label for="inputLastName">Last Name</label>
							<input type="text" className="form-control" id="inputLastName" required autoComplete="off"/>
					</div>
					</div>
					</div>            

					<div className="form-group">
						  <label for="inputEmail">Email Address</label>
						  <input type="email" className="form-control" id="inputEmail" required autoComplete="off"/>
					</div>
					
                    <div className="form-group">
						<label for="inputMessage">Message</label>
						<textarea className="form-control" id="inputMessage" rows="5" required></textarea>
					</div>
					
                    <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
				</form>
			</div>
		    </div>
	        </div>
            </div>

            </div>
            </div>
            </div>         
         </section>
        </>
    )
}

export default Contact;
