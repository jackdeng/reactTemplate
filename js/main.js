console.log("start app.");

var GameAtom = React.createClass({
	render: function() {
		var message = "hello app!";
		return (
			<div> {message} </div>
		);
	}
})

var load = function() {
	React.render(GameAtom(), document.getElementById("app"));
}

document.addEventListener('DOMContentLoaded', load);
