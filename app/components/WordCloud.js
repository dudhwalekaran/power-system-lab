"use client";
import Link from "next/link";

// You can create a function to generate colors for each word
const generateColor = (index) => {
  const colors = [
    "#E04E29", // Darker version of #FF5733
    "#28C446", // Darker version of #33FF57
    "#1E47B8", // Darker version of #3357FF
    "#C8A102", // Darker version of #F2D106
    "#9E04A1", // Darker version of #F106F2
    "#A0B273", // Darker version of #bdcc90
    "#50E04F", // Darker version of #64fd6e
    "#B39A7A", // Darker version of #e4dac1
    "#9C0A58", // Darker version of #bf0e74
  ];

  return colors[index % colors.length]; // Cycle through colors based on the index
};

const WordCloud = ({ words }) => {
  return (
    <div style={styles.wordCloud}>
      {words.map((word, index) => (
        <Link key={index} href={word.link}>
          <span
            style={{
              ...styles.word,
              fontSize: `${word.size}px`, // Use fixed size from the word data
              color: generateColor(index), // Assign color from the generateColor function
            }}
          >
            {word.text}
          </span>
        </Link>
      ))}
    </div>
  );
};

const styles = {
  wordCloud: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center",
    padding: "20px",
  },
  word: {
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out",
  },
};

export default WordCloud;
