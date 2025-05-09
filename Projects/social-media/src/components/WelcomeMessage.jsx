const WelcomeMessage = ({onGetPostsClick}) => {
  return (
    <>
      <h1 className="welcome-message">
        There are no Posts Yet. Click below button to fetch Posts.
      </h1>

      <button
        type="button"

        onClick={onGetPostsClick}
        className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold welcome-message"
      >
        Fetch Posts form Server
      </button>
    </>
  );
};

export default WelcomeMessage;
