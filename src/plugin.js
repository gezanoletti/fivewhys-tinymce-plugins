import _ from 'lodash';

const plugin = (editor) => {
	editor.addButton('fivewhys', {
		text: 'Five Whys',
		icon: false,
		onclick: () => {
			// Open window
			editor.windowManager.open({
				width: 600,
				height: 230,
				title: 'Five Whys',
				body: [
					{type: 'textbox', name: 'w1', label: 'First Why'},
					{type: 'textbox', name: 'w2', label: 'Second Why'},
					{type: 'textbox', name: 'w3', label: 'Third Why'},
					{type: 'textbox', name: 'w4', label: 'Fourth Why'},
					{type: 'textbox', name: 'w5', label: 'Fifth Why'},
				],
				onsubmit(e) {         
				  editor.insertContent("<ul>");
				  editor.insertContent("<li>" + e.data.w1 + "</li>");
				  editor.insertContent("<li>" + e.data.w2 + "</li>");
				  editor.insertContent("<li>" + e.data.w3 + "</li>");
				  editor.insertContent("<li>" + e.data.w4 + "</li>");
				  editor.insertContent("<li>" + e.data.w5 + "</li>");
				  editor.insertContent("</ul>");
				}
			});
		}
	});
};

export default plugin;
