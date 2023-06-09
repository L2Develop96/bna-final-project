/* eslint-disable @typescript-eslint/no-explicit-any */
import { Suspense } from 'react';

// project imports

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

type LazyComponentType = React.LazyExoticComponent<React.ComponentType<any>>;

const Loadable = (Component: LazyComponentType) => (): JSX.Element =>
  (
    <Suspense fallback={'Loading...'}>
      <Component />
    </Suspense>
  );

export default Loadable;
