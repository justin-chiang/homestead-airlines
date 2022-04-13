function clear(){
    console.log("here");

    const inputs = document.querySelectorAll("in");
    let valid = true;
    for(let i =0;i<inputs.length;i++){
        console.log(inputs[i].checkValidity());
        if(!inputs[i].checkValidity()){
            valid = false;
        }
    }

    console.log(valid);

    if(valid){
        document.querySelector(".inputinfo").reset();
    }

}