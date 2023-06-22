import {Card, Table, Tooltip, Typography} from "antd";
import {useRouter} from "next/router";
import {ColumnsType} from "antd/lib/table";
import node from "@/assets/images/node.svg"
import Image from "next/image";
import styles from "./Nodes.module.css"

const columns: ColumnsType<any> = [
  {
    title: '',
    dataIndex: 'node',
    render: (text, _) => (
      <Image width={21} src={node} alt={"node"}/>
    )
  },
  {
    title: 'Node',
    dataIndex: 'node',
    render: (text, _) => (
      <Typography.Text>
        {text}
      </Typography.Text>
    )
  }, {
    title: 'Description',
    dataIndex: 'description',
    render: (text, _) => (
      <Typography.Text>
        <Typography.Text className={"textGray"}>
          Hosted by {""}
        </Typography.Text>
        {text}
      </Typography.Text>
    )
  }, {
    title: 'Stake',
    dataIndex: 'stake',
    align: "right",
    render: (text, _) => (
      <Typography.Text>
        {text}
      </Typography.Text>
    )
  }, {
    title: 'Staked For No Reward',
    dataIndex: 'stakedForNoReward',
    align: "right",
    render: (text, _) => {
      return (
        <Typography.Text>
          {text} U2U
        </Typography.Text>
      )
    }
  },
  {
    title: 'Stake Range',
    dataIndex: 'content',
    align: "center",
    width: "20%",
    render: (text, _) => (
      <Tooltip
        onClick={(e: any)=> e.preventDefault()}
        color={"#fff"}
        title={
          <ul className={styles.hoverPopover}>
            <li>
              <Typography.Text className='bgGreen'></Typography.Text>
              <Typography.Text>Rewarded:</Typography.Text>
              <Typography.Text><b>59.08394</b> U2U</Typography.Text>
            </li>
            <li>
              <Typography.Text className='bgRed'></Typography.Text>
              <Typography.Text>Not Rewarded:</Typography.Text>
              <Typography.Text><b>10.09948</b> U2U</Typography.Text>
            </li>
            <li>
              <Typography.Text></Typography.Text>
              <Typography.Text>Min:</Typography.Text>
              <Typography.Text><b>3.98702</b> U2U</Typography.Text>
            </li>
            <li>
              <Typography.Text></Typography.Text>
              <Typography.Text>Max:</Typography.Text>
              <Typography.Text><b>35.98658</b> U2U</Typography.Text>
            </li>
          </ul>
        }
      >
        <Typography.Text className={styles.groupStakeRange}>
         <Typography.Text style={{width: "20%"}} className="bgGreen"></Typography.Text>
          <Typography.Text style={{width: "35%"}} className="bgRed"></Typography.Text>
          <Typography.Text style={{width: "45%"}}></Typography.Text>
        </Typography.Text>
      </Tooltip>
    )
  },
  {
    title: 'Reward Rate',
    dataIndex: 'rewardRate',
    align: "right",
    render: (text, _) => (
      <Typography.Text>
        {text}%
      </Typography.Text>
    ),
  }
];

const data: any[] = [
  {
    node: 0,
    description: "LG | Seoul, South Korea",
    stake: "1,181,836,768 (4.7%)",
    stakedForNoReward: "589,078,061 ",
    stakeRange: "",
    rewardRate: "6.5",
  },
  {
    node: 0,
    description: "LG | Seoul, South Korea",
    stake: "1,181,836,768 (4.7%)",
    stakedForNoReward: "589,078,061 ",
    stakeRange: "",
    rewardRate: "6.5",
  },
  {
    node: 0,
    description: "LG | Seoul, South Korea",
    stake: "1,181,836,768 (4.7%)",
    stakedForNoReward: "589,078,061 ",
    stakeRange: "",
    rewardRate: "6.5",
  },
  {
    node: 0,
    description: "LG | Seoul, South Korea",
    stake: "1,181,836,768 (4.7%)",
    stakedForNoReward: "589,078,061 ",
    stakeRange: "",
    rewardRate: "6.5",
  },
  {
    node: 0,
    description: "LG | Seoul, South Korea",
    stake: "1,181,836,768 (4.7%)",
    stakedForNoReward: "589,078,061 ",
    stakeRange: "",
    rewardRate: "6.5",
  },

]

const Nodes = () => {
  const router = useRouter()
  return (
    <div style={{marginTop: 22}}>
      <Card title={"Nodes"}>
        <Table
          dataSource={data as any}
          columns={columns}
          scroll={{x: 992}}
          pagination={{
            pageSize: 5,
          }}
          onRow={(param) => ({
            onClick: () => router.push(`/nodes/${123}`),
          })}
        />
      </Card>
    </div>
  )
}

export default Nodes