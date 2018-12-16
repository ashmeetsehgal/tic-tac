import React, { Component, Fragment } from 'react'
import Square from './Square'

export default class Board extends Component {

  state = {
    squares: Array(9).fill(null),
    xTurn: true,
  }

  renderSquare = i => (
    <Square
      value={this.state.squares[i]}
      clickFunction={this.handleClick(i)}
    />
  )

  handleClick = (i) => () => {
    const { squares, xTurn } = this.state
    if (squares[i] !== null) return
    squares[i] = xTurn ? 'X' : 'O'
    this.setState(
      {
        squares,
        xTurn: !xTurn
      }
    )
  }

  calculateWinner = () => {
    const { squares } = this.state
    const line = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < line.length; i++) {
      const [a, b, c] = line[i]

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a]
    }
    return null
  }

  isGameOver = () => {
    const { squares } = this.state
    return squares.every(v => v !== null)
  }

  getStatus = () => {
    const { squares } = this.state
    const winner = this.calculateWinner(squares)

    if (winner) {
      return `Winner is ${winner}`
    } else if (this.isGameOver()) {
      return 'Awwww its a draw'
    }
    return `Next Player is ${(this.state.xTurn ? 'X' : 'O')}`
  }

  reset = () => {
    this.setState({
      squares: Array(9).fill(null),
      xTurn: true,
    })
  }

  render() {
    const {getStatus, renderSquare, reset} = this

    return (
      <Fragment>
        <h1>{getStatus()} </h1>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <button onClick={reset} > Play Again</button>
      </Fragment>
    )
  }
}
