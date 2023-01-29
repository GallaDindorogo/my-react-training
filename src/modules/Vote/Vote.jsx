import { Component } from 'react';

import VoteVariants from './VoteVariants/VoteVariants';
import VoteResalts from './VoteResalts/VoteResalts';
import VoteBlock from './VoteBlock/VoteBlock';

import styles from './vote.module.scss';

class Vote extends Component {
  state = {
    democrats: 0,
    republicants: 0,
  };

  calcTotal() {
    const { democrats, republicants } = this.state;
    const total = democrats + republicants;
    return total;
  }

  calcPercent(propName) {
    const total = this.calcTotal();
    if (!total) {
      return 0;
    }
    const value = this.state[propName];
    const resalt = ((value / total) * 100).toFixed(2);
    return Number(resalt);
  }

  leaveVote = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  render() {
    const total = this.calcTotal();
    const democrateProcent = this.calcPercent('democrats');
    const republicantsProcent = this.calcPercent('republicants');

    return (
      <div>
        <h3 className={styles.title}>Leave your vote</h3>
        <div className={styles.wrapper}>
          <VoteBlock title="Vote Variants:">
            <VoteVariants leaveVote={this.leaveVote} />
          </VoteBlock>
          <VoteBlock title="Vote resalts:">
            <VoteResalts
              total={total}
              democrateProcent={democrateProcent}
              republicantsProcent={republicantsProcent}
            />
          </VoteBlock>
        </div>
      </div>
    );
  }
}

export default Vote;
