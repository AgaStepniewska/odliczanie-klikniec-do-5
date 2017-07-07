$(function(){
	var plusOne = $('#plus');
	var minusOne = $('#minus');
	var number = $('#number');
	var count = 1;
	
	plusOne.click(function() {
		count++;  //aby powiększyć o 1 należy użyć "++" (dwa plusy)
		number.html(+count);
		stopCountingPlus();
	});
	function stopCountingPlus() {
		if (count == 5) {
		
		count = count - 5;
		}
	}
	function stopCountingMinus() {
		if (count == 1) {
			
			count = count + 5;
		}
	}
	minusOne.click(function() {
		stopCountingMinus();
		count--; // aby pomniejszyć o 1 należy użyć "--" (dwa minusy)
		number.html(count);
		
	});
});
	