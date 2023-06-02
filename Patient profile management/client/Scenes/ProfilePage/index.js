import React,{useState,useEffect} from 'react'
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import './index.css'
import NotificationBar from '../../components/notificationbar';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { PDFDocument, StandardFonts,rgb } from 'pdf-lib';
// import { saveAs } from 'file-saver';




const ProfilePage = ({profile})=> {	

	const [isEditable, setIsEditable] = useState(false);
	const [selectedDiv, setSelectedDiv] = useState(1);
	const [userData, setUserData] = useState(profile);
	const[EmailAddress,setEmailAddress] = useState(profile);

	


	function handleFirstNameChange(event) {
		setUserData({ ...userData, FirstName: event.target.value });
	  }
	  
	  function handleLastNameChange(event) {
		setUserData({ ...userData, LastName: event.target.value });
	  }
	  
	  function handleNicChange(event) {
		setUserData({ ...userData, Nic: event.target.value });
	  }
	  
	  function handleEmailChange(event) {
		setUserData({ ...userData, EmailAddress: event.target.value });
	  }
	  
	  function handleAddressChange(event) {
		setUserData({ ...userData, Address: event.target.value });
	  }
	  
	  function handleGenderChange(event) {
		setUserData({ ...userData, Gender: event.target.value });
	  }
	  
	  function handleCityChange(event) {
		setUserData({ ...userData, City: event.target.value });
	  }
	  
	  function handleDobChange(event) {
		setUserData({ ...userData, Dob: event.target.value });
	  }
	  
	  function handleGuardianNameChange(event) {
		setUserData({ ...userData, GuardianName: event.target.value });
	  }
	  
	//   function handlePasswordChange(event) {
	// 	setUserData({ ...userData, Password: event.target.value });
	// //   }

	//   function handleEditClick() {
	// 	setIsEditable(true);
	//   }
	  
	  async function handleSaveClick() {
		try {
		  const response = await fetch(`http://localhost:3001/auth/updateProfile/${EmailAddress}`, {
			method: 'PUT',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData),
		  });
	  
		  const data = await response.json();
	  
		  if (response.ok) {
			setIsEditable(false);
			alert('update successful !')
		  } else {
			console.error(data.message);
		  }
		} catch (error) {
		  console.error(error);
		}
	  }

	  const handleDeleteClick = async () => {
		try {
		  const response = await fetch(`http://localhost:3001/auth/deleteProfile/${userData.EmailAddress}`, {
			method: 'DELETE'
		  });
	
		  const data = await response.json();
	
		  if (response.ok) {
			alert('Profile deleted successfully!');
			window.location.href='http://localhost:3000/home';
		  } else {
			console.error(data.message);
		  }
		} catch (error) {
		  console.error(error);
		}
	  };

	// if (isLoading) {
	// 	return <div>Loading...</div>;
	// }
	  
  function handleCancelClick() {
    setIsEditable(false);
  }
  

  function handleEditClick() {
    setIsEditable(true);
  }

  function handleBacklick() {
    setIsEditable(false);
  }

  //delete function-----
//   function handledeleteClick() {
// 	const confirmLogout = window.confirm("Are you sure you want to delete your account?");
// 	if (confirmLogout) {
// 	  window.location.href='http://localhost:3000/deleteAccount'
// 	}
//   }

//report generate
// const handleDownloadReport = async () => {
//     try {
//       // Send GET request to API endpoint to retrieve report file
//       const response = await axios.get('/api/profiles/report', { responseType: 'blob' });

//       // Save report file to local file system
//       const contentDisposition = response.headers['content-disposition'];
//       const fileName = contentDisposition.split('filename=')[1].split(';')[0].trim();
//       saveAs(response.data, fileName);

//     } catch (err) {
//       console.error(err);
//     }
//   };

// Generate PDF report function
 // Set up rectangle dimensions
 const generatePDFReport = async (userData) => {
	const pdfDoc = await PDFDocument.create();
	const page = pdfDoc.addPage();


	//title fonts 
	const titleFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
	const titleFontSize = 16;

	  // Set up y-coordinate for text positioning
	  let y = page.getHeight() - 50;
  
	// Set up font and font size
	const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
	const fontSize = 12;

	  // Add the title to the PDF page
	  const titleText = '-----PROFILE  INFORMATION  REPORT-----';
	  const titleWidth = titleFont.widthOfTextAtSize(titleText, titleFontSize);
	  const titleHeight = titleFontSize + 2; // Adjust the underline position
	
	  // Draw the underline
						page.drawLine({
							start: { x: 50, y: y - titleHeight },
							end: { x: 50 + titleWidth, y: y - titleHeight },
							thickness: 3,
							color: rgb(1, 0, 0),
						});
						
						// Draw the title text
						page.drawText(titleText, {
							x: 50,
							y: y+8,
							font: titleFont,
							fontSize: titleFontSize,
							color: rgb(0, 0, 0),
							underline: true,
							underlineColor: rgb(1, 0, 0),
						});
					
						// Set up rectangle properties
						const rectWidth = 500;
						const rectHeight = 600;
						const rectX = 50;
						const rectY = page.getHeight() - rectHeight - 50;


						// Draw the rectangle
						const drawRectangle = () => {
						page.drawRectangle({
							x: rectX,
							y: rectY,
							width: rectWidth,
							height: rectHeight,
							color: rgb(0.9, 0.9, 0.9),
							borderWidth: 1,
							borderColor: rgb(0, 0, 0),
						});
					
						const fieldX = rectX + 10;
						let fieldY = rectY + rectHeight - 25;

						// Field: First Name
						page.drawText('First Name:', {
						x: fieldX,
						y: fieldY,
						font,
						size: fontSize,
						color: rgb(0, 0, 0),
						});

						fieldY -= 20;

						page.drawText(userData.FirstName, {
						x: fieldX,
						y: fieldY,
						font,
						size: fontSize,
						color: rgb(1, 0, 0),
						});

						fieldY -= 30;

						// Field: Last Name
						page.drawText('Last Name:', {
						x: fieldX,
						y: fieldY,
						font,
						size: fontSize,
						color: rgb(0, 0, 0),
						});

						fieldY -= 20;

						page.drawText(userData.LastName, {
						x: fieldX,
						y: fieldY,
						font,
						size: fontSize,
						color: rgb(1, 0, 0),
						});

						fieldY -= 30;

						// Field: NIC
						page.drawText('National Identity card number:', {
						x: fieldX,
						y: fieldY,
						font,
						size: fontSize,
						color: rgb(0, 0, 0),
						});

						fieldY -= 20;

						page.drawText(userData.Nic, {
						x: fieldX,
						y: fieldY,
						font,
						size: fontSize,
						color: rgb(1, 0, 0),
						});

						// Add more field names and corresponding values as needed

						// Field: Email Address
						fieldY -= 30;
						page.drawText('Email Address:', {
						x: fieldX,
						y: fieldY,
						font,
						size: fontSize,
						color: rgb(0, 0, 0),
						});
						fieldY -= 20;
						page.drawText(userData.EmailAddress, {
						x: fieldX,
						y: fieldY,
						font,
						size: fontSize,
						color: rgb(1, 0, 0),
						});

						// Field: Address
						fieldY -= 30;
						page.drawText('Address:', {
						x: fieldX,
						y: fieldY,
						font,
						size: fontSize,
						color: rgb(0, 0, 0),
						});
						fieldY -= 20;
						page.drawText(userData.Address, {
						x: fieldX,
						y: fieldY,
						font,
						size: fontSize,
						color: rgb(1, 0,0) });


						fieldY -= 30;
					page.drawText('Gender:', {
					x: fieldX,
					y: fieldY,
					font,
					size: fontSize,
					color: rgb(0, 0, 0),
					});
					fieldY -= 20;
					page.drawText(userData.Gender, {
					x: fieldX,
					y: fieldY,
					font,
					size: fontSize,
					color: rgb(1, 0, 0),
					});

					// Field: City
					fieldY -= 30;
					page.drawText('City:', {
					x: fieldX,
					y: fieldY,
					font,
					size: fontSize,
					color: rgb(0, 0, 0),
					});
					fieldY -= 20;
					page.drawText(userData.City, {
					x: fieldX,
					y: fieldY,
					font,
					size: fontSize,
					color: rgb(1, 0, 0),
					});

					// Field: Date of Birth
					fieldY -= 30;
					page.drawText('Date of Birth:', {
					x: fieldX,
					y: fieldY,
					font,
					size: fontSize,
					color: rgb(0, 0, 0),
					});
					fieldY -= 20;
					page.drawText(userData.Dob, {
					x: fieldX,
					y: fieldY,
					font,
					size: fontSize,
					color: rgb(1, 0, 0),
					});

					// Field: Guardian Name
					fieldY -= 30;
					page.drawText('Guardian Name:', {
					x: fieldX,
					y: fieldY,
					font,
					size: fontSize,
					color: rgb(0, 0, 0),
					});
					fieldY -= 20;
					page.drawText(userData.GuardianName, {
					x: fieldX,
					y: fieldY,
					font,
					size: fontSize,
					color: rgb(1, 0, 0),
					});


	  // Draw more text fields as needed
	};
  
	// Add content to the page
	drawRectangle();
  
	// Generate the PDF buffer
	const pdfBytes = await pdfDoc.save();
  
	// Convert the PDF buffer to a Blob
	const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
  
	// Create a temporary download link
	const downloadLink = document.createElement('a');
	downloadLink.href = URL.createObjectURL(pdfBlob);
	downloadLink.download = 'user_report.pdf';
  
	// Trigger the download
	downloadLink.click();
  };
  
  const handleGenerateReportClick = async () => {
	try {
	  const response = await fetch(`http://localhost:3001/auth/getProfile/${userData.EmailAddress}`, {
		headers: {
		  'Content-Type': 'application/json',
		},
	  });
  
	  const data = await response.json();
  
	  if (response.ok) {
		// Generate PDF report using user data
		await generatePDFReport(data);
  
		alert('PDF report generated successfully!');
	  } else {
		console.error(data.message);
	  }
	} catch (error) {
	  console.error(error);
	}
  };



  

    return (
		<>
        <div>
            <Navbar/>
        </div>
        <hr className='hr2' style={{"height":"100px"}}></hr>
		<hr style={{backgroundColor:'transparent'}}></hr>
        <div className='notification bar'>
          <NotificationBar/>
        </div>

	
		
        <hr></hr>
		{isEditable ? (
		<form>
        <div className='profileBody'>
        <div className="container">
<div className="row gutters">
	<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
		<div className="card h-100">
			<div className="card-body">
				<div className="account-settings">
					
					<div className="user-profile">
						<div className="user-avatar">
							<img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Maxwell Admin"/>
						</div>
						<h5 className="user-name">{userData.FirstName} {userData.LastName}</h5>
						<h6 className="user-email">{userData.EmailAddress}</h6>
					</div>
					<div className="about">
						<h5 className="mb-2 text-primary">About</h5>
						<p>I'm {userData.FirstName} from {userData.City}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
		<div className="card h-100">
			<div className="card-body">
				<div className="row gutters">

					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<h6 className="mb-3 text-primary">Personal Details</h6>
					</div>
					
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="fullName">First Name</label>
							<input type="text" className="form-control" id="fullName" value={userData.FirstName} style={{backgroundColor:'black'}}  placeholder="Enter full name" onChange={handleFirstNameChange}/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="eMail">Last Name</label>
							<input type="email" className="form-control" value={userData.LastName} id="eMail" style={{backgroundColor:'black'}} placeholder="Enter email ID"  onChange={handleLastNameChange}/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="phone">Email Address</label>
							<input type="email" className="form-control" value={userData.EmailAddress} id="phone" placeholder="Enter phone number" style={{backgroundColor:'black'}}  onChange={handleEmailChange} readOnly/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="website">National Identity</label>
							<input type="text" className="form-control" value={userData.Nic} id="website" style={{backgroundColor:'black'}} placeholder="Website url"  onChange={handleNicChange}/>
						</div>
					</div>
				</div>
				<div className="row gutters">
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="ciTy">Address</label>
							<input type="name" className="form-control" value={userData.Address} id="ciTy" style={{backgroundColor:'black'}} placeholder="Enter City"  onChange={handleAddressChange}/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="sTate">city</label>
							<input type="text" className="form-control" value={userData.City} id="sTate" style={{backgroundColor:'black'}} placeholder="Enter State"  onChange={handleCityChange}/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="zIp">Gender</label>
							<input type="text" className="form-control" value={userData.Gender} id="zIp" style={{backgroundColor:'black'}} placeholder="Zip Code"  onChange={handleGenderChange}/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="zIp">Date of birth</label>
							<input type="text" className="form-control" value={userData.Dob} id="zIp" style={{backgroundColor:'black'}} placeholder="Zip Code"  onChange={handleDobChange}/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="zIp">Guardian Name</label>
							<input type="text" className="form-control" value={userData.GuardianName} id="zIp" style={{backgroundColor:'black'}} placeholder="Zip Code"  onchange={handleGuardianNameChange}/>
						</div>
					</div>
				</div>
				
				<div className="row gutters">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div className="text-right">
					
							{/* <button type="button" id="submit" name="submit" className="btn btn-secondary" onClick={handleCancelClick}>Cancel</button>
							<button type="button" id="submit" name="submit" className="btn btn-primary" style={{"marginLeft":"50px"}} onClick={handleEditClick}>Update</button> */}
							<button type="button" id="submit" name="submit" className="btn btn-primary" style={{"marginLeft":"50px"}} onClick={handleSaveClick}>save</button>
							  <button type="button" id="submit" name="submit" className="btn btn-secondary"  onClick={handleDeleteClick}>Delete Account </button>
							<button type="button" id="submit" name="submit" className="btn btn-primary" style={{"marginLeft":"50px"}} onClick={handleBacklick}>Back</button>
						</div>
					</div>
				</div>
		
				
			</div>
		</div>
	</div>
						
</div>
</div>

        </div>
		</form>	
		):(
            

			<form>
        <div className='profileBody'>
        <div className="container">
<div className="row gutters">
	<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
		<div className="card h-100">
			<div className="card-body">
				<div className="account-settings">
					
					<div className="user-profile">
						<div className="user-avatar">
							<img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Maxwell Admin"/>
						</div>
						<h5 className="user-name">{userData.FirstName} {userData.LastName}</h5>
						<h6 className="user-email">{userData.EmailAddress}</h6>
					</div>
					<div className="about">
						<h5 className="mb-2 text-primary">About</h5>
						<p>I'm {userData.FirstName} from {userData.City}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
		<div className="card h-100">
			<div className="card-body">
				<div className="row gutters">

					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<h6 className="mb-3 text-primary">Personal Details</h6>
					</div>
					
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="fullName">First Name</label>
							<input type="text" className="form-control" id="fullName" value={userData.FirstName} style={{backgroundColor:'black'}}  placeholder="Enter full name" onChange={handleFirstNameChange} readOnly/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="eMail">Last Name</label>
							<input type="email" className="form-control" value={userData.LastName} id="eMail" style={{backgroundColor:'black'}} placeholder="Enter email ID"  onChange={handleLastNameChange} readOnly/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="phone">Email Address</label>
							<input type="email" className="form-control" name='EmailAddress' value={userData.EmailAddress} id="phone" placeholder="Enter phone number" style={{backgroundColor:'black'}}  onChange={handleEmailChange} readOnly/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="website">National Identity</label>
							<input type="text" className="form-control" value={userData.Nic} id="website" style={{backgroundColor:'black'}} placeholder="Website url"  onChange={handleNicChange} readOnly/>
						</div>
					</div>
				</div>
				<div className="row gutters">
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="ciTy">Address</label>
							<input type="name" className="form-control" value={userData.Address} id="ciTy" style={{backgroundColor:'black'}} placeholder="Enter City"  onChange={handleAddressChange}readOnly/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="sTate">city</label>
							<input type="text" className="form-control" value={userData.City} id="sTate" style={{backgroundColor:'black'}} placeholder="Enter State"  onChange={handleCityChange} readOnly/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="zIp">Gender</label>
							<input type="text" className="form-control" value={userData.Gender} id="zIp" style={{backgroundColor:'black'}} placeholder="Zip Code"  onChange={handleGenderChange} readOnly/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="zIp">Date of birth</label>
							<input type="text" className="form-control" value={userData.Dob} id="zIp" style={{backgroundColor:'black'}} placeholder="Zip Code"  onChange={handleDobChange} readOnly/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="zIp">Guardian Name</label>
							<input type="text" className="form-control" value={userData.GuardianName} id="zIp" style={{backgroundColor:'black'}} placeholder="Zip Code"  onchange={handleGuardianNameChange} readOnly/>
						</div>
					</div>
				</div>
				
				<div className="row gutters">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div className="text-right">

						    <button type="button" id="submit" name="submit" className="btn btn-primary" style={{"marginLeft":"50px"}} onClick={handleEditClick}>Update</button>
							 {/* <button type="button" id="submit" name="submit" className="btn btn-secondary" onClick={handledeleteClick}>Delete Account </button> */}
							 <button type="button" id="submit" name="submit" className="btn btn-secondary" onClick={handleGenerateReportClick}>Generate report </button>
							
							{/* <button type="button" id="submit" name="submit" className="btn btn-primary" style={{"marginLeft":"50px"}} onClick={handleEditClick}>Update</button> */}
							{/* <button type="button" id="submit" name="submit" className="btn btn-primary" style={{"marginLeft":"50px"}} onClick={handleSaveClick}>Delete Account</button> */}
						</div>
					</div>
				</div>
		
				
			</div>
		</div>
	</div>
						
</div>
</div>

        </div>
		</form>	


		)}	
        <hr></hr>
        <div>
            <Footer/>
        </div>
		
     </>

            
    );
}

export default ProfilePage;