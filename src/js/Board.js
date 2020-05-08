class Board {
  constructor() {
    this.rows = 6;
    this.columns = 7;
    this.spaces = this.createSpaces();
  }

  /**
 * Generates 2D array of spaces.
 * @return  {Array}     An array of space objects
 */

  createSpaces(){
    const spaces = [];
    for(x = 0; x < this.columns; x++){
      const column = [];

      for(y = 0; y < this.rows; y++){
        column.push(new Space(x, y));
      }

      spaces.push(column);
    }
    return spaces;
  }
}
