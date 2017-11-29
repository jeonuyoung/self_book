/*
Copyright 2017 Ziadin Givan

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

https://github.com/givan/Vvvebjs
*/

bgcolorClasses = ["bg-primary", "bg-secondary", "bg-success", "bg-danger", "bg-warning", "bg-info", "bg-light", "bg-dark", "bg-white"]

bgcolorSelectOptions = 
[{
	value: "Default",
	text: ""
}, 
{
	value: "bg-primary",
	text: "Primary"
}, {
	value: "bg-secondary",
	text: "Secondary"
}, {
	value: "bg-success",
	text: "Success"
}, {
	value: "bg-danger",
	text: "Danger"
}, {
	value: "bg-warning",
	text: "Warning"
}, {
	value: "bg-info",
	text: "Info"
}, {
	value: "bg-light",
	text: "Light"
}, {
	value: "bg-dark",
	text: "Dark"
}, {
	value: "bg-white",
	text: "White"
}];

function changeNodeName(node, newNodeName)
{
	var newNode;
	newNode = document.createElement(newNodeName);
	attributes = node.get(0).attributes;
	
	for (i = 0, len = attributes.length; i < len; i++) {
		newNode.setAttribute(attributes[i].nodeName, attributes[i].nodeValue);
	}

	$(newNode).append($(node).contents());
	$(node).replaceWith(newNode);
	
	return newNode;
}

Vvveb.ComponentsGroup['Elements'] =
["html/products", "html/categories", "html/search", "html/user", "html/product_gallery", "html/cart", "html/checkout", "html/filters", "html/product", "html/slider", "html/heading", "html/image", "html/jumbotron", "html/card", "html/hr", "html/taglabel", "html/progress", "html/textinput", "html/textareainput", "html/checkbox","html/table", "html/container","html/googlemaps"];


Vvveb.ComponentsGroup['Information'] = 	["jp","kr","tw","eng","th","phil","nz","sg","au","hk"];

Vvveb.Components.extend("_base", "jp", {
    name: "日本",
   image: "icons/japan.svg",
    html:  '<img src="../../info/mapa-metro-seul.png" style="width:736px">\
    		<img src="../../info/800-kitakyushu-map.gif" style="width:736px">\
	    	<img src="../../info/800-mappa-metro-hiroshima.gif" style="width:736px">\
	    	<img src="../../info/800-mapa-metro-kobe.png" style="width:736px">\
	    	<img src="../../info/800-sendai_subway.gif" style="width:736px">\
	    	<img src="../../info/kyoto_municipal_subway_route_map.jpg" style="width:736px">\
	    	<img src="../../info/mapa-metro-chiba.png" style="width:736px">\
    		<img src="../../info/mapa-metro-fukuoka.jpg" style="width:736px">\
	    	<img src="../../info/mapa-metro-naha.gif" style="width:736px">\
	    	<img src="../../info/mapa-metro-osaka.png" style="width:736px">\
	    	<img src="../../info/mapa-metro-sapporo.png" style="width:736px">\
	    	<img src="../../info/nagoya-subway-map.jpg" style="width:736px">\
	    	<img src="../../info/tama-monorail.jpg" style="width:736px">\
	    	<img src="../../info/tokyo-metro-map-routemap.jpg" style="width:736px">\
    		<img src="../../info/yokohama-subway-map.gif" style="width:736px">\
    	'
});


Vvveb.Components.extend("_base", "kr", {
    name: "韓国",
   image: "icons/south-korea.svg",
    html: '<span id="ko_em_num" class="wf-notosansjapanese">大使館番号 - (+82)02-2170-5200</span><br>\
    	<span id="ko_em_add" class="wf-notosansjapanese">大使館位置 - Twin Tree Tower A, 6, Yulgok-ro 2-gil, Jongno-gu, Seoul, Republic of Korea</span><br>\
    	<span id="ko_currency" class="wf-notosansjapanese">為替 - ￥100 = ￦976.9</span><br>\
    	<span id="ko_toilet" class="wf-notosansjapanese">トイレ - 無料</span><br>\
    	<span id="ko_voltage" class="wf-notosansjapanese">電圧 - 220V/60Hz</span><br>\
    	<span id="ko_police" class="wf-notosansjapanese">救急/火災 - 112/119</span><br>\
    	<span id="ko_basic" class="wf-notosansjapanese" style:"text-align:center;">\
    	== 挨拶 ==<br>\
    	挨拶：アンニョンハセヨ<br>\
    	ありがとうございます：カムサハムニダ<br>\
    	嫌です: シロヨ<br>\
    	いいえ：アニヨ<br>\
    	はい：ネ<br>\
    	すみません：チェソンハムニダ <br>\
    	お願いします： ブタクハムニダ<br></span>\
    	<span id="ko_number" class="wf-notosansjapanese">\
    	== 数字の読み方 ==<br>\
    	1 - ハナ<br>\
    	2 - トゥル<br>\
    	3 - セトゥ<br>\
    	4 - ネトゥ<br>\
    	5 - タソトゥ<br>\
    	6 - ヨソトゥ <br>\
    	7 - イルゴプ <br>\
    	8 - ヨドル <br>\
    	9 - アホプ<br>\
    	10 - ヨル</span><br>\
    	<span id="ko_word" class="wf-notosansjapanese">\
    	==基本単語==<br>\
    	トイレ：ファザンシル<br>\
    	レシート: けサンソ<br>\
    	どこ：オディ<br>\
    	いくら：オルマ<br>\
    	出発：チュルバル<br>\
    	到着：ドチャク<br>\
    	入口：イブぐ<br>\
    	出口：チュルグ<br>\
    	駅：ヨク<br>\
    	</span><br>\
    	<img src="../../info/mapa-metro-seul.png" style="width:736px">\
    	<img src="../../info/incheon-metro-map.jpg" style="width:736px">\
    	<img src="../../info/busan.png" style="width:736px">\
    	<img src="../../info/daegu.jpg" style="width:736px">\
    	<img src="../../info/daejeon.jpg" style="width:736px">\
    	'
});

Vvveb.Components.extend("_base", "tw", {
    name: "台湾",
   image: "icons/taiwan.svg",
    html: '<span id="tw_em_num" class="wf-notosansjapanese">大使館番号 - (+886) 2 2713-8000</span><br>\
    	<span id="tw_em_add" class="wf-notosansjapanese">大使館位置 - Representative Office of Japan in Taipei, Interchange Association 28 Qingcheng Street, Taipei 10547, Taiwan</span><br>\
    	<span id="tw_currency" class="wf-notosansjapanese">為替 - ￥100 = 26.48台湾ドル</span><br>\
    	<span id="tw_toilet" class="wf-notosansjapanese">トイレ - 無料</span><br>\
    	<span id="tw_voltage" class="wf-notosansjapanese">電圧 - 110V/60Hz</span><br>\
    	<span id="tw_police" class="wf-notosansjapanese">救急/火災 - 110/119</span><br>\
    	<span id="tw_basic" class="wf-notosansjapanese" style:"text-align:center;">\
    	== 挨拶 ==<br>\
    	挨拶：您好　リゥーホゥー\
    	ありがとうございます：謝謝　セーセー\
    	嫌です:討厭　タオイェン\
    	いいえ：不是 プシープー\
    	はい：是　プー\
    	すみません：不好意思　ブーハオイースー\
    	お願いします：拝托パイトゥオ<br></span>\
    	<span id="tw_number" class="wf-notosansjapanese">\
    	== 数字の読み方 ==<br>\
    	1 - Yi<br>\
    	2 - Er<br>\
    	3 - San<br>\
    	4 - Si<br>\
    	5 - Wu<br>\
    	6 - Liu<br>\
    	7 - Qi<br>\
    	8 - Ba<br>\
    	9 - Jiu<br>\
    	10 - Shi</span><br>\
    	<span id="tw_word" class="wf-notosansjapanese">\
    	==基本単語==<br>\
    	トイレ：シーソウジェン<br>\
    	レシート：りょーしゅー<br>\
    	どこ：ザイナーリ<br>\
    	いくら：ドゥオシャオチエン<br>\
    	出発：チゥーファー　<br>\
    	到着：ダァォダァー　<br>\
    	入口：ルゥーコォゥ　<br>\
    	出口：チゥーコォゥ　<br>\
    	駅：ヂァン<br>\
    	</span><br>\
    	<img src="../../info/Kaohsiung-Mass-Rapid-Transit.jpg" style="width:736px">\
    	<img src="../../info/metro-taipei-map.jpg" style="width:736px">\
    	'
});

Vvveb.Components.extend("_base", "eng", {
    name: "イギリス",
   image: "icons/united-kingdom.svg",
    html: '<span id="eng_em_num" class="wf-notosansjapanese">大使館番号 - (+44)020-7465-6500</span><br>\
    	<span id="eng_em_add" class="wf-notosansjapanese">大使館位置 - 101-104 Piccadilly London W1J 7JT</span><br>\
    	<span id="eng_currency" class="wf-notosansjapanese">為替 - ￥100 = £0.66</span><br>\
    	<span id="eng_toilet" class="wf-notosansjapanese">トイレ - 場合によって有料・無料</span><br>\
    	<span id="eng_voltage" class="wf-notosansjapanese">電圧 - 240V,50Hz</span><br>\
    	<span id="eng_police" class="wf-notosansjapanese">救急/火災 - 112/999</span><br>\
    	<span id="eng_basic" class="wf-notosansjapanese" style:"text-align:center;">\
    	== 挨拶 ==<br>\
    	挨拶：Hi<br>\
    	ありがとうございます：Thank you<br>\
    	嫌です: I don＇t like it<br>\
    	いいえ：No<br>\
    	はい：Yes<br>\
    	すみません：Sorry<br>\
    	お願いします： Please<br></span>\
    	<span id="eng_number" class="wf-notosansjapanese">\
    	== 数字の読み方 ==<br>\
    	1 - One <br>\
    	2 - Two<br>\
    	3 - Three <br>\
    	4 - Four <br>\
    	5 - Five <br>\
    	6 - Six <br>\
    	7 - Seven <br>\
    	8 - Eight <br>\
    	9 - Nine<br>\
    	10 - Ten</span><br>\
    	<span id="eng_word" class="wf-notosansjapanese">\
    	==基本単語==<br>\
    	トイレ: Toilet <br>\
    	レシート: Bill <br>\
    	どこ：Where is it?<br>\
    	いくら：How much is it? <br>\
    	出発：Start <br>\
    	到着：Arrive <br>\
    	入口：Entrance <br>\
    	出口：Exit<br>\
    	駅：Station<br>\
    	</span><br>\
    	<img src="../../info/mapa-metro-londres.jpg" style="width:736px">\
    	<img src="../../info/newcastle-metro-plan.jpg" style="width:736px">\
    	<img src="../../info/docklands_light_railway.jpg" style="width:736px">\
    	<img src="../../info/Manchester_Route_Map.jpg" style="width:736px">\
    	'
});

Vvveb.Components.extend("_base", "th", {
    name: "タイ",
   image: "icons/thailand.svg",
    html: '<span id="th_em_num" class="wf-notosansjapanese">大使館番号 - (+66)02-207-8500 </span><br>\
    	<span id="th_em_add" class="wf-notosansjapanese">大使館位置 - T177 Witthayu Road, Lumphini, Pathum Wan, Bangkok 10330</span><br>\
    	<span id="th_currency" class="wf-notosansjapanese">為替 - ￥100 = 29.05バーツ</span><br>\
    	<span id="th_toilet" class="wf-notosansjapanese">トイレ - 場合によって有料・無料</span><br>\
    	<span id="th_voltage" class="wf-notosansjapanese">電圧 - 220V/50Hz</span><br>\
    	<span id="th_police" class="wf-notosansjapanese">救急/火災 - 1669/199</span><br>\
    	<span id="th_basic" class="wf-notosansjapanese" style:"text-align:center;">\
    	== 挨拶 ==<br>\
    	挨拶：サワディー　クラッ（プ） / カー<br>\
    	ありがとうございます：コップ クン　クラッ（プ） / カー<br>\
    	嫌です:マイサバーイ<br>\
    	いいえ：マイダーイ<br>\
    	はい：ダーイ<br>\
    	すみません：コートートゥッ　クラッ（プ） / カー<br>\
    	お願いします：カムクワームウォーン<br><br>\
    	</span>\
    	<span id="th_number" class="wf-notosansjapanese">\
    	== 数字の読み方 ==<br>\
    	1 - ヌン<br>\
    	2 - ソーン<br>\
    	3 - サーム<br>\
    	4 - スィー<br>\
    	5 - ハー<br>\
    	6 - ホック<br>\
    	7 - ヂェット<br>\
    	8 - ペート<br>\
    	9 - ガーオ <br>\
    	10 - スイップ<br>\
    	</span><br>\
    	<span id="th_word" class="wf-notosansjapanese">\
    	==基本単語==<br>\
    	トイレ：ホン（グ）ナーム<br>\
    	レシート:バイセット<br>\
    	どこ：ナイ<br>\
    	いくら：タウライ<br>\
    	出発：ワンオーク<br>\
    	到着：トゥン<br>\
    	入口：ターング カオ<br>\
    	出口：ターング オーク<br>\
    	駅：サターニー<br>\
    	</span><br>\
    	<img src="../../info/mapa-metro-bangkok.jpg" style="width:736px">\
    	'
});


Vvveb.Components.extend("_base", "phil", {
    name: "フィリピン",
   image: "icons/philippines.svg",
    html: '<span id="phil_em_num" class="wf-notosansjapanese">大使館番号 - (+63-2) 551-5710</span><br>\
    	<span id="phil_em_add" class="wf-notosansjapanese">大使館位置 - 2627 Roxas Blvd., Pasay City, Metro Manila, 1300, Philippines</span><br>\
    	<span id="phil_currency" class="wf-notosansjapanese">為替 - ￥100 = PHP 2.15~2.5</span><br>\
    	<span id="phil_toilet" class="wf-notosansjapanese">トイレ - 場合によって有料・無料</span><br>\
    	<span id="phil_voltage" class="wf-notosansjapanese">電圧 - 115/200v</span><br>\
    	<span id="phil_police" class="wf-notosansjapanese">救急/火災 - 166/166</span><br>\
    	<span id="phil_basic" class="wf-notosansjapanese" style:"text-align:center;">\
    	== 挨拶 ==<br>\
    	挨拶：Hi / Hello<br>\
    	ありがとうございます：Salamat<br>\
    	嫌です: Hindi ko gusto ito<br>\
    	いいえ：Hindi<br>\
    	はい：Oo<br>\
    	すみません：Paumanhin <br>\
    	お願いします： Mangyaring<br></span>\
    	<span id="phil_number" class="wf-notosansjapanese">\
    	== 数字の読み方 ==<br>\
    	1 - isa<br>\
    	2 - dalawa<br>\
    	3 - tatlo<br>\
    	4 - apat<br>\
    	5 - lima<br>\
    	6 - anim<br>\
    	7 - pitong<br>\
    	8 - walong<br>\
    	9 - siyam<br>\
    	10 - sampung</span><br>\
    	<span id="phil_word" class="wf-notosansjapanese">\
    	==基本単語==<br>\
    	トイレ：Mga Banyo<br>\
    	レシート: Pahayag<br>\
    	どこ：Saan<br>\
    	いくら：Magkano<br>\
    	出発：Pag-alis<br>\
    	到着：Pagdating<br>\
    	入口：Pasukan<br>\
    	出口：Lumabas<br>\
    	駅：Station <br>\
    	</span><br>\
    	<img src="../../info/mapa-mettro-manila2.png" style="width:736px">\
    	'
});

Vvveb.Components.extend("_base", "nz", {
    name: "ニュージーランド",
   image: "icons/new-zealand.svg",
    html: '<span id="nz_em_num" class="wf-notosansjapanese">大使館番号 - (+04) 473-1540</span><br>\
    	<span id="nz_em_add" class="wf-notosansjapanese">大使館位置 - Level 18, The Majestic Centre 100 Willis Street Wellington 6011 New Zealand </span><br>\
    	<span id="nzo_currency" class="wf-notosansjapanese">為替 - ￥100 = NZD 79~83</span><br>\
    	<span id="nz_toilet" class="wf-notosansjapanese">トイレ - 場合によって有料・無料</span><br>\
    	<span id="nz_voltage" class="wf-notosansjapanese">電圧 - 230V~240V,50Hz</span><br>\
    	<span id="nz_police" class="wf-notosansjapanese">救急/火災 - 116/116</span><br>\
    	<span id="nz_basic" class="wf-notosansjapanese" style:"text-align:center;">\
    	== 挨拶 ==<br>\
    	挨拶：Hi<br>\
    	ありがとうございます：Thank you<br>\
    	嫌です: I don＇t like it<br>\
    	いいえ：No<br>\
    	はい：Yes<br>\
    	すみません：Sorry<br>\
    	お願いします： Please<br></span>\
    	<span id="nz_number" class="wf-notosansjapanese">\
    	== 数字の読み方 ==<br>\
    	1 - One <br>\
    	2 - Two<br>\
    	3 - Three <br>\
    	4 - Four <br>\
    	5 - Five <br>\
    	6 - Six <br>\
    	7 - Seven <br>\
    	8 - Eight <br>\
    	9 - Nine<br>\
    	10 - Ten</span><br>\
    	<span id="nz_word" class="wf-notosansjapanese">\
    	==基本単語==<br>\
    	トイレ: Toilet <br>\
    	レシート: Bill <br>\
    	どこ：Where is it?<br>\
    	いくら：How much is it? <br>\
    	出発：Start <br>\
    	到着：Arrive <br>\
    	入口：Entrance <br>\
    	出口：Exit<br>\
    	駅：Station<br>\
    	</span><br>\
    	'
});

Vvveb.Components.extend("_base", "sg", {
    name: "シンガポール",
   image: "icons/singapore.svg",
    html: '<span id="sg_em_num" class="wf-notosansjapanese">大使館番号 -  (+65) 6235-8855</span><br>\
    	<span id="sg_em_add" class="wf-notosansjapanese">大使館位置 - 16 Nassim Road, Singapore 258390</span><br>\
    	<span id="sg_currency" class="wf-notosansjapanese">為替 - ￥100 = SGD 77~81</span><br>\
    	<span id="sg_toilet" class="wf-notosansjapanese">トイレ - 場合によって有料・無料</span><br>\
    	<span id="sg_voltage" class="wf-notosansjapanese">電圧 - 220V~240V,50Hz</span><br>\
    	<span id="sg_police" class="wf-notosansjapanese">救急/火災 - 999/995</span><br>\
    	<span id="sg_basic" class="wf-notosansjapanese" style:"text-align:center;">\
    	== 挨拶 ==<br>\
    	挨拶：Hi<br>\
    	ありがとうございます：Thank you<br>\
    	嫌です: I don＇t like it<br>\
    	いいえ：No<br>\
    	はい：Yes<br>\
    	すみません：Sorry<br>\
    	お願いします： Please<br></span>\
    	<span id="sg_number" class="wf-notosansjapanese">\
    	== 数字の読み方 ==<br>\
    	1 - One <br>\
    	2 - Two<br>\
    	3 - Three <br>\
    	4 - Four <br>\
    	5 - Five <br>\
    	6 - Six <br>\
    	7 - Seven <br>\
    	8 - Eight <br>\
    	9 - Nine<br>\
    	10 - Ten</span><br>\
    	<span id="sg_word" class="wf-notosansjapanese">\
    	==基本単語==<br>\
    	トイレ: Restroom <br>\
    	レシート: Bill <br>\
    	どこ：Where is it?<br>\
    	いくら：How much is it? <br>\
    	出発：Start <br>\
    	到着：Arrive <br>\
    	入口：Entrance <br>\
    	出口：Exit<br>\
    	駅：Station<br>\
    	</span><br>\
    	<img src="../../info/mapa-metro-singapur.png" style="width:736px">\
    	'
});

Vvveb.Components.extend("_base", "au", {
    name: "オーストラリア",
   image: "icons/australia.svg",
    html: '<span id="au_em_num" class="wf-notosansjapanese">大使館番号 - (+02) 6273-3244</span><br>\
    	<span id="au_em_add" class="wf-notosansjapanese">大使館位置 - 112 Empire Circuit, Yarralumla ACT 2600, Australia</span><br>\
    	<span id="au_currency" class="wf-notosansjapanese">為替 - ￥100 = AUD 82~86</span><br>\
    	<span id="au_toilet" class="wf-notosansjapanese">トイレ - 無料</span><br>\
    	<span id="au_voltage" class="wf-notosansjapanese">電圧 - 240V/50Hz</span><br>\
    	<span id="au_police" class="wf-notosansjapanese">救急/火災 - 000/000</span><br>\
    	<span id="au_basic" class="wf-notosansjapanese" style:"text-align:center;">\
    	== 挨拶 ==<br>\
    	挨拶：Hi<br>\
    	ありがとうございます：Thank you<br>\
    	嫌です: I don＇t like it<br>\
    	いいえ：No<br>\
    	はい：Yes<br>\
    	すみません：Sorry<br>\
    	お願いします： Please<br></span>\
    	<span id="au_number" class="wf-notosansjapanese">\
    	== 数字の読み方 ==<br>\
    	1 - One <br>\
    	2 - Two<br>\
    	3 - Three <br>\
    	4 - Four <br>\
    	5 - Five <br>\
    	6 - Six <br>\
    	7 - Seven <br>\
    	8 - Eight <br>\
    	9 - Nine<br>\
    	10 - Ten</span><br>\
    	<span id="au_word" class="wf-notosansjapanese">\
    	==基本単語==<br>\
    	トイレ: Restroom <br>\
    	レシート: Bill <br>\
    	どこ：Where is it?<br>\
    	いくら：How much is it? <br>\
    	出発：Start <br>\
    	到着：Arrive <br>\
    	入口：Entrance <br>\
    	出口：Exit<br>\
    	駅：Station<br>\
    	</span><br>\
    	<img src="../../info/brisbane.png" style="width:736px">\
    	<img src="../../info/melbourne-subway-map.jpg" style="width:736px">\
    	<img src="../../info/sydney_map.jpg" style="width:736px">\
    	'
});

Vvveb.Components.extend("_base", "hk", {
    name: " ホンコン",
   image: "icons/hong-kong.svg",
    html: '<span id="hk_em_num" class="wf-notosansjapanese">大使館番号 - (+852) 2522-1184 </span><br>\
    	<span id="hk_em_add" class="wf-notosansjapanese">大使館位置 - 46-47/F, One Exchange Square, 8 Connaught Place, Central, Hong Kong</span><br>\
    	<span id="hk_currency" class="wf-notosansjapanese">為替 - ￥100 = HKD 13~15</span><br>\
    	<span id="hk_toilet" class="wf-notosansjapanese">トイレ - 場合によって有料・無料</span><br>\
    	<span id="hk_voltage" class="wf-notosansjapanese">電圧 - 220V/50Hz</span><br>\
    	<span id="hk_police" class="wf-notosansjapanese">救急/火災 - 999/999</span><br>\
    	<span id="hk_basic" class="wf-notosansjapanese" style:"text-align:center;">\
    	== 挨拶 ==<br>\
    	挨拶：問候 (Wènhòu)<br>\
    	ありがとうございます：謝謝 (Xièxiè)<br>\
    	嫌です: 我不想 (Wǒ bùxiǎng)<br>\
    	いいえ：編號 (Biānhào)<br>\
    	はい：是 (Shì)<br>\
    	すみません：對不起 (Duìbùqǐ)<br>\
    	お願いします： 請做 (Qǐng zuò)<br></span>\
    	<span id="hk_number" class="wf-notosansjapanese">\
    	== 数字の読み方 ==<br>\
    	1 - 一 (Yī)\
    	2 - 二 (èr)\
    	3 - 三 (sān)\
    	4 - 四 (sì)\
    	5 - 五 (wǔ)\
    	6 - 六 (liù)\
    	7 - 七 (qī)\
    	8 - 八 (bā)\
    	9 - 九 (jiǔ)\
    	10 - 十 (shí)\
    	</span><br>\
    	<span id="hk_word" class="wf-notosansjapanese">\
    	==基本単語==<br>\
    	トイレ：聲明 (shēngmíng)<br>\
    	レシート: 聲明 (shēngmíng)<br>\
    	どこ：其中 (qízhōng)<br>\
    	いくら：多少錢 (duōshǎo qián)<br>\
    	出発：出發 (chūfā)<br>\
    	到着：要 (yào)<br>\
    	入口：入口 (rùkǒu)<br>\
    	出口：退出 (tuìchū)<br>\
    	駅：站 (zhàn)<br>\
    	</span><br>\
    	<img src="../../info/hong-kong.gif" style="width:736px">\
    	'
});


Vvveb.Components.add("html/googlemaps", {
    name: "Google Maps",
    attributes: ["data-component-maps"],
    image: "icons/map.svg",
    html: '<img src="../libs/builder/icons/maps.png">',
    
    //url parameters
    z:5, //zoom
    q:'Tokyo',//location
    t: 'q', //map type q = roadmap, w = satellite
    
    onChange: function (node, property, value)
    {
		map_iframe = jQuery('iframe', node);
		
		this[property.key] = value;
		
		mapurl = 'https://maps.google.com/maps?&q=' + this.q + '&z=' + this.z + '&t=' + this.t + '&output=embed';
		
		map_iframe.attr("src",mapurl);
		
		return node;
	},
    
    //use an image for dragging for performance reasons, iframes elements don't drag well
    afterDrop: function (node)
	{
		newnode = $('<div id="map" data-component-maps><iframe frameborder="0" src="https://maps.google.com/maps?&z=1&t=q&output=embed" width="600" height="300" style="width:100% height="100%";pointer-events:none"></iframe></div>')
		node.replaceWith(newnode);
		return newnode;
	},
    properties: [{
        name: "Address",
        key: "q",
        inputtype: TextInput
    }, 
	{
        name: "Map type",
        key: "t",
        inputtype: SelectInput,
        data:{
			options: [{
                value: "q",
                text: "Roadmap"
            }, {
                value: "w",
                text: "Satellite"
            }]
       },
    },
    {
        name: "Zoom",
        key: "z",
        inputtype: RangeInput,
        data:{
			max: 20, //max zoom level
			min:1,
			step:1
       },
    }]
});

/*

Vvveb.Components.add("_base", {
    name: "Element",
	properties: [{
        name: "Id",
        key: "id",
        htmlAttr: "id",
        inputtype: TextInput
    }, {
        name: "Class",
        key: "class",
        htmlAttr: "class",
        inputtype: TextInput
    }]
});    */

Vvveb.Components.extend("_base", "html/container", {
    classes: ["container", "container-fluid"],
    image: "icons/container.svg",
    html: '<div class="container"><div class="m-5">Container</div></div>',
    name: "Container",
    properties: [
     {
        name: "Type",
        key: "type",
        htmlAttr: "class",
        inputtype: SelectInput,
        validValues: ["container", "container-fluid"],
        data: {
            options: [{
                value: "container",
                text: "Default"
            }, {
                value: "container-fluid",
                text: "Fluid"
            }]
        }
    }],
});

Vvveb.Components.extend("_base", "html/heading", {
    image: "icons/heading.svg",
    name: "Heading",
    nodes: ["h1", "h2","h3", "h4","h5","h6"],
    html: "<h1>Heading</h1>",
    
	properties: [
	{
        name: "Size",
        key: "id",
        htmlAttr: "id",
        inputtype: SelectInput,
        
        onChange: function(node, value) {
			
			return changeNodeName(node, "h" + value);
		},	
			
        init: function(node) {
            var regex;
            regex = /H(\d)/.exec(node.nodeName);
            if (regex && regex[1]) {
                return regex[1]
            }
            return 1
        },
        
        data:{
			options: [{
                value: "1",
                text: "1"
            }, {
                value: "2",
                text: "2"
            }, {
                value: "3",
                text: "3"
            }, {
                value: "4",
                text: "4"
            }, {
                value: "5",
                text: "5"
            }, {
                value: "6",
                text: "6"
            }]
       },
    }]
});    
Vvveb.Components.extend("_base", "html/link", {
    nodes: ["a"],
    name: "Link",
    properties: [{
        name: "Url",
        key: "href",
        htmlAttr: "href",
        inputtype: LinkInput
    }, {
        name: "Target",
        key: "target",
        htmlAttr: "target",
        inputtype: TextInput
    }]
});
Vvveb.Components.extend("_base", "html/image", {
    nodes: ["img"],
    name: "Image",
    html: '<img src="../../libs/builder/icons/image.svg" height="128" width="128">',
    /*
    afterDrop: function (node)
	{
		node.attr("src", '');
		return node;
	},*/
    image: "icons/image.svg",
    properties: [{
        name: "Image",
        key: "src",
        htmlAttr: "src",
        inputtype: FileUploadInput
    }, {
        name: "Width",
        key: "width",
        htmlAttr: "width",
        inputtype: TextInput
    }, {
        name: "Height",
        key: "height",
        htmlAttr: "height",
        inputtype: TextInput
    }, {
        name: "Alt",
        key: "alt",
        htmlAttr: "alt",
        inputtype: TextInput
    }]
});
Vvveb.Components.add("html/hr", {
    image: "icons/hr.svg",
    nodes: ["hr"],
    name: "Horizontal Rule",
    html: "<hr>"
});
Vvveb.Components.extend("_base", "html/label", {
    name: "Label",
    nodes: ["label"],
    html: '<label for="">Label</label>',
    properties: [{
        name: "For id",
        htmlAttr: "for",
        inputtype: TextInput
    }]
});
Vvveb.Components.extend("_base", "html/button", {
    classes: ["btn", "btn-link"],
    name: "Button",
    image: "icons/button.svg",
    html: '<button type="button" class="btn btn-primary">Primary</button>',
    properties: [{
        name: "Link To",
        key: "href",
        htmlAttr: "href",
        inputtype: LinkInput
    }, {
        name: "Type",
        key: "type",
        htmlAttr: "class",
        inputtype: SelectInput,
        validValues: ["btn-default", "btn-primary", "btn-info", "btn-success", "btn-warning", "btn-info", "btn-light", "btn-dark", "btn-outline-primary", "btn-outline-info", "btn-outline-success", "btn-outline-warning", "btn-outline-info", "btn-outline-light", "btn-outline-dark", "btn-link"],
        data: {
            options: [{
                value: "btn-default",
                text: "Default"
            }, {
                value: "btn-primary",
                text: "Primary"
            }, {
                value: "btn btn-info",
                text: "Info"
            }, {
                value: "btn-success",
                text: "Success"
            }, {
                value: "btn-warning",
                text: "Warning"
            }, {
                value: "btn-info",
                text: "Info"
            }, {
                value: "btn-light",
                text: "Light"
            }, {
                value: "btn-dark",
                text: "Dark"
            }, {
                value: "btn-outline-primary",
                text: "Primary outline"
            }, {
                value: "btn btn-outline-info",
                text: "Info outline"
            }, {
                value: "btn-outline-success",
                text: "Success outline"
            }, {
                value: "btn-outline-warning",
                text: "Warning outline"
            }, {
                value: "btn-outline-info",
                text: "Info outline"
            }, {
                value: "btn-outline-light",
                text: "Light outline"
            }, {
                value: "btn-outline-dark",
                text: "Dark outline"
            }, {
                value: "btn-link",
                text: "Link"
            }]
        }
    }, {
        name: "Size",
        key: "size",
        htmlAttr: "class",
        inputtype: SelectInput,
        validValues: ["btn-lg", "btn-sm"],
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "btn-lg",
                text: "Large"
            }, {
                value: "btn-sm",
                text: "Small"
            }]
        }
    }, {
        name: "Target",
        key: "target",
        htmlAttr: "target",
        inputtype: TextInput
    }, {
        name: "Disabled",
        key: "disabled",
        htmlAttr: "disabled",
        inputtype: ToggleInput,
        data: {
            on: "disabled-true",
            off: "disabled-false"
        }
    }]
});
Vvveb.Components.extend("_base", "html/buttongroup", {
    classes: ["btn-group"],
    name: "Button Group",
    image: "icons/button_group.svg",
    html: '<div class="btn-group" role="group" aria-label="Basic example"><button type="button" class="btn btn-secondary">Left</button><button type="button" class="btn btn-secondary">Middle</button> <button type="button" class="btn btn-secondary">Right</button></div>',
	properties: [{
	    name: "Size",
        key: "size",
        htmlAttr: "class",
        inputtype: SelectInput,
        validValues: ["btn-group-lg", "btn-group-sm"],
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "btn-group-lg",
                text: "Large"
            }, {
                value: "btn-group-sm",
                text: "Small"
            }]
        }
    }, {
	    name: "Alignment",
        key: "alignment",
        htmlAttr: "class",
        inputtype: SelectInput,
        validValues: ["btn-group", "btn-group-vertical"],
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "btn-group",
                text: "Horizontal"
            }, {
                value: "btn-group-vertical",
                text: "Vertical"
            }]
        }
    }]
});
Vvveb.Components.extend("_base", "html/buttontoolbar", {
    classes: ["btn-toolbar"],
    name: "Button Toolbar",
    image: "icons/button_toolbar.svg",
    html: '<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">\
		  <div class="btn-group mr-2" role="group" aria-label="First group">\
			<button type="button" class="btn btn-secondary">1</button>\
			<button type="button" class="btn btn-secondary">2</button>\
			<button type="button" class="btn btn-secondary">3</button>\
			<button type="button" class="btn btn-secondary">4</button>\
		  </div>\
		  <div class="btn-group mr-2" role="group" aria-label="Second group">\
			<button type="button" class="btn btn-secondary">5</button>\
			<button type="button" class="btn btn-secondary">6</button>\
			<button type="button" class="btn btn-secondary">7</button>\
		  </div>\
		  <div class="btn-group" role="group" aria-label="Third group">\
			<button type="button" class="btn btn-secondary">8</button>\
		  </div>\
		</div>'
});

Vvveb.Components.extend("_base", "html/badge", {
    classes: ["badge"],
    image: "icons/badge.svg",
    name: "Badge",
    html: '<span class="badge badge-primary">Primary badge</span>',
    properties: [{
        name: "Color",
        key: "color",
        htmlAttr: "class",
        validValues:["badge-primary", "badge-secondary", "badge-success", "badge-danger", "badge-warning", "badge-info", "badge-light", "badge-dark"],
        inputtype: SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "badge-primary",
                text: "Primary"
            }, {
                value: "badge-secondary",
                text: "Secondary"
            }, {
                value: "badge-success",
                text: "Success"
            }, {
                value: "badge-warning",
                text: "Warning"
            }, {
                value: "badge-danger",
                text: "Danger"
            }, {
                value: "badge-info",
                text: "Info"
            }, {
                value: "badge-light",
                text: "Light"
            }, {
                value: "badge-dark",
                text: "Dark"
            }]
        }
     }]
});
Vvveb.Components.extend("_base", "html/card", {
    classes: ["card"],
    image: "icons/panel.svg",
    name: "Card",
    html: '<div class="card">\
		  <img class="card-img-top" src="../libs/builder/icons/image.svg" alt="Card image cap" width="128" height="128">\
		  <div class="card-body">\
			<h4 class="card-title">Card title</h4>\
			<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\
		  </div>\
		</div>'
});
Vvveb.Components.extend("_base", "html/listgroup", {
    name: "List Group",
    image: "icons/list_group.svg",
    classes: ["list-group"],
    html: '<ul class="list-group">\n  <li class="list-group-item">\n    <span class="badge">14</span>\n    Cras justo odio\n  </li>\n  <li class="list-group-item">\n    <span class="badge">2</span>\n    Dapibus ac facilisis in\n  </li>\n  <li class="list-group-item">\n    <span class="badge">1</span>\n    Morbi leo risus\n  </li>\n</ul>'
});
Vvveb.Components.extend("_base", "html/listitem", {
    name: "List Item",
    classes: ["list-group-item"],
    html: '<li class="list-group-item"><span class="badge">14</span> Cras justo odio</li>'
});
Vvveb.Components.extend("_base", "html/breadcrumbs", {
    classes: ["breadcrumb"],
    name: "Breadcrumbs",
    image: "icons/breadcrumbs.svg",
    html: '<ol class="breadcrumb">\
		  <li class="breadcrumb-item active"><a href="#">Home</a></li>\
		  <li class="breadcrumb-item active"><a href="#">Library</a></li>\
		  <li class="breadcrumb-item active">Data 3</li>\
		</ol>'
});
Vvveb.Components.extend("_base", "html/breadcrumbitem", {
	classes: ["breadcrumb-item"],
    name: "Breadcrumb Item",
    html: '<li class="breadcrumb-item"><a href="#">Library</a></li>',
    properties: [{
        name: "Active",
        key: "active",
        htmlAttr: "class",
        validValues: ["", "active"],
        inputtype: ToggleInput,
        data: {
            on: "active",
            off: ""
        }
    }]
});
Vvveb.Components.extend("_base", "html/pagination", {
    classes: ["pagination"],
    name: "Pagination",
    image: "icons/pagination.svg",
    html: '<nav aria-label="Page navigation example">\
	  <ul class="pagination">\
		<li class="page-item"><a class="page-link" href="#">Previous</a></li>\
		<li class="page-item"><a class="page-link" href="#">1</a></li>\
		<li class="page-item"><a class="page-link" href="#">2</a></li>\
		<li class="page-item"><a class="page-link" href="#">3</a></li>\
		<li class="page-item"><a class="page-link" href="#">Next</a></li>\
	  </ul>\
	</nav>',

    properties: [{
        name: "Size",
        key: "size",
        htmlAttr: "class",
        inputtype: SelectInput,
        validValues: ["btn-lg", "btn-sm"],
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "btn-lg",
                text: "Large"
            }, {
                value: "btn-sm",
                text: "Small"
            }]
        }
    },{
        name: "Alignment",
        key: "alignment",
        htmlAttr: "class",
        inputtype: SelectInput,
        validValues: ["justify-content-center", "justify-content-end"],
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "justify-content-center",
                text: "Center"
            }, {
                value: "justify-content-end",
                text: "Right"
            }]
        }
    }]	
});
Vvveb.Components.extend("_base", "html/pageitem", {
	classes: ["page-item"],
    html: '<li class="page-item"><a class="page-link" href="#">1</a></li>',
    name: "Pagination Item",
    properties: [{
        name: "Link To",
        key: "href",
        htmlAttr: "href",
        child:".page-link",
        inputtype: TextInput
    }, {
        name: "Disabled",
        key: "disabled",
        htmlAttr: "class",
        validValues: ["disabled"],
        inputtype: ToggleInput,
        data: {
            on: "disabled",
            off: ""
        }
   }]
});
Vvveb.Components.extend("_base", "html/progress", {
    classes: ["progress"],
    name: "Progress Bar",
    image: "icons/progressbar.svg",
    html: '<div class="progress"><div class="progress-bar w-25"></div></div>',
    properties: [{
        name: "Background",
        key: "background",
		htmlAttr: "class",
        validValues: bgcolorClasses,
        inputtype: SelectInput,
        data: {
            options: bgcolorSelectOptions
        }
    },
    {
        name: "Progress",
        key: "background",
        child:".progress-bar",
		htmlAttr: "class",
        validValues: ["", "w-25", "w-50", "w-75", "w-100"],
        inputtype: SelectInput,
        data: {
            options: [{
                value: "",
                text: "None"
            }, {
                value: "w-25",
                text: "25%"
            }, {
                value: "w-50",
                text: "50%"
            }, {
                value: "w-75",
                text: "75%"
            }, {
                value: "w-100",
                text: "100%"
            }]
        }
    }, 
    {
        name: "Progress background",
        key: "background",
        child:".progress-bar",
		htmlAttr: "class",
        validValues: bgcolorClasses,
        inputtype: SelectInput,
        data: {
            options: bgcolorSelectOptions
        }
    }, {
        name: "Striped",
        key: "striped",
        child:".progress-bar",
        htmlAttr: "class",
        validValues: ["", "progress-bar-striped"],
        inputtype: ToggleInput,
        data: {
            on: "progress-bar-striped",
            off: "",
        }
    }, {
        name: "Animated",
        key: "animated",
        child:".progress-bar",
        htmlAttr: "class",
        validValues: ["", "progress-bar-animated"],
        inputtype: ToggleInput,
        data: {
            on: "progress-bar-animated",
            off: "",
        }
    }]
});
Vvveb.Components.extend("_base", "html/jumbotron", {
    classes: ["jumbotron"],
    image: "icons/jumbotron.svg",
    name: "Jumbotron",
    html: '<div class="jumbotron">\
		  <h1 class="display-3">Hello, world!</h1>\
		  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\
		  <hr class="my-4">\
		  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\
		</div>'
});
Vvveb.Components.extend("_base", "html/navbar", {
    classes: ["navbar"],
    image: "icons/navbar.svg",
    name: "Nav Bar",
    html: '<nav class="navbar navbar-expand-lg navbar-light bg-light">\
		  <a class="navbar-brand" href="#">Navbar</a>\
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\
			<span class="navbar-toggler-icon"></span>\
		  </button>\
		\
		  <div class="collapse navbar-collapse" id="navbarSupportedContent">\
			<ul class="navbar-nav mr-auto">\
			  <li class="nav-item active">\
				<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>\
			  </li>\
			  <li class="nav-item">\
				<a class="nav-link" href="#">Link</a>\
			  </li>\
			  <li class="nav-item">\
				<a class="nav-link disabled" href="#">Disabled</a>\
			  </li>\
			</ul>\
			<form class="form-inline my-2 my-lg-0">\
			  <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">\
			  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>\
			</form>\
		  </div>\
		</nav>',
    
    properties: [{
        name: "Color theme",
        key: "color",
        htmlAttr: "class",
        validValues: ["navbar-light", "navbar-dark"],
        inputtype: SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "navbar-light",
                text: "Light"
            }, {
                value: "navbar-dark",
                text: "Dark"
            }]
        }
    },{
        name: "Background color",
        key: "background",
        htmlAttr: "class",
        validValues: bgcolorClasses,
        inputtype: SelectInput,
        data: {
            options: bgcolorSelectOptions
        }
    }, {
        name: "Placement",
        key: "placement",
        htmlAttr: "class",
        validValues: ["fixed-top", "fixed-bottom", "sticky-top"],
        inputtype: SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "fixed-top",
                text: "Fixed Top"
            }, {
                value: "fixed-bottom",
                text: "Fixed Bottom"
            }, {
                value: "sticky-top",
                text: "Sticky top"
            }]
        }
    }]
});

Vvveb.Components.extend("_base", "html/form", {
    nodes: ["form"],
    image: "icons/form.svg",
    name: "Form",
    html: '<form><div class="form-group"><label>Text</label><input type="text" class="form-control"></div></div></form>',
    properties: [{
        name: "Style",
        key: "style",
        htmlAttr: "class",
        validValues: ["", "form-search", "form-inline", "form-horizontal"],
        inputtype: SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "form-search",
                text: "Search"
            }, {
                value: "form-inline",
                text: "Inline"
            }, {
                value: "form-horizontal",
                text: "Horizontal"
            }]
        }
    }, {
        name: "Action",
        key: "action",
        htmlAttr: "action",
        inputtype: TextInput
    }, {
        name: "Method",
        key: "method",
        htmlAttr: "method",
        inputtype: TextInput
    }]
});

Vvveb.Components.extend("_base", "html/textinput", {
    name: "Text Input",
	attributes: {"type":"text"},
    image: "icons/text_input.svg",
    html: '<div class="form-group"><label>Text</label><input type="text" class="form-control" style="background-color:transparent;"></div></div>',
    properties: [{
        name: "Value",
        key: "value",
        htmlAttr: "value",
        inputtype: TextInput
    }, {
        name: "Placeholder",
        key: "placeholder",
        htmlAttr: "placeholder",
        inputtype: TextInput
    }]
});



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



Vvveb.Components.extend("_base", "html/textareainput", {
    name: "Text Area",
    image: "icons/text_area.svg",
    html: '<div class="form-group"><label>Your response:</label><textarea class="form-control" style="background-color:transparent;"></textarea></div>'
});
Vvveb.Components.extend("_base", "html/radiobutton", {
    name: "Radio Button",
	attributes: {"type":"radio"},
    image: "icons/radio.svg",
    html: '<label class="radio"><input type="radio"> Radio</label>',
    properties: [{
        name: "Name",
        key: "name",
        htmlAttr: "name",
        inputtype: TextInput
    }]
});
Vvveb.Components.extend("_base", "html/checkbox", {
    name: "Checkbox",
    attributes: {"type":"checkbox"},
    image: "icons/checkbox.svg",
    html: '<label class="checkbox"><input type="checkbox"> Checkbox</label>',
    properties: [{
        name: "Name",
        key: "name",
        htmlAttr: "name",
        inputtype: TextInput
    }]
});
Vvveb.Components.extend("_base", "html/fileinput", {
    name: "Input group",
	attributes: {"type":"file"},
    image: "icons/text_input.svg",
    html: '<div class="form-group">\
			  <input type="file" class="form-control">\
			</div>'
});
Vvveb.Components.extend("_base", "html/table", {
    nodes: ["table"],
    classes: ["table"],
    image: "icons/table.svg",
    name: "Table",
    html: '<table class="table">\
		  <thead>\
			<tr>\
			  <th>#</th>\
			  <th>First Name</th>\
			  <th>Last Name</th>\
			  <th>Username</th>\
			</tr>\
		  </thead>\
		  <tbody>\
			<tr>\
			  <th scope="row">1</th>\
			  <td>Mark</td>\
			  <td>Otto</td>\
			  <td>@mdo</td>\
			</tr>\
			<tr>\
			  <th scope="row">2</th>\
			  <td>Jacob</td>\
			  <td>Thornton</td>\
			  <td>@fat</td>\
			</tr>\
			<tr>\
			  <th scope="row">3</th>\
			  <td>Larry</td>\
			  <td>the Bird</td>\
			  <td>@twitter</td>\
			</tr>\
		  </tbody>\
		</table>',
    properties: [
	{
        name: "Type",
        key: "type",
		htmlAttr: "class",
        validValues: ["table-primary", "table-secondary", "table-success", "table-danger", "table-warning", "table-info", "table-light", "table-dark", "table-white"],
        inputtype: SelectInput,
        data: {
            options: [{
				value: "Default",
				text: ""
			}, {
				value: "table-primary",
				text: "Primary"
			}, {
				value: "table-secondary",
				text: "Secondary"
			}, {
				value: "table-success",
				text: "Success"
			}, {
				value: "table-danger",
				text: "Danger"
			}, {
				value: "table-warning",
				text: "Warning"
			}, {
				value: "table-info",
				text: "Info"
			}, {
				value: "table-light",
				text: "Light"
			}, {
				value: "table-dark",
				text: "Dark"
			}, {
				value: "table-white",
				text: "White"
			}]
        }
    },
	{
        name: "Responsive",
        key: "responsive",
        htmlAttr: "class",
        validValues: ["table-responsive"],
        inputtype: ToggleInput,
        data: {
            on: "table-responsive",
            off: ""
        }
    },   
	{
        name: "Small",
        key: "small",
        htmlAttr: "class",
        validValues: ["table-sm"],
        inputtype: ToggleInput,
        data: {
            on: "table-sm",
            off: ""
        }
    },   
	{
        name: "Hover",
        key: "hover",
        htmlAttr: "class",
        validValues: ["table-hover"],
        inputtype: ToggleInput,
        data: {
            on: "table-hover",
            off: ""
        }
    },   
	{
        name: "Bordered",
        key: "bordered",
        htmlAttr: "class",
        validValues: ["table-bordered"],
        inputtype: ToggleInput,
        data: {
            on: "table-bordered",
            off: ""
        }
    },   
	{
        name: "Striped",
        key: "striped",
        htmlAttr: "class",
        validValues: ["table-striped"],
        inputtype: ToggleInput,
        data: {
            on: "table-striped",
            off: ""
        }
    },   
	{
        name: "Inverse",
        key: "inverse",
        htmlAttr: "class",
        validValues: ["table-inverse"],
        inputtype: ToggleInput,
        data: {
            on: "table-inverse",
            off: ""
        }
    },   
    {
        name: "Head options",
        key: "head",
        htmlAttr: "class",
        child:"thead",
        inputtype: SelectInput,
        validValues: ["", "thead-inverse", "thead-default"],
        data: {
            options: [{
                value: "",
                text: "None"
            }, {
                value: "thead-default",
                text: "Default"
            }, {
                value: "thead-inverse",
                text: "Inverse"
            }]
        }
    }]
});
Vvveb.Components.extend("_base", "html/tablerow", {
    nodes: ["tr"],
    name: "Table Row",
    html: "<tr><td>Cell 1</td><td>Cell 2</td><td>Cell 3</td></tr>",
    properties: [{
        name: "Type",
        key: "type",
        htmlAttr: "class",
        inputtype: SelectInput,
        validValues: ["", "success", "danger", "warning", "active"],
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "success",
                text: "Success"
            }, {
                value: "error",
                text: "Error"
            }, {
                value: "warning",
                text: "Warning"
            }, {
                value: "active",
                text: "Active"
            }]
        }
    }]
});
Vvveb.Components.extend("_base", "html/tablecell", {
    nodes: ["td"],
    name: "Table Cell",
    html: "<td>Cell</td>"
});
Vvveb.Components.extend("_base", "html/tableheadercell", {
    nodes: ["th"],
    name: "Table Header Cell",
    html: "<th>Head</th>"
});
Vvveb.Components.extend("_base", "html/tablehead", {
    nodes: ["thead"],
    name: "Table Head",
    html: "<thead><tr><th>Head 1</th><th>Head 2</th><th>Head 3</th></tr></thead>",
    properties: [{
        name: "Type",
        key: "type",
        htmlAttr: "class",
        inputtype: SelectInput,
        validValues: ["", "success", "danger", "warning", "info"],
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "success",
                text: "Success"
            }, {
                value: "anger",
                text: "Error"
            }, {
                value: "warning",
                text: "Warning"
            }, {
                value: "info",
                text: "Info"
            }]
        }
    }]
});
Vvveb.Components.extend("_base", "html/tablebody", {
    nodes: ["tbody"],
    name: "Table Body",
    html: "<tbody><tr><td>Cell 1</td><td>Cell 2</td><td>Cell 3</td></tr></tbody>"
});

Vvveb.Components.add("html/gridcolumn", {
    name: "Grid Column",
    image: "icons/grid_row.svg",
    classesRegex: ["col-"],
    html: '<div class="col-sm-4"><h3>col-sm-4</h3></div>',
    properties: [{
        name: "Column",
        key: "column",
        inputtype: GridInput,
        data: {hide_remove:true},
		
		beforeInit: function(node) {
			_class = $(node).attr("class");
			
			var reg = /col-([^-\$ ]*)?-?(\d+)/g; 
			var match;

			while ((match = reg.exec(_class)) != null) {
				this.data["col" + ((match[1] != undefined)?"_" + match[1]:"")] = match[2];
			}
		},
		
		onChange: function(node, value, input) {
			_class = node.attr("class");
			
			//remove previous breakpoint column size
			_class = _class.replace(new RegExp(input.name + '-\\d+?'), '');
			//add new column size
			if (value) _class +=  ' ' + input.name + '-' + value;
			node.attr("class", _class);
			
			return node;
		},				
	}]
});
Vvveb.Components.add("html/gridrow", {
    name: "Grid Row",
    image: "icons/grid_row.svg",
    classes: ["row"],
    html: '<div class="row"><div class="col-sm-4"><h3>col-sm-4</h3></div><div class="col-sm-4 col-5"><h3>col-sm-4</h3></div><div class="col-sm-4"><h3>col-sm-4</h3></div></div>',
    
	beforeInit: function (node)
	{
		properties = [];
		var i = 0;
		var j = 0;
		
		$(node).find('[class*="col-"]').each(function() {
			_class = $(this).attr("class");
			
			var reg = /col-([^-\$ ]*)?-?(\d+)/g; 
			var match;
			data = {};

			while ((match = reg.exec(_class)) != null) {
				data["col" + ((match[1] != undefined)?"_" + match[1]:"")] = match[2];
			}
			
			i++;
			properties.push({
				name: "Column " + i,
				key: "column" + i,
				//index: i - 1,
				columnNode: this,
				inputtype: GridInput,
				data: data,
				onChange: function(node, value, input) {

					//column = $('[class*="col-"]:eq(' + this.index + ')', node);
					column = $(this.columnNode);
					
					//if remove button is clicked remove column and render row properties
					if (input.nodeName == 'BUTTON')
					{
						column.remove();
						Vvveb.Components.render("html/gridrow");
						return node;
					}

					//if select input then change column class
					_class = column.attr("class");
					
					//remove previous breakpoint column size
					_class = _class.replace(new RegExp(input.name + '-\\d+?'), '');
					//add new column size
					if (value) _class +=  ' ' + input.name + '-' + value;
					column.attr("class", _class);
					
					//console.log(this, node, value, input, input.name);
					
					return node;
				},	
			});
		});
		
		//remove all column properties
		this.properties = this.properties.filter(function(item) {
			return item.key.indexOf("column") === -1;
		});
		
		//add remaining properties to generated column properties
		properties.push(this.properties[0]);
		
		this.properties = properties;
		return node;
	},
    
    properties: [{
        name: "Column",
        key: "column1",
        inputtype: GridInput
	}, {
        name: "Column",
        key: "column1",
        inputtype: GridInput
	}, {
        name: "",
        key: "addChild",
        inputtype: ButtonInput,
        data: {text:"Add column"},
        onChange: function(node)
        {
			 $(node).append('<div class="col-3">Col-3</div>');
			 
			 //render component properties again to include the new column inputs
			 Vvveb.Components.render("html/gridrow");
			 
			 return node;
		}
	}]
});


