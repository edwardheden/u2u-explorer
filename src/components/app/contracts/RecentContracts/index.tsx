import {Card, Table, Typography} from "antd";
import {ColumnsType} from "antd/lib/table";
import styles from "@/components/app/home/HCSMessages/HCSMessages.module.scss";
import {useRouter} from "next/router";

interface RecentContractsProps {
	contract: string,
	created: string,
	memo: string
}

const columns: ColumnsType<RecentContractsProps> = [
	{
		title: 'Contract',
		dataIndex: 'contract',
		render: (_, param) => {
			return (
				<Typography.Text >
					{param.contract}
				</Typography.Text>
			)
		}
	},
	{
		title: 'Created',
		dataIndex: 'created',
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
	{
		title: 'Memo',
		dataIndex: 'memo',
		render: (_, param) => {
			return (
				<Typography.Text className={"textGray"}>
					{param.memo}
				</Typography.Text>
			)
		}
	},
];

const data: RecentContractsProps[] = [
	{
		contract: "0.0.2552926",
		created: "2:16:25.7139 PM May 16, 2023, GMT+7",
		memo: "None"
	}, {
		contract: "0.0.2552926",
		created: "2:16:25.7139 PM May 16, 2023, GMT+7",
		memo: "None"
	}, {
		contract: "0.0.2552926",
		created: "2:16:25.7139 PM May 16, 2023, GMT+7",
		memo: "None"
	}, {
		contract: "0.0.2552926",
		created: "2:16:25.7139 PM May 16, 2023, GMT+7",
		memo: "None"
	}, {
		contract: "0.0.2552926",
		created: "2:16:25.7139 PM May 16, 2023, GMT+7",
		memo: "None"
	}, {
		contract: "0.0.2552926",
		created: "2:16:25.7139 PM May 16, 2023, GMT+7",
		memo: "None"
	},
]

export default function RecentContracts() {
	const router = useRouter()
	return (
		<Card title={"Recent Contracts"}>
			<Table
				dataSource={data as any}
				columns={columns}
				scroll={{ x: 992 }}
				pagination={{
					pageSize: 10,
				}}
				onRow={(param) => ({
				  onClick: () => router.push(`/contracts/${param.contract}`),
				})}
			/>
		</Card>
	)
}