import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles: any = (theme: any) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  }
});

class Home extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="h6">
          HYU-OMS (한양대학교 주문관리시스템)
        </Typography>

        <p>
          현재 HYU-OMS Version 4 의 개발이 진행 중입니다. <br/>
          <a href='https://github.com/HYU-OMS/hyu-oms-v4'>https://github.com/HYU-OMS/hyu-oms-v4</a> 에서 확인하실 수 있습니다.
        </p>

        <p>
          <strong>현재 로그인 불가능합니다.</strong>
        </p>
      </div>
    );
  }
}

const styleAddedApp = withStyles(styles, { withTheme: true })(Home);
export default styleAddedApp;