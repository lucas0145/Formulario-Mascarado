
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

function formataCPF (a){

    a.value = a.value.slice(0,14)
    
    if (a.value[3] != "." && a.value[3] != undefined){

        a.value = a.value.slice(0,3) + "."

    }

    if (a.value[7] != "." && a.value[7] != undefined){

        a.value = a.value.slice(0,7) + "."

    }
    
    if (a.value[11] != "-" && a.value[11] != undefined){

        a.value = a.value.slice(0,11) + "-"

    }
    
}

function formataTel (a) {

    a.value = a.value.slice(0,16)

    if (a.value[0] != "(" && a.value[0] != undefined){

        a.value = a.value.slice(0,0) + "(" + a.value[0]

    }

    if (a.value[3] != ")" && a.value[3] != undefined){

        a.value = a.value.slice(0,3) + ") " + a.value[3]

    }
    
    if (a.value[6] != " "&& a.value[6] != undefined){
        a.value = a.value.slice(0,6) + " " + a.value[6]
    }

    if (a.value[10] != "-" && a.value[10] != undefined){
        a.value = a.value.slice(0,10) + "-" + a.value[10]
    }
}

function formataCNPJ (a) {

    a.value = a.value.slice(0,18)

    if (a.value[2] != "." && a.value[2] != undefined){

        a.value = a.value.slice(0,2) + "." + a.value[2]

    }

    if (a.value[6] != "." && a.value[6] != undefined){

        a.value = a.value.slice(0,6) + "." + a.value[6]

    }
    
    if (a.value[10] != "/" && a.value[10] != undefined){

        a.value = a.value.slice(0,10) + "/0001-"

    }

}

function formataCode (a) {

    a.value = a.value.slice(0,20)

    if (a.value[2] != "_" && a.value[2] != undefined){

        a.value = a.value.slice(0,2) + "_" + a.value[2]

    }

    if (a.value[5] != "/" && a.value[5] != undefined){

        a.value = a.value.slice(0,5) + "/" + a.value[5]

    }

    if (a.value[6] != "/" && a.value[6] != undefined){

        a.value = a.value.slice(0,6) + "/" + a.value[6]

    }
    
    if (a.value[10] != "-" && a.value[10] != undefined){

        a.value = a.value.slice(0,10) + "-" + a.value[10]

    }

    if (a.value[14] != "." && a.value[14] != undefined){

        a.value = a.value.slice(0,14) + "." + a.value[14]

    }
    if (a.value[15] != "9" && a.value[15] != undefined){

        a.value = a.value.slice(0,15) + "9" + a.value[15]

    }
    if (a.value[16] != "." && a.value[16] != undefined){

        a.value = a.value.slice(0,16) + "." + a.value[16]

    }

}

