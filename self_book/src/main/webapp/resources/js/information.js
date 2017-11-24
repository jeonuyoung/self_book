var embassy_number = [
	["ko","大使館番号: (+82) 02-2170-5200"],
	["tw","大使館番号: (+886) 2 2713-8000"],
	["eg","大使館番号: (+44) 020-7465-6500"],
	["th","大使館番号: (+66) 02-207-8500"],
	["ph","大使館番号: (+632) 551-5710"],
	["nz","大使館番号: (+04) 473 1540"],
	["sg","大使館番号: (+65) 6235-8855"],
	["au","大使館番号: (+02) 6273 3244"],
	["hk","大使館番号: (+852) 2522-1184"]
	
];
var embassy_add = [
	["ko","大使館位置: Twin Tree Tower A, 6, Yulgok-ro 2-gil, Jongno-gu, Seoul, Republic of Korea"],
	["tw","大使館位置: Representative Office of Japan in Taipei, Interchange Association 28 Qingcheng Street, Taipei 10547, Taiwan"],
	["eg","大使館位置: 101-104 Piccadilly London W1J 7JT"],
	["th","大使館位置: 177 Witthayu Road, Lumphini, Pathum Wan, Bangkok 10330"],
	["ph","大使館位置: 2627 Roxas Blvd., Pasay City, Metro Manila, 1300, Philippines"],
	["nz","大使館位置: Level 18, The Majestic Centre 100 Willis Street Wellington 6011 New Zealand "],
	["sg","大使館位置: 16 Nassim Road, Singapore 258390"],
	["au","大使館位置: 112 Empire Circuit, Yarralumla ACT 2600, Australia"],
	["hk","大使館位置: 46-47/F, One Exchange Square, 8 Connaught Place, Central, Hong Kong"]
	
];

/*var subway = [
	[,],
	[,],
	[,],
	[,],
	[,],
	[,],
	[,],
	[,],
	[,],
	[,]
];*/


function addInfo(country, func) {
	if (func == "embassy_num") {
		$(function(){
			$.each(embassy_number, function(index, item){
				if (embassy_number[index][0] == country) {
					console.log(embassy_number[index][1]);
					var html = Vvveb.Builder.getHtml();
					console.log(document.getElementById('iframe1').contentWindow.document);
					var docc = document.getElementById('iframe1').contentWindow.document;
					var string = '<div>'+embassy_number[index][1]+'</div>';
					docc.body.append(string);
					//$("#ifame1").contents().find('body').append($div);
					//body.append($div);
					
				}
			});
			
		});
	}else if (func == "embassy_add") {
		
	}
		
	}