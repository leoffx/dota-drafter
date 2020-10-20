import React from 'react';

import HeroGrid from './herogrid';
import SearchBar from './searchbar';

export default class HeroSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      screenSize: 'l',
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  render() {
    return (
      <>
        <SearchBar
          input={this.state.input}
          onChange={this.handleChange}
          screenSize={this.state.screenSize}
        />
        <div
          style={{
            margin: 'auto',
            marginTop: '0px',
          }}
        >
          <HeroGrid heroList={this.getHeroList} onPress={this.handlePress} />
        </div>
      </>
    );
  }

  getHeroList = () => {
    let filterdList = [];
    if (this.state.input) {
      this.props.heroesList.forEach((hero) => {
        if (hero.includes(this.state.input)) {
          filterdList.push(hero);
        }
      });
      return filterdList;
    } else {
      return this.props.heroesList;
    }
  };

  handlePress = (event) => {
    this.setState({
      input: '',
    });

    const teamRadiant = event.team;
    if (
      (this.props.radiantHeroes.length >= 5) & teamRadiant ||
      (this.props.direHeroes.length >= 5) & !teamRadiant
    ) {
      return;
    } else {
      const heroName = event.name;
      /*  check if your team is radiant or dire, and 
        if you want to add the hero to your team or 
        enemy team */
      const heroSideRadiant = !(this.state.radiant ? !teamRadiant : teamRadiant)
        ? true
        : false;
      heroSideRadiant
        ? this.props.chooseHero(heroName, 'dire')
        : this.props.chooseHero(heroName, 'radiant');
    }
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  updateDimensions() {
    let screenSize = window.innerWidth < 767 ? 's' : 'l';
    this.setState({ screenSize });
  }
}
