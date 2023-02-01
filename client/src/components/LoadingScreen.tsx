import { Spinner } from "@vechaiui/react";

type LoadingScreenType = {
  loading: boolean;
};

const LoadingScreen = ({ loading }: LoadingScreenType) => {
  if (loading) {
    return (
      <div className="flex text-white  items-center justify-center h-full absolute w-full bg-slate-800 opacity-75">
        <Spinner size="xl" />
      </div>
    );
  }
  return <></>;
};

export default LoadingScreen;
