import React from 'react'
import '../sass/sidenav.scss';

function Sidenav() {
  return (
        <div>
            <header>
               <nav class="navbar fixed-top" style={{height: "100%", maxHeight: "11vh", backgroundColor: "transparent"}}>
                 <div className="container-fluid">
                   <div className="col-md-3">
                             <img src="/assets/gms_logo_w_r.svg" alt="logo" width="200" height="70" style={{padding: "10px", marginLeft: "10px"}}/>
                   </div>
                   <div className='col-md-7'>
                        <ol class="breadcrumb">
                           <li class="breadcrumb-item"><a href="/">Home</a></li>
                        </ol>
                   </div>
                   <div className="col-md-2 ">
                      <img src="https://github.com/mdo.png" alt="logo5" width="26" height="26" className="rounded-circle me-2"/>   
                         <span className='text-dark fw-bold align-text-top'>Kyokonesa Delfin</span>
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
                           <a className="nav-link active text-white" aria-current="page" href="/#">
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
                          <a class="nav-link text-white" href="/#">
                             <i className="fa  fa-user me-3" style={{ width: "16px", height: "16px" }}></i>
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

            </header>

            <main>
                <img src='/assets/GMS_fin_logo.png' alt='finlogo' width="300px" height="300px" style={{marginLeft: "50vh", marginTop: "30vh"}}/>
            </main>
        </div>

        



  )
}

export default Sidenav
