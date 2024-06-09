import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import axios from "../axiosConfig";
import "bootstrap/dist/css/bootstrap.min.css";
import "./form.css";
import { db } from "./firebase"; // Import Realtime Database
import { ref, get, child } from "firebase/database";

const fm = () => {
    
    const validateForm = () =>
    {
        
    }

    const handleSubmit = async (e) =>
        {
            e.preventDefault();
        if (!validateForm()) {
        return;
        }
        }

  return (
    <>
      <div class="container-fluid px-1 py-5 mx-auto">
        <div class="row d-flex justify-content-center">
          <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <h3>Request a Demo</h3>
            <p class="blue-text">
              Just answer a few questions
              <br /> so that we can personalize the right experience for you.
            </p>
            <div class="card">
              <h5 class="text-center mb-4">Powering world-class companies</h5>
              <form class="form-card" onSubmit={handleSubmit}>
                <div class="row justify-content-between text-left">
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                      First name<span class="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="Enter your first name"
                      onblur="validate(1)"
                    />{" "}
                  </div>
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                      Last name<span class="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="text"
                      id="lname"
                      name="lname"
                      placeholder="Enter your last name"
                      onblur="validate(2)"
                    />{" "}
                  </div>
                </div>
                <div class="row justify-content-between text-left">
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                      Business email<span class="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder=""
                      onblur="validate(3)"
                    />{" "}
                  </div>
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                      Phone number<span class="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="text"
                      id="mob"
                      name="mob"
                      placeholder=""
                      onblur="validate(4)"
                    />{" "}
                  </div>
                </div>
                <div class="row justify-content-between text-left">
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                      Job title<span class="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="text"
                      id="job"
                      name="job"
                      placeholder=""
                      onblur="validate(5)"
                    />{" "}
                  </div>
                </div>
                <div class="row justify-content-between text-left">
                  <div class="form-group col-12 flex-column d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                      What would you be using Flinks for?
                      <span class="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="text"
                      id="ans"
                      name="ans"
                      placeholder=""
                      onblur="validate(6)"
                    />{" "}
                  </div>
                </div>
                <div class="row justify-content-end">
                  <div class="form-group col-sm-6">
                    {" "}
                    <button type="submit" class="btn-block btn-primary">
                      Request a demo
                    </button>{" "}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default fm;