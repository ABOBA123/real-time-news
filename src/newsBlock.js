function NewsBlock() {
  return (
    <div
      style={{
        width: "100%",
        position: "fixed",
        top: 10,
        left: 0,
        height: "50px",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 20,
        zIndex: 2,
      }}
    >
      <div
        style={{
          width: "1050px",
          height: "100%",
          borderRadius: "15px",
          padding: "11px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          background: "#FFFFFF",
        }}
      >
        <h2>News</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "20%",
            justifyContent: "space-around",
          }}
        >
          <h4
            onClick={() => {
              window.location.pathname = "/aboutus";
            }}
          >
            About us
          </h4>
          <h4
            onClick={() => {
              window.location.pathname = "/";
            }}
          >
            Block
          </h4>
          {!localStorage.getItem("nickname") !== undefined && (
            <h4
              onClick={() => {
                window.location.pathname = "/login";
              }}
            >
              Sign In
            </h4>
          )}
        </div>
      </div>
    </div>
  );
}
export default NewsBlock;
