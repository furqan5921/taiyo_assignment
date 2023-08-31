import React from "react";
import { Bars, CirclesWithBar } from "react-loader-spinner";
type LoadingComponentProps = {};

const LoadingComponent: React.FC<LoadingComponentProps> = () => {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <CirclesWithBar
        color="rgb(83,76,135)"
        height={"100vh"}
        width={100}
        outerCircleColor="rgb(187,219,192)"
        innerCircleColor="rgb(83,76,135)"
        barColor="rgb(187,219,192)"
        ariaLabel="circles-with-bar-loading"
        visible={true}
      />
    </div>
  );
};
export default LoadingComponent;
