import Ship from "./ship.js";

// Ships should have a hit() function that increases the number of ‘hits’ in your ship.

test('ship is hit', () => {
    const SmallShip = new Ship(2)
    expect(typeof SmallShip.hit()).toBe('function');
})

// isSunk() should be a function that calculates it based on their length and the number of ‘hits’.