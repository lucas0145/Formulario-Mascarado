
function formataCEP (a){
    let cep = a.value

    a.value = a.value.slice(0,10)


    
    if (a.value[2] != "." && a.value[2] != undefined){

        a.value = a.value.slice(0,2) + "."

        console.log(a.value[2])
    }

    if (a.value[6] != "-" && a.value[6] != undefined){

        a.value = a.value.slice(0,6) + "-"

    }
    
}