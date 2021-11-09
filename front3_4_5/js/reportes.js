function traerReporteStatus(){
    console.log("test");
    $.ajax({
        url:"http://132.226.246.63:8080/api/Reservation/report-status",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaStatus(respuesta);
        }
    });
}

function pintarRespuestaStatus(respuesta){

    let myTable="<table>";
    myTable+="<tr>";
    myTable+="<th>completadas</th>";
        myTable+="<td>"+respuesta.completed+"</td>";
        myTable+="<th>canceladas</th>";
        myTable+="<td>"+respuesta.cancelled+"</td>";
        myTable+="</tr>";
    myTable+="</table>";
    $("#resultadoStatus").html(myTable);
}

function traerReporteDate(){

var fechaInicio = document.getElementById("RstarDate").value;
var fechaCierre = document.getElementById("RdevolutionDate").value;
console.log(fechaInicio);
console.log(fechaCierre);

    $.ajax({
        url:"http://132.226.246.63:8080/api/Reservation/report-dates/"+fechaInicio+"/"+fechaCierre,
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaDate(respuesta);
        }
    });
}
function pintarRespuestaDate(respuesta){

    let myTable="<table>";
    myTable+="<tr>";
    
    for(i=0;i<respuesta.length;i++){
    myTable+="<th>total</th>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].status+"</td>";
        traerReporteStatus()
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoDate").html(myTable);
}

function traerReporteCliente(){
    $.ajax({
        url:"http://132.226.246.63:8080/api/Reservation/report-clients",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClientes(respuesta);
        }
    });
}
function pintarRespuestaCliente(respuesta){

    let myTable="<table>";
    myTable+="<tr>";

    for(i=0;i<respuesta.length;i++){
    myTable+="<th>total</th>";
        myTable+="<td>"+respuesta[i].total+"</td>";
        myTable+="<td>"+respuesta[i].client.name+"</td>";
        myTable+="<td>"+respuesta[i].client.email+"</td>";
        myTable+="<td>"+respuesta[i].client.age+"</td>";

        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoClientes").html(myTable);
}

