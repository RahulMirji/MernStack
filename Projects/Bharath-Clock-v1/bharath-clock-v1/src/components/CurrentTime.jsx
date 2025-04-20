function CurrentTime() {
  let time = new Date();
  return (
    <div className="clock">
      <p>
        This is the exact time: {time.toLocaleTimeString()} - Time: {" "}
        {time.toLocaleDateString()}
      </p>
    </div>
  );
}

export default CurrentTime;
