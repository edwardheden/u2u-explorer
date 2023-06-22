import DashboardLayout from "@/components/layouts/DashboardLayout";
import {NextPageWithLayout} from "@/pages/_app";
import Network from "@/components/app/nodes/Network";
import Nodes from "@/components/app/nodes/Nodes";
import Head from "next/head";

const NodesPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Nodes | Unicorn Ultra (U2U)</title>
      </Head>
      <Network/>
      <Nodes/>
    </>
  )
}

NodesPage.getLayout = function getLayout(page: any) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}

export default NodesPage