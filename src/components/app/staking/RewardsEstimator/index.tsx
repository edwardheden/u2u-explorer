
import {Card, Col, Input, Row, Select, Typography} from "antd";
import styles from "./RewardsEstimator.module.css"
import {StakeTypes} from "@/configs/apps.config";

const RewardsEstimator = () => {
  return (
    <div className={styles.wrapper}>
      <Card title={"Rewards Estimator"}>
        <div className={styles.stake}>
            <Row gutter={[24, 24]}>
              <Col xs={24} lg={12}>
                <div className={styles.stakeContent}>
                  <Typography.Text>Choose a node to stake to</Typography.Text>
                  <Select defaultValue={0 as any} >
                    {
                      StakeTypes.map((transaction, index) => (
                        <Select.Option key={index} value={transaction.value}>
                          {transaction.name}
                        </Select.Option>
                      ))
                    }
                  </Select>
                </div>
              </Col>
              <Col xs={24} lg={12}>
                <div className={styles.stakeContent}>
                  <Typography.Text>Enter the number of bars you want to stake</Typography.Text>
                  <Input placeholder={"100"}/>
                </div>
              </Col>
            </Row>
        </div>
        <div className={styles.inforReward}>
            <Row gutter={[24,24]}>
              <Col xs={24} sm={12} xl={6}>
                <Typography.Text className={styles.title}>Current 24h Period Reward</Typography.Text>
                <Typography.Text className={styles.coin}>12,988.0832</Typography.Text>
                <Typography.Text className={styles.u2u}>  U2U</Typography.Text>
              </Col>
              <Col xs={24} sm={12} xl={6}>
                <Typography.Text className={styles.title}>Approx Monthly Reward</Typography.Text>
                <Typography.Text className={styles.coin}>39.0823</Typography.Text>
                <Typography.Text className={styles.u2u}>  U2U</Typography.Text>
              </Col>
              <Col xs={24} sm={12} xl={6}>
                <Typography.Text className={styles.title}>Current 24h Period Reward</Typography.Text>
                <Typography.Text className={styles.coin}>23,939.0784</Typography.Text>
                <Typography.Text className={styles.u2u}>  U2U</Typography.Text>
              </Col>
              <Col xs={24} sm={12} xl={6}>
                <Typography.Text className={styles.title}>Approx Yearly Reward Rate</Typography.Text>
                <Typography.Text className={styles.coin}>23.47%</Typography.Text>
              </Col>
            </Row>
        </div>
        <Typography.Text className={styles.description}>
          These numbers are not individualized and only for illustrative purposes. Please see the staking documentation for factors that can influence these numbers.
        </Typography.Text>
      </Card>
    </div>
  )
}

export default RewardsEstimator