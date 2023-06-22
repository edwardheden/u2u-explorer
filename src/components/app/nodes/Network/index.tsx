import {Card, Col, Row, Typography} from "antd";
import styles from "./Network.module.css";

const Network = () => {
  return (
    <Card title={"Network"} className={styles.image}>
      <div className={styles.network}>
        <Row gutter={[24,24]}>
          <Col xs={24} sm={12} md={12} xl={8}>
            <Typography.Text className={styles.title}>Total Nodes</Typography.Text>
            <Typography.Text className={styles.coin}>28</Typography.Text>
          </Col>
          <Col xs={24} sm={12} md={12} xl={8}>
            <Typography.Text className={styles.title}>Total Staked</Typography.Text>
            <Typography.Text className={styles.coin}>31,984,715,666</Typography.Text>
            <Typography.Text className={styles.u2u}>  U2U</Typography.Text>
          </Col>
          <Col xs={24} sm={12} md={12} xl={8}>
            <Typography.Text className={styles.title}>Last Period Reward</Typography.Text>
            <Typography.Text className={styles.coin}>993,175</Typography.Text>
            <Typography.Text className={styles.u2u}>  U2U</Typography.Text>
          </Col>
          <Col xs={24} sm={12} md={12} xl={8}>
            <Typography.Text className={styles.title}>Last Staked</Typography.Text>
            <Typography.Text className={styles.coin}>2h 24min ago</Typography.Text>
          </Col>
          <Col xs={24} sm={12} md={12} xl={8}>
            <Typography.Text className={styles.title}>Next Staking Period</Typography.Text>
            <Typography.Text className={styles.coin}>in 21h 36min</Typography.Text>
          </Col>
          <Col xs={24} sm={12} md={12} xl={8}>
            <Typography.Text className={styles.title}>Staking Period</Typography.Text>
            <Typography.Text className={styles.coin}>24h</Typography.Text>
          </Col>
        </Row>
      </div>
    </Card>
  )
}

export default Network