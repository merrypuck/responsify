
// Every child is put into an object with the child element, id, classes, and tag name

// {'element' : <body>...</body>, 'tag': 'body', 'id' : 'randomId', 'classes':'randomClass'}

findChildren = function(element) {
	var children = element.children;
	var allChildren = [];

	if(children.length != undefined) {
		for(i in children) {
			if(children[i].tagName != "" && children[i].tagName != "SCRIPT" && children[i] != undefined && children[i].tagName != undefined){
				childObject = {};
				
				childObject['element'] = children[i];

				childObject['tag'] = children[i].tagName;

				if(children[i].id != "" && children[i].id != undefined) {
					childObject['id'] = children[i].id;
				}
				if(children[i].className != "" && children[i].className != undefined) {
					childObject['classes'] = children[i].className;
				}
				
				allChildren.push(childObject);
			}
			
		} 
		return(allChildren);
	}
	else {
		return([]);
	}
};

editLayer1 = function(element) {
	var childrenArray = findChildren(element);
	if(childrenArray.length > 0) {
		for(i in childrenArray) {

			layer1Conditions(childrenArray[i]['element']);

			allLayerConditions(childrenArray[i]['element']);

			editLayer2(childrenArray[i]['element']);
				
			}
			                                          	
			
		}

};



editLayer2 = function(element) {
	var childrenArray = findChildren(element);
	for(i in childrenArray) {
		//childrenArray[i]['element'].style.border = '.5px solid green';
		//childrenArray[i]['element'].style.width = '100%';

		layer2Conditions(childrenArray[i]['element']);
		allLayerConditions(childrenArray[i]['element']);

		editLayer2(childrenArray[i]['element']);
	}
}



layer1Conditions = function(element) {
	element.style.float = 'left';
	element.style.position = 'relative';
	element.style.margin = '0';
	element.style.padding= '0'

	if(element.tagName != 'IMG') {
		element.style.width = '100%';
	}

}

layer2Conditions = function(element) {

}

allLayerConditions = function(element) {


	/*
		Short Guide to dimensions :
		yPosition = dimesions.top;
		xPosition = dimesions.right; // its right, opposite of what someone may think766
		width = dimesions.width;
		height = dimesions.height;
		etc	yPosition = dimesions.top;
xPosition = dimesions.right; // its right, opposite of what someone may think766
width = dimesions.width;
height = dimesions.height;

	*/
	var elementDimesions = element.getBoundingClientRect();

	//element.style.textAlign = 'center';
	element.style.align = 'center';
	element.style.textAlign = 'center';

	// if element's width is equal to body's - make it consistent(change with to 100%)
	if(element.offsetWidth === document.querySelector('body').offsetWidth) { 
		element.style.width = '100%'
	}

	if(element.tagName.lower === 'LI') {
		if(element.style.display === 'inline-block') {
			element.style.display = 'block';
			element.style.width = '100%';
		}
	}

	if(element.tagName === 'IMG') {
		if(elementDimesions.width > document.querySelector('body').offsetWidth / 2 ) {
			console.log('img width: ' + element.style.width.offsetWidth)
			console.log('body width / 2 : ' + document.querySelector('body').offsetWidth / 2 );
			element.style.width = '100%';
		}
	}


}

layerSignificance = function(element) {

	findClickable = function(element) {
		var childrenArray = findChildren(element);
		if(childrenArray.length > 0) {
			for(i in childrenArray) {
				if(childrenArray[i]['tag'] === "A") {
					clickableItems = clickableItems + 1;
					
				}
			console.log(clickableItems);
			findClickable(childrenArray[i]['element']);

			}
		}
	};

	findSpecialTags = function(element) {
		var childrenArray = findChildren(element);
		if(childrenArray.length > 0) {
			for(i in childrenArray) {
				if(childrenArray[i]['tag'] != 'SCRIPT' &&
				   childrenArray[i]['tag'] != 'NOSCRIPT' &&
				   childrenArray[i]['tag'] != 'LINK' &&
				   childrenArray[i]['tag'] != 'DIV' &&
				   childrenArray[i]['tag'] != 'SPAN' &&
				   childrenArray[i]['tag'] != 'BODY' &&
				   childrenArray[i]['tag'] != 'H1' &&
				   childrenArray[i]['tag'] != 'H2' &&
				   childrenArray[i]['tag'] != 'H3' &&
				   childrenArray[i]['tag'] != 'H4' &&
				   childrenArray[i]['tag'] != 'H5' &&
				   childrenArray[i]['tag'] != 'H6' &&
				   childrenArray[i]['tag'] != 'P' &&
				   childrenArray[i]['tag'] != 'STRONG' &&
				   childrenArray[i]['tag'] != 'EM' &&
				   childrenArray[i]['tag'] != 'BR' &&
				   childrenArray[i]['tag'] != 'PRE'



				   ) {
				   	console.log(childrenArray[i]['tag']);
					specialTags = specialTags + 1;
					console.log(specialTags);
				}
				findSpecialTags(childrenArray[i]['element']);
				findClickable(childrenArray[i]['element']);
			}
		}
	};

	var self = this;
	var childrenArray = findChildren(element);
	var elementDimesions = element.getBoundingClientRect();

	var yPosition = elementDimesions.top;
	var xPosition = elementDimesions.left; 
	var width = elementDimesions.width;
	var height = elementDimesions.height;

	var bottom = elementDimesions.bottom;
	var right = elementDimesions.right;


	// Find number of clickable items in one element
	var clickableItems = 0;
	findClickable(element);
	console.log('clickable items : ' + clickableItems);

	// Find number of specialtags in one element
	var specialTags = 0;
	findSpecialTags(element);
	console.log('specialtags : ' + specialTags)
	
	
}



document.querySelector('body').style.marginLeft = '1px';
document.querySelector('body').style.marginRight = '1px';

editLayer1(document.querySelector('body'));




