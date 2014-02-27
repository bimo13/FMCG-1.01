$(document).ready(function(){
	$('#produk_qty').keyup(function(){
		var thisVal = parseInt($(this).val(), 10);
		if (!isNaN(thisVal)) {
			thisVal = Math.max(0, Math.min($("#produk_stok").val(), thisVal));
			$(this).val(thisVal);
		}
		$('#produk_total_pesanan').val($('#produk_qty').val() * $('#produk_harga').val());
	});   
});