function Formatter(date: string) {
  const newDate = new Date(date).toDateString().split(" ");
  return `${newDate[1]} ${newDate[2]}, ${newDate[3]}`;
}

export default Formatter;
