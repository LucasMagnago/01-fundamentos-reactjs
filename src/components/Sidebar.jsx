import styles from "./Sidebar.module.css";

export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img
				className={styles.cover}
				src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			/>
			<div className={styles.profile}>
				<img
					className={styles.avatar}
					src="https://avatars.githubusercontent.com/u/82664638?v=4"
				/>
				<strong>Lucas Magnago de Oliveira</strong>
				<span>Web Developer</span>
			</div>
			<footer>
				<a href="#">Editar o seu perfil</a>
			</footer>
		</aside>
	);
}
