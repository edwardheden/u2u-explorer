import AppCard from "@/components/shared/AppCard";
import {Table} from "antd";
import {ColumnsType} from "antd/lib/table";

const columns: ColumnsType<any> = [
  {
    title: 'Sequence #',
  },
  {
    title: 'Time',
  },
  {
    title: 'Message',
  },
];

const TopicDetail = () => {
  return (
    <AppCard
      title={"Messages for Topic 0.0.2552921-ovevc"}
    >
      <Table
        dataSource={[] as any}
        columns={columns}
        scroll={{ x: 992 }}
        pagination={{
          pageSize: 10,
        }}
        // onRow={(param) => ({
        //   onClick: () => router.push(`/topics/${param.topic}`),
        // })}
      />
    </AppCard>
  )
}

export default TopicDetail
