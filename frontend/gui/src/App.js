import React from "react";

import CustomLayout from "./containers/layout";
import HeroGrid from "./components/herogrid";
import SearchBar from "./components/searchbar";
import TeamComposition from "./components/teamcomposition";
import ChangeTeamButton from "./components/changeteambutton";

import heroes from "./heroes.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroesList: heroes,
      input: "",
      radiantHeroes: [],
      direHeroes: [],
      radiant: true
    };
  }

  render() {
    return (
      <CustomLayout>
        <SearchBar input={this.state.input} onChange={this.handleChange} />
        <ChangeTeamButton
          buttonLabel="Radiant"
          radiant={this.state.radiant}
          teamButtonOnPress={this.invertTeamAndHeroes}
        />
        <ChangeTeamButton
          buttonLabel="Dire"
          radiant={this.state.radiant}
          teamButtonOnPress={this.invertTeamAndHeroes}
        />
        <center>
          <HeroGrid heroList={this.getHeroList} onPress={this.handlePress} />
        </center>

        <TeamComposition
          radiantCard={true}
          heroList={this.state.radiantHeroes}
          radiant={this.state.radiant}
        />
        <ChangeTeamButton
          buttonLabel="Invert"
          icon="compare_arrows"
          invertButtonOnPress={this.invertTeam}
        />

        <TeamComposition
          radiantCard={false}
          heroList={this.state.direHeroes}
          radiant={this.state.radiant}
        />
      </CustomLayout>
    );
  }

  invertTeam = () => {
    this.setState(state => {
      const temp = state.radiantHeroes;
      return {
        radiantHeroes: state.direHeroes,
        direHeroes: temp
      };
    });
  };

  invertTeamAndHeroes = () => {
    this.setState(state => {
      const temp = state.radiantHeroes;
      return {
        radiant: !state.radiant,
        radiantHeroes: state.direHeroes,
        direHeroes: temp
      };
    });
  };

  handlePress = event => {
    const teamRadiant = event.team;
    if (
      (this.state.radiantHeroes.length >= 5) & teamRadiant ||
      (this.state.direHeroes.length >= 5) & !teamRadiant
    ) {
      return;
    } else {
      const heroName = event.name;
      const index = this.state.heroesList.indexOf(heroName);
      this.setState(state => {
        /*  check if your team is radiant or dire, and 
        if you want to add the hero to your team or 
        enemy team */
        const heroSideRadiant = !(this.state.radiant
          ? !teamRadiant
          : teamRadiant)
          ? true
          : false;
        const teamHeroes = heroSideRadiant
          ? [...this.state.radiantHeroes, heroName]
          : [...this.state.direHeroes, heroName];
        const heroesList = [...state.heroesList];
        heroesList.splice(index, 1);
        return {
          heroesList: heroesList,
          [heroSideRadiant ? "radiantHeroes" : "direHeroes"]: teamHeroes
        };
      });
    }
  };

  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  getHeroList = () => {
    let hero_list = [];
    if (this.state.input) {
      this.state.heroesList.forEach(hero => {
        if (hero.includes(this.state.input)) {
          hero_list.push(hero);
        }
      });
      return hero_list;
    } else {
      return this.state.heroesList;
    }
  };
}

export default App;
