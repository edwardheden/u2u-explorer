import {Card, Table, Typography} from "antd";
import {ColumnsType} from "antd/lib/table";
import styles from "@/components/app/home/HCSMessages/HCSMessages.module.scss";

interface U2UAllowancesProps {
	spender: string,
	time: string,
	amount: string
}

const columns: ColumnsType<U2UAllowancesProps> = [
	{
		title: 'Spender',
		dataIndex: 'spender',
	},
	{
		title: 'Time',
		dataIndex: 'time',
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
		title: 'Amount',
		dataIndex: 'amount',
	},
];

const data: U2UAllowancesProps[] = [
	{
		spender: "0.0.2182307	",
		time: "6:45:38.9546 AM May 16, 2023, GMT+7",
		amount: "1.08289"
	}, {
		spender: "0.0.2182307	",
		time: "6:45:38.9546 AM May 16, 2023, GMT+7",
		amount: "1.08289"
	}, {
		spender: "0.0.2182307	",
		time: "6:45:38.9546 AM May 16, 2023, GMT+7",
		amount: "1.08289"
	}, {
		spender: "0.0.2182307	",
		time: "6:45:38.9546 AM May 16, 2023, GMT+7",
		amount: "1.08289"
	}, {
		spender: "0.0.2182307	",
		time: "6:45:38.9546 AM May 16, 2023, GMT+7",
		amount: "1.08289"
	},
]

export default function U2UAllowances() {
	return (
		<Card bordered={false} style={{marginBottom: 20}}>
			<Typography.Title level={4}>U2U Allowances</Typography.Title>
			<Table
				dataSource={data}
				columns={columns}
				pagination={false}
				scroll={{ x: 514 }}
			/>
		</Card>
	)
}