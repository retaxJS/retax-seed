import React, { PropTypes, Component } from 'react';
import Helmet from 'react-helmet';
import { Card } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import pureRender from 'pure-render-decorator';
import CardsList from 'components/CardsList';
import WelcomeCard from 'components/WelcomeCard';

import styles from './styles';

@pureRender
export default class WrapperUserIndexPage extends Component {
  static propTypes = {
    onToggleLeftNav: PropTypes.func,
  };

  render() {
    const { onToggleLeftNav } = this.props;

    return (
      <CardsList flex>
        <Helmet title="User Home" />

        <WelcomeCard
          container={<Card style={styles.welcomeCard} />}
          title="Welcome on RetaxSeed"
        >
          <div>
            Enjoy.
          </div>
          <FlatButton label="Get Started" primary onTouchTap={onToggleLeftNav} />
        </WelcomeCard>
      </CardsList>
    );
  }
}
