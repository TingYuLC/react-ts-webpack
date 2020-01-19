import * as React from 'react';
import './index.less';

interface CarouseProps {
  index?: string;
  autoPlay?: boolean;
}

interface CarouseState {
  index: number;
  lock: boolean;
}

let panels: Array<Element>;

class Carouse extends React.Component <CarouseProps, CarouseState> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      index: 1,
      lock: false,
    };
    this.carouseAnimate = this.carouseAnimate.bind(this);
    this.prevClick = this.prevClick.bind(this);
    this.nextClick = this.nextClick.bind(this);
  }

  componentDidMount() {
    panels = Array.from(document.getElementsByClassName('carouse-board-item'));
    const board = document.getElementById('board');
    board.style.left = '-400px';
  }

  carouseAnimate(width?: number) {
    this.setState({
      lock: true,
    });
    const board = document.getElementById('board');
    board.style.transition = '0.5s';
    if (!board.style.left) {
      board.style.left = '0';
    }
    board.style.left = `${parseInt(board.style.left, 10) + width}px`;
    setTimeout(() => {
      this.setState({
        lock: false,
      });
    }, 600);
  }

  prevClick() {
    const { index, lock } = this.state;
    if (lock) return;
    this.setState({
      index: index - 1,
    });
    this.carouseAnimate(400);
    if (index - 1 === 0) {
      setTimeout(() => {
        const board = document.getElementById('board');
        board.style.transition = '0s';
        const distance = -4 * 400;
        board.style.left = `${parseInt(board.style.left, 10) + distance}px`;
      }, 600);
      this.setState({
        index: 4,
      });
    }
  }

  nextClick() {
    const { index, lock } = this.state;
    if (lock) return;
    this.setState({
      index: index + 1,
    });
    this.carouseAnimate(-400);
    if (index + 1 === panels.length - 1) {
      setTimeout(() => {
        const board = document.getElementById('board');
        board.style.transition = '0s';
        const distance = 4 * 400;
        board.style.left = `${parseInt(board.style.left, 10) + distance}px`;
      }, 600);
      this.setState({
        index: 1,
      });
    }
  }

  render() {
    return (
      <div className="component-carouse">
        <ul className="carouse-board" id="board">
          <li className="carouse-board-item">4</li>
          <li className="carouse-board-item">1</li>
          <li className="carouse-board-item">2</li>
          <li className="carouse-board-item">3</li>
          <li className="carouse-board-item">4</li>
          <li className="carouse-board-item">1</li>
        </ul>
        <span className="carouse-btn carouse-prev" role="presentation" onClick={this.prevClick}>{'<'}</span>
        <span className="carouse-btn carouse-next" role="presentation" onClick={this.nextClick}>{'>'}</span>
      </div>
    );
  }
}

export default Carouse;
