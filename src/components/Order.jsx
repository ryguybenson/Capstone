import React from 'react';

function Order() {
  var order = {
    display: 'flex',
    flexDirection: 'column',
    width: '85%',
    border: '1px solid black'
  };
  var list = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  };
  var buttons = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    postition: 'fixed',
    bottom: '5%',
    width: '50%',
    margin: 'auto',
    marginTop: '1%'
  };
  return(
    <div>
      <div stlye={order}>
        <div style={list}>
          <h3>1</h3>
          <h3>First item</h3>
        </div>
        <div style={list}>
          <h3>2</h3>
          <h3>Second item</h3>
        </div>
        <div style={list}>
          <h3>3</h3>
          <h3>Third item</h3>
        </div>
        <div style={list}>
          <h3>4</h3>
          <h3>Fourth item</h3>
        </div>
        <div style={list}>
          <h3>5</h3>
          <h3>Fifth item</h3>
        </div>
      </div>
      <div style={buttons}>
        <button>Back</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default Order;