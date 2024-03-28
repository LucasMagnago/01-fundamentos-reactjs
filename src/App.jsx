import { Post } from "./Post.jsx";

export function App() {
	return (
		<div>
			<Post
				author="Lucas Magnago"
				content="because we assume a modern browser is used and it supports all of the latest JavaScript and CSS features. This prevents syntax lowering, letting Vite serve modules as close as possible to the original source code."
			/>
			<Post
				author="Matheus Magnago"
				content="because we assume a modern browser is used and it supports all of the latest JavaScript and CSS features. This prevents syntax lowering, letting Vite serve modules as close as possible to the original source code."
			/>
		</div>
	);
}
