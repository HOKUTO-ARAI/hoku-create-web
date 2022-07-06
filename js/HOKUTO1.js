$(function(){
	$(".btn-gnavi").on("click", function(){
		// ハンバーガーメニューの位置を設定するための変数
		var rightVal = 0;
		if($(this).hasClass("open")) {
			// 「open」クラスを持つ要素はメニューを開いた状態に設定
			rightVal = -1500;
			// メニューを開いたら次回クリック時は閉じた状態になるよう設定
			$(this).removeClass("open");
		} else {
			// 「open」クラスを持たない要素はメニューを閉じた状態に設定 (rightVal は0の状態 )
			// メニューを開いたら次回クリック時は閉じた状態になるよう設定
			$(this).addClass("open");
		}

		$("#global-navi").stop().animate({
			top: rightVal
		}, 200);
	});
});



ScrollReveal().reveal('.anime',{
	duration:2000,
	viewFactor:0.1,
	opacity: 0.5,
	origin: "left",
	distance: "200px",
	reset:true,
});









  $(function(){
	// 変数に要素を入れる
	var open = $('.works-image2'),
	  close = $('.modal-close'),
	  container = $('.modal-container2');
  
	//開くボタンをクリックしたらモーダルを表示する
	open.on('click',function(){ 
	  container.addClass('active');
	  $('body').css('overflow-y', 'hidden'); 
	  $('body').css('position:fixed'); 
	  return false;
	});
  
	//閉じるボタンをクリックしたらモーダルを閉じる
	close.on('click',function(){  
	  container.removeClass('active');
	});
  
	//モーダルの外側をクリックしたらモーダルを閉じる
	$(document).on('click',function(e) {
	  if(!$(e.target).closest('.modal-body').length) {
		container.removeClass('active');
		$('body').css('overflow-y','auto');  
	  }
	});
  });


  $(function(){
	// 変数に要素を入れる
	var open = $('.works-image3'),
	  close = $('.modal-close'),
	  container = $('.modal-container3');
  
	//開くボタンをクリックしたらモーダルを表示する
	open.on('click',function(){ 
	  container.addClass('active');

	 
	  return false;
	});
  
	//閉じるボタンをクリックしたらモーダルを閉じる
	close.on('click',function(){  
	  container.removeClass('active');
	});
  
	//モーダルの外側をクリックしたらモーダルを閉じる
	$(document).on('click',function(e) {
	  if(!$(e.target).closest('.modal-body').length) {
		container.removeClass('active');
		$('body').css('overflow-y','auto');  
	  }
	});
  });

  $(function(){
	// 変数に要素を入れる
	var open = $('.works-image4'),
	  close = $('.modal-close'),
	  container = $('.modal-container4');
  
	//開くボタンをクリックしたらモーダルを表示する
	open.on('click',function(){ 
	  container.addClass('active');
	  $('body').css('overflow-y', 'hidden'); 
	  $('body').css('position:fixed'); 
	  return false;
	});
  
	//閉じるボタンをクリックしたらモーダルを閉じる
	close.on('click',function(){  
	  container.removeClass('active');
	});
  
	//モーダルの外側をクリックしたらモーダルを閉じる
	$(document).on('click',function(e) {
	  if(!$(e.target).closest('.modal-body').length) {
		container.removeClass('active');
		$('body').css('overflow-y','auto');  
	  }
	});
  });


  $(function(){
	// 変数に要素を入れる
	var open = $('.works-image5'),
	  close = $('.modal-close'),
	  container = $('.modal-container5');
  
	//開くボタンをクリックしたらモーダルを表示する
	open.on('click',function(){ 
	  container.addClass('active');
	  $('body').css('overflow-y', 'hidden'); 
	  $('body').css('position:fixed'); 
	  return false;
	});
  
	//閉じるボタンをクリックしたらモーダルを閉じる
	close.on('click',function(){  
	  container.removeClass('active');
	});
  
	//モーダルの外側をクリックしたらモーダルを閉じる
	$(document).on('click',function(e) {
	  if(!$(e.target).closest('.modal-body').length) {
		container.removeClass('active');
		$('body').css('overflow-y','auto');  
	  }
	});
  });


  $(function(){
	// 変数に要素を入れる
	var open = $('.works-image6'),
	  close = $('.modal-close'),
	  container = $('.modal-container6');
  
	//開くボタンをクリックしたらモーダルを表示する
	open.on('click',function(){ 
	  container.addClass('active');
	  $('body').css('overflow-y', 'hidden'); 
	  $('body').css('position:fixed'); 
	  return false;
	});
  
	//閉じるボタンをクリックしたらモーダルを閉じる
	close.on('click',function(){  
	  container.removeClass('active');
	});
  
	//モーダルの外側をクリックしたらモーダルを閉じる
	$(document).on('click',function(e) {
	  if(!$(e.target).closest('.modal-body').length) {
		container.removeClass('active');
		$('body').css('overflow-y','auto');  
	  }
	});
  });


  $(function(){
	// 変数に要素を入れる
	var open = $('.works-image7'),
	  close = $('.modal-close'),
	  container = $('.modal-container7');
  
	//開くボタンをクリックしたらモーダルを表示する
	open.on('click',function(){ 
	  container.addClass('active');
	  $('body').css('overflow-y', 'hidden'); 
	  $('body').css('position:fixed'); 
	  return false;
	});
  
	//閉じるボタンをクリックしたらモーダルを閉じる
	close.on('click',function(){  
	  container.removeClass('active');
	});
  
	//モーダルの外側をクリックしたらモーダルを閉じる
	$(document).on('click',function(e) {
	  if(!$(e.target).closest('.modal-body').length) {
		container.removeClass('active');
		$('body').css('overflow-y','auto');  
	  }
	});
  });


  $(function(){
	// 変数に要素を入れる
	var open = $('.works-image8'),
	  close = $('.modal-close'),
	  container = $('.modal-container8');
  
	//開くボタンをクリックしたらモーダルを表示する
	open.on('click',function(){ 
	  container.addClass('active');
	  $('body').css('overflow-y', 'hidden'); 
	  $('body').css('position:fixed'); 
	  return false;
	});
  
	//閉じるボタンをクリックしたらモーダルを閉じる
	close.on('click',function(){  
	  container.removeClass('active');
	});
  
	//モーダルの外側をクリックしたらモーダルを閉じる
	$(document).on('click',function(e) {
	  if(!$(e.target).closest('.modal-body').length) {
		container.removeClass('active');
		$('body').css('overflow-y','auto');  
	  }
	});
  });

  $(function(){
	// 変数に要素を入れる
	var open = $('.works-image9'),
	  close = $('.modal-close'),
	  container = $('.modal-container9');
  
	//開くボタンをクリックしたらモーダルを表示する
	open.on('click',function(){ 
	  container.addClass('active');
	  $('body').css('overflow-y', 'hidden'); 
	  $('body').css('position:fixed'); 
	  return false;
	});
  
	//閉じるボタンをクリックしたらモーダルを閉じる
	close.on('click',function(){  
	  container.removeClass('active');
	});
  
	//モーダルの外側をクリックしたらモーダルを閉じる
	$(document).on('click',function(e) {
	  if(!$(e.target).closest('.modal-body').length) {
		container.removeClass('active');
		$('body').css('overflow-y','auto');  
	  }
	});
  });

  $(function(){
	// 変数に要素を入れる
	var open = $('.works-image10'),
	  close = $('.modal-close'),
	  container = $('.modal-container10');
  
	//開くボタンをクリックしたらモーダルを表示する
	open.on('click',function(){ 
	  container.addClass('active');
	  $('body').css('overflow-y', 'hidden'); 
	  $('body').css('position:fixed'); 
	  return false;
	});
  
	//閉じるボタンをクリックしたらモーダルを閉じる
	close.on('click',function(){  
	  container.removeClass('active');
	});
  
	//モーダルの外側をクリックしたらモーダルを閉じる
	$(document).on('click',function(e) {
	  if(!$(e.target).closest('.modal-body').length) {
		container.removeClass('active');
		$('body').css('overflow-y','auto');  
	  }
	});
  });



