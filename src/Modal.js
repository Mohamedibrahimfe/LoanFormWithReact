export default function Modal({ isVisible, errorMessage = null }) {
  if (isVisible) {
    return (
      <div className="modal">
        <h1 style={{ color: errorMessage ? "red" : "green" }}>
          {errorMessage != null ? errorMessage : "your form has been submitted"}
        </h1>
      </div>
    );
  } else {
    return <div></div>;
  }
}
