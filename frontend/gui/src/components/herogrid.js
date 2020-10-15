import React from "react";

import ImageMapper from "react-image-mapper";

function getImageLink(hero_name) {
  return `https://cdn.dota2.com/apps/dota2/images/heroes/${hero_name}_lg.png`;
}

function returnMap(hero, i) {
  let MAP = {
    name: hero,
    areas: [
      {
        name: hero,
        index: i,
        team: false,
        shape: "rect",
        coords: [0, 0, 57, 65],
        fillColor: "rgba(255, 0, 0, 0.3)"
      },
      {
        name: hero,
        index: i,
        team: true,
        shape: "rect",
        coords: [57, 0, 115, 65],
        fillColor: "rgba(0, 220, 0, 0.3)"
      }
    ]
  };
  return MAP;
}

class HeroGrid extends React.Component {
  render() {
    return this.renderHeroes();
  }

  renderHeroes() {
    return this.props.heroList().map((hero, i) => {
      return (
        <ImageMapper
          src={getImageLink(hero)}
          map={returnMap(hero, i)}
          onClick={area => this.props.onPress(area)}
          key={i}
          width={115}
          style={{ margin: "10px" }}
        />
      );
    });
  }
}

export default HeroGrid;
