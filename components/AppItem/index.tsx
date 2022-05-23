import { FunctionComponent } from 'react';

import styles from "./AppItem.module.scss"
type ItemProps = {
	item: {
		id: string,
		image: string,
		fullTitle: string,
		title: string,
		rank?: string,
		rankUpDown?:string
	}
}


const AppItem:FunctionComponent<ItemProps> = ({item}) => {
	return (
		<a href="" className={styles.item}>
			<img  className={styles.item__img} src={item.image} alt={item.fullTitle} />
			<span className={styles.item__rank}>{item.rank}
				{item.rankUpDown ? (
					<span className={styles.item__change} style={item.rankUpDown.indexOf("-") >= 0 ? {color: "red"} : item.rankUpDown.indexOf("+") >= 0 ? {color: "#90EE90"} : {color: "gray"}}>
						{item.rankUpDown}
					</span>
					
					) : null}
			
			</span>
			<div>
				{item.title}
			</div>
		</a>
	)
}

export default AppItem

