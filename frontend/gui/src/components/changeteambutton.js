import React from "react";

class ChangeTeamButton extends React.Component {
  render() {
    if (
      (this.props.buttonLabel === "Radiant") & this.props.radiant ||
      (this.props.buttonLabel === "Dire") & !this.props.radiant
    ) {
      return (
        <kor-button
          label={this.props.buttonLabel}
          style={{ margin: "5px", position: "relative", left: "400px" }}
          disabled
        />
      );
    } else if (this.props.buttonLabel === "Invert") {
      return (
        <kor-button
          onClick={this.props.invertButtonOnPress}
          icon="compare_arrows"
        />
      );
    } else {
      return (
        <kor-button
          onClick={this.props.teamButtonOnPress}
          label={this.props.buttonLabel}
          style={{ margin: "5px", position: "relative", left: "400px" }}
        />
      );
    }
  }
}

export default ChangeTeamButton;
