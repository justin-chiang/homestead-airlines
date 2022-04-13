let currNum = 1;

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
console.log(first + "asf" + second + "asdf" + third);


function act(num){
    if(num ==1){
        b1click();
    }else if(num ==2){
        b2click();
    }else if(num ==3){
        b3click();
    }

    if(currNum == 1){
        if(second.getAttribute("class")===("active")){
            second.removeAttribute("class");
        }
        if(third.getAttribute("class")===("active")){
            third.removeAttribute("class");
        }
    
        first.setAttribute("class", "active");
        setText(1);
    
     }else if(currNum ==2){
        if(first.getAttribute("class")===("active")){
            first.removeAttribute("class");
        }
        if(third.getAttribute("class")===("active")){
            third.removeAttribute("class");
        }
    
        second.setAttribute("class", "active");
        setText(2);
     }else if(currNum ==3){
        if(first.getAttribute("class")===("active")){
            first.removeAttribute("class");
        }
        if(second.getAttribute("class")===("active")){
            second.removeAttribute("class");
        }
        third.setAttribute("class", "active");
        setText(3);
     }




}

const jobdesc = document.getElementById("jobdesc");
const benefits = document.getElementById("benefits");
const reqs = document.getElementById("req");


function setText(num){
    if(num ==1){
        jobdesc.innerHTML = "Interested in flying for Homestead Airlines? Airline Pilot responsibilities include conducting various pre-flight checks to the aircraft’s operational systems, creating and adjusting flight plans and ensure secure takeoffs and landings.";
        benefits.innerHTML = "Homestead Airlines is proud to provide their trustworthy pilots with a plethora of benefits including health, life, vision and dental insurance, as well as a retirement plan. Pilots may also receive paid vacation time, which increases based on years of service.";
        reqs.innerHTML = "Commercial Pilot's License and Airline Transport Pilot's License, 1,000 hours of flight time, expertise in FAA regulations and safety procedures, 20/20 vision, attention to detail, and communication/collaboration skills.";

    }else if(num==2){
        jobdesc.innerHTML = "Flight attendants are generally responsible for ensuring passengers' safety and comfort at all times. Their duties include ensuring that the emergency equipment is working, the cabin is clean, and there is an adequate supply of food and beverages.";
        benefits.innerHTML = "Homestead Airlines is proud to provide their flight attendants with a healthy amount of benefits including additional paid training, health and life insurance, long-term disability insurance, and 401(k) retirement plans. Flight attendants may also receive discounts on hospitality services like hotels, cruises, rental vehicles, and more";
        reqs.innerHTML = "Fluency in English, customer-centric, professional look, critical thinking and problem solving skills, time-management skills, interpersonal/communication skills, and cabin crew certification and training.";

    }else if(num==3){
        jobdesc.innerHTML = "Flight technicians area responsible for daily aircraft maintenance. They verify the aircraft conformity and the state of its engine and/or cockpit pieces. Flight technicians maintain the aircraft and repair the reported defects.";
        benefits.innerHTML = "Homestead Airlines is proud to provide their flight technicians with a healthy amount of benefits including additional paid training, health and life insurance, long-term disability insurance, and 401(k) retirement plans. Flight technicians may also receive discounts on hospitality services like hotels, cruises, rental vehicles, and more.";
        reqs.innerHTML = "Aircraft Maintenance Certification and Training, stress management, team worker, masters degree in aviation related fields, experience working with aviation technology, and a repairman's certificate.";

    }
}


function b1click(){
    currNum = 1;
    
}

function b2click(){
    currNum = 2;
}

function b3click(){
    currNum = 3;
}


/*******Job Buttons*****/

const pilot = document.getElementById("pilot");
const atdnt = document.getElementById("atdnt");
const tech = document.getElementById("tech");

let currBtn = 0;

function toggle(numBtn){
    if(numBtn == 1){
        pilot.setAttribute("class", "shade");

        if(atdnt.getAttribute("class")==="shade"){
            atdnt.removeAttribute("class");
        }
        if(tech.getAttribute("class")==="shade"){
            tech.removeAttribute("class");
        }
    }else if(numBtn == 2){
        atdnt.setAttribute("class", "shade");

        if(pilot.getAttribute("class")==="shade"){
            pilot.removeAttribute("class");
        }
        if(tech.getAttribute("class")==="shade"){
            tech.removeAttribute("class");
        }
    }else if(numBtn == 3){
        tech.setAttribute("class", "shade");

        if(pilot.getAttribute("class")==="shade"){
            pilot.removeAttribute("class");
        }
        if(atdnt.getAttribute("class")==="shade"){
            atdnt.removeAttribute("class");
        }
    }
}


