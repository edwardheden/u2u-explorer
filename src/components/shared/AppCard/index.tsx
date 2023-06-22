import React, {PropsWithChildren} from 'react';
import styles from './AppCard.module.css';
import { Typography} from "antd";
import Image from "next/image";
import node from "@/assets/images/node.svg"

interface AppCardProps extends PropsWithChildren {
	title: string,
	state?: any,
	subtitle?: any,
	subNode?: any,
	footer?: any
}

export default function AppCard({title, state, subtitle, subNode, children, footer}: AppCardProps) {
	return (
		<div className={`${styles.card} ${styles.lastestCard}`}>
			<div className={`${styles.cardHeader}`}>
			<div style={{display: "flex", flexDirection: "column"}}>
				<div style={{display: "flex", alignItems: "center", flexWrap: "wrap"}}>
					<Typography.Text className={styles.cardTitle}>{title}</Typography.Text>
					{state && <Typography.Text className={styles.state}>{state}</Typography.Text>}
				</div>

				{subNode &&
					<div style={{display: "flex", gap: 12, marginTop: 8}}>
						<Image width={24} src={node} alt={"node"}/>
						<Typography.Text style={{fontSize: 16}}>{subNode}</Typography.Text>
					</div>}

				{ subtitle && <ul className={styles.subTitle}>
					<li>
						<Typography.Text>{subtitle.name} ID: {""}
							<Typography.Text style={{fontWeight: "bold"}}>{subtitle.id}</Typography.Text>
							<Typography.Text>-{subtitle.subKey}</Typography.Text>
						</Typography.Text>
					</li>
					<li>
						<Typography.Text>
							EVM Address: <Typography.Text style={{color: "var(--green)"}}>{subtitle.evmAddress}</Typography.Text>
						</Typography.Text>
						<Typography.Text className={styles.copy}>Copy</Typography.Text>
					</li>
				</ul>}
			</div>
			</div>
			<div className={styles.cardBody}>
				{children}
			</div>
			<div className={styles.cardBody}>
				{footer}
			</div>
		</div>
	);
};
