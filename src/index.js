import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Square(props) {
  return (
    <button
      className="square"
      onClick={props.onClick}
    >
    {props.value}
    </button>
  );
}

class Board extends React.Component {
  Squarender(i) {
    return(
      <Square 
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
      />
    );
  }

  render () {
    return (
      <div>
        <div className="board">
          {this.Squarender(0)}  
          {this.Squarender(1)}  
          {this.Squarender(2)}  
        </div>
        <div className="board">
          {this.Squarender(3)}  
          {this.Squarender(4)}  
          {this.Squarender(5)}  
        </div>
        <div className="board">
          {this.Squarender(6)}  
          {this.Squarender(7)}  
          {this.Squarender(8)}  
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xIsNext: true,
      stepNumber: 0,
      history: [
        { squares: Array(9).fill(null) }
      ]
    }
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    })
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);
    if (winner || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat({
        squares: squares
      }),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? 'Go to #' + move : 'Start the Game';
      return (
        <li key={move}>
          <button onClick={ () => { this.jumpTo(move) }}>
            {desc}
          </button>
        </li>
      )
    });

    let status;

    if (winner) {
      status = 'Winner is ' + winner;
    } else {
        status = 'Next Player is ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="board">
          <Board 
            onClick={ (i) => this.handleClick(i) }
            squares={ current.squares } 
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <div>{moves}</div>
        </div>
      </div>
    )
  }
}



// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById("root")
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
