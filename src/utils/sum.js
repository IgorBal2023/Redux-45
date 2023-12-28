export const sum = (a, b) => {
  return a + b;
};

export const greetings = (str) => {
  const lowercase = str.replace(/\s+/g, " ").trim().toLowerCase();
  if (lowercase === "hello world") {
    const [hello, world] = lowercase.split(" ");
    const helloCapitalized = hello.replace("h", "H");
    const worldCapitalized = hello.replace("w", "W");
    return `${helloCapitalized}``${worldCapitalized}`;
  } else {
    return "";
  }
};
