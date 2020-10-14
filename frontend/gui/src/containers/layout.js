import React from "react";

class CustomLayout extends React.Component {
  render() {
    return (
      <kor-page flex-direction="column">
        <kor-pane slot="left" style={{ width: "200px" }} />
        <kor-app-bar slot="top"></kor-app-bar>
        <kor-nav-bar flex-direction="column" slot="top">
          {this.props.children[1]}
          {this.props.children[2]}
        </kor-nav-bar>

        <kor-pane slot="left" style={{ width: "200px", paddingTop: "0px" }}>
          <kor-tabs slot="header" style={{ marginTop: "0px" }}>
            {this.props.children[0]}
          </kor-tabs>
          {this.props.children[3]}
        </kor-pane>

        <kor-grid rows="5">
          {this.props.children.slice(4, 7)}
          <kor-card grid-rows="4" grid-cols="9" flex-direction="column">
            <kor-grid>
              <kor-card grid-cols="12">aaaa</kor-card>
              <kor-card label="Core" grid-cols="5" grid-rows="2">
                aaaa
              </kor-card>
              <kor-card grid-cols="2" grid-rows="2" flat={true}>
                bbbbb
              </kor-card>
              <kor-card label="Support" grid-cols="5" grid-rows="2">
                ccccccccc
              </kor-card>
            </kor-grid>
          </kor-card>
        </kor-grid>
        <kor-pane slot="right" flat={true} style={{ width: "200px" }} />
      </kor-page>
    );
  }
}

export default CustomLayout;
