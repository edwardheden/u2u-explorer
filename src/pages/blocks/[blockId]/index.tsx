import DashboardLayout from "@/components/layouts/DashboardLayout";
import {NextPageWithLayout} from "@/pages/_app";
import Head from "next/head";
import BlockDetail from "@/components/app/blocks/blockDetail";

const BlockDetailPage: NextPageWithLayout =() => {
  return(
    <>
      <Head>
        <title>Detail Blocks | Unicorn Ultra (U2U)</title>
      </Head>
      <BlockDetail/>
    </>
  )
}

BlockDetailPage.getLayout = function getLayout(page: any) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}

export default BlockDetailPage
