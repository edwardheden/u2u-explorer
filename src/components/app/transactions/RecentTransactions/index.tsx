import {Card, Select, Table, Tag, Typography} from "antd";
import {TransactionTypes} from "@/configs/apps.config";
import {ColumnsType} from "antd/lib/table";
import {useRouter} from "next/router";

interface RecentTransactionsProps {
	id: string,
	type: string,
	content: string,
	time: string
}

const columns: ColumnsType<RecentTransactionsProps> = [
	{
		title: 'ID',
		dataIndex: 'id',
		render: (text, _) => (
			<Typography.Text>
				{text}
			</Typography.Text>
		)
	}, {
		title: 'Type',
		dataIndex: 'type',
		render: (text, _) => (
			<Tag className={"textSize"} color={"var(--green)"} >
				{text}
			</Tag>
		)
	}, {
		title: 'Content',
		dataIndex: 'content',
		render: (text, _) => (
			<Typography.Text>
				Contract ID: <Typography.Text className={"textGreen"}>{text}</Typography.Text>
			</Typography.Text>
		)
	}, {
		title: 'Time',
		dataIndex: 'time',
		render: (time, _) => {
			const regex = /(\d+:\d+:)(\d+\.\d+ [APM]+)(.+)/;
			const [, firstString, secondString, thirdString] = time.match(regex);
			
			return (
				<Typography.Text className={"textSize"}>
					{firstString}
					<Typography.Text className={"textGray textSize"}>
						{secondString} {" "}
					</Typography.Text>
					{thirdString}
				</Typography.Text>
			)
		}
	},
];

const data: RecentTransactionsProps[] = [
	{
		id: "0.0.1425322@1684225894.452026639",
		type: "Crypto create account",
		content: "0.0.358",
		time: "3:31:50.3813 PM May 16, 2023, GMT+7"
	}, {
		id: "0.0.1425322@1684225894.452026639",
		type: "Crypto create account",
		content: "0.0.358",
		time: "3:31:50.3813 PM May 16, 2023, GMT+7"
	}, {
		id: "0.0.1425322@1684225894.452026639",
		type: "Crypto create account",
		content: "0.0.358",
		time: "3:31:50.3813 PM May 16, 2023, GMT+7"
	}, {
		id: "0.0.1425322@1684225894.452026639",
		type: "Crypto create account",
		content: "0.0.358",
		time: "3:31:50.3813 PM May 16, 2023, GMT+7"
	}, {
		id: "0.0.1425322@1684225894.452026639",
		type: "Crypto create account",
		content: "0.0.358",
		time: "3:31:50.3813 PM May 16, 2023, GMT+7"
	}, {
		id: "0.0.1425322@1684225894.452026639",
		type: "Crypto create account",
		content: "0.0.358",
		time: "3:31:50.3813 PM May 16, 2023, GMT+7"
	}, {
		id: "0.0.1425322@1684225894.452026639",
		type: "Crypto create account",
		content: "0.0.358",
		time: "3:31:50.3813 PM May 16, 2023, GMT+7"
	},
]

export default function RecentTransactions() {
	const router = useRouter()

	return (
		<Card title={"Recent Transactions"} extra={
			<Select defaultValue={"TYPES: ALL" as any} style={{width: 280}}>
				{
					TransactionTypes.map((transaction, index) => (
						<Select.Option key={index} value={transaction.value}>
							{transaction.name}
						</Select.Option>
					))
				}
			</Select>
		}>
			<Table
				dataSource={data as any}
				columns={columns}
				scroll={{ x: 992 }}
				pagination={{
					pageSize: 10,
				}}
				onRow={(param) => ({
					onClick: () => router.push(`/transactions/${param.id}`),
				})}
			/>
		</Card>
	)
}