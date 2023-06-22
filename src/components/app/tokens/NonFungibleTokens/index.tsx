import {Card, Table} from "antd";
import {ColumnsType} from "antd/lib/table";
import {useRouter} from "next/router";

interface NonFungibleTokensProps {
	token: string,
	symbol: string
}

const columns: ColumnsType<NonFungibleTokensProps> = [
	{
		title: 'Token',
		dataIndex: 'token',
	},
	{
		title: 'Symbol',
		dataIndex: 'symbol',
	},
];

const data: NonFungibleTokensProps[] = [
	{
		token: "0.0.2542802",
		symbol: "PATCHES"
	}, {
		token: "0.0.2542802",
		symbol: "PATCHES"
	}, {
		token: "0.0.2542802",
		symbol: "CMX"
	}, {
		token: "0.0.2542802",
		symbol: "CMX"
	}, {
		token: "0.0.2542802",
		symbol: "DOLLS"
	}
]

export default function NonFungibleTokens() {
	const router = useRouter()
	return (
		<Card title={"Recent Non Fungible Tokens"}>
			<Table
				dataSource={data as any}
				columns={columns}
				pagination={{
					pageSize: 10,
				}}
				onRow={(param) => ({
					onClick: () => router.push(`/tokens/${param.token}`),
				})}
			/>
		</Card>
	)
}