import React from 'react'

import Input from '../Input/Input'

import styles from './Editable.scss'

export default ({
  editing,
  value,
  styleName='default',
  onEdit,
  ...props
}) => {
  if (editing) {
    return (
      <div className={styles[styleName]}>
        <Edit
          value={value}
          onEdit={onEdit}
          {...props}
        />
      </div>
    )
  }

  return <span className={styles[styleName]} {...props}>{value}</span>
}

class Edit extends React.Component {
  render() {
    const { value, ...props } = this.props

    return (
      <Input
        styleName='seamless'
        type='text'
        autoFocus={true}
        defaultValue={value}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}
      />
    )
  }

  checkEnter = (e) => {
    if (e.key === 'Enter') {
      this.finishEdit(e)
    }
  }

  finishEdit = (e) => {
    const value = e.target.value

    if (this.props.onEdit) {
      this.props.onEdit(value)
    }
  }
}
