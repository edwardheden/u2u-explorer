import DashboardLayout from "@/components/layouts/DashboardLayout";
import {NextPageWithLayout} from "@/pages/_app";
import {Col, Row} from "antd";
import LatestBlocks from "@/components/app/home-02/LatestBlocks";
import LatestTransactions from "@/components/app/home-02/LatestTransactions";
import Head from "next/head";


const Home2Page: NextPageWithLayout =() => {
  return (
    <>
      <Head>
        <title>Home | Unicorn Ultra (U2U)</title>
      </Head>
      <Row gutter={[22, 22]}>
        <Col xs={24} lg={12}>
          <LatestBlocks/>
        </Col>
        <Col xs={24} lg={12}>
          <LatestTransactions/>
        </Col>
      </Row>
    </>
  )
}

Home2Page.getLayout = function getLayout(page: any) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}

export default Home2Page