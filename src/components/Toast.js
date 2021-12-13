import { Toaster } from "react-hot-toast";

function ToastModal() {
  return (
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{
            position: "absolute",
            bottom: "100px",
          }}
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            style: {
              background: "#fff",
              color: "black",

              height: "50px",
              borderRadius: "10px",
            },
            // Default options for specific types
            success: {
              iconTheme: {
                primary: "white",
                secondary: "#4CAA3C",
              },
              duration: 5000,
              style: {
                background: "#4CAA3C",
                color: "#fff",
              },
              theme: {
                primary: "",
                secondary: "white",
              },
            },
            error: {
              iconTheme: {
                primary: "white",
                secondary: "#FF6B47",
              },
              duration: 5000,
              style: {
                background: "#FF6B47",
                color: "#fff",
              },
            },
          }}
        />)
  }

export default ToastModal;
