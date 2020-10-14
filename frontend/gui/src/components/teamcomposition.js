import React from "react";

function getImageLink(hero_name) {
  return `http://cdn.dota2.com/apps/dota2/images/heroes/${hero_name}_lg.png`;
}

class TeamComposition extends React.Component {
  render() {
    return this.renderTeam();
  }

  renderTeam() {
    return (
      <kor-card
        grid-cols="4"
        grid-rows="2"
        label={
          this.props.radiant & this.props.radiantCard ||
          !this.props.radiant & !this.props.radiantCard
            ? "Team"
            : "Enemy"
        }
        flex-direction="row"
        style={{
          backgroundColor:
            this.props.radiant & this.props.radiantCard ||
            !this.props.radiant & !this.props.radiantCard
              ? "rgba(0,200,0,.25)"
              : "rgba(255,0,0,.25)"
        }}
      >
        <div>
          {this.props.heroList
            ? this.props.heroList.map(hero => {
                return (
                  <img
                    src={getImageLink(hero)}
                    key={hero}
                    alt={hero}
                    style={{
                      maxWidth: "82px",
                      margin: "2px"
                    }}
                  />
                );
              })
            : ""}
        </div>
      </kor-card>
    );
  }
}

export default TeamComposition;
