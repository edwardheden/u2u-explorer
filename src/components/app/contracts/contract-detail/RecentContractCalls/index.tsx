import {Card, Table, Typography} from "antd";
import {ColumnsType} from "antd/lib/table";
import Image from "next/image";
import redAlert from "@/assets/images/red-alert.svg"

const columns: ColumnsType<any> = [
  {
    title: 'Time',
    dataIndex: 'time',
    render: (time, _) => {
      const regex = /(\d+:\d+:)(\d+\.\d+ [APM]+)(.+)/;
      const [, firstString, secondString, thirdString] = time.match(regex);

      return (
       <>
         <Typography.Text className={'textSize'}>
           {firstString}
           <Typography.Text className={"textSize textGray"}>
             {secondString} {" "}
           </Typography.Text>
           {thirdString}
         <Image style={{marginBottom: 5, marginLeft: 8}} width={15} src={redAlert} alt="red-alert"/>
         </Typography.Text>
       </>
      )
    }

  },
  {
    title: 'From',
    dataIndex: 'from',
    render: (text, _) => (
      <Typography.Text>
        {text} (0.0.214893)
      </Typography.Text>
    )
  },
  {
    title: 'Error Message',
    render: (_, param) => {
      return (
        <Typography.Text className={`${param.error.isError ? "textRed" : "textGray"} `}>
          {param.error.isError ? `${param.error.message}` : "None"}
        </Typography.Text>
      )
    }
  },
  {
    title: 'Transfer Amount',
    dataIndex: 'transferAmount',
    render: (text, _) => (
      <Typography.Text>
        ${text} U2U
      </Typography.Text>
    )
  },
];

const data: any[] = [
  {
    time: "6:45:38.9546 AM - May 16, 2023, GMT+7",
    from: "0x000000000000000000000000000000000020cac3",
    error	: {
      isError: true,
      message: "0x"
    },
    transferAmount: "50.00000000"
  },
  {
    time: "6:45:38.9546 AM - May 16, 2023, GMT+7",
    from: "0x000000000000000000000000000000000020cac3",
    error	: {
      isError: false,
      message: ""
    },
    transferAmount: "50.00000000"
  },
];

const RecentContractCalls = () => {
  return (
    <Card title={"Smart Contract Calls"}>
      <Table
        columns={columns}
        dataSource={data as any}
        scroll={{ x: 514 }}
        pagination={{
          pageSize: 5,
        }}
      />
    </Card>
  )
}
export default RecentContractCalls