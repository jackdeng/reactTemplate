console.log("start game.");

var GameAtom = React.createClass({displayName: "GameAtom",
	render: function() {
		var message = "jack's game";
		return (
			React.createElement("div", null, " ", message, " ")
		);
	}
})

var load = function() {
	React.render(GameAtom(), document.getElementById("game"));
}

document.addEventListener('DOMContentLoaded', load);
