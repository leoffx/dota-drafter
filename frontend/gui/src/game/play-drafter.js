class Play_Drafter {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }

  hash() {
    return this.row.toString() + ',' + this.col.toString();
  }
}

module.exports = Play_Drafter;
