export default function SortUsers(arr, order) {
  switch (order) {
    case 'A-Z':
      return arr.sort((a, b) => (a.firstName < b.firstName ? -1 : 1));
    case 'Z-A':
      return arr.sort((a, b) => (b.firstName < a.firstName ? -1 : 1));
    default:
      return arr;
  }
}
