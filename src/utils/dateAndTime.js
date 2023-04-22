export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getDate = (string) => {
  const date = new Date(string);
  let day = date.getDate();
  let month = months[date.getMonth()];

  return `${month} ${day}, ${date.getFullYear()}`;
};

export const formatTime = (time) => {
  const minutes = Math.floor((time / 1000 / 60) % 60);
  const seconds = Math.floor((time / 1000) % 60);

  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};
