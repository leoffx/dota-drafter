import React from 'react';

import CustomLayout from './containers/layout';
import TeamComposition from './components/teamcomposition';
import ChangeTeamButton from './components/changeteambutton';
import HeroSelection from './components/heroselection';
import Mctslogic from './components/mctslogic';

import heroes from './heroes.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroesList: heroes,
      allHeroes: heroes,
      radiantHeroes: [],
      direHeroes: [],
      radiant: true,
    };
  }

  render() {
    return (
      <CustomLayout>
        <HeroSelection
          radiantHeroes={this.state.radiantHeroes}
          direHeroes={this.state.direHeroes}
          chooseHero={this.pickHero}
          heroesList={this.state.heroesList}
        />

        <ChangeTeamButton
          buttonLabel='Radiant'
          radiant={this.state.radiant}
          teamButtonOnPress={this.invertTeamAndHeroes}
        />
        <ChangeTeamButton
          buttonLabel='Dire'
          radiant={this.state.radiant}
          teamButtonOnPress={this.invertTeamAndHeroes}
        />

        <TeamComposition
          radiantCard={true}
          heroList={this.state.radiantHeroes}
          radiant={this.state.radiant}
          unpickHero={this.unpickHero}
        />
        <ChangeTeamButton
          buttonLabel='Invert'
          icon='compare_arrows'
          invertButtonOnPress={this.invertTeam}
        />

        <TeamComposition
          radiantCard={false}
          heroList={this.state.direHeroes}
          radiant={this.state.radiant}
          unpickHero={this.unpickHero}
        />
        <Mctslogic heroesList={this.state.heroesList} />
      </CustomLayout>
    );
  }

  invertTeam = () => {
    this.setState((state) => {
      const temp = state.radiantHeroes;
      return {
        radiantHeroes: state.direHeroes,
        direHeroes: temp,
      };
    });
  };

  invertTeamAndHeroes = () => {
    this.setState((state) => {
      const temp = state.radiantHeroes;
      return {
        radiant: !state.radiant,
        radiantHeroes: state.direHeroes,
        direHeroes: temp,
      };
    });
  };

  calculateDisplay = () => {
    this.setState((state) => {
      var heroesList = [...this.state.allHeroes];
      var pickedHeroes = Array.prototype.concat(
        state.radiantHeroes,
        state.direHeroes
      );

      for (let hero of pickedHeroes) {
        heroesList = heroesList.filter((f) => f !== hero);
      }
      return {
        heroesList: heroesList,
      };
    });
  };

  pickHero = (heroName, team) => {
    this.setState((state) => {
      if (team === 'radiant') {
        return {
          radiantHeroes: [...state.radiantHeroes, heroName],
        };
      } else {
        return {
          direHeroes: [...state.direHeroes, heroName],
        };
      }
    });
    this.calculateDisplay();
  };

  unpickHero = (heroName, radiantCard) => {
    this.setState((state) => {
      if (radiantCard) {
        return {
          radiantHeroes: state.radiantHeroes.filter((f) => f !== heroName),
        };
      } else {
        return {
          direHeroes: state.direHeroes.filter((f) => f !== heroName),
        };
      }
    });
    this.calculateDisplay();
  };
}

export default App;
