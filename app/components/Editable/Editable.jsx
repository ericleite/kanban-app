import React, { PropTypes } from 'react'

// Components
import Input from '../Input/Input'

// CSS
import styles from './Editable.scss'

const Editable = ({
  editing,
  onAdd,
  onEdit,
  styleName='default',
  value,
  ...props
}) => {
  if (editing) {
    return (
      <div className={styles[styleName]}>
        <Edit
          value={value}
          onEdit={onEdit}
          onAdd={onAdd}
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
  onAdd: PropTypes.func,
  onEdit: PropTypes.func,
  styleName: PropTypes.string,
  value: PropTypes.string
}

export default Editable

class Edit extends React.Component {
  static displayName = 'Edit'

  static propTypes = {
    value: PropTypes.string,
    onAdd: PropTypes.func,
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
      this.props.onAdd()
    }
  }

  finishEdit = (e) => {
    const value = e.target.value

    if (this.props.onEdit) {
      this.props.onEdit(value)
    }
  }
}
