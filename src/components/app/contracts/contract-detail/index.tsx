import AppCard from "@/components/shared/AppCard";
import {Col, Row, Typography} from "antd";
import {useWindowSize} from "@/hooks/useWindowSize";

const ContractDetail = () => {
  const {width} = useWindowSize()
  const isDesktop = width < 768

  return (
    <AppCard
      title={"Contract"}
      subtitle={{
        id: "0.0.2441803",
        name: "Contract",
        subKey: "mzhhw",
        evmAddress: "0x000000000000000000000000000000000025425b"
      }}
    >
      <Row gutter={24}>
        <Col xs={24} lg={12} style={{borderRight: isDesktop ? "" : "1px solid var(--border)"}}>
          <table className={"customTable"}>
            <tbody>
            <tr>
              <td><Typography.Text>Balance</Typography.Text></td>
              <td><Typography.Text>23.876843 U2U <Typography.Text style={{fontSize: 11, color: "var(--green)"}}>$2,398.0984</Typography.Text></Typography.Text></td>
            </tr>
            <tr>
              <td><Typography>Admin Key</Typography></td>
              <td><Typography className={"textGray"}>None</Typography></td>
            </tr>
            <tr>
              <td><Typography>Memo</Typography></td>
              <td><Typography className={"textGray"}>None</Typography></td>
            </tr>
            <tr>
              <td><Typography>Create Transaction</Typography></td>
              <td><Typography >0.0.2149059@1684150665.521143631</Typography></td>
            </tr>
            <tr>
              <td><Typography>Expires at</Typography></td>
              <td><Typography >2:37:<Typography.Text className={"textGray"}>34.0867 AM </Typography.Text> - Aug 13, 2023, GMT+7</Typography></td>
            </tr>
            <tr>
              <td><Typography>Auto Renew Period</Typography></td>
              <td><Typography><b>90</b> days</Typography></td>
            </tr>
            <tr>
              <td><Typography>Auto Renew Account</Typography></td>
              <td><Typography className={"textGray"}>None</Typography></td>
            </tr>
            <tr>
              <td><Typography>Max. Auto. Association</Typography></td>
              <td><Typography>0</Typography></td>
            </tr>
            <tr>
              <td><Typography>Runtime Bytecode</Typography></td>
              <td><Typography className={"textGray"}>None</Typography></td>
            </tr>

            </tbody>
          </table>
        </Col>
        <Col xs={24} lg={12} style={{borderTop: isDesktop ? "1px solid var(--border)": ""}}>
          <table className={"customTable"}>
            <tbody>
            <tr>
              <td><Typography>Obtainer</Typography></td>
              <td><Typography className={"textGray"}>None</Typography></td>
            </tr>
            <tr>
              <td><Typography>Proxy Account</Typography></td>
              <td><Typography className={"textGray"}>None</Typography></td>
            </tr>
            <tr>
              <td><Typography>Valid from</Typography></td>
              <td><Typography >2:37:<Typography.Text className={"textGray"}>34.0867 AM </Typography.Text> - Aug 13, 2023, GMT+7</Typography></td>
            </tr>
            <tr>
              <td><Typography>Valid until</Typography></td>
              <td><Typography >2:37:<Typography.Text className={"textGray"}>34.0867 AM </Typography.Text> - Aug 13, 2023, GMT+7</Typography></td>
            </tr>
            <tr>
              <td><Typography>File</Typography></td>
              <td><Typography>  0.0.2441802</Typography></td>
            </tr>
            </tbody>
          </table>
        </Col>
      </Row>

    </AppCard>
  )
}

export default ContractDetail