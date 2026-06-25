const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <s-spinner accessibilityLabel="Loading" size="large-100" />
    </div>
  );
};

export default Loading;
