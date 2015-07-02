$(".pi-sm .diameter").val(12);
$(".pi-md .diameter").val(18);
$(".pi-lg .diameter").val(27);
$(".pi-sm .price").val(10);
$(".pi-md .price").val(18);
$(".pi-lg .price").val(25);

$("button.calculate").on("click", calculate);

function calculate() {
  console.log("Calculate button pressed!");

  var smRadius = parseFloat($(".pi-sm .diameter").val()) / 2;
  var smPrice = parseFloat($(".pi-sm .diameter").val());
  var smRatio = Math.PI * smRadius * smRadius / smPrice;
  $(".pi-sm .ratio").html(smRatio.toFixed(2));

  var mdRadius = parseFloat($(".pi-md .diameter").val()) / 2;
  var mdPrice = parseFloat($(".pi-md .price").val());
  var mdRatio = Math.PI * mdRadius * mdRadius / mdPrice;
  $(".pi-md .ratio").html(mdRatio.toFixed(2));

  var lgRadius = parseFloat($(".pi-lg .diameter").val()) / 2;
  var lgPrice = parseFloat($(".pi-lg .price").val());
  var lgRatio = Math.PI * lgRadius * lgRadius / lgPrice;
  $(".pi-lg .ratio").html(lgRatio.toFixed(2));


}
