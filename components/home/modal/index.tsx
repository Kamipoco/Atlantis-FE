export function Modal(props) {
  const { display, setDisplay } = props;
  let classes = "";
  if (display) {
    classes = "modal flex";
  } else {
    classes = "modal hidden";
  }
  return (
    <div className={classes}>
      <div
        onClick={() => {
          setDisplay(false);
        }}
        className="overlay"
      ></div>
      <div className="body">
        <iframe
          width="1050"
          height="590"
          src="https://www.youtube.com/embed/rjFi93miBp8?autoplay=1&mute=1"
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
}
