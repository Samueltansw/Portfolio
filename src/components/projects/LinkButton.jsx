const LinkButton = ({ url, text }) => {
  return (
    <a target="_blank" href={url}>
      {text}
    </a>
  );
};

export default LinkButton;
