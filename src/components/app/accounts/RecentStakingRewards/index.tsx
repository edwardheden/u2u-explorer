import {Card, Table, Typography} from "antd";
import {ColumnsType} from "antd/lib/table";
import styles from "@/components/app/home/HCSMessages/HCSMessages.module.scss";

interface RecentStakingRewardsProps {
	time: string,
	amountRewarded: string
}

const columns: ColumnsType<RecentStakingRewardsProps> = [
	{
		title: 'Time',
		dataIndex: 'time',
		align: "left",
		render: (time, _) => {
			const regex = /(\d+:\d+:)(\d+\.\d+ [APM]+)(.+)/;
			const [, firstString, secondString, thirdString] = time.match(regex);
			
			return (
				<Typography.Text className={styles.text}>
					{firstString}
					<Typography.Text className={styles.subText}>
						{secondString} {" "}
					</Typography.Text>
					{thirdString}
				</Typography.Text>
			)
		}
	},
	{
		title: 'Amount Rewarded',
		dataIndex: 'amountRewarded',
		align: "right"
	},
];

const data: RecentStakingRewardsProps [] = [
	{
		time: "2:16:25.7139 PM May 16, 2023, GMT+7",
		amountRewarded: "1.98308"
	}, {
		time: "2:16:25.7139 PM May 16, 2023, GMT+7",
		amountRewarded: "1.98308"
	}, {
		time: "2:16:25.7139 PM May 16, 2023, GMT+7",
		amountRewarded: "1.98308"
	}, {
		time: "2:16:25.7139 PM May 16, 2023, GMT+7",
		amountRewarded: "1.98308"
	}, {
		time: "2:16:25.7139 PM May 16, 2023, GMT+7",
		amountRewarded: "1.98308"
	},
]

export default function RecentStakingRewards() {
	return (
		<Card title={"Recent Staking Rewards"}>
			<Table
				dataSource={data}
				columns={columns}
				scroll={{ x: 992 }}
				pagination={{
					pageSize: 10,
				}}
			/>
		</Card>
	)
}