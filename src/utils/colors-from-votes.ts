function ColorsFromVotes( percentage: number) {
  if (percentage < 50) {
    return { pathColor: "#db2360", trailColor: "#571435" };
  } else if (percentage < 70) {
    return { pathColor: "#d2d531", trailColor: "#423d0f" };
  } else {
    return { pathColor: "#21d07a", trailColor: "#204529" };
  }
}

export default ColorsFromVotes;
