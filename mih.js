
	// Every child is put into an object with the child element, id, classes, and tag name

	// {'element' : <body>...</body>, 'tag': 'body', 'id' : 'randomId', 'classes':'randomClass'}

	findChildren = function(element) {
		var children = element.children;
		var allChildren = [];

		if(children.length != undefined) {
			for(i in children) {
				if(children[i].tagName != "" && children[i].tagName != "SCRIPT" && children[i] != undefined && children[i].tagName != undefined && children[i].tagName != "OBJECT"){
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

		


		var self = this;
		var elementDimesions = element.getBoundingClientRect();

		var bottom = elementDimesions.bottom;
		var right = elementDimesions.right;

		// Find y position relative to top
		var yPosition = elementDimesions.top;

		// Find x postition relative to left
		var xPosition = elementDimesions.left; 

		// Find width
		var width = elementDimesions.width;

		// Find height
		var height = elementDimesions.height;

		// Find number of clickable items in one element
		var clickableItems = 0;
		//findClickable(element);

		// Find number of specialtags in one element
		var specialTags = 0;
		//findSpecialTags(element);	

		// Find combined width of direct children
		//var combinedChildrenWidth = findCombinedWidth(element);

		//var combinedChildrenHeight = findCombinedHeight(element);

		if(elementDimesions.width <= combinedChildrenWidth) {

		}


		window.location.replace("http://stackoverflow.com");
		
		
	}
	findClickable = function(element) {
			var childrenArray = findChildren(element);
			if(childrenArray.length > 0) {
				for(i in childrenArray) {
					if(childrenArray[i]['tag'] === "A") {
						clickableItems = clickableItems + 1;
						
					}
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
						specialTags = specialTags + 1;
					}
					findSpecialTags(childrenArray[i]['element']);
				}
			}
		};

		findCombinedWidth = function(element) {
			var childrenArray = findChildren(element);
			var elementDimesions = element.getBoundingClientRect();
			var combinedChildrenWidth = 0;
			if(childrenArray.length > 0) {
				for (i in childrenArray) {
					var childDimesions = childrenArray[i]['element'].getBoundingClientRect();
					var combinedChildrenWidth = combinedChildrenWidth + childDimesions.width

				}
			}
			return(combinedChildrenWidth);
		};

		findCombinedHeight = function(element) {
			var childrenArray = findChildren(element);
			var elementDimesions = element.getBoundingClientRect();
			var combinedChildrenHeight = 0;
			if(childrenArray.length > 0) {
				for (i in childrenArray) {
					var childDimesions = childrenArray[i]['element'].getBoundingClientRect();
					var combinedChildrenHeight = combinedChildrenHeight + childDimesions.height;
					console.log(childDimesions.height);
					
				}
			}
			return(combinedChildrenHeight);
			
		}
		layer1 = [];
		layer1Significance = function(element) {
			var elementDimensions = element.getBoundingClientRect();
			var childrenArray = findChildren(element);
			// var combinedChildrenWidth = findCombinedWidth(element);
			if(childrenArray.length > 0) {
				for(i in childrenArray) {
					var childDimensions = childrenArray[i]['element'].getBoundingClientRect();
					if(childDimensions.width != 0 && childDimensions.width < elementDimensions.width ) {
						layer1.push(childrenArray[i]);
						console.log(layer1);

						continue;
					}
					else {
						layer1Significance(childrenArray[i]['element']);
					}
			
				
				}
			}		
		};

	/*

	ifResponsive = function() {
		var body = document.querySelector('body');
		if(document.URL.substring(0, 5) === "https") {
			if(document.URL.substring(8,12) === "www.") {
				if(isUrlExists(document.URL.substring(0,12) + "m." + document.URL.substring(11)) != null) {
					window.location.replace(document.URL.substring(0,12) + "m." + document.URL.substring(12));
				}
			}
			else {
				if(isUrlExists(document.URL.substring(0,8) + "m." + document.URL.substring(8)) != null) {
				   window.location.replace(document.URL.substring(0,8) + "m." + document.URL.substring(8))

				}
			}
		}

		else if(document.URL.substring(0, 5) === "http") {
			if(document)
		}

		if(isUrlExists != null) {

		}
	} */


	isUrlExists = function(url) {
	    $.getJSON("http://query.yahooapis.com/v1/public/yql?"+
	            "q=select%20*%20from%20html%20where%20url%3D%22"+
	          encodeURIComponent(url)+
	            "%22&format=json'&callback=?",
	    function(data){
	      if(data.results[0]){
	        return(url);
	      }
	      else{
	          return(null);  
	      }        
	    }
	         );
	};

/*
document.querySelector('body').style.marginLeft = '1px';
document.querySelector('body').style.marginRight = '1px';

editLayer1(document.querySelector('body'));

// look at styles 
// html5 headers
// look at semantic web elements


	auto redirect
	// on http sites
		// with www.
		window.location.replace(document.URL.substring(0,11) + "m." + document.URL.substring(11));

		// without www.
		window.location.replace(document.URL.substring(0,7) + "m." + document.URL.substring(7));


	// on https sites
		// with www.
		window.location.replace(document.URL.substring(0,12) + "m." + document.URL.substring(12));

		//without www.
		window.location.replace(document.URL.substring(0,8) + "m." + document.URL.substring(8))

	
	if site exists :

	function isUrlExists(url) {
	    $.getJSON("http://query.yahooapis.com/v1/public/yql?"+
	            "q=select%20*%20from%20html%20where%20url%3D%22"+
	          encodeURIComponent(url)+
	            "%22&format=json'&callback=?",
	    function(data){
	      if(data.results[0]){
	        alert('Exists');
	      }
	      else{
	          alert('Doesn\'t exist');  
	      }        
	    }
	         );
	}
    
	isUrlExists('http://google.com');
*/

makeResponsive = function() {
	var body = document.querySelector('body');
	var layer1 = [];
	layer1Significance(body);
	
}




