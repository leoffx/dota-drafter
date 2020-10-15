import React from 'react';

class CustomLayout extends React.Component {
  render() {
    return (
      <kor-page flex-direction='column'>
        <kor-app-bar slot='top'></kor-app-bar>
        <kor-nav-bar flex-direction='column' slot='top'>
          {this.props.children[1]}
          {this.props.children[2]}
        </kor-nav-bar>
        <kor-grid style={{ margin: 'auto', maxWidth: '1200px' }}>
          <kor-card grid-cols='2' style={{ minWidth: '140px' }}>
            <kor-tabs slot='header' style={{ marginTop: '0px' }}>
              {this.props.children[0]}
            </kor-tabs>
            {this.props.children[3]}
          </kor-card>
          <kor-card grid-cols='10'>
            <kor-grid columns='9' rows='4'>
              {this.props.children.slice(4, 7)}
              <kor-card label='Core' grid-cols='4' grid-rows='3'>
                Core suggestions
              </kor-card>
              <kor-card grid-cols='1' grid-rows='2' flat={true}></kor-card>
              <kor-card label='Support' grid-cols='4' grid-rows='3'>
                Support suggestions
              </kor-card>
            </kor-grid>
          </kor-card>
        </kor-grid>
      </kor-page>
    );
  }
}

export default CustomLayout;
