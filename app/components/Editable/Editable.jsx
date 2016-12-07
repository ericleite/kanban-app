import React, { PropTypes } from 'react'

import Input from '../Input/Input'

import styles from './Editable.scss'

const Editable = ({
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


Editable.displayName = 'Editable'

Editable.propTypes = {
  editing: PropTypes.bool,
  value: PropTypes.string,
  styleName: PropTypes.string,
  onEdit: PropTypes.func
}

export default Editable

class Edit extends React.Component {
  static displayName = 'Edit'

  static propTypes = {
    value: PropTypes.string,
    onEdit: PropTypes.func
  }

  render() {
    return (
      <Input
        styleName="seamless"
        type="text"
        autoFocus={true}
        defaultValue={this.props.value}
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
