import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { List } from 'immutable'
import { Form, TextArea } from 'semantic-ui-react'
import KeyResultMemberSelect from '../form/KeyResultMemberSelect'
import UserSelect from '../form/UserSelect'
import OkrSelect from '../form/OkrSelect'
import RequiredLabel from '../form/RequiredLabel'
import RenderField from '../form/RenderField'
import RenderDateField from '../form/RenderDateField'
import {
  validateKeyResultName, validateTargetValue, validateExpiredDate, normalizeExpiredDate
} from '../../utils/validator'

class KeyResultForm extends PureComponent {

  render() {
    const { onChange } = this.props;
    if (!this.props.objective) return null
    return (
      <div className="keyresult-modal__main">
        <Form>
          <Form.Group widths='equal'>
            <Form.Field>
              <RequiredLabel text='Key Result' />
              <Field
                name='name'
                type='text'
                component={RenderField}
                validate={[validateKeyResultName]}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>説明</label>
              <TextArea
                autoHeight
                rows={3}
                onChange={(e, { value }) => this.props.onChange({ description: value })}
                placeholder={`Key Result についての説明や補足を入力してください。\n説明を入力すると、メンバーに目指すべき方向性が伝わりやすくなります。`}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Form.Field>
              <div className="flex-start">
                <div style={{ marginRight: "10px" }}>
                  <RequiredLabel text='目標値' required={this.props.isRequiredTargetValue} />
                  <div style={{ width: "177px" }}>
                    <Field
                      name='targetValue'
                      type='text'
                      component={RenderField}
                      validate={[validateTargetValue]}
                    />
                  </div>
                </div>
                <div>
                  <label>単位</label>
                  <Field
                    name='valueUnit'
                    type='text'
                    placeholder='例：円、件、人'
                    component={RenderField}
                    onChange={(e, newValue) => this.props.onChange({ isRequiredTargetValue: !!newValue })}
                  />
                </div>
              </div>
            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Form.Field>
              <RequiredLabel text='期限' />
              <Field
                name='expiredDate'
                component={RenderDateField}
                validate={[validateExpiredDate]}
                normalize={normalizeExpiredDate}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Form.Field>
              <RequiredLabel text='責任者' />
              <UserSelect
                users={this.props.users}
                value={this.props.ownerId}
                onChange={ownerId => onChange({ ownerId, members: this.props.members.filter(id => id !== ownerId) })}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Form.Field>
              <label>関係者</label>
              <KeyResultMemberSelect
                users={this.props.users}
                members={this.props.members.toArray()}
                excludedId={this.props.ownerId}
                add={value => onChange({ members: this.props.members.push(value) })}
                remove={value => onChange({ members: this.props.members.filter(id => id !== value) })}
              />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <RequiredLabel text='紐付く Objective' />
            <OkrSelect
              okrs={List.of(this.props.objective)}
              value={this.props.objective.get('id')}
              preview={false}
              disabled={true}
              onChange={value => {}}
            />
          </Form.Field>
        </Form>
      </div>
    )
  }
}

KeyResultForm.propTypes = {
  objective: PropTypes.object,
  users: PropTypes.object.isRequired,
  members: PropTypes.object.isRequired,
  ownerId: PropTypes.number,
  isRequiredTargetValue: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default KeyResultForm
