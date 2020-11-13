import React from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux';
import useHttpErrorHanlder from '../../hooks/httpErrorHandler';

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, errorConfirmedHandler] = useHttpErrorHanlder(axios);
    return (
      <Aux>
        <Modal show={error} modalClosed={errorConfirmedHandler}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />;
      </Aux>
    );
  };
};

export default withErrorHandler;
