import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes'
import { Button, Comment } from 'semantic-ui-react';
import AutoTextArea from '../form/AutoTextArea';
import moment from 'moment';
import avatar_image from '../../images/avatar.png';
import Markdown from '../util/Markdown';
import UserName from '../util/UserName'

class OkrComment extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      text: props.comment.get('text'),
      isEditing: false,
    }
  }

  handleEditClick = () => this.setState({ isEditing: true })

  handleDeleteClick = () => this.props.onDelete(this.props.comment.get('id'))

  handleTextCommit = text => this.setState({ text })

  handleCancelClick = () => this.setState({ isEditing: false })

  handleUpdateClick = () => {
    this.props.onUpdate(this.props.comment.get('id'), this.state.text)
    this.setState({ isEditing: false })
  }

  renderTextOnly() {
    const { comment } = this.props
    const user = comment.get('user')
    const avatarUrl = user ? user.get('avatarUrl') : null
    const isDisabled = user.get('disabled')
    return (
      <Comment.Group className="okr-comment-text-only">
        <Comment>
          <Comment.Avatar src={avatarUrl || avatar_image} className={isDisabled ? 'disabled' : ''} />
          <Comment.Content>
            <Comment.Author><UserName user={user} /></Comment.Author>
            <Comment.Metadata>
              {moment(comment.get('updatedAt')).format('YYYY/M/D H:mm')} {comment.get('isEdited') ? '(編集済)' : null}
            </Comment.Metadata>
            <Comment.Text>
              <Markdown text={comment.get('text')} />
            </Comment.Text>
            {comment.get('editable') && (
              <Comment.Actions>
                <Comment.Action onClick={this.handleEditClick}>編集</Comment.Action>
                <Comment.Action onClick={this.handleDeleteClick}>削除</Comment.Action>
              </Comment.Actions>
            )}
          </Comment.Content>
        </Comment>
      </Comment.Group>
    )
  }

  renderTextArea() {
    const { comment } = this.props
    return (
      <div className="okr-comment-text-area">
        <AutoTextArea
          value={comment.get('text')}
          onCommit={this.handleTextCommit}
          readOnly={!comment.get('editable')}
        />
        <div className="okr-comment-text-area__buttons">
          <Button content="キャンセル" onClick={this.handleCancelClick} size="small" />
          <Button content="更新する" onClick={this.handleUpdateClick} size="small" />
        </div>
      </div>
    );
  }

  render() {
    const { isEditing } = this.state;
    return isEditing ? this.renderTextArea() : this.renderTextOnly()
  }
}

OkrComment.propTypes = {
  comment: ImmutablePropTypes.map.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
}

export default OkrComment
