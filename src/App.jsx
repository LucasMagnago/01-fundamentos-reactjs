import { Post } from "./Post.jsx";
import { Header } from "./components/Header.jsx";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar.jsx";

export function App() {
	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					<Post
						author="Lucas Magnago"
						content="because we assume a modern browser is used and it supports all of the latest JavaScript and CSS features. This prevents syntax lowering, letting Vite serve modules as close as possible to the original source code."
					/>
					<Post
						author="Matheus Magnago"
						content="because we assume a modern browser is used and it supports all of the latest JavaScript and CSS features. This prevents syntax lowering, letting Vite serve modules as close as possible to the original source code."
					/>
				</main>
			</div>
		</div>
	);
}
