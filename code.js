$(document).ready(function() {
	$('#autoWidth').lightSlider({
		autoWidth:true,
		loop:true,
		onSliderLoad: function(){
			$('autoWidth').removeClass('cS-hidden');
		}
	})
});
function characterSubmit(){
	if ($("#characterName").val() == "") {
		alert('What is your suggestion, buddy?');
		return;
	}
	alert('Thank you for suggesting: ' + $("#characterName").val());
}
function sendForm(){
	if($("#name").val() == "" || $("#message").val() == "" || $("#email").val() == ""){
		alert('Some space are not filled.');
		return;
	}
	alert('Thanks ' + $("#name").val() +  ' for your message!\nHave a good one!')

}
