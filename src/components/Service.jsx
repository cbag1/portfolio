import React from "react";
import "./Service.css";

function Service() {

  
  return (
    <div className="service">
      <div className="serviceTitle">
        <h3>Service</h3>
        <h4> Qu'est ce que je fais !</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          repudiandae incidunt praesentium aut.
        </p>
      </div>
      <div className="contentService">
        <div className=" cservice animate__animated animate__bounce" >
          <span className="iconService">
            <i class="fa fa-desktop" aria-hidden="true"></i>
          </span>
          <h3>Web Developpement</h3>
          <h4>+15 Projets Realisés</h4>
        </div>

        <div className=" cservice ">
          <span className="iconService">
            <i class="fa fa-pen-nib"></i>
          </span>
          <h3>Ui/Ux Design</h3>
          <h4>+15 Projets Realisés</h4>
        </div>

        <div className=" cservice">
          <span className="iconService">
            <i class="fa fa-user-secret"></i>
          </span>
          <h3> Un peu de DEVOPS</h3>
          <h4>+200 Projets Realisés</h4>
        </div>
      </div>
    </div>
  );
}

export default Service;
