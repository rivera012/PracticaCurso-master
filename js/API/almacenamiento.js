// Almacenamiento

function iniciarBD(){
	var db = window.openDatabase("Database","1.0","HotelR", 200000);
	db.transaction(function(tx){
		tx.executeSql('CREATE TABLE IF NOT EXIST historial(hId unique, fecha, habitaciones, personas, estancia');
		tx.executeSql('CREATE TABLE IF NOT EXIST reserva(hId unique, fecha, habitaciones, personas, estancia');
		//tx.executeSql('DELETE FROM reserva WHERE rID=1');
		//tx.executeSql('INSERT INTO reserva (rId, fecha, haitaciones, personas, estancia');
		
	},function(err){
		alert(err.code);
		},function(){
		window.localStorage.setItem('Usuaroa',$('#regNombre').val());
		window.localStorage.setItem('Id', dispositivo()['Id']);
		pgAlert('Reservas', 'Ha sido registrado');
		window.location.href="#page";
		});
}

function leeHistorial(){
	accesoBD().transaction(function(tx){
		tx.executeSql('SELECT * FROM historial',[],
		function(tx1,results){
			for(i=0; i< results.rows.length;i++){
				
				alert(results.rows.item(i).hId);
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
