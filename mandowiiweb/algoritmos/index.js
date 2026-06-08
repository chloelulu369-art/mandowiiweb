script src="./gamecontroller.min.js"></script>
function conectado(){
    gameControl.on('connect', gamepad =>) {
  console.log('A new gamepad was connected!');

changeBackgroundColor("#008f39");
delay(500);
changeBackgroundColor("{3E9B6367-8F44-4700-8C8F-C47283765B2F}.png");
    }
})

!function conectado(){
    gameControl.on('disconnect', gamepad);
    changeBackgroundColor("#ff0000");

}
function up(){
 if(gameControl.set('up0', 0.5)){
      console.log('arriba precionado');
//cambiar imagen de automovilista
 }
}
function left(){
 if(gameControl.set('left0', 0.5)){
      console.log('izquierda precionado');
//cambiar imagen de automovilista
 }
    }
function right(){
 if(gameControl.set('right0', 0.5)){
      console.log('derecha precionado');
//cambiar imagen de automovilista
 }
    }
function down(){
 if(gameControl.set('down0', 0.5)){
      console.log('down precionado');
//cambiar imagen de automovilista
 }}
