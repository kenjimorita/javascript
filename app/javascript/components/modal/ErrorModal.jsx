import React, { PureComponent } from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes'
import { Button, Modal } from 'semantic-ui-react';

class ErrorModal extends PureComponent {
  getErrorMessages(messages) {
    return messages.toArray().map((message, idx) => (
      <p key={idx}>{message}</p>
    ))
  }

  handleClose = () => {
    this.props.onCloseBefore();
    this.props.closeModal();
    this.props.onClose();
  }

  render() {
    let message = this.props.message;
    if (List.isList(message)) {
      message = this.getErrorMessages(message)
    }
    return (
      <Modal
        open={this.props.isOpen} 
        size='small' 
        closeOnEscape={false}
        closeOnDimmerClick={false}
        onClose={this.handleClose}
      >
        <Modal.Content style={{ margin: '10px 0', textAlign: 'center' }}>
          {message}
        </Modal.Content>
        <Modal.Actions>
          <div className='center'>
            <Button positive onClick={this.handleClose}>OK</Button>
          </div>
        </ Modal.Actions >
      </ Modal >
    );
  }
}

ErrorModal.propTypes = {
  // container
  isOpen: PropTypes.bool.isRequired,
  message: PropTypes.oneOfType([PropTypes.string, ImmutablePropTypes.list]),
  onClose: PropTypes.func,
  onCloseBefore: PropTypes.func,
  closeModal: PropTypes.func.isRequired,
  // component
};

ErrorModal.defaultProps = {
  message: 'エラーが発生しました',
  onClose: () => {},
  onCloseBefore: () => {},
};

export default ErrorModal;
