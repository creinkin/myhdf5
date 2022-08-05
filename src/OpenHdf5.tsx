import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Navigate, useSearchParams } from 'react-router-dom';

import LocalFiles from './LocalFiles';
import styles from './OpenHdf5.module.css';
import Viewer from './Viewer';
import { useStore } from './stores';

function OpenHdf5() {
  const [searchParams] = useSearchParams();
  const opened = useStore((state) => state.opened);

  const fileUrl = searchParams.get('file');

  if (!fileUrl) {
    return (
      <div className={styles.root}>
        <LocalFiles />
      </div>
    );
  }

  const file = opened.find(({ url }) => url === fileUrl);

  if (!file) {
    return <Navigate to="/" />;
  }

  return (
    <ErrorBoundary fallback={<p>Error</p>} resetKeys={[fileUrl]}>
      <Suspense fallback={null}>
        <Viewer {...file} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default OpenHdf5;
