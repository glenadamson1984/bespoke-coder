import * as React from "react";

export type HelloWorldProps = {
  setShowModal?: any;
};
const Modal: React.FC<HelloWorldProps> = ({ setShowModal }) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "white",
          width: "75%",
          height: "75%",
          position: "fixed",
          left: "50%",
          marginLeft: "-37.5%",
          marginTop: "5%",
        }}
      >
        This is a modal
        <button onClick={() => setShowModal()} />
      </div>
    </div>
  );
};
export default Modal;
