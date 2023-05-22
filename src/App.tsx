import { Descope, AuthProvider, getSessionToken } from '@descope/react-sdk';
import React, { useRef, useEffect } from "react";
import Dialog from '@mui/material/Dialog';
import { TransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown, string>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useInterval = (callback: () => void, interval: number, immediate: boolean) => {
  const ref = useRef();

  // keep reference to callback without restarting the interval
  useEffect(() => {
    // @ts-expect-error: Type?
    ref.current = callback;
  }, [callback]);

  useEffect(() => {
    // when this flag is set, closure is stale
    let cancelled = false;

    // wrap callback to pass isCancelled getter as an argument
    const fn = () => {
      // @ts-expect-error: What?
      ref.current(() => cancelled);
    };

    // set interval and run immediately if requested
    const id = setInterval(fn, interval);
    if (immediate) fn();

    // define cleanup logic that runs
    // when component is unmounting
    // or when or interval or immediate have changed
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [interval, immediate]);
};


const App = () => {
  const [openLogin, setOpenLogin] = React.useState(false);

  useInterval(async () => {
    const token = getSessionToken();
    if (!token) setOpenLogin(true);
    console.log("Session token:", token);
  }, 1000, false);

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  return (
    <div>
      <h1>My App</h1>
      <Dialog
        open={openLogin}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseLogin}
        aria-describedby="alert-dialog-slide-description"
      >
        {/* The code below includes your Project ID (P2PyftOipp2EcXXRyivNwlJkUMHm) */}
        <AuthProvider projectId="P2PyftOipp2EcXXRyivNwlJkUMHm">
          <Descope
            flowId="sign-up-or-in"
            theme="light"
            onSuccess={() => {
              setOpenLogin(false);
            }}
            onError={(err: unknown) => {
              console.error(err)
            }}
          />
        </AuthProvider>
      </Dialog>
    </div>
  )
}

export default App;
