import Point from './Point';

export default function (center, radius) {
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    includes(Point) {
      // TODO: write your code here
      // get radius
      // distance = get the distance between the center and the point
      //get the width and the height of the triangle
      //use pythagorean theorem to get the distance
      // if distance < radius, then return true, otherwise return false
      const width = Math.abs(Point.x - center.x);
      const height = Math.abs(Point.y - center.y);
      const distance = Math.sqrt((width * width) + (height * height));
      return distance <= radius;
    }
  }
}
