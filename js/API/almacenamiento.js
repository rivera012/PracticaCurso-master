// Almacenamiento

function iniciarBD(){
	var db = window.openDatabase("Database","1.0","HotelR", 200000);
	db.transaction(function(tx){
		tx.executeSql('CREATE TABLE IF NOT EXIST historial(hId unique, fecha, habitaciones, personas, estancia');
		tx.executeSql('CREATE TABLE IF NOT EXIST reserva(rId unique, fecha, habitaciones, personas, estancia');
		//tx.executeSql('DELETE FROM reserva WHERE rID=1');
		//tx.executeSql('INSERT INTO reserva (rId, fecha, haitaciones, personas, estancia');
		
	},function(err){
		alert(err.code);
		},function(){
		window.localStorage.setItem('Usuario',$('#regNombre').val());
		window.localStorage.setItem('Id',dispositivo()['Id']);
		pgAlert('Reservas','Ha sido registrado');
		window.location.href="#page";
		});
}

function leeHistorial(){
	accesoBD().transaction(function(tx){
		tx.executeSql('SELECT * FROM historial',[],
		function(tx1,results){
			for(i=0; i< results.rows.length;i++){
				
				$('#prueSQL').text(results.rows.item(i).hId);
			}
			
		},function(err){
		pgAlert('Error base de Datos', err.code);
});
},function(err){
	pgAlert('Error Base de Datos',err.code);
});
}
function leeReservas(){
	accesoBD().transaction(function(tx){
		tx.executeSql('SELECT * FROM reserva',[],
		function(tx1,results){
			for(i=0; i< results.rows.length;i++){
				
				alert(results.rows.item(i).hId);
			}
			
		},function(err){
		pgAlert('Error ase de Datos', err.code);
});
},function(err){
	pgAlert('Error Base de Datos',err.code);
});
}

function saveReserva(){
	var tipoHabitacion=$('#nr1').attr('th');
	var habit=$('#nr2 ul[data-role=listview] li:eq(1)').children('select').val();
	var dias=$('#nr2 ul[data-role=listview] li:eq(3)').children('select').val();
	var pers=$('#nr2 ul[data-role=listview] li:eq(2)').children('select').val();
	var fecha=new Date();
	
	//Acceso a la base de Datos
	var db = window.openDatabase("Database","1.0","HotelR", 200000);
	
	db.transaction(function(tx){
		tx.executeSql('INSERT INTO reserva (rId,fecha,habitaciones,personas,estancia) VALUES (1,'+fecha.getDate()+'/'+fecha.getMonth()+'/'+fecha.getFullYear()+','+habit+','+pers+','+dias+')');
		
		},function(err){
			
			pgAlert('Error',err.code);
		
		},function(){
			
			paAlert('Guardado Localmente','Esperando conectar al Servidor');
		});
	
	//esta Alerta genera error en Windows.
	alert (habit+' '+
			pers+' '+
			dias+' '+
			tipoHabitacion);
	}
