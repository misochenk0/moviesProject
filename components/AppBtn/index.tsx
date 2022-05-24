import {FunctionComponent} from "react"

type AppBtnProps = {
	btnTitle: string,
	inputName: string,
	changeFilter: (filter: string, status: boolean) => void
}

import styles from "./AppBtn.module.scss"

const AppBtn:FunctionComponent<AppBtnProps> = ({btnTitle, inputName, changeFilter}) => {

	return (
		<label className={styles.btn}>
			<input type="checkbox" name={inputName} onChange={(event) => {
				changeFilter(btnTitle, event.target.checked)
			}}/>
			<span>{btnTitle}</span>
		</label>
	)
}

export default AppBtn