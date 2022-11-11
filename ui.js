bind_to_element = function(object, element){
	object.object = element;
	element.onhover = () => {
		object.Options.show()
	}
}


class Option{
	shape = "cross";
	label = "enter";
	func;
	constructor(shape, label, func){
		this.shape = shape;
		this.label = label;
		this.func = func
	}
	choose = function(){this.func()};
}

class Options{
	opts = {}

	add_option = function(shape, label, func) {
		opt = new Option(shape, label, func)
		this.opts[label] = opt
	}

	show = function(){
		let ops = document.getElementById("controller_options");
	}
}

class GameFile {
	object;
	options = new Options
	data = {};
}

class AudioFile{

}