function convertTemperature() {
    let val = document.getElementById("d1").value;
    let from= document.getElementById("d2").value;
    let to= document.getElementById("d4").value;
    if(to==1){
      if(from==1)
        document.getElementById("d3").value=val;
      else if(from==2){
        document.getElementById("d3").value=(val-32)*5/9;
      }
      else if(from==3){
        document.getElementById("d3").value=val-273.15;
      }
    }
    else if(to==2){
      if(from==2)
        document.getElementById("d3").value=val;
      else if(from==1){
        document.getElementById("d3").value=(val*9/5)+32;
      }
      else if(from==3){
        document.getElementById("d3").value=((val-273.15)*9/5)+32;
      }
    }
    else if(to==3){
      if(from==3)
        document.getElementById("d3").value=val;
      else if(from==1){
        document.getElementById("d3").value=val+273.15;
      }
      else if(from==2){
        document.getElementById("d3").value=((val-32)*5/9)+273.15;
      }
    }
  }