import React from 'react'
import PropTypes from 'prop-types'

function List(props) {


    const category = props.category;
    const ItemList = props.items;


   
   // fruits.sort((a , b ) =>a.name.localeCompare(b.name ))
   // fruits.sort((a , b ) =>b.calories - a.calories )

    const listitems = ItemList.map(item => <li key={item.id}>
                                             {item.name} : &nbsp;
                                            <b>{item.calories}</b>
                                            </li>);
  return (
    <div>
      <h3>{category}</h3>
      <ol>{listitems}</ol>
    </div>
  );
}
List.propTypes = {
    category : PropTypes.string,
    items : PropTypes.arrayOf(PropTypes.shape({
        id : PropTypes.number.isRequired,
        name : PropTypes.string.isRequired,
        calories : PropTypes.number.isRequired
    }))
        
    
}

List.defaultProps = {
    category : "Items",
    items : []
}

export default List
