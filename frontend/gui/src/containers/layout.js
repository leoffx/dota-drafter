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
          <kor-card grid-cols='2'>{this.props.children[0]}</kor-card>
          <kor-card grid-cols='10'>
            <kor-grid columns='9' rows='4'>
              {this.props.children.slice(3)}
              <kor-card label='Core' grid-cols='4' grid-rows='3'>
                MCTS not implemented yet
              </kor-card>
              <kor-card grid-cols='1' grid-rows='2' flat={true}></kor-card>
              <kor-card label='Support' grid-cols='4' grid-rows='3'>
                MCTS not implemented yet
              </kor-card>
            </kor-grid>
          </kor-card>
        </kor-grid>
      </kor-page>
    );
  }
}

export default CustomLayout;
