const Container = ({ children }) => {
  return (
    <>
      <div class="card" style={{ width: "40rem" }}>
        <div class="card-body">{children}</div>
      </div>
    </>
  );
};
export default Container;
