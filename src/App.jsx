import { Post } from "./Post.jsx";
import { Header } from "./components/Header.jsx";
import "./global.css";

export function App() {
	return (
		<div>
			<Header />
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
