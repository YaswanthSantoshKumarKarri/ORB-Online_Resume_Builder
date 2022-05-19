import React from 'react'
import Navigation from '../common/Navigation';
import './EditProfile.css'

const EditProfile = () => {
    return (
        <div>
            <Navigation />
            <form class="bg">
                <h1>Your Profile</h1><br />
                <h3>Personal Details:</h3><br />
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="validationDefault01">First name</label>
                        <input type="text" class="form-control" id="validationDefault01" placeholder="First name" required />
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="validationDefault02">Middle name</label>
                        <input type="text" class="form-control" id="validationDefault02" placeholder="Middle name" required />
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="validationDefault02">Last name</label>
                        <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" required />
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                        <label for="validationDefault03">City</label>
                        <input type="text" class="form-control" id="validationDefault03" placeholder="City" required />
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="validationDefault04">State</label>
                        <input type="text" class="form-control" id="validationDefault04" placeholder="State" required />
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="validationDefault05">Zip</label>
                        <input type="text" class="form-control" id="validationDefault05" placeholder="Zip" required />
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                        <label for="validationDefault03">Gmail</label>
                        <input type="text" class="form-control" id="validationDefault03" placeholder="Mail Id" required />
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="validationDefault04">Phone Number</label>
                        <input type="text" class="form-control" id="validationDefault04" placeholder="Number" required />
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="validationDefault05">LinkedIn</label>
                        <input type="text" class="form-control" id="validationDefault05" placeholder="URL" required />
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Address</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div><br />
                <h3>Skills:</h3>
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                        <label for="validationDefault03">Technical Skills</label>
                        <input type="text" class="form-control" id="validationDefault03" placeholder="Skills" required />
                    </div>
                    <div class="col-md-3 mb-3 addbyn"><a class="botton1">Add</a></div>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Added Skills</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                        <label for="validationDefault03">Soft Skills</label>
                        <input type="text" class="form-control" id="validationDefault03" placeholder="Skills" required />
                    </div>
                    <div class="col-md-3 mb-3 addbyn"><a class="botton1">Add</a></div>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Added Skills</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                        <label for="validationDefault03">Languages Known</label>
                        <input type="text" class="form-control" id="validationDefault03" placeholder="Languages" required />
                    </div>
                    <div class="col-md-3 mb-3 addbyn"><a class="botton1">Add</a></div>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Added Languages</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <br />
                <h3>Experiance:</h3>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="validationDefault01">Company name</label>
                        <input type="text" class="form-control" id="validationDefault01" placeholder="Name" value="Mark" required />
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="validationDefault02">Company Joined Date</label>
                        <input type="date" class="form-control" id="validationDefault02" placeholder="Middle name" value="Otto" required />
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="validationDefault02">Last Date in Company</label>
                        <input type="date" class="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required />
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Projects Worked On</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <br />
                <h3>Educational Details:</h3>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="validationDefault01">Institution Name</label>
                        <input type="text" class="form-control" id="validationDefault01" placeholder="Name" value="Mark" required />
                    </div>

                    <div class="col-md-4 mb-3">
                        <label for="validationDefault02">Course Joined Date</label>
                        <input type="date" class="form-control" id="validationDefault02" placeholder="Middle name" value="Otto" required />
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="validationDefault02">Course End Date</label>
                        <input type="date" class="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required />
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="validationDefault01">Education Type</label>
                        <input type="text" class="form-control" id="validationDefault01" placeholder="Name" value="SSC,INTER,etc.." required />
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="validationDefault01">Percentage Scored</label>
                        <input type="text" class="form-control" id="validationDefault01" placeholder="Name" value="Marks" required />
                    </div>

                </div>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="validationDefault01">Add More Educational Details</label>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>

                <div class="form-group">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                        <label class="form-check-label" for="invalidCheck2">
                            All the details are genuine and can be verified.
                        </label>
                    </div>
                </div>
                <button class="btn btn-primary" type="submit">Submit form</button>
            </form>


        </div >
    )
}

export default EditProfile