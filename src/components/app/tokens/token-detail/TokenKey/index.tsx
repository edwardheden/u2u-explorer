import AppCard from "@/components/shared/AppCard";
import {Col, Row, Typography} from "antd";
import {useWindowSize} from "@/hooks/useWindowSize";

const TokenKey = () => {
  const {width} = useWindowSize()
  const isDesktop = width < 768
  return (
    <AppCard
      title={"Fungible Token"}
      subtitle={{
        id: "0.0.2371395",
        name: "Token",
        subKey: "xosbo",
        evmAddress: "0x0000000000000000000000000000000000242f43"
      }}
    >
      <Row gutter={24} >
        <Col xs={24} md={12} style={{borderRight: isDesktop ? "" : "1px solid var(--border)"}}>
          <table className={"customTable"}>
            <tbody>
            <tr>
              <td><Typography.Text>Admin Key</Typography.Text></td>
              <td>
                <Typography.Text style={{display: "block", fontFamily: "var(--font_code)"}}>a718 9c36 c951 213a a9a1 c9b0 8c23 78a1 ad34 4d85 6125 783a a220 3243 18c5 bcfb</Typography.Text>
                <Typography.Text className={"textGreen"}>ED25519</Typography.Text>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>KYC Key</Typography.Text></td>
              <td>
                <Typography.Text style={{display: "block", fontFamily: "var(--font_code)"}}>a718 9c36 c951 213a a9a1 c9b0 8c23 78a1 ad34 4d85 6125 783a a220 3243 18c5 bcfb</Typography.Text>
                <Typography.Text className={"textGreen"}>ED25519</Typography.Text>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Freeze Key</Typography.Text></td>
              <td>
                <Typography.Text style={{display: "block", fontFamily: "var(--font_code)"}}>a718 9c36 c951 213a a9a1 c9b0 8c23 78a1 ad34 4d85 6125 783a a220 3243 18c5 bcfb</Typography.Text>
                <Typography.Text className={"textGreen"}>ED25519</Typography.Text>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Wipe Key</Typography.Text></td>
              <td>
                <Typography.Text style={{display: "block", fontFamily: "var(--font_code)"}}>a718 9c36 c951 213a a9a1 c9b0 8c23 78a1 ad34 4d85 6125 783a a220 3243 18c5 bcfb</Typography.Text>
                <Typography.Text className={"textGreen"}>ED25519</Typography.Text>
              </td>
            </tr>
            </tbody>
          </table>
        </Col>
        <Col xs={24} md={12} style={{borderTop: isDesktop ? "1px solid var(--border)": ""}}>
          <table className={"customTable"}>
            <tbody>
            <tr>
              <td><Typography.Text>Supply Key</Typography.Text></td>
              <td>
                <Typography.Text style={{display: "block", fontFamily: "var(--font_code)"}}>a718 9c36 c951 213a a9a1 c9b0 8c23 78a1 ad34 4d85 6125 783a a220 3243 18c5 bcfb</Typography.Text>
                <Typography.Text className={"textGreen"}>ED25519</Typography.Text>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Fee Schedule Key</Typography.Text></td>
              <td>
                <Typography.Text style={{display: "block"}}>None</Typography.Text>
                <Typography.Text className={"textGray"}>ED25519</Typography.Text>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Pause  Key</Typography.Text></td>
              <td>
                <Typography.Text style={{display: "block"}}>None</Typography.Text>
                <Typography.Text className={"textGray"}>ED25519</Typography.Text>
              </td>
            </tr>
            </tbody>
          </table>
        </Col>
      </Row>

    </AppCard>
  )
}

export default TokenKey