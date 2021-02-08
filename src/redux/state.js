let rerenderEntireTree = () => {
}

let state = {
	comments: [
	]
}

export const addNewComment = (commentMessage) => {
	let newComment= {
		id: Date.now(),
		message: commentMessage,
		likes: 0
	};
	state.comments.push(newComment);
	rerenderEntireTree(state);

}

export const subscribe = (observer) => {
rerenderEntireTree = observer;

}

export default state;