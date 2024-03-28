import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {
	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} src="https://github.com/lucasmagnago.png" />
			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Lucas Magnago de Oliveira</strong>
							<time
								title="28 de março às 14:14h"
								dateTime="2024-03-28 14:14:00"
							>
								Cerca de 1h atrás
							</time>
						</div>
						<button title="Deleter comentário">
							<Trash size={24} />
						</button>
					</header>

					<p>Muito bom Devon, parabéns!! 👏👏</p>
				</div>
				<footer>
					<button>
						<ThumbsUp size={20} />
						Aplaudir <span>28</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
