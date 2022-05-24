import type { NextComponentType } from "next";

import styles from "./AppLoader.module.scss"

const AppLoader: NextComponentType = () => {
	return (
		<div>
			<div className={styles.loadingio__spinner}>
				<div className={styles.ldio}>
					<div>
						<div>
							<div>
							</div>
							<div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AppLoader