import {Card, Table, Typography} from "antd";
import {ColumnsType} from "antd/lib/table";
import styles from "@/components/app/home/HCSMessages/HCSMessages.module.scss";

interface TokenAllowancesProps {
	spender: string,
	time: string,
	tokenId: string,
	amount: string
}

const columns: ColumnsType<TokenAllowancesProps> = [
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
		title: 'Token ID',
		dataIndex: 'tokenId',
	},
	{
		title: 'Amount',
		dataIndex: 'amount',
	},
];

const data: TokenAllowancesProps[] = [
	{
		spender: "0.0.2182307	",
		time: "6:45:38.9546 AM May 16, 2023, GMT+7",
		tokenId: "0.0.2371395",
		amount: "1.08289"
	}, {
		spender: "0.0.2182307	",
		time: "6:45:38.9546 AM May 16, 2023, GMT+7",
		tokenId: "0.0.2371395",
		amount: "1.08289"
	}, {
		spender: "0.0.2182307	",
		time: "6:45:38.9546 AM May 16, 2023, GMT+7",
		tokenId: "0.0.2371395",
		amount: "1.08289"
	}, {
		spender: "0.0.2182307	",
		time: "6:45:38.9546 AM May 16, 2023, GMT+7",
		tokenId: "0.0.2371395",
		amount: "1.08289"
	}, {
		spender: "0.0.2182307	",
		time: "6:45:38.9546 AM May 16, 2023, GMT+7",
		tokenId: "0.0.2371395",
		amount: "1.08289"
	},
]

export default function TokenAllowances() {
	return (
		<Card bordered={false} style={{marginBottom: 20}}>
			<Typography.Title level={4}>Token Allowances</Typography.Title>
			<Table
				dataSource={data as any}
				columns={columns}
				scroll={{ x: 514 }}
				pagination={false}
			/>
		</Card>
	)
}