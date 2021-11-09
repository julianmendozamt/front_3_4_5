/** 
 * 
 * funciones para categorias
 * 
 */
function traerInformacionCategorias(){
    $.ajax({
        url:"http://132.226.246.63:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCategorias(respuesta);
        }
    });
}

function pintarRespuestaCategorias(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable += "<td><button onclick= 'borrarElementoClient'(ClientId) >Borrar</button></td>";
        myTable += "<td><button onclick='obtenerClientId("+respuesta[i].id+")'>Cargar</button></td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function guardarInformacionCategorias(){
    let var2 = {
        name:$("#Cname").val(),
        description:$("#Cdescription").val()
        };
    
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://132.226.246.63:8080/api/Category/save",
    
        
        success:function(response) {
            console.log(response);
            console.log("Se guardo correctamente");
            formulario.reset();
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}

/**  
 * funciones para biike
 * 
 */
function traerInformacionBikes(){
    $.ajax({
        url:"http://132.226.246.63:8080/api/Bike/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaBikes(respuesta);
        }
    });
}

function pintarRespuestaBikes(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].year+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable += "<td><button onclick= 'borrarElementoClient'(ClientId) >Borrar</button></td>";
        myTable += "<td><button onclick='obtenerClientId("+respuesta[i].id+")'>Cargar</button></td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);
}

function guardarInformacionBikes(){
    let var3 = {
        name:$("#Bname").val(),
        brand:$("#Bbrand").val(),
        year:$("#Byear").val(),
        description:$("#Bdescription").val(),
        };
    
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var3),
        url:"http://132.226.246.63:8080/api/Bike/save",

        success:function(response) {
            console.log(response);
            console.log("Se guardo correctamente");
            formulario2.reset();
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}
/**   
 * funciones para cliente
 * 
 */
function traerInformacionClientes(){
    $.ajax({
        url:"http://132.226.246.63:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClientes(respuesta);
        }
    });
}
function pintarRespuestaClientes(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable += "<td><button onclick= 'borrarElementoClient'(ClientId) >Borrar</button></td>";
        myTable += "<td><button onclick='obtenerClientId("+respuesta[i].id+")'>Cargar</button></td>";
        myTable+="</tr>";
    };
    myTable+="</table>";
    $("#resultado3").html(myTable);
}

function guardarInformacionClientes(){
    let var4 = {
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val(),
        };
    
        $.ajax({
            url:"http://132.226.246.63:8080/api/Client/save",
            type:'POST',
            contentType: "application/json; charset=utf-8",
            dataType: 'JSON',
            data: JSON.stringify(var4),
        
            success:function(response) {
                console.log(response);
                console.log("Se guardo correctamente");
                formulario3.reset();
                alert("Se guardo correctamente");
                window.location.reload()
        },
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
    });
}
function borrarElementoClient(ClientId){
    let myData={
        id:ClientId
    };

    let dataToSend=JSON.stringify(myData);

    $.ajax({

        url: "http://132.226.246.63:8080/api/Client/delete",
        type: "DELETE",
        data:dataToSend,
        contentType:"application/json",
        dataType: "JSON",
        success: function(respuesta){
            $("#resultado3").empty();
            traerInformacionClientes(),
            alert("Datos Borrados con Exito")
        }
    });
}
function obtenerClientId(items){
    console.log("---- obtenerClientId items:", items);
    $.ajax({

        dataType: "JSON",
        url: "http://132.226.246.63:8080/api/Client/all"+items,
        type: "GET",
        success:function(respuesta) {
            console.log("---- obtenerClientId", respuesta);
            var items = respuesta.items[0];
            $("#id_client").val(item.id);
            $("#name_client").val(item.name);
            $("#email_client").val(item.email);
            $("#age_client").val(item.age);
        },
        error: function(jqXHR, textStatus, errorThrown){},
    });  
}
function deleteRow(row) {
    //alert(row);
    // var d = row.parentNode.parentNode.rowIndex;
    document.getElementById('myTable').deleteRow(row);
}

function tableclick(e) {
    if(!e)
    e = window.event;
    
    if(e.target.value == "Delete")
        deleteRow( e.target.parentNode.parentNode.rowIndex );
}



document.getElementById('dsTable').addEventListener('click',tableclick,false);

//<td> <input type="button" value="Delete" />  </td>
/**
 * funciones para Message
 */
function traerInformacionMessage(){
    $.ajax({
        
        url: "http://132.226.246.63:8080/api/Message/all",
        headers:{
            'Access-Control-Allow-Origin':'*'
        },
        type: "GET",
        dataType: "JSON",
        success: function(respuesta){
            console.log(respuesta);
            $("#resultadoMessage").empty();
            pintarRespuestaMessage(respuesta.items);
        }
    });
}
function pintarRespuestaMessage(items){
    
    let myTable="<table border=1>";
    for(i=0; i<items.length; i++){
        myTable += "<tr>";
        myTable += "<td>"+items[i].id+"</td>";
        myTable += "<td>"+items[i].messagetext+"</td>";
        myTable += "<td><button onclick='borrarElementoMessage()'>Borrar</button></td>";
        myTable += "<td><button onclick='obtenerItemEspecificoMessage("+items[i].id+")'>Cargar</button></td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoMessage").html(myTable);
}
function guardarInformacionMessage(){
    let myData={
        id:$("#idMessage").val(),
        messagetext:$("#messageText").val(),
    };

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(myData),
        url: "http://132.226.246.63:8080/api/Message/save",
        
        success:function(response) {
            console.log(response);
            console.log("Se guardo correctamente");
            formulario4.reset();
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
    });    
}
function editarInformacionMessage(){
    let myData={
        id:$("#id_message").val(),
        messagetext:$("#messagetext").val(),
    };

    let dataToSend=JSON.stringify(myData);

    $.ajax({

        url: "http://132.226.246.63:8080/api/Message/update" ,
        type: "PUT",
        data:dataToSend,
        contentType: "application/json",  
        dataType: "JSON",    
        success:function(respuesta) {
            $("#resultadoClient").empty();
            $("#id_message").val("");
            $("#messagetext").val("");
            traerInformacionMessage();
            alert("Datos Actualizados Con Exito")
        }
    });    
}
function borrarElementoMessage(idElemento){
    let myData={
        id:idElemento
    };

    let dataToSend=JSON.stringify(myData);

    $.ajax({

        url: "http://132.226.246.63:8080/api/Message/delete" ,
        type: "DELETE",
        data:dataToSend,
        contentType:"application/json",
        dataType: "JSON",
        success: function(respuesta){
            $("#resultadoMessage").empty();
            traerInformacionMessage(),
            alert("Datos Borrados con Exito")
        }
    });
}
function obtenerItemEspecificoMessage(items){
    console.log("---- obtenerItemsEspecificoMessage items:",items);
    $.ajax({

        dataType: "JSON",
        url: "http://132.226.246.63:8080/api/Message/all"+items ,
        type: "GET",             
        success:function(response) {
            console.log("---- obtenerItemsEspecificoMessage", response);
            var item = response.items[0];
            $("#id_message").val(item.id);
            $("#messagetext").val(item.name);
            
        },

        error: function(jqXHR, textStatus, errorThrown){},
    });  
}


