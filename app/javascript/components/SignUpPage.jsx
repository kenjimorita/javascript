import React, { Component } from 'react';
import { Button, Checkbox, CustomCalendar, Form, Input } from 'semantic-ui-react';

export default class SignUp extends Component {
  addUser() {
    this.props.addUser({
      last_name: this.lastNameInput.inputRef.value,
      first_name: this.firstNameInput.inputRef.value,
      email: this.emailInput.inputRef.value,
      password: this.passwordInput.inputRef.value,
      admin: true,
      organization_name: this.organizationInput.inputRef.value,
      organization_uniq_name: this.organizationUniqNameInput.inputRef.value,
    })
  }
  componentWillUpdate(props = this.props) {
    if (props.isCompleted) {
      props.history.push(props.signUpCompleted)
    }
  }
  render() {
    return (
      <div className="sign-up">
        <main>
          <h1 className="center">Resily</h1>
          <Form className="user-form">
            <Form.Group className='text-input-group'>
              <Form.Field inline>
                <div>組織名</div>
                <Input type='text' size='mini' placeholder='会社名、チーム名' ref={(node) => {this.organizationInput = node;}}/>
              </Form.Field>
              <Form.Field inline>
                <div>組織ID</div>
                <Input type='text' size='mini' placeholder='英数字、ハイフン、アンダースコア' ref={(node) => {this.organizationUniqNameInput = node;}}/>
              </Form.Field>
              <Form.Field inline>
                <div>姓</div>
                <Input type='text' size='mini' ref={(node) => {this.lastNameInput = node;}}/>
              </Form.Field>
              <Form.Field inline>
                <div>名</div>
                <Input type='text' size='mini' ref={(node) => {this.firstNameInput = node;}}/>
              </Form.Field>
              <Form.Field inline>
                <div>メールアドレス</div>
                <Input type='email' size='mini' placeholder='name@example.com' ref={(node) => {this.emailInput = node;}}/>
              </Form.Field>
              <Form.Field inline>
                <div>パスワード</div>
                <Input type='password' size='mini' placeholder='英数字8文字以上' ref={(node) => {this.passwordInput = node;}}/>
              </Form.Field>
            </Form.Group>
            <div className="center">
              <Button positive onClick={this.addUser.bind(this)}>登録する</Button>
            </div>
          </Form>
        </main>
      </div>
    );
  }
}
