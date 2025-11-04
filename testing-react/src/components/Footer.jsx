const Footer = () => {
  const footerStyle = {
    color: "green",
    fontStyle: "italic",
    fontSize: 16,
  };

  return (
    <div className={footerStyle}>
      <br />
      <em>
        Note app, Department of computer Science, University of Helsinki 2024
      </em>
    </div>
  );
};

export default Footer