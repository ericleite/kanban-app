import React, { PropTypes } from 'react'

// Components
import Input from '../Input/Input'

// CSS
import styles from './Editable.scss'

const Editable = ({
  defaultStyleName='default',
  editingStyleName='seamless',
  editing,
  onAdd,
  onEdit,
  value,
  ...props
}) => {
  if (editing) {
    return (
      <div className={styles[defaultStyleName]}>
        <Edit
          value={value}
          onEdit={onEdit}
          onAdd={onAdd}
          editingStyleName={editingStyleName}
          {...props}
        />
      </div>
    )
  }

  return <span className={styles[defaultStyleName]} {...props}>{value}</span>
}


Editable.displayName = 'Editable'

Editable.propTypes = {
  defaultStyleName: PropTypes.string,
  editingStyleName: PropTypes.string,
  editing: PropTypes.bool,
  onAdd: PropTypes.func,
  onEdit: PropTypes.func,
  value: PropTypes.string
}

export default Editable

class Edit extends React.Component {
  static displayName = 'Edit'

  static propTypes = {
    editingStyleName: PropTypes.string,
    onAdd: PropTypes.func,
    onEdit: PropTypes.func,
    value: PropTypes.string
  }

  render() {
    return (
      <Input
        styleName={this.props.editingStyleName}
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
