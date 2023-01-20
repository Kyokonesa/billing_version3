import React from 'react';
import '../sass/admin.scss';


function Admin() {
  return (
       <div>
            <header>
               <nav class="navbar fixed-top" style={{height: "100%", maxHeight: "11vh", backgroundColor: "transparent"}}>
                 <div className="container-fluid">
                   <div className="col-md-3">
                             <img src="/assets/gms_logo_w_r.svg" alt="logo" width="200" height="70" style={{padding: "10px", marginLeft: "10px"}}/>
                   </div>
                   <div className="col-md-7 mt-3">
                    <ul style={{listStyle: "none"}}>
                        <li>
                            <a href='/admin' className='active me-5 pe-4'>Admin</a>
                            <a href='/#'className='p-3'>Operation</a>
                        </li>
                    </ul>
                   </div>
                   <div className="col-md-2 ">
                      <img src="https://github.com/mdo.png" alt="logo5" width="26" height="26" className="rounded-circle me-2"/>   
                         <span className='text-dark fw-bold'>Kyokonesa Delfin</span>
                   </div>
                 </div>
              </nav>
              
              <nav class="navbar navbar-expand-lg" style={{position: "absolute", left: "0", top: "0", height: "100%", backgroundColor: "#0148a0", width: "100%", maxWidth: "300px"}}>
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                       <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul style={{listStyle: "none", lineHeight: "60px", position: "absolute", top: "120px"}}>
                        <li class="nav-item">
                           <a class="nav-link text-white" aria-current="page" href="/#">
                             <i className="fa fa-home me-3" style={{ width: "16px", height: "16px"}}></i>
                               Home
                           </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link text-white" href="/#">
                             <i className="fa fa-area-chart me-3"></i>
                               Dashboard
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link text-white" href="/#">
                             <i className="fa fa-laptop me-3" style={{ width: "16px", height: "16px" }}></i>
                               Loan Management
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link text-white" href="/#">
                             <i className="fa fa-calendar-minus-o me-3" style={{ width: "16px", height: "16px" }}></i>
                               Billing
                          </a>
                        </li>
                        <li class="nav-item">
                          <a className="nav-link active text-white" href="/#">
                             <i className="fa fa-user me-3" style={{ width: "16px", height: "16px" }}></i>
                              Admin Portal
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link text-white" href="/#">
                             <i className="fa fa-sticky-note-o me-3" style={{ width: "16px", height: "16px" }}></i>
                             Service Ticket
                          </a>
                        </li>
                    </ul>
                  </div>
               </div>
             </nav>

             <div className="tab-container">
                 <a class="tab active" href="/#">Manager User</a>
                 <a class="tab" href="/#">Branch</a>
                 <a class="tab" href="/#">Department</a>
                 <a class="tab" href="/#">Position</a>
                 <a class="tab" href="/#">Access</a>
                 <a class="tab" href="/#">Activity Logs</a>
              </div>


            </header>

            <main> 
              <div className='d-flex flex-row'>
                <form className="d-flex" role="search" style={{display: "inline", width: "1000px"}}>
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value="Search"/>
                      <img src='/assets/settings.png' alt='settings' width="40" height="40"/>
                      <span>Filtered:  Branch-GMS Cebu; Active accounts</span>
                      <button>Create Account</button>
                </form>
              </div>

              <table style={{border: "1px solid black", width: "100%", height: "100%"}}>
                <tr style={{height: "60px"}}>
                  <td style={{borderRight: "1px solid black"}}>Row 1, Cell 1</td>
                  <td style={{borderRight: "1px solid black"}}>Row 1, Cell 2</td>
                  <td style={{borderRight: "1px solid black"}}>Row 1, Cell 3</td>
                  <td style={{borderRight: "1px solid black"}}>Row 1, Cell 1</td>
                  <td style={{borderRight: "3px solid gray"}}>Row 1, Cell 2</td>
                  <td>Row 1, Cell 3</td>
                </tr>
              </table>


            </main>

        </div>  
  )
}

export default Admin
