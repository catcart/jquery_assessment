// $(document).ready(function(){
$(".generateButton").on('click',function(){
	$(this).parent().append("<div class='myNewDiv'>" Hello?</div>);
	 });

var myNewDiv = $(".myNewDiv").add("button").addClass("myRemoveButton");

$('.myRemoveButton').on('click', function(){
	$('')
// $("div").remove(".myNewDiv");
 });
